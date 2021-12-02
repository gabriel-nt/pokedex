import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    backgrounds: {
      bug: string;
      dark: string;
      dragon: string;
      electric: string;
      fairy: string;
      fighting: string;
      fire: string;
      flying: string;
      ghost: string;
      grass: string;
      ground: string;
      ice: string;
      normal: string;
      poison: string;
      psychic: string;
      rock: string;
      steel: string;
      water: string;
    };
    colors: {
      white: string;
    };
  }
}
