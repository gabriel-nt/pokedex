import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background-image: linear-gradient(
      0deg,
      hsla(0, 0%, 100%, 0.75),
      hsla(0, 0%, 100%, 0.75)
    ),
    url('/background.jpg');
`;

export const Content = styled.section`
  z-index: 2;
  display: grid;
  margin: 0 auto;
  max-width: 1440px;
  flex-direction: row;
  padding: 2.25rem 1rem;
  grid-template-columns: 1fr;

  @media (max-width: 500px) {
    padding: 1rem;
  }

  @media (min-width: 902px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1305px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
