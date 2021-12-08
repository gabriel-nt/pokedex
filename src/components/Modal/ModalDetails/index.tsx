import { Pokemon } from '../../../store/modules/pokemons/types';
import { Container, TabItem } from './styles';

interface ModalDetailsProps {
  data: Pokemon;
}

const ModalDetails = ({ data }: ModalDetailsProps) => {
  return (
    <Container type={data.types[0]}>
      <div className="tabs">
        <TabItem type={data.types[0]}>About</TabItem>
        <TabItem active type={data.types[0]}>
          Base Stats
        </TabItem>
        <TabItem type={data.types[0]}>Evolution</TabItem>
      </div>
      {/* <table>
        <tbody>
          <tr>
            <td>Species</td>
            <td>Grass, Poison</td>
          </tr>
          <tr>
            <td>Species</td>
            <td>Grass, Poison</td>
          </tr>
          <tr>
            <td>Species</td>
            <td>Grass, Poison</td>
          </tr>
          <tr>
            <td>Species</td>
            <td>Grass, Poison</td>
          </tr>
        </tbody>
      </table> */}

      <table>
        <tbody>
          <tr>
            <td>HP</td>
            <td>
              <span>60</span>
              <div className="range"></div>
            </td>
          </tr>
          <tr>
            <td>Species</td>
            <td>
              <span>60</span>
              <div className="range"></div>
            </td>
          </tr>
          <tr>
            <td>Species</td>
            <td>
              <span>60</span>
              <div className="range"></div>
            </td>
          </tr>
          <tr>
            <td>Species</td>
            <td>
              <span>60</span>
              <div className="range"></div>
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};

export { ModalDetails };
