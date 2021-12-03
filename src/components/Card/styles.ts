import styled from 'styled-components';
import { PokemonTypes } from '../../shared/types';

interface IContainerProps {
  type: PokemonTypes;
}

export const Container = styled.div<IContainerProps>`
  min-width: 390px;
  padding: 32px;
  box-shadow: 0 0 20px 0 ${({ theme, type }) => theme.backgrounds[type]};
  position: relative;
  margin: 32px 20px;
  cursor: pointer;
  transition: all 0.8s ease;

  border-radius: 12px;
  background-color: ${({ theme, type }) => theme.backgrounds[type]};

  p {
    font-family: 'Roboto';
    letter-spacing: -1px;
    font-weight: 500;
    color: hsla(0, 0%, 100%, 0.4);
    line-height: 14px;
    font-size: 2rem;
  }

  h1 {
    font-size: 2rem;
    margin-top: 8px;
    margin-bottom: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.white};
  }

  &:hover {
    > .img-container {
      top: -36%;
    }
  }

  @media (max-width: 500px) {
    min-width: auto;
    margin: 1rem 0.5rem;
    padding: 1.6rem;

    &:hover {
      > .img-container {
        top: 0;
      }
    }
  }
`;

export const Pokeball = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0px;
  bottom: 0px;
  font-size: 10px;
  height: 100%;
  overflow: hidden;
  color: hsla(0, 0%, 100%, 0.2);

  &:before {
    content: '';
    position: relative;
    width: 180px;
    padding-bottom: 10em;
    border: 4em solid;
    border-radius: 100%;
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
    content: '';
    position: absolute;
    width: 5em;
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

export const ImageContainer = styled.div`
  position: absolute;
  top: -28%;
  right: 4%;
  transition: top 0.8s ease;

  @media (max-width: 500px) {
    top: 0;
    right: 0;
    position: relative;
    text-align: center;
    margin-bottom: 8px;
  }
`;

export const BadgeContainer = styled.div`
  display: flex;
  flex-direction: row;

  div {
    & + div {
      padding-left: 8px;
    }
  }
`;
