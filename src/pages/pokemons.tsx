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
import { loadRequest } from '../store/modules/pokemons/actions';
import { Pokemon } from '../store/modules/pokemons/types';

const Pokemons: NextPage = () => {
  const DEFAULT_LIMIT = 81;
  const DEFAULT_OFFSET = 81;
  const dispatch = useDispatch();

  const pokemons = useSelector<ApplicationState, Pokemon[]>(
    state => state.pokemons.currentPokemons
  );

  const allPokemons = useSelector<ApplicationState, Pokemon[]>(
    state => state.pokemons.allPokemons
  );

  const loaded = useSelector<ApplicationState, boolean>(
    state => state.pokemons.loaded
  );

  useEffect(() => {
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
        limit: 1500,
        offset: 81,
      })
    );
  }, [dispatch]);

  return (
    <Container>
      <Header showSearch={false} />
      <Navigation />
      {!loaded ? (
        <Loader />
      ) : (
        <Content>
          {pokemons.map(pokemon => (
            <Card key={pokemon.id} data={pokemon} />
          ))}
        </Content>
      )}
    </Container>
  );
};

export default Pokemons;
