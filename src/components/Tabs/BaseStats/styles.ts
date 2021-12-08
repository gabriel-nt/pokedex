import styled from 'styled-components';
import { PokemonTypes } from '../../../shared/types';

interface IRangeProps {
  type: PokemonTypes;
  value: number;
}

export const Range = styled.div<IRangeProps>`
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
    width: ${({ value }) => value}%;
    background-color: ${({ theme, type }) => theme.backgrounds[type]};
  }
`;
