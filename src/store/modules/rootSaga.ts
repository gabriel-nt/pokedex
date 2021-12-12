import { all } from 'redux-saga/effects';

import pokemons from './pokemons/sagas';
import evolutions from './evolutions/sagas';

export default function* rootSaga() {
  return yield all([pokemons, evolutions]);
}
