import styled from 'styled-components';

export const Container = styled.div`
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.dark};

  svg {
    width: 2.5rem;
    animation: spinBall 0.2s linear 1;
    transition: transform 0.2s ease-in;
  }

  div {
    margin-left: 1rem;
  }

  @keyframes spinBall {
    100% {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 365px) {
    min-width: auto;

    label {
      padding: 0 0.5rem 0 0.75rem;
    }
  }
`;
