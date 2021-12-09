import { FilterParams, SearchParams, SortParams } from '../shared/types';
import { Pokemon } from '../store/modules/pokemons/types';
import { STORAGE_POKEMONS } from './constants';

export const formatId = (id: string | number) => {
  return `#${String(id).padStart(4, '0')}`;
};

export const formatHeight = (height: number) => {
  return `${String(height * 10)}cm`;
};

export const formatWeight = (weight: number) => {
  return `${String(weight / 10)}kg`;
};

export const getImageByPokemonName = (name: string) => {
  const storageData = localStorage.getItem(STORAGE_POKEMONS);

  if (storageData) {
    try {
      const allPokemons = JSON.parse(storageData) as Pokemon[];
      const findPokemon = allPokemons.find(item => item.name === name);

      if (findPokemon) {
        return findPokemon.image;
      }
    } catch (error) {
      console.log(error);
    }
  }
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
  // console.log(data);
  // console.log(offset, limit);
  // console.log(data.slice(offset, limit));

  return data.slice(offset, limit);
};
