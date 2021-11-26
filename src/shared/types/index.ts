import { Pokemon } from '../interfaces/Pokemon';

export type PokemonTypes =
  | 'bug'
  | 'dark'
  | 'dragon'
  | 'electric'
  | 'fairy'
  | 'fighting'
  | 'fire'
  | 'flying'
  | 'ghost'
  | 'grass'
  | 'ground'
  | 'ice'
  | 'normal'
  | 'poison'
  | 'psychic'
  | 'rock'
  | 'steel'
  | 'water';

export type SortParams = {
  data: Pokemon[];
  order: 'desc' | 'asc';
};

export type SearchParams = {
  data: Pokemon[];
  name: string;
};

export type ListResponse = {
  count: number;
  results: Array<{
    name: string;
  }>;
};

export type PokemonResponse = {
  id: number;
  name: string;
  types: Array<{
    type: {
      name: PokemonTypes;
    };
  }>;
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
};

export type LoadPokemonsParams = {
  offset: number;
  limit: number;
  initial: boolean;
};
