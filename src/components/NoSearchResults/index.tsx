import { Container } from './styles';

import Pokeball from '../../../public/pokeball.svg';

const NoSearchResults = () => (
  <Container>
    <Pokeball />
    <div>
      <h1>No search results</h1>
      <p>Try again for other pokémon name</p>
    </div>
  </Container>
);

export { NoSearchResults };
