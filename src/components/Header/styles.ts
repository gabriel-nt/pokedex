import styled from 'styled-components';

interface IMenuContainerProps {
  showSearch: boolean;
}

export const Container = styled.header`
  width: 100%;
  display: flex;
  margin: 0 auto;
  max-width: 1440px;
  align-items: center;
  padding: 0.625rem 2.5rem;
  justify-content: space-between;

  @media (max-width: 500px) {
    flex-direction: column;
    padding: 0.625rem 1.25rem;
  }
`;

export const ImageContainer = styled.div`
  cursor: pointer;
  max-width: 150px;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.625rem 1rem;
  border-radius: 1.25rem;
  justify-content: space-between;
  box-shadow: 0 0 1rem 0 rgb(0 0 0 / 20%);
  background-color: ${({ theme }) => theme.backgrounds.white};

  > input {
    border: none;
    outline: none;
    max-width: 120px;
    font-weight: 500;
    font-size: 0.9rem;
    padding: 0 0.31rem;
    font-family: 'Roboto';
    background-color: transparent;
    color: ${({ theme }) => theme.backgrounds.dark};

    &::placeholder {
      font-weight: 500;
      font-family: 'Roboto';
      color: ${({ theme }) => theme.backgrounds.dark};
    }
  }

  > svg {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.backgrounds.dark};

    &:hover {
      cursor: pointer;
    }
  }
`;

export const MenuContainer = styled.div<IMenuContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    display: ${({ showSearch }) => (showSearch ? 'flex' : 'none')};
  }

  > svg {
    font-size: 1.5rem;
    margin-left: 3.75rem;
    color: ${({ theme, showSearch }) =>
      showSearch ? theme.colors.dark : theme.colors.white};
  }

  @media (max-width: 516px) {
    width: 100%;
    justify-content: space-between;

    > svg {
      margin-left: 1.5rem;
      display: ${({ showSearch }) => (showSearch ? 'block' : 'none')};
    }
  }
`;
