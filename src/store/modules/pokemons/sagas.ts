import { AxiosResponse } from 'axios';
import { all, call, put, takeEvery } from 'redux-saga/effects';

import { api } from '../../../services/api';
import { ActionTypes, LoadPokemons } from './types';
import { loadFailure, loadSuccess } from './actions';
import { STORAGE_POKEMONS } from '../../../utils/constants';
import { ListResponse, PokemonResponse } from '../../../shared/types';

type Params = LoadPokemons & { type: string };

function* callSafe(name: string) {
  try {
    const request: AxiosResponse<PokemonResponse> = yield call(
      api.get,
      `/pokemon/${name}`
    );
    return request;
  } catch (err) {
    return err;
  }
}

const multipleAttempts = (
  generator: any,
  handleError: any,
  maxTries: number
) => {
  return function* multipleAttempts(...args: any) {
    let n = 0;

    while (n <= maxTries) {
      try {
        yield call(generator, ...args);
        break;
      } catch (e) {
        if (n > maxTries) {
          yield handleError(e);
        }
      }
    }
  };
};

const loadPokemons = multipleAttempts(
  function* loadPokemons({ offset, limit }: Params) {
    try {
      const { data }: AxiosResponse<ListResponse> = yield call(
        api.get,
        '/pokemon',
        {
          params: {
            offset: offset,
            limit: limit,
          },
        }
      );

      const arrayGenerators: AxiosResponse<PokemonResponse>[] = yield all(
        data.results.map(item => callSafe(item.name))
      );

      const pokemonsList = arrayGenerators.map(item => ({
        id: item.data.id,
        name: item.data.name,
        about: {
          height: item.data.height,
          weight: item.data.weight,
          abilities: item.data.abilities.map(ability => ability.ability.name),
        },
        stats: item.data.stats.map(stat => stat.base_stat),
        types: item.data.types.map(type => type.type.name),
        image: item.data.sprites.other.dream_world.front_default
          ? item.data.sprites.other.dream_world.front_default
          : item.data.sprites.other['official-artwork'].front_default,
      }));

      localStorage.setItem(STORAGE_POKEMONS, JSON.stringify([...pokemonsList]));

      yield put(loadSuccess(pokemonsList));
    } catch (error) {
      console.error(error);
      yield put(loadFailure());
    }
  },
  function* handleError() {
    yield put(loadFailure());
  },
  5
);

export default all([takeEvery(ActionTypes.LOAD_REQUEST, loadPokemons)]);
