import { PokemonTypes } from '../types';

export interface Pokemon {
  id: number;
  name: string;
  image: string;
  types: Array<PokemonTypes>;
}
