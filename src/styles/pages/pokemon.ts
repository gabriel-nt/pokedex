import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1440px;
  margin: 0 auto;
  padding: 36px 16px;
  display: grid;
  flex-direction: row;
  z-index: 2;
  grid-template-columns: 1fr;

  @media (min-width: 902px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1305px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
