import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootSaga from './modules/rootSaga';
import rootReducer from './modules/rootReducer';
import { PokemonsState } from './modules/pokemons/types';
import { EvolutionsState } from './modules/evolutions/types';

export type ApplicationState = {
  pokemons: PokemonsState;
  evolutions: EvolutionsState;
};

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);

export { store };
