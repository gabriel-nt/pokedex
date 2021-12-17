import styled from 'styled-components';
import { PokemonTypes } from '../../shared/types';

interface IOverlayProps {
  active: boolean;
}

interface IContainerProps {
  active: boolean;
  type: PokemonTypes;
}

export const Container = styled.div<IContainerProps>`
  top: 50%;
  left: 50%;
  z-index: 101;
  color: white;
  position: fixed;
  max-width: 480px;
  min-width: 460px;
  overflow: hidden;
  max-height: 100vh;
  min-height: 400px;
  border-radius: 0.75rem;
  transition: all 0.2s ease-in;
  transform: translate(-50%, -50%);
  opacity: ${({ active }) => (active ? 1 : 0)};
  visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
  background-color: ${({ theme, type }) => theme.backgrounds[type]};

  @media (max-width: 480px) {
    min-width: 95%;
    max-width: 345px;
  }
`;

export const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  padding: 1.25rem;
  position: absolute;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 2rem;
    font-weight: 500;
    line-height: 1rem;
    letter-spacing: -1px;
    font-family: 'Roboto';
    color: ${({ theme }) => theme.colors.light04};
  }

  svg {
    cursor: pointer;
    width: 1.875rem;
    height: 1.875rem;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 1.25rem 1.25rem 0 1.25rem;

  h1 {
    margin-bottom: 0.5rem;
    text-transform: capitalize;
  }

  .badges {
    display: flex;

    div {
      & + div {
        padding-left: 8px;
      }
    }
  }
`;

export const ImageContainer = styled.div`
  height: 150px;
  z-index: 1000;
  margin-top: 0.5rem;
  transition: top 0.8s ease;
`;

export const Overlay = styled.div<IOverlayProps>`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  position: fixed;
  transition: all 0.3s;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: ${({ active }) => (active ? 1 : 0)};
`;

export const Pokeball = styled.div`
  right: -32px;
  bottom: 65px;
  height: 100%;
  display: flex;
  overflow: hidden;
  position: absolute;
  font-size: 0.625rem;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.light02};

  &:before {
    content: '';
    width: 180px;
    border: 4em solid;
    position: relative;
    border-radius: 100%;
    padding-bottom: 10em;
    clip-path: polygon(
      0 0,
      0 40%,
      50% 40%,
      50% 60%,
      0 60%,
      0 100%,
      100% 100%,
      100% 60%,
      50% 60%,
      50% 40%,
      100% 40%,
      100% 0
    );
  }

  &:after {
    width: 5em;
    content: '';
    position: absolute;
    padding-bottom: 5em;
    border-radius: 100%;
    background-color: currentColor;
  }

  @media (max-width: 500px) {
    right: 0;
    bottom: 0;
    height: auto;
  }
`;
