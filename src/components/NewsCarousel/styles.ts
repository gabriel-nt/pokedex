import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 100px;

  .swiper-slide {
    overflow: hidden;
    border-radius: 1.5rem;
  }

  @media (max-width: 902px) {
    margin-top: 4.375rem;
  }
`;

export const Pagination = styled.div`
  display: flex;
  gap: 0.375rem;
  margin-top: 0.75rem;
  align-items: center;
  justify-content: center;

  span {
    font-weight: 700;
    font-family: 'Roboto';
  }

  svg {
    cursor: pointer;
    font-size: 1.5rem;
    transition: transform 0.2s ease-in-out;

    &:hover {
      &:first-child {
        transform: translateX(-0.25rem);
      }

      &:last-child {
        transform: translateX(0.25rem);
      }
    }
  }
`;
