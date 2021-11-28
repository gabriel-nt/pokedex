import { Container, ListOptions } from './styles';

import { MdExpandMore } from 'react-icons/md';
import { useCallback, useState } from 'react';

import Pokeball from '../../../public/pokeball.svg';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../store';
import { OrderOptions } from '../../store/modules/pokemons/types';
import { orderPokemons } from '../../store/modules/pokemons/actions';
import { options } from '../../utils/generations';

const Select = () => {
  const dispatch = useDispatch();
  const selectedOption = useSelector<ApplicationState, OrderOptions>(
    state => state.pokemons.order
  );

  const [isActive, setIsActive] = useState(false);

  const handleClick = useCallback(() => {
    setIsActive(!isActive);
  }, [isActive]);

  const handleSelectedOption = useCallback(
    (option: OrderOptions) => {
      dispatch(orderPokemons(option));
    },
    [dispatch]
  );

  return (
    <Container isActive={isActive} onClick={handleClick}>
      <Pokeball />
      <label>{selectedOption.label}</label>
      <MdExpandMore className="expand-more" />
      <ListOptions isActive={isActive}>
        {options.map((item, index) => (
          <li key={index} onClick={() => handleSelectedOption(item)}>
            {item.label}
          </li>
        ))}
      </ListOptions>
    </Container>
  );
};

export { Select };
