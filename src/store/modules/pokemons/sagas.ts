import { AxiosResponse } from 'axios';
import { all, call, put, takeEvery } from 'redux-saga/effects';

import { api } from '../../../services/api';
import { ActionTypes, LoadPokemons } from './types';
import { loadFailure, loadSuccess } from './actions';
import { ListResponse, PokemonResponse } from '../../../shared/types';

type Params = LoadPokemons & { type: string };

function* callSafe(name: string) {
  try {
    return yield call(api.get, `/pokemon/${name}`);
  } catch (err) {
    return err;
  }
}

function* loadPokemons({ initial, offset, limit }: Params) {
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
      types: item.data.types.map(type => type.type.name),
      image: item.data.sprites.other.dream_world.front_default
        ? item.data.sprites.other.dream_world.front_default
        : item.data.sprites.other['official-artwork'].front_default,
    }));

    yield put(loadSuccess(pokemonsList, initial));
  } catch (error) {
    console.error(error);
    yield put(loadFailure());
  }
}

export default all([takeEvery(ActionTypes.LOAD_REQUEST, loadPokemons)]);
