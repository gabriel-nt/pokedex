import type { NextPage } from 'next';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { TypePokemon } from '../@types';

import { Card } from '../components/Card';
import { Header } from '../components/Header';
import { api } from '../services/api';
import {
  Container,
  Content,
  NavigationContainer,
  NavigationLink,
} from '../styles/pages/pokemons';

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

        setPokemons(sucessulRequests);
      });
    }

    loadPokemons();
  }, []);

  return (
    <Container>
      <Header />
      <NavigationContainer>
        <div>
          <Link href="/" passHref>
            <NavigationLink active>I</NavigationLink>
          </Link>
          <Link href="/" passHref>
            <NavigationLink active={false}>II</NavigationLink>
          </Link>
          <Link href="/" passHref>
            <NavigationLink active={false}>III</NavigationLink>
          </Link>
          <Link href="/" passHref>
            <NavigationLink active={false}>IV</NavigationLink>
          </Link>
          <Link href="/" passHref>
            <NavigationLink active={false}>V</NavigationLink>
          </Link>
          <Link href="/" passHref>
            <NavigationLink active={false}>VI</NavigationLink>
          </Link>
          <Link href="/" passHref>
            <NavigationLink active={false}>VII</NavigationLink>
          </Link>
          <Link href="/" passHref>
            <NavigationLink active={false}>VIII</NavigationLink>
          </Link>
        </div>
      </NavigationContainer>
      <Content>
        {pokemons.map(pokemon => (
          <Card key={pokemon.id} data={pokemon} />
        ))}
      </Content>
    </Container>
  );
};

export default Pokemons;
