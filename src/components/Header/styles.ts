import Link from 'next/link';
import styled from 'styled-components';

interface IMenuContainerProps {
  showSearch: boolean;
}

export const Container = styled.header`
  display: flex;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 10px 40px;
  align-items: center;
  justify-content: space-between;
`;

export const ImageContainer = styled.div`
  max-width: 150px;
  cursor: pointer;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  padding: 9px 15px;
  background-color: #fff;
  box-shadow: 0 0 15px 0 rgb(0 0 0 / 20%);

  > input {
    outline: none;
    border: none;
    padding: 0 5px;
    font-size: 0.9rem;
    background-color: transparent;
    font-family: 'Roboto';
    font-weight: 500;
    max-width: 120px;
    color: #333;

    &::placeholder {
      font-weight: 500;
      color: #333;
      font-family: 'Roboto';
    }
  }

  > svg {
    font-size: 1.2rem;
    color: #333;

    &:hover {
      cursor: pointer;
    }
  }

  @media (max-width: 602px) {
    display: none;
  }
`;

export const MenuContainer = styled.div<IMenuContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  > svg {
    font-size: 1.5rem;
    margin-left: 60px;
    color: ${({ showSearch }) => (showSearch ? '#fff' : '#333')};
  }
`;
