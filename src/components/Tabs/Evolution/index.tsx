import Image from 'next/image';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

import {
  Pokeball,
  EmptyList,
  Container,
  ImageContainer,
  EvolutionTitle,
} from './styles';

import { Loader } from '../../Loader';
import { ApplicationState } from '../../../store';
import { Evolutions } from '../../../store/modules/evolutions/types';
import { loadRequest } from '../../../store/modules/evolutions/actions';

interface EvolutionProps {
  id: number;
}

const Evolution = ({ id }: EvolutionProps) => {
  const dispatch = useDispatch();

  const loaded = useSelector<ApplicationState, boolean>(
    state => state.evolutions.loaded
  );

  const evolutions = useSelector<ApplicationState, Evolutions[]>(
    state => state.evolutions.evolutions
  );

  useEffect(() => {
    setTimeout(() => {
      dispatch(loadRequest(id));
    }, 600);
  }, [id, dispatch]);

  return (
    <Container>
      <EvolutionTitle>Evolution Chain</EvolutionTitle>
      {!loaded ? (
        <Loader alignCenter={false} />
      ) : (
        <>
          {evolutions.length > 0 ? (
            evolutions.map(item => (
              <div key={item.minLevel}>
                {item.pokemons.map((pokemon, index) => (
                  <>
                    <div className="pokemon" key={index}>
                      {pokemon.image && (
                        <ImageContainer>
                          <Pokeball />
                          <Image
                            layout="fixed"
                            width={80}
                            height={80}
                            src={pokemon.image}
                            alt={pokemon.name}
                            placeholder="empty"
                          />
                        </ImageContainer>
                      )}
                      <p>{pokemon.name}</p>
                    </div>

                    {index === 0 && (
                      <div className="level">
                        <HiOutlineArrowNarrowRight />
                        <p>{item.minLevel}</p>
                      </div>
                    )}
                  </>
                ))}
              </div>
            ))
          ) : (
            <EmptyList>This pokemon does not evolution</EmptyList>
          )}
        </>
      )}
    </Container>
  );
};

export { Evolution };
