import styled from 'styled-components';

export const Container = styled.div`
  width: 55%;
  padding: 20px 40px;

  .img-mobile {
    display: none !important;
  }

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-pagination-bullet-active {
    background-color: #fff;
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
