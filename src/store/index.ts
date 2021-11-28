import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import createSagaMiddleware from 'redux-saga';
import { PokemonsState } from './modules/pokemons/types';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

export type ApplicationState = {
  pokemons: PokemonsState;
};

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);

export { store };
