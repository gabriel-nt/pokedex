import styled from 'styled-components';

export const Container = styled.section`
  overflow: hidden;
  background: -webkit-linear-gradient(100deg, #f1f1f1 50%, #b8c470 50%);
  background: -o-linear-gradient(100deg, #f1f1f1 50%, #b8c470 50%);
  background: -moz-linear-gradient(100deg, #f1f1f1 50%, #b8c470 50%);
  background: linear-gradient(100deg, #f1f1f1 50%, #b8c470 50%);

  .content {
    color: #000;
    display: flex;
    height: calc(100vh - 110px);
    flex-direction: row;
  }

  @media (max-width: 902px) {
    .content {
      flex-direction: column-reverse;
      align-items: center;
      width: 100%;
      height: 100%;
    }
  }
`;

export const InfomationContainer = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
  justify-content: space-around;

  h1 {
    font-weight: 700;
    font-size: 3rem;
    font-family: 'Roboto';
    margin-bottom: 16px;
  }

  p {
    font-weight: 500;
    font-family: 'Roboto';
  }

  button {
    padding: 8px 20px;
    display: block;
    border-radius: 20px;
    color: #fff;
    margin-top: 32px;
    font-weight: 500;
    font-family: 'Roboto';
    background-color: #000;
  }

  @media (max-width: 902px) {
    width: 100%;
  }
`;
