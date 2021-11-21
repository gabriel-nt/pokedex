import Link from 'next/link';
import { Select } from '../Select';

import { Container, NavigationContainer, NavigationLink } from './styles';

const Navigation = () => {
  return (
    <Container>
      <NavigationContainer>
        <h1>Select Gen:</h1>
        <div className="select-gen">
          <Link href="/" passHref>
            <NavigationLink active>I</NavigationLink>
          </Link>
          <Link href="/" passHref>
            <NavigationLink active={false}>II</NavigationLink>
          </Link>
          <Link href="/" passHref>
            <NavigationLink active={false}>III</NavigationLink>
          </Link>
          <Link href="/" passHref>
            <NavigationLink active={false}>IV</NavigationLink>
          </Link>
          <Link href="/" passHref>
            <NavigationLink active={false}>V</NavigationLink>
          </Link>
          <Link href="/" passHref>
            <NavigationLink active={false}>VI</NavigationLink>
          </Link>
          <Link href="/" passHref>
            <NavigationLink active={false}>VII</NavigationLink>
          </Link>
          <Link href="/" passHref>
            <NavigationLink active={false}>VIII</NavigationLink>
          </Link>
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
