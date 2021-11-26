import Link from 'next/link';

import { Select } from '../Select';
import { generations } from '../../utils/generations';

import { Container, NavigationContainer, NavigationLink } from './styles';

const Navigation = () => {
  return (
    <Container>
      <NavigationContainer>
        <h1>Select Gen:</h1>
        <div className="select-gen">
          {generations.map(item => (
            <Link href="/" passHref key={item.text}>
              <NavigationLink active>{item.text}</NavigationLink>
            </Link>
          ))}
        </div>
      </NavigationContainer>

      <NavigationContainer>
        <h1>Order:</h1>
        <Select />
      </NavigationContainer>
    </Container>
  );
};

export { Navigation };
