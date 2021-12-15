import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { KeyboardEvent, useCallback, useRef } from 'react';
import { AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai';

import {
  Container,
  ImageContainer,
  InputContainer,
  MenuContainer,
} from './styles';

import logoDesktopImg from '../../assets/logo.png';

import {
  orderPokemons,
  searchPokemons,
} from '../../store/modules/pokemons/actions';

import { ApplicationState } from '../../store';
import { OrderOptions } from '../../store/modules/pokemons/types';

type HeaderProps = {
  showSearch?: boolean;
};

const Header = ({ showSearch = true }: HeaderProps) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const currentOrder = useSelector<ApplicationState, OrderOptions>(
    state => state.pokemons.order
  );

  const handleChangeEvent = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      const target = e.target as HTMLInputElement;
      if (router.asPath === '/' && target.value !== '') {
        router.push({
          pathname: '/pokemons',
          query: { searchValue: target.value },
        });
      } else {
        dispatch(searchPokemons(target.value));
        dispatch(orderPokemons(currentOrder));
      }
    },
    [dispatch, currentOrder, router]
  );

  const handleClickEvent = useCallback(() => {
    const value = inputRef.current?.value;

    if (value) {
      if (router.asPath === '/') {
        router.push({
          pathname: '/pokemons',
          query: { searchValue: value },
        });
      } else {
        dispatch(searchPokemons(value));
        dispatch(orderPokemons(currentOrder));
      }
    }
  }, [dispatch, currentOrder, router]);

  return (
    <Container>
      <Link href="/" passHref prefetch>
        <ImageContainer>
          <Image
            src={logoDesktopImg}
            width={640}
            height={360}
            alt="Logo Pokémon"
          />
        </ImageContainer>
      </Link>

      <MenuContainer showSearch={showSearch}>
        <InputContainer>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search"
            onKeyUp={handleChangeEvent}
          />
          <AiOutlineSearch onClick={handleClickEvent} />
        </InputContainer>

        <AiOutlineMenu />
      </MenuContainer>
    </Container>
  );
};

export { Header };
