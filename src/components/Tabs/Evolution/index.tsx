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
  isSelected: boolean;
}

const Evolution = ({ id, isSelected }: EvolutionProps) => {
  const dispatch = useDispatch();

  const loaded = useSelector<ApplicationState, boolean>(
    state => state.evolutions.loaded
  );

  const evolutions = useSelector<ApplicationState, Evolutions[]>(
    state => state.evolutions.evolutions
  );

  useEffect(() => {
    setTimeout(() => {
      if (!isSelected) {
        dispatch(loadRequest(id));
      }
    }, 400);
  }, [id, isSelected, dispatch]);

  return (
    <Container>
      <EvolutionTitle>Evolution Chain</EvolutionTitle>
      {!loaded ? (
        <Loader alignCenter={false} />
      ) : (
        <>
          {evolutions.length > 0 ? (
            evolutions.map(item => (
              <div key={Math.random()}>
                {item.pokemons.map((pokemon, index) => (
                  <React.Fragment key={Math.random()}>
                    <div className="pokemon">
                      {pokemon.image && (
                        <ImageContainer>
                          <Pokeball />
                          <Image
                            layout="fixed"
                            width={85}
                            height={85}
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
                  </React.Fragment>
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
