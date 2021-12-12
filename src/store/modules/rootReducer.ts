import { combineReducers } from 'redux';

import pokemons from './pokemons/reducer';
import evolutions from './evolutions/reducer';

export default combineReducers({
  pokemons,
  evolutions,
});
