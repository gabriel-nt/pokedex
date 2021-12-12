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
      light: string;
      black: string;
      white: string;
      gray: string;
      purple: string;
      grayLight: string;
    };
    colors: {
      white: string;
      black: string;
      dark: string;
      gray: string;
      light02: string;
      light04: string;
    };
  }
}
