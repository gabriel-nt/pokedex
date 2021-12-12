import styled from 'styled-components';

interface ISelectProps {
  isActive: boolean;
}

export const Container = styled.div<ISelectProps>`
  display: flex;
  cursor: pointer;
  min-width: 300px;
  position: relative;
  align-items: center;
  padding: 0.5rem 1rem;
  justify-content: space-between;
  box-shadow: 0 0 1rem 0 rgb(0 0 0 / 20%);
  color: ${({ theme }) => theme.colors.dark};
  border-radius: ${({ isActive }) =>
    isActive ? '0.5rem 0.5rem 0 0' : '0.5rem'};
  background-color: ${({ theme }) => theme.backgrounds.white};

  svg {
    font-size: 1.5rem;
    transition: transform 0.2s ease-in;

    &:first-child {
      width: 1.5rem;
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
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    font-family: 'Roboto';
    letter-spacing: 0.8px;
    padding: 0 3.25rem 0 0.75rem;
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
      padding: 0 1rem 0 0.75rem;
    }
  }
`;

export const ListOptions = styled.ul<ISelectProps>`
  left: 0;
  top: 100%;
  width: 100%;
  z-index: 10;
  list-style: none;
  position: absolute;
  border-radius: 0 0 0.5rem 0.5rem;
  box-shadow: 0 0.375rem 1rem 0px rgb(0 0 0 / 20%);
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  transition: opacity 0.2s ease-in, visibility 0.3s ease-in;
  background-color: ${({ theme }) => theme.backgrounds.white};
  visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};

  li {
    cursor: pointer;
    font-weight: 500;
    padding: 0.5rem 1rem;

    &:hover {
      outline: none;
      background-color: ${({ theme }) => theme.backgrounds.gray};
    }
  }
`;
