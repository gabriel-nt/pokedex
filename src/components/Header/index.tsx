import Image from 'next/image';
import { AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai';
import {
  Container,
  ImageContainer,
  InputContainer,
  MenuContainer,
} from './styles';

import logoImg from '../../assets/logo.png';

const Header = () => (
  <Container>
    <ImageContainer>
      <Image src={logoImg} width={640} height={360} alt="Logo Pokémon" />
    </ImageContainer>

    <MenuContainer>
      <InputContainer>
        <input type="text" placeholder="Search" />
        <AiOutlineSearch />
      </InputContainer>

      <AiOutlineMenu />
    </MenuContainer>
  </Container>
);

export { Header };
