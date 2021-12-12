import Image from 'next/image';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { formatId } from '../../utils';
import { badges } from '../../utils/constants';
import { Pokemon } from '../../store/modules/pokemons/types';
import { selectPokemon } from '../../store/modules/pokemons/actions';

import { BadgeContainer, Container, ImageContainer, Pokeball } from './styles';

interface CardProps {
  data: Pokemon;
}

const Card = ({ data }: CardProps) => {
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    dispatch(selectPokemon(data));
  }, [dispatch, data]);

  return (
    <Container type={data.types[0]} onClick={handleClick}>
      <p>{formatId(data.id)}</p>
      <h1>{data.name}</h1>

      <Pokeball />

      <ImageContainer className="img-container">
        {data.image && (
          <Image
            layout="fixed"
            width={190}
            height={190}
            src={data.image}
            alt={data.name}
            placeholder="empty"
          />
        )}
      </ImageContainer>

      <BadgeContainer>
        {data.types.map(type => (
          <div key={type}>
            <Image src={badges[type]} layout="fixed" alt={type} />
          </div>
        ))}
      </BadgeContainer>
    </Container>
  );
};

export { Card };
