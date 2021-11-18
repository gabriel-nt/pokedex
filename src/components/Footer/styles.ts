import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  padding: 20px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Button = styled.button`
  padding: 12px 24px;
  border-radius: 10px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.white};

  font-size: 1rem;
  font-weight: 500;
  margin-top: 12px;
  font-family: 'Roboto';
`;

export const Pagination = styled.div`
  width: 120px;
  display: flex;
  padding: 3px;
  position: relative;
  border-radius: 8px;
  align-items: center;
  justify-content: center;

  border: 1px solid ${({ theme }) => theme.colors.white};

  p {
    z-index: 10;
  }

  > div {
    width: 50%;
    height: 100%;
    left: 0;
    position: absolute;
    border-radius: 8px 0 0px 8px;

    background-color: blue;
  }
`;
