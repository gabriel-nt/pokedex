import { Reducer } from 'redux';
import {
  filterPokemonsByGen,
  sortPokemonsById,
  sortPokemonsByName,
} from '../../../utils';
import {
  ActionTypes,
  FilterOptions,
  OrderOptions,
  PokemonsState,
} from './types';

const INITIAL_STATE: PokemonsState = {
  allPokemons: [],
  currentPokemons: [],
  error: false,
  loaded: false,
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
      if (action.initial) {
        return { ...state, loaded: true, currentPokemons: action.payload };
      }

      return {
        ...state,
        allPokemons: [...state.currentPokemons, ...action.payload],
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

    // if (currentOrder.type === 'name') {
    //   return {
    //     ...state,
    //     filter,
    //     currentPokemons: [
    //       ...sortPokemonsByName({
    //         order: currentOrder.order,
    //         data: data,
    //       }),
    //     ],
    //   };
    // }

    // return {
    //   ...state,
    //   filter,
    //   currentPokemons: [
    //     ...sortPokemonsById({
    //       order: currentOrder.order,
    //       data: data,
    //     }),
    //   ],
    // }
    default:
      return state;
  }
};

export default reducer;
