import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { TypePokemon } from '../@types';

import { Card } from '../components/Card';
import { Header } from '../components/Header';
import { Loader } from '../components/Loader';
import { Navigation } from '../components/Navigation';
import { api } from '../services/api';
import { Container, Content } from '../styles/pages/pokemons';

export type Pokemon = {
  id: number;
  name: string;
  image: string;
  types: Array<TypePokemon>;
};

type ListResponse = {
  count: number;
  results: Array<{
    name: string;
  }>;
};

type PokemonResponse = {
  id: number;
  name: string;
  types: Array<{
    type: {
      name: TypePokemon;
    };
  }>;
  sprites: {
    other: {
      home: {
        front_default: string;
      };
      dream_world: {
        front_default: string;
      };
      'official-artwork': {
        front_default: string;
      };
    };
  };
};

const Pokemons: NextPage = () => {
  const [loaded, setLoaded] = useState(false);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    async function loadPokemons() {
      const { data } = await api.get<ListResponse>('/pokemon', {
        params: {
          limit: 80,
        },
      });

      const arrayPromises = data.results.map(item => {
        return new Promise<Pokemon>(resolve => {
          api.get<PokemonResponse>(`/pokemon/${item.name}`).then(response => {
            const { data } = response;

            const { id, name, sprites, types } = data;

            return resolve({
              id,
              name,
              types: types.map(type => type.type.name),
              image: sprites.other['dream_world'].front_default,
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

        setLoaded(true);
        setPokemons(sucessulRequests);
      });
    }

    loadPokemons();
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
