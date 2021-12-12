export enum ActionTypes {
  LOAD_REQUEST = '@evolutions/LOAD_REQUEST',
  LOAD_SUCCCES = '@evolutions/LOAD_SUCCCES',
  LOAD_FAILURE = '@evolutions/LOAD_FAILURE',
  RESET_EVOLUTIONS = '@evolutions/RESET_EVOLUTIONS',
}

export type Evolutions = {
  minLevel: string | number;
  pokemons: Array<{
    name: string;
    image: string | undefined;
  }>;
};

export interface EvolutionsState {
  readonly error: boolean;
  readonly loaded: boolean;
  readonly evolutions: Evolutions[];
}
