import { OrderOptions } from '../store/modules/pokemons/types';

const generations = [
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

const options = [
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

export { generations, options };
