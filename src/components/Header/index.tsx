import Image from 'next/image';
import { AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai';
import {
  Container,
  ImageContainer,
  InputContainer,
  MenuContainer,
} from './styles';

import logoImg from '../../assets/logo.png';
import Link from 'next/link';

type HeaderProps = {
  showSearch?: boolean;
};

const Header = ({ showSearch = true }: HeaderProps) => (
  <Container>
    <ImageContainer>
      <Link href="/" passHref>
        <Image src={logoImg} width={640} height={360} alt="Logo Pokémon" />
      </Link>
    </ImageContainer>

    <MenuContainer showSearch={showSearch}>
      <InputContainer>
        <input type="text" placeholder="Search" />
        <AiOutlineSearch />
      </InputContainer>

      <AiOutlineMenu />
    </MenuContainer>
  </Container>
);

export { Header };
