import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import Image from 'next/image';
import { Container, Pagination } from './styles';

import news01 from '../../assets/news-01.jpg';
import news02 from '../../assets/news-02.jpg';
import news03 from '../../assets/news-03.jpg';
import news04 from '../../assets/news-04.jpg';

const NewsCarousel = () => {
  SwiperCore.use([Autoplay, Navigation]);

  return (
    <Container>
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: '.prev-slider',
          nextEl: '.next-slider',
        }}
        spaceBetween={16}
        loop
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          550: {
            slidesPerView: 2,
          },
          1650: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <Image src={news01} alt="News" />
        </SwiperSlide>

        <SwiperSlide>
          <Image src={news02} alt="News" />
        </SwiperSlide>

        <SwiperSlide>
          <Image src={news03} alt="News" />
        </SwiperSlide>

        <SwiperSlide>
          <Image src={news04} alt="News" />
        </SwiperSlide>
      </Swiper>

      <Pagination>
        <BsArrowLeftShort className="prev-slider" />
        <span>1 OF 4</span>
        <BsArrowRightShort className="next-slider" />
      </Pagination>
    </Container>
  );
};

export { NewsCarousel };
