import axios, { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';

import { loadSuccess } from './actions';
import { api } from '../../../services/api';
import { ActionTypes, Evolutions } from './types';
import { EvolutionResponse } from '../../../shared/types';
import { getEvolutionLevel, getImageByPokemonName } from '../../../utils';

type Params = {
  type: string;
  id: number;
};

function* loadEvolutions({ id }: Params) {
  const tempArray: Evolutions[] = [];

  const response: AxiosResponse = yield call(api.get, `/pokemon-species/${id}`);
  const { data }: AxiosResponse<EvolutionResponse> = yield call(
    axios.get,
    response.data.evolution_chain.url
  );

  if (data.chain.evolves_to.length > 0) {
    const species = data.chain.species;
    const evolvesTo01 = data.chain.evolves_to[0];
    const { evolves_to: evolvesTo02 } = data.chain.evolves_to[0];

    const pokemonN1 = {
      name: species.name,
      image: getImageByPokemonName(species.name),
    };

    const pokemonN2 = {
      name: evolvesTo01.species.name,
      image: getImageByPokemonName(evolvesTo01.species.name),
    };

    tempArray.push({
      pokemons: [pokemonN1, pokemonN2],
      minLevel:
        (evolvesTo01.evolution_details[0] && getEvolutionLevel(evolvesTo01)) ??
        '',
    });

    if (evolvesTo02.length > 0) {
      const pokemonN3 = {
        name: evolvesTo02[0].species.name,
        image: getImageByPokemonName(evolvesTo02[0].species.name),
      };

      tempArray.push({
        pokemons: [pokemonN2, pokemonN3],
        minLevel:
          (evolvesTo02[0].evolution_details[0] &&
            getEvolutionLevel(evolvesTo02[0])) ??
          '',
      });
    }
  }

  yield put(loadSuccess(tempArray));
}

export default takeLatest(ActionTypes.LOAD_REQUEST, loadEvolutions);
