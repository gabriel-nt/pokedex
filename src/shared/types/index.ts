import { Pokemon } from '../../store/modules/pokemons/types';

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

export type FilterParams = {
  data: Pokemon[];
  offset: number;
  limit: number;
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
  height: number;
  weight: number;
  abilities: Array<{
    ability: {
      name: string;
    };
  }>;
  stats: Array<{
    base_stat: number;
  }>;
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
      'official-artwork': {
        front_default: string;
      };
    };
  };
};
