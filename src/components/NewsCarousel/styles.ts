import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 100px;

  .swiper-slide {
    overflow: hidden;
    border-radius: 24px;
  }

  @media (max-width: 902px) {
    margin-top: 70px;
  }
`;

export const Pagination = styled.div`
  display: flex;
  gap: 6px;
  margin-top: 12px;
  justify-content: center;
  align-items: center;

  span {
    font-weight: 700;
    font-family: 'Roboto';
  }

  svg {
    font-size: 24px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;

    &:hover {
      &:first-child {
        transform: translateX(-4px);
      }

      &:last-child {
        transform: translateX(4px);
      }
    }
  }
`;
