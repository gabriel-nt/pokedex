import { useEffect, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';

import { Container } from './styles';

const FloatingButton = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', (_: Event) => {
      if (window.scrollY >= 400 && !isActive) {
        setIsActive(true);
      }

      if (window.scrollY <= 400 && isActive) {
        setIsActive(false);
      }
    });
  }, [isActive]);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Container isActive={isActive} onClick={handleScrollTop}>
      <FiArrowUp />
    </Container>
  );
};

export { FloatingButton };
