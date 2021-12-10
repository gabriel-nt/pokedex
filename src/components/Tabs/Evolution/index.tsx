import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { api } from '../../../services/api';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { getImageByPokemonName } from '../../../utils';

import { Container, Pokeball, ImageContainer } from './styles';
import { Loader } from '../../Loader';

interface EvolutionProps {
  id: number;
}

type Evolutions = {
  minLevel: string | number;
  pokemons: Array<{
    name: string;
    image: string | undefined;
  }>;
};

type EnvolvesTo = {
  evolution_details: Array<{
    min_level: number;
    min_happiness: number;
    item: {
      name: string;
    };
    trigger: {
      name: string;
    };
  }>;
  species: {
    name: string;
  };
  evolves_to: Array<EnvolvesTo>;
};

type PokemonEvolutionResponse = {
  chain: {
    species: {
      name: string;
    };
    evolves_to: Array<EnvolvesTo>;
  };
};

const Evolution = ({ id }: EvolutionProps) => {
  const [loaded, setLoaded] = useState(false);
  const [evolutions, setEvolutions] = useState<Evolutions[]>([]);

  useEffect(() => {
    async function loadEvolution() {
      const tempArray = [];

      const response = await api.get(`pokemon-species/${id}`);
      const { data } = await axios.get<PokemonEvolutionResponse>(
        response.data.evolution_chain.url
      );

      if (data.chain.evolves_to.length > 0) {
        const species = data.chain.species;
        const evolvesTo01 = data.chain.evolves_to[0];
        const { evolves_to: evolvesTo02 } = data.chain.evolves_to[0];

        const pokemonN1 = {
          name: species.name,
          image: getImageByPokemonName(species.name),
        };

        const pokemonN2 = {
          name: evolvesTo01.species.name,
          image: getImageByPokemonName(evolvesTo01.species.name),
        };

        tempArray.push({
          pokemons: [pokemonN1, pokemonN2],
          minLevel:
            (evolvesTo01.evolution_details[0].min_level &&
              `Lvl ${evolvesTo01.evolution_details[0].min_level}`) ??
            (evolvesTo01.evolution_details[0].min_happiness &&
              `Lvl ${evolvesTo01.evolution_details[0].min_happiness}`) ??
            `Use ${evolvesTo01.evolution_details[0].item.name}`,
        });

        if (evolvesTo02.length > 0) {
          const pokemonN3 = {
            name: evolvesTo02[0].species.name,
            image: getImageByPokemonName(evolvesTo02[0].species.name),
          };

          tempArray.push({
            pokemons: [pokemonN2, pokemonN3],
            minLevel:
              (evolvesTo02[0].evolution_details[0].min_level &&
                `Lvl ${evolvesTo02[0].evolution_details[0].min_level}`) ??
              (evolvesTo02[0].evolution_details[0].min_happiness &&
                `Lvl ${evolvesTo02[0].evolution_details[0].min_happiness}`) ??
              `Use ${evolvesTo02[0].evolution_details[0].item.name}`,
          });
        }
      }

      setLoaded(true);
      setEvolutions([...tempArray]);
    }

    setTimeout(() => {
      loadEvolution();
    }, 1000);
  }, [id]);

  return (
    <Container>
      {!loaded ? (
        <Loader alignCenter={false} />
      ) : (
        <>
          {evolutions.map(item => (
            <div key={item.minLevel}>
              {item.pokemons.map((pokemon, index) => (
                <>
                  <div className="pokemon" key={index}>
                    {pokemon.image && (
                      <ImageContainer>
                        <Pokeball />
                        <Image
                          layout="fixed"
                          width={80}
                          height={80}
                          src={pokemon.image}
                          alt={pokemon.name}
                          placeholder="empty"
                        />
                      </ImageContainer>
                    )}
                    <p>{pokemon.name}</p>
                  </div>

                  {index === 0 && (
                    <div className="level">
                      <HiOutlineArrowNarrowRight />
                      <p>{item.minLevel}</p>
                    </div>
                  )}
                </>
              ))}
            </div>
          ))}
        </>
      )}
    </Container>
  );
};

export { Evolution };
