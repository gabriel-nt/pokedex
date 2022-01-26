import { PokemonTypes } from '../../../shared/types';

export enum ActionTypes {
  CLOSE_MODAL = '@pokemons/CLOSE_MODAL',
  LOAD_REQUEST = '@pokemons/LOAD_REQUEST',
  LOAD_SUCCCES = '@pokemons/LOAD_SUCCCES',
  LOAD_FAILURE = '@pokemons/LOAD_FAILURE',
  SELECT_POKEMON = '@pokemons/SELECT_POKEMON',
  ORDER_POKEMONS = '@pokemons/ORDER_POKEMONS',
  FILTER_POKEMONS = '@pokemons/FILTER_POKEMONS',
  SEARCH_POKEMONS = '@pokemons/SEARCH_POKEMONS',
}

export interface Pokemon {
  id: number;
  name: string;
  image: string;
  types: Array<PokemonTypes>;
  about: {
    height: number;
    weight: number;
    abilities: Array<string>;
  };
  stats: Array<number>;
}

export interface PokemonsState {
  readonly error: boolean;
  readonly loaded: boolean;
  readonly showModal: boolean;
  readonly order: OrderOptions;
  readonly searchValue: string;
  readonly filter: FilterOptions;
  readonly allPokemons: Pokemon[];
  readonly currentPokemons: Pokemon[];
  readonly selectedPokemon: Pokemon | undefined;
}

export type LoadPokemons = {
  offset: number;
  limit: number;
};

export type OrderOptions = {
  type: 'number' | 'name';
  order: 'asc' | 'desc';
  label: string;
};

export type FilterOptions = {
  text: string;
  offset: number;
  limit: number;
};
