import {
  Pokemon,
  ActionTypes,
  OrderOptions,
  LoadPokemons,
  FilterOptions,
} from './types';

export const loadRequest = ({ limit, offset }: LoadPokemons) => {
  return {
    type: ActionTypes.LOAD_REQUEST,
    offset,
    limit,
  };
};

export const loadSuccess = (payload: Pokemon[]) => {
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

export const orderPokemons = (order: OrderOptions) => {
  return {
    type: ActionTypes.ORDER_POKEMONS,
    order,
  };
};

export const filterPokemons = (filter: FilterOptions) => {
  return {
    type: ActionTypes.FILTER_POKEMONS,
    filter,
  };
};

export const searchPokemons = (searchValue: string) => {
  return {
    type: ActionTypes.SEARCH_POKEMONS,
    searchValue,
  };
};

export const selectPokemon = (payload: Pokemon | undefined) => {
  return {
    type: ActionTypes.SELECT_POKEMON,
    payload,
  };
};

export const closeModal = (payload: boolean) => {
  return {
    type: ActionTypes.CLOSE_MODAL,
    payload,
  };
};
