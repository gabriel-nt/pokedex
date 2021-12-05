import { useEffect } from 'react';
import type { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';

import { Card } from '../components/Card';
import { Header } from '../components/Header';
import { Loader } from '../components/Loader';
import { Navigation } from '../components/Navigation';
import { NoSearchResults } from '../components/NoSearchResults';

import { ApplicationState } from '../store';
import { Pokemon } from '../store/modules/pokemons/types';
import { loadRequest, loadSuccess } from '../store/modules/pokemons/actions';

import { filterPokemonsByGen } from '../utils';
import { generations, STORAGE_POKEMONS } from '../utils/constants';

import { Container, Content } from '../styles/pages/pokemons';
import { Modal } from '../components/Modal';

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

  const selectedPokemon = useSelector<ApplicationState, Pokemon | undefined>(
    state => state.pokemons.selectedPokemon
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
      <Header showSearch={true} />
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
              {selectedPokemon && <Modal data={selectedPokemon} />}
            </Content>
          )}
        </>
      )}
    </Container>
  );
};

export default Pokemons;
