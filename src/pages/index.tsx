import Link from 'next/link';
import type { NextPage } from 'next';
import { Header } from '../components/Header';
import { Container, InfomationContainer } from '../styles/pages/home';

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

            <Link href="/pokemons">Ver Pokémons</Link>
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
