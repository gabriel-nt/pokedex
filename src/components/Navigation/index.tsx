import Link from 'next/link';

import { Select } from '../Select';
import { generations } from '../../utils/constants';

import { Container, NavigationContainer, NavigationLink } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../store';
import {
  FilterOptions,
  OrderOptions,
} from '../../store/modules/pokemons/types';
import { useCallback } from 'react';
import {
  filterPokemons,
  orderPokemons,
} from '../../store/modules/pokemons/actions';

const Navigation = () => {
  const dispatch = useDispatch();

  const selectedGen = useSelector<ApplicationState, FilterOptions>(
    state => state.pokemons.filter
  );

  const currentOrder = useSelector<ApplicationState, OrderOptions>(
    state => state.pokemons.order
  );

  const handleSelectedGen = useCallback(
    (filter: FilterOptions) => {
      dispatch(filterPokemons(filter));
      dispatch(orderPokemons(currentOrder));
    },
    [dispatch, currentOrder]
  );

  return (
    <Container>
      <NavigationContainer>
        <h1>Select Gen:</h1>
        <div className="select-gen">
          {generations.map(item => (
            <NavigationLink
              key={item.text}
              onClick={() => handleSelectedGen(item)}
              active={selectedGen.text === item.text}
            >
              {item.text}
            </NavigationLink>
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
