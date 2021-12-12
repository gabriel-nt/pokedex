import { ActionTypes, Evolutions } from './types';

export const loadRequest = (id: number) => {
  return {
    type: ActionTypes.LOAD_REQUEST,
    id,
  };
};

export const loadSuccess = (payload: Evolutions[]) => {
  return {
    type: ActionTypes.LOAD_SUCCCES,
    payload,
  };
};

export const loadFailure = () => {
  return {
    type: ActionTypes.LOAD_FAILURE,
    payload: [],
  };
};

export const resetEvolutions = () => {
  return {
    type: ActionTypes.RESET_EVOLUTIONS,
    payload: [],
  };
};
