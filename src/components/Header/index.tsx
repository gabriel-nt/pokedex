import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai';

import {
  Container,
  ImageContainer,
  InputContainer,
  MenuContainer,
} from './styles';

import logoDesktopImg from '../../assets/logo.png';

type HeaderProps = {
  showSearch?: boolean;
};

const Header = ({ showSearch = true }: HeaderProps) => (
  <Container>
    <ImageContainer>
      <Link href="/" passHref prefetch>
        <Image
          src={logoDesktopImg}
          width={640}
          height={360}
          alt="Logo Pokémon"
        />
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
