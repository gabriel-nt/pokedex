import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { api } from '../services/api';
import { Card } from '../components/Card';
import { Header } from '../components/Header';
import { Loader } from '../components/Loader';
import { Navigation } from '../components/Navigation';

import { Container, Content } from '../styles/pages/pokemons';
import { ApplicationState } from '../store';
import { loadRequest, loadSuccess } from '../store/modules/pokemons/actions';
import { Pokemon } from '../store/modules/pokemons/types';
import { generations, STORAGE_POKEMONS } from '../utils/constants';
import { filterPokemonsByGen } from '../utils';
import { NoSearchResults } from '../components/NoSearchResults';

const Pokemons: NextPage = () => {
  const DEFAULT_LIMIT = 81;
  const DEFAULT_OFFSET = 81;
  const dispatch = useDispatch();

  const pokemons = useSelector<ApplicationState, Pokemon[]>(
    state => state.pokemons.currentPokemons
  );

  const loaded = useSelector<ApplicationState, boolean>(
    state => state.pokemons.loaded
  );

  useEffect(() => {
    try {
      var allPokemons = localStorage.getItem(STORAGE_POKEMONS);

      if (!allPokemons) {
        throw new Error('Empty list');
      }

      if (allPokemons) {
        var pokemons = JSON.parse(allPokemons) as Pokemon[];

        dispatch(
          loadSuccess(
            filterPokemonsByGen({
              data: pokemons,
              offset: generations[0].offset,
              limit: generations[0].limit,
            }),
            true
          )
        );

        dispatch(
          loadSuccess(
            filterPokemonsByGen({
              data: pokemons,
              offset: generations[0].limit,
              limit: pokemons.length,
            }),
            false
          )
        );
      }
    } catch (e) {
      dispatch(
        loadRequest({
          initial: true,
          limit: DEFAULT_LIMIT,
          offset: 0,
        })
      );

      dispatch(
        loadRequest({
          initial: false,
          offset: DEFAULT_OFFSET,
          limit: 817,
        })
      );
    }
  }, [dispatch]);

  return (
    <Container>
      <Header showSearch={false} />
      <Navigation />
      {!loaded ? (
        <Loader />
      ) : (
        <>
          {pokemons.length === 0 ? (
            <NoSearchResults />
          ) : (
            <Content>
              {pokemons.map(pokemon => (
                <Card key={pokemon.id} data={pokemon} />
              ))}
            </Content>
          )}
        </>
      )}
    </Container>
  );
};

export default Pokemons;
