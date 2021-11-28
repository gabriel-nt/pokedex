import {
  ActionTypes,
  FilterOptions,
  LoadPokemons,
  OrderOptions,
  Pokemon,
} from './types';

export const loadRequest = ({ initial, limit, offset }: LoadPokemons) => {
  return {
    type: ActionTypes.LOAD_REQUEST,
    offset,
    limit,
    initial,
  };
};

export function loadSuccess(payload: Pokemon[], initial: boolean) {
  return {
    type: ActionTypes.LOAD_SUCCCES,
    payload,
    initial,
  };
}

export function loadFailure() {
  return {
    type: ActionTypes.LOAD_FAILURE,
    payload: [],
  };
}

export function orderPokemons(order: OrderOptions) {
  return {
    type: ActionTypes.ORDER_POKEMONS,
    order,
  };
}

export function filterPokemons(filter: FilterOptions) {
  return {
    type: ActionTypes.FILTER_POKEMONS,
    filter,
  };
}
