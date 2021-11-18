import Image from 'next/image';
import { badges } from '../../assets/badges';
import { BadgeContainer, Container, ImageContainer } from './styles';

const Card = () => (
  <Container>
    <p>0012</p>
    <h1>Weedle</h1>

    <ImageContainer>
      <Image
        layout="fixed"
        width={200}
        height={200}
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png"
        alt="teste"
      />
    </ImageContainer>

    <BadgeContainer>
      <div>
        <Image src={badges.bug} layout="fixed" alt="test" />
      </div>
      <div>
        <Image src={badges.fairy} layout="fixed" alt="test" />
      </div>
    </BadgeContainer>
  </Container>
);

export { Card };
