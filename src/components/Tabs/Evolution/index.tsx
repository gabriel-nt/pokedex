import { useEffect, useState } from 'react';
import { api } from '../../../services/api';

interface EvolutionProps {
  id: number;
}

const Evolution = ({ id }: EvolutionProps) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function loadEvolution() {
      const { data } = await api.get(`pokemon-species/${id}`);

      console.log(data);
    }

    loadEvolution();
  }, [id]);

  return <p>Teste</p>;
};

export { Evolution };
