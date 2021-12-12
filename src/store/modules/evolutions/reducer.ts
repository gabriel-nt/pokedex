import { Reducer } from 'redux';
import { ActionTypes, EvolutionsState } from './types';

const INITIAL_STATE: EvolutionsState = {
  error: false,
  loaded: false,
  evolutions: [],
};

const reducer: Reducer<EvolutionsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_REQUEST:
      return { ...state, loaded: false };
    case ActionTypes.LOAD_SUCCCES:
      return { ...state, loaded: true, evolutions: [...action.payload] };
    case ActionTypes.LOAD_FAILURE:
      return { ...state, loaded: true };
    case ActionTypes.RESET_EVOLUTIONS:
      return { ...state, loaded: false };
    default:
      return state;
  }
};

export default reducer;
