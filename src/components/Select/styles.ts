import styled from 'styled-components';

interface ISelectProps {
  isActive: boolean;
}

export const Container = styled.div<ISelectProps>`
  color: #333;
  position: relative;
  min-width: 300px;
  padding: 0.5rem 1rem;
  background-color: #fff;
  border-radius: ${({ isActive }) => (isActive ? '8px 8px 0 0' : '8px')};
  box-shadow: 0 0 15px 0 rgb(0 0 0 / 20%);

  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    font-size: 1.5rem;
    transition: transform 0.2s ease-in;

    &:first-child {
      width: 24px;
      animation: ${({ isActive }) =>
        isActive ? 'spinBall 0.2s linear 1' : 'revertSpinBall 0.2s linear 1'};
    }

    &.expand-more {
      transition: transform 0.2s ease-in;
      transform: ${({ isActive }) =>
        isActive ? 'rotateX(180deg)' : 'rotateX(0deg)'};
    }
  }

  label {
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 1rem;
    letter-spacing: 0.8px;
    padding: 0 52px 0 12px;
    cursor: pointer;
  }

  @keyframes spinBall {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes revertSpinBall {
    100% {
      transform: rotate(-360deg);
    }
  }

  @media (max-width: 365px) {
    min-width: auto;

    label {
      padding: 0 8px 0 12px;
    }
  }
`;

export const ListOptions = styled.ul<ISelectProps>`
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  position: absolute;
  visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
  list-style: none;
  width: 100%;
  border-radius: 0 0 8px 8px;
  background-color: #fff;
  z-index: 10;
  left: 0;
  top: 100%;
  transition: opacity 0.2s ease-in, visibility 0.3s ease-in;
  box-shadow: 0 5px 15px 0px rgb(0 0 0 / 20%);

  li {
    padding: 8px 16px;
    cursor: pointer;
    font-weight: 500;

    &:hover {
      outline: none;
      background-color: #eee;
    }
  }
`;
