import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 50vh;
  justify-content: center;

  color: #333;

  svg {
    width: 40px;
    transition: transform 0.2s ease-in;
    animation: spinBall 0.2s linear 1;
  }

  div {
    margin-left: 16px;
  }

  @keyframes spinBall {
    100% {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 365px) {
    min-width: auto;

    label {
      padding: 0 8px 0 12px;
    }
  }
`;
