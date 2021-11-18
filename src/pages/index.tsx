import type { NextPage } from 'next';
import Image from 'next/image';
import { Card } from '../components/Card';
import { Header } from '../components/Header';
import { Container, InfomationContainer } from '../styles/pages/home';

import charizardImg from '../assets/pokemons/charizard.png';
import news01Img from '../assets/news-01.jpg';
import news02Img from '../assets/news-02.jpg';

import { Carousel } from '../components/Carousel';
import { NewsCarousel } from '../components/NewsCarousel';

const Home: NextPage = () => {
  return (
    <Container>
      <Header />
      <div className="content">
        <InfomationContainer>
          <div>
            <h1>Pokédex!</h1>
            <p>
              A pokédex é uma API Restful linkada à uma extensa base de dados
              detalhando tudo sobre os principais Pokémons da série. Confira a
              listagem dos pokémons e suas principais informações.
            </p>

            <button>Ver Pokémons</button>
          </div>

          <div>
            <NewsCarousel />
          </div>
        </InfomationContainer>

        <Carousel />
      </div>
    </Container>
  );
};

export default Home;
