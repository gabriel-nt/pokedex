import { Reducer } from 'redux';

import {
  sortPokemonsById,
  sortPokemonsByName,
  filterPokemonsByGen,
  searchPokemonsByName,
} from '../../../utils';

import {
  ActionTypes,
  OrderOptions,
  FilterOptions,
  PokemonsState,
} from './types';

const INITIAL_STATE: PokemonsState = {
  error: false,
  loaded: false,
  allPokemons: [],
  searchValue: '',
  showModal: false,
  currentPokemons: [],
  selectedPokemon: undefined,
  filter: {
    text: 'I',
    offset: 0,
    limit: 151,
  },
  order: {
    order: 'asc',
    type: 'number',
    label: 'Organize results for...',
  },
};

const reducer: Reducer<PokemonsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_REQUEST:
      return { ...state, loaded: false };
    case ActionTypes.LOAD_SUCCCES:
      const currentFilter = state.filter;

      return {
        ...state,
        loaded: true,
        currentPokemons: filterPokemonsByGen({
          data: action.payload,
          limit: currentFilter.limit,
          offset: currentFilter.offset,
        }),
        allPokemons: action.payload,
      };
    case ActionTypes.LOAD_FAILURE:
      return { ...state, loaded: true, error: true };
    case ActionTypes.ORDER_POKEMONS:
      const order = action.order as OrderOptions;

      if (order.type === 'name') {
        return {
          ...state,
          order,
          currentPokemons: [
            ...sortPokemonsByName({
              order: order.order,
              data: state.currentPokemons,
            }),
          ],
        };
      }

      return {
        ...state,
        order,
        currentPokemons: [
          ...sortPokemonsById({
            order: order.order,
            data: state.currentPokemons,
          }),
        ],
      };
    case ActionTypes.FILTER_POKEMONS:
      const filter = action.filter as FilterOptions;

      const data = filterPokemonsByGen({
        data: state.allPokemons,
        limit: filter.limit,
        offset: filter.offset,
      });

      return {
        ...state,
        filter,
        currentPokemons: [...data],
      };
    case ActionTypes.SEARCH_POKEMONS:
      if (action.searchValue === '') {
        const data = filterPokemonsByGen({
          data: state.allPokemons,
          limit: state.filter.limit,
          offset: state.filter.offset,
        });

        return {
          ...state,
          currentPokemons: [...data],
        };
      }

      return {
        ...state,
        currentPokemons: [
          ...searchPokemonsByName({
            data: state.allPokemons,
            name: action.searchValue,
          }),
        ],
        searchValue: action.searchValue,
      };
    case ActionTypes.SELECT_POKEMON:
      return {
        ...state,
        showModal: true,
        selectedPokemon: action.payload,
      };
    case ActionTypes.CLOSE_MODAL:
      return {
        ...state,
        showModal: false,
      };
    default:
      return state;
  }
};

export default reducer;
