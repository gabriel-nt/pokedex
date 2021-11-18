import styled from 'styled-components';

export const Container = styled.div`
  min-width: 390px;
  padding: 30px;
  /* box-shadow: rgba(0, 0, 0, 0.3) 0px 3px 3px 3px; */
  position: relative;
  margin: 32px 20px;
  transition: all 0.8s ease;

  border-radius: 12px;
  background-color: #ccc;

  p {
    font-family: 'Roboto';
    letter-spacing: -1px;
    font-weight: 500;
    color: rgba(23, 23, 27, 0.6);
    line-height: 14px;
    font-size: 1.5rem;
  }

  h1 {
    font-size: 2rem;
    margin-top: 8px;
    margin-bottom: 10px;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.white};
  }

  &:hover {
    > div {
      top: -40%;
    }
  }
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: -30%;
  right: 0;
  transition: top 0.8s ease;
`;

export const BadgeContainer = styled.div`
  display: flex;
  flex-direction: row;

  div {
    & + div {
      padding-left: 8px;
    }
  }
`;
