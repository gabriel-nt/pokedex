import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  width: 100%;
  padding: 10px 40px;
  align-items: center;
  justify-content: space-between;
`;

export const ImageContainer = styled.div`
  max-width: 150px;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  padding: 8px 10px;
  background-color: #eaeaea;

  > input {
    outline: none;
    border: none;
    padding: 0 5px;
    background-color: transparent;
    font-family: 'Roboto';
    font-weight: 500;
    max-width: 110px;
    color: #737373;

    &::placeholder {
      font-weight: 500;
      color: #737373;
      font-family: 'Roboto';
    }
  }

  > svg {
    font-size: 16px;
    color: #737373;
  }

  @media (max-width: 602px) {
    display: none;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > svg {
    font-size: 24px;
    margin-left: 60px;
    color: ${({ theme }) => theme.colors.white};
  }
`;
