import styled from 'styled-components';

export const Container = styled.div`
  width: 55%;
  padding: 1.25rem 2.5rem;

  .img-mobile {
    display: none !important;
  }

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .swiper-pagination-bullet-active {
    background-color: ${({ theme }) => theme.backgrounds.white};
  }

  @media (max-width: 902px) {
    width: 100%;

    .img-mobile {
      display: block !important;
    }

    .swiper {
      display: none;
    }
  }
`;
