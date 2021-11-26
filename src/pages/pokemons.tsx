import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

import { api } from '../services/api';
import { Card } from '../components/Card';
import { Header } from '../components/Header';
import { Loader } from '../components/Loader';
import { Navigation } from '../components/Navigation';

import { Pokemon } from '../shared/interfaces/Pokemon';

import {
  ListResponse,
  LoadPokemonsParams,
  PokemonResponse,
} from '../shared/types';

import { Container, Content } from '../styles/pages/pokemons';

const Pokemons: NextPage = () => {
  const DEFAULT_LIMIT = 81;
  const DEFAULT_OFFSET = 81;

  const [loaded, setLoaded] = useState(false);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [allPokemons, setAllPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    async function loadPokemons({
      offset,
      limit,
      initial,
    }: LoadPokemonsParams) {
      const { data } = await api.get<ListResponse>('/pokemon', {
        params: {
          offset,
          limit,
        },
      });

      if (data.count >= data.results.length + DEFAULT_LIMIT) {
        const arrayPromises = data.results.map(item => {
          return new Promise<Pokemon>(resolve => {
            api.get<PokemonResponse>(`/pokemon/${item.name}`).then(response => {
              const { data } = response;

              const { id, name, sprites, types } = data;

              return resolve({
                id,
                name,
                types: types.map(type => type.type.name),
                image: sprites.other.dream_world.front_default,
              });
            });
          });
        });

        Promise.allSettled(arrayPromises).then(values => {
          const sucessulRequests = (
            values.filter(
              res => res.status === 'fulfilled'
            ) as PromiseFulfilledResult<Pokemon>[]
          ).map(value => value.value);

          if (initial) {
            setLoaded(true);
            setPokemons(sucessulRequests);
          }

          setAllPokemons(prevState => [...prevState, ...sucessulRequests]);
        });
      }
    }

    loadPokemons({
      offset: 0,
      initial: true,
      limit: DEFAULT_LIMIT,
    });

    loadPokemons({
      limit: 1500,
      initial: false,
      offset: DEFAULT_OFFSET,
    });
  }, []);

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
