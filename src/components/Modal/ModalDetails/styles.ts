import styled from 'styled-components';
import { PokemonTypes } from '../../../shared/types';

interface IContainerProps {
  type: PokemonTypes;
}

interface ITabItemProps {
  active?: boolean;
  type: PokemonTypes;
}

export const Container = styled.div<IContainerProps>`
  color: #333;
  padding: 20px;
  padding-top: 30px;
  bottom: 0;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 0 7px 0 rgb(0 0 0 / 40%);

  .tabs {
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
    border-bottom: 2px solid rgba(0, 0, 0, 0.05);
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
        align-items: center;
        font-weight: bold;
      }

      .range {
        width: 100%;
        position: relative;
        height: 5px;
        margin-left: 10px;
        border-radius: 10px;
        overflow: hidden;
        background-color: rgba(0, 0, 0, 0.05);

        &:after {
          content: '';
          border-radius: 10px;
          animation: fill 0.6s backwards;
          position: absolute;
          bottom: 0;
          height: 4px;
          width: 60%;
          background-color: ${({ theme, type }) => theme.backgrounds[type]};
        }
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
  background: transparent;
  border: none;
  font-weight: 700;
  font-size: 1rem;
  font-family: inherit;
  padding: 1rem;
  position: relative;
  color: ${({ theme, active }) => (active ? '#333' : 'rgba(0, 0, 0, 0.2)')};
  outline: none;
  transition: all 0.3s;
  cursor: pointer;

  &:after {
    content: '';
    width: 100%;
    height: 3px;
    left: 0;
    position: absolute;
    bottom: -2px;
    background-color: ${({ theme, active, type }) =>
      active && theme.backgrounds[type]};
  }

  &:hover {
    color: #333;
  }
`;