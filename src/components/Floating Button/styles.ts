import styled from 'styled-components';

interface IContainerProps {
  isActive: boolean;
}

export const Container = styled.button<IContainerProps>`
  right: 1rem;
  bottom: 1rem;
  z-index: 1001;
  display: flex;
  width: 3.5rem;
  height: 3.5rem;
  cursor: pointer;
  position: fixed;
  text-align: center;
  border-radius: 100%;
  align-items: center;
  justify-content: center;
  transition-duration: 400ms;
  box-shadow: 0 0 4px rgb(0 0 0 / 14%), 0 4px 8px rgb(0 0 0 / 28%);
  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  background-color: ${({ theme }) => theme.backgrounds.white};
  visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
  transition: transform 0.2s ease-out, opacity 0.2s ease-in,
    visibility 0.3s ease-in;

  > svg {
    font-size: 1.45rem;
    color: ${({ theme }) => theme.colors.dark};
  }

  &:hover {
    transform: scale(1.06);
  }

  @media (max-width: 500px) {
    width: 3.31rem;
    height: 3.31rem;

    > svg {
      font-size: 1.4rem;
    }
  }
`;
