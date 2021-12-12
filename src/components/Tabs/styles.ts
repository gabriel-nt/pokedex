import styled from 'styled-components';
import { PokemonTypes } from '../../shared/types';

interface ITabItemProps {
  active?: boolean;
  type: PokemonTypes;
}

export const Container = styled.div`
  bottom: 0;
  padding: 1.25rem;
  border-radius: 0.75rem;
  box-shadow: 0 0 0.5rem 0 rgb(0 0 0 / 40%);
  color: ${({ theme }) => theme.colors.dark};
  background-color: ${({ theme }) => theme.backgrounds.white};

  .tabs {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    border-bottom: 0.125rem solid rgba(0, 0, 0, 0.05);
  }

  table {
    width: 100%;

    td {
      padding: 0.5rem;
      text-transform: capitalize;

      &:first-child {
        width: 20%;
      }

      &:nth-child(2) {
        display: flex;
        font-weight: bold;
        align-items: center;
      }
    }
  }

  @keyframes fill {
    from {
      width: 0;
    }
  }
`;

export const TabItem = styled.span<ITabItemProps>`
  border: none;
  padding: 1rem;
  outline: none;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 700;
  position: relative;
  white-space: nowrap;
  font-family: inherit;
  transition: all 0.3s;
  background: transparent;
  color: ${({ theme, active }) =>
    active ? theme.colors.dark : 'rgba(0, 0, 0, 0.2)'};

  &:after {
    left: 0;
    content: '';
    width: 100%;
    height: 3px;
    bottom: -2px;
    position: absolute;
    transition: all 0.3s;
    background-color: ${({ theme, active, type }) =>
      active && theme.backgrounds[type]};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.dark};
  }
`;
