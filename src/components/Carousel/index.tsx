import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, {
  Autoplay,
  Pagination,
  Navigation,
  EffectFade,
} from 'swiper';

import Image from 'next/image';
import { Container } from './styles';

type ICarouseProps = {};

import charizardImg from '../../assets/pokemons/charizard.png';
import suicuneImg from '../../assets/pokemons/suicune.png';
import pikachuImg from '../../assets/pokemons/pikachu.png';

const Carousel = ({}: ICarouseProps) => {
  SwiperCore.use([Autoplay, Pagination, Navigation, EffectFade]);

  return (
    <Container>
      <Swiper
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop
        pagination={{
          clickable: true,
        }}
        direction="vertical"
        slidesPerView={1}
      >
        <SwiperSlide>
          <Image src={charizardImg} alt="Charizard" />
        </SwiperSlide>

        <SwiperSlide>
          <Image src={pikachuImg} alt="Pikachu" />
        </SwiperSlide>

        <SwiperSlide>
          <Image src={suicuneImg} alt="Suicune" />
        </SwiperSlide>
      </Swiper>

      <Image
        src={charizardImg}
        width={753}
        height={720}
        alt="Charizard"
        className="img-mobile"
      />
    </Container>
  );
};

export { Carousel };
