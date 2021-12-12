import bug from '../assets/badges/bug.jpg';
import ice from '../assets/badges/ice.jpg';
import dark from '../assets/badges/dark.jpg';
import fire from '../assets/badges/fire.jpg';
import rock from '../assets/badges/rock.jpg';
import fairy from '../assets/badges/fairy.jpg';
import ghost from '../assets/badges/ghost.jpg';
import grass from '../assets/badges/grass.jpg';
import steel from '../assets/badges/steel.jpg';
import water from '../assets/badges/water.jpg';
import dragon from '../assets/badges/dragon.jpg';
import flying from '../assets/badges/flying.jpg';
import ground from '../assets/badges/ground.jpg';
import normal from '../assets/badges/normal.jpg';
import poison from '../assets/badges/poison.jpg';
import psychic from '../assets/badges/psychic.jpg';
import fighting from '../assets/badges/fighting.jpg';
import electric from '../assets/badges/electric.jpg';

import { OrderOptions } from '../store/modules/pokemons/types';

export const TOTAL_LIMIT = 817;
export const DEFAULT_LIMIT = 81;
export const DEFAULT_OFFSET = 81;
export const STORAGE_POKEMONS = '@pokemons/STORAGE_POKEMONS';

export const generations = [
  {
    text: 'I',
    offset: 0,
    limit: 151,
  },
  {
    text: 'II',
    offset: 151,
    limit: 251,
  },
  {
    text: 'III',
    offset: 251,
    limit: 386,
  },
  {
    text: 'IV',
    offset: 386,
    limit: 493,
  },
  {
    text: 'V',
    offset: 493,
    limit: 649,
  },
  {
    text: 'VI',
    offset: 649,
    limit: 721,
  },
  {
    text: 'VII',
    offset: 721,
    limit: 809,
  },
  {
    text: 'VIII',
    offset: 809,
    limit: 898,
  },
];

export const options = [
  {
    type: 'number',
    order: 'asc',
    label: 'Organize results for...',
  },
  {
    type: 'number',
    order: 'asc',
    label: 'Lowest number first',
  },
  {
    type: 'number',
    order: 'desc',
    label: 'Highest number first',
  },
  {
    type: 'name',
    order: 'asc',
    label: 'A-Z',
  },
  {
    type: 'name',
    order: 'desc',
    label: 'Z-A',
  },
] as OrderOptions[];

export const badges = {
  bug,
  dark,
  dragon,
  electric,
  fairy,
  fighting,
  fire,
  flying,
  ghost,
  grass,
  ground,
  ice,
  normal,
  poison,
  psychic,
  rock,
  steel,
  water,
};
