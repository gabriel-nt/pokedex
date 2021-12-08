import Image from 'next/image';

import { FiArrowLeft } from 'react-icons/fi';

import { formatId } from '../../utils';
import {
  Container,
  Overlay,
  ModalHeader,
  ModalContent,
  ImageContainer,
  Pokeball,
} from './styles';
import { Pokemon } from '../../store/modules/pokemons/types';

import { badges } from '../../assets/badges';

import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../store';
import { useCallback } from 'react';
import {
  closeModal,
  selectPokemon,
} from '../../store/modules/pokemons/actions';
import { Tabs } from '../Tabs';

interface ModalProps {
  data: Pokemon;
}

const Modal = ({ data }: ModalProps) => {
  const dispatch = useDispatch();

  const showModal = useSelector<ApplicationState, boolean>(
    state => state.pokemons.showModal
  );

  const handleCloseModal = useCallback(() => {
    dispatch(closeModal(false));

    setTimeout(() => {
      dispatch(selectPokemon(undefined));
    }, 200);
  }, [dispatch]);

  return (
    <>
      <Container active={showModal} type={data.types[0]}>
        <ModalHeader>
          <FiArrowLeft onClick={handleCloseModal} />

          <p>{formatId(data.id)}</p>
        </ModalHeader>

        <ModalContent>
          <h1>{data.name}</h1>
          <div className="badges">
            {data.types.map(type => (
              <div key={type}>
                <Image src={badges[type]} layout="fixed" alt={type} />
              </div>
            ))}
          </div>

          <Pokeball />

          <ImageContainer className="img-container">
            {data.image && (
              <Image
                layout="fixed"
                width={180}
                height={180}
                src={data.image}
                alt={data.name}
                placeholder="empty"
              />
            )}
          </ImageContainer>
        </ModalContent>

        <Tabs data={data} />
      </Container>
      <Overlay active={showModal} onClick={handleCloseModal} />
    </>
  );
};

export { Modal };
