import styled from 'styled-components';

export const Container = styled.section`
  overflow: hidden;
  background: -webkit-linear-gradient(100deg, #f1f1f1 50%, #b8c470 50%);
  background: -o-linear-gradient(100deg, #f1f1f1 50%, #b8c470 50%);
  background: -moz-linear-gradient(100deg, #f1f1f1 50%, #b8c470 50%);
  background: linear-gradient(100deg, #f1f1f1 50%, #b8c470 50%);

  .content {
    display: flex;
    margin: 0 auto;
    max-width: 1440px;
    flex-direction: row;
    height: calc(100vh - 110px);
    color: ${({ theme }) => theme.colors.black};
  }

  @media (max-width: 902px) {
    .content {
      width: 100%;
      height: 100%;
      align-items: center;
      flex-direction: column-reverse;
    }
  }
`;

export const InfomationContainer = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  padding: 1.25rem 2.5rem;
  justify-content: space-around;

  h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
    font-family: 'Roboto';
  }

  p {
    font-weight: 500;
    font-family: 'Roboto';
  }

  a {
    margin-top: 2rem;
    font-weight: 500;
    font-family: 'Roboto';
    display: inline-block;
    border-radius: 1.25rem;
    padding: 0.5rem 1.25rem;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.backgrounds.black};
  }

  @media (max-width: 902px) {
    width: 100%;
  }
`;
