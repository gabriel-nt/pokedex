import { Container, ListOptions } from './styles';

import { MdExpandLess, MdExpandMore } from 'react-icons/md';
import { useCallback, useState } from 'react';

import Pokeball from '../../../public/pokeball.svg';

type Option = {
  value: number;
  label: string;
};

const Select = () => {
  const options = [
    {
      value: 1,
      label: 'Organize results for...',
    },
    {
      value: 2,
      label: 'Lowest number first',
    },
    {
      value: 3,
      label: 'Highest number first',
    },
    {
      value: 4,
      label: 'A-Z',
    },
    {
      value: 5,
      label: 'Z-A',
    },
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isActive, setIsActive] = useState(false);

  const handleClick = useCallback(() => {
    setIsActive(!isActive);
  }, [isActive]);

  const handleSelectedOption = (option: Option) => {
    setSelectedOption(option);
  };

  return (
    <Container isActive={isActive} onClick={handleClick}>
      <Pokeball />
      <label>{selectedOption.label}</label>
      <MdExpandMore className="expand-more" />
      <ListOptions isActive={isActive}>
        {options.map(item => (
          <li key={item.value} onClick={() => handleSelectedOption(item)}>
            {item.label}
          </li>
        ))}
      </ListOptions>
    </Container>
  );
};

export { Select };
