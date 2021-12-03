import Image from 'next/image';

import { AiOutlineArrowLeft } from 'react-icons/ai';

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

interface ModalProps {
  data: Pokemon;
}

const Modal = ({ data }: ModalProps) => (
  <>
    <Container>
      <ModalHeader>
        <AiOutlineArrowLeft />

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
              width={160}
              height={160}
              src={data.image}
              alt={data.name}
              placeholder="empty"
            />
          )}
        </ImageContainer>
      </ModalContent>

      <div className="info">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          eaque fugiat corrupti, quisquam, odit sequi cupiditate quis beatae,
          quia repellat odio? Animi harum accusantium, vel placeat illum quas id
          mollitia.
        </p>
      </div>
    </Container>
    <Overlay />
  </>
);

export { Modal };
