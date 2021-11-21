import Image from 'next/image';
import { badges } from '../../assets/badges';
import { Pokemon } from '../../pages/pokemons';
import { formatId } from '../../utils';
import { BadgeContainer, Container, ImageContainer, Pokeball } from './styles';

interface CardProps {
  data: Pokemon;
}

const Card = ({ data }: CardProps) => (
  <Container type={data.types[0]}>
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
          <Image src={badges[type]} layout="fixed" alt="test" />
        </div>
      ))}
    </BadgeContainer>
  </Container>
);

export { Card };
