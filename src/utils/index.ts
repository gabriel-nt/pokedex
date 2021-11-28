import { FilterParams, SearchParams, SortParams } from '../shared/types';

export const formatId = (id: string | number) => {
  return `#${String(id).padStart(4, '0')}`;
};

export const searchPokemonsByName = ({ data, name }: SearchParams) => {
  return data.filter(item => item.name.indexOf(name) !== -1);
};

export const sortPokemonsById = ({ data, order }: SortParams) => {
  if (order === 'desc') {
    return data.sort((a, b) => b.id - a.id);
  }

  return data.sort((a, b) => b.id - a.id).reverse();
};

export const sortPokemonsByName = ({ data, order }: SortParams) => {
  if (order === 'asc') {
    return data.sort((a, b) => a.name.localeCompare(b.name));
  }

  return data.sort((a, b) => a.name.localeCompare(b.name)).reverse();
};

export const filterPokemonsByGen = ({ data, offset, limit }: FilterParams) => {
  console.log(data);
  console.log(offset);
  console.log(limit);
  return data.slice(offset, limit);
};
