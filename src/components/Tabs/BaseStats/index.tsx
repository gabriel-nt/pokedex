import { Range } from './styles';
import { PokemonTypes } from '../../../shared/types';

interface BaseStatsProps {
  type: PokemonTypes;
  stats: Array<number>;
}

const BaseStats = ({ stats, type }: BaseStatsProps) => (
  <table>
    <tbody>
      <tr>
        <td>HP</td>
        <td>
          <span>{stats[0]}</span>
          <Range value={stats[0]} type={type} />
        </td>
      </tr>
      <tr>
        <td>Attack</td>
        <td>
          <span>{stats[1]}</span>
          <Range value={stats[1]} type={type} />
        </td>
      </tr>
      <tr>
        <td>Defense</td>
        <td>
          <span>{stats[2]}</span>
          <Range value={stats[2]} type={type} />
        </td>
      </tr>
      <tr>
        <td>Sp. Atk</td>
        <td>
          <span>{stats[3]}</span>
          <Range value={stats[3]} type={type} />
        </td>
      </tr>
      <tr>
        <td>Sp. Def</td>
        <td>
          <span>{stats[4]}</span>
          <Range value={stats[4]} type={type} />
        </td>
      </tr>
      <tr>
        <td>Speed</td>
        <td>
          <span>{stats[5]}</span>
          <Range value={stats[5]} type={type} />
        </td>
      </tr>
      <tr>
        <td>Total</td>
        <td>
          <span>
            {stats.reduce((previous, current) => previous + current, 0)}
          </span>
          <Range
            value={
              stats.reduce((previous, current) => previous + current, 0) / 6
            }
            type={type}
          />
        </td>
      </tr>
    </tbody>
  </table>
);

export { BaseStats };
