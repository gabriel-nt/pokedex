import Link from 'next/link';
import type { NextPage } from 'next';

import { Header } from '../components/Header';
import { Carousel } from '../components/Carousel';
import { NewsCarousel } from '../components/NewsCarousel';

import { Container, InfomationContainer } from '../styles/pages/home';

const Home: NextPage = () => {
  return (
    <Container>
      <Header showSearch={false} />
      <div className="content">
        <InfomationContainer>
          <div>
            <h1>Pokédex!</h1>
            <p>
              The pokédex is a RESTful API interface to highly detailed objects
              built from thousands of lines of data related to Pokémon.
            </p>

            <Link href="/pokemons" prefetch>
              Search pokémons
            </Link>
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
