import { createStore } from 'redux';
import Thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { UserState } from './users/types';
import rootReducer from './rootReducer';

export interface ApplicationState {
  users: UserState;
}

export const configureStore = () => {
  const middlewares = composeWithDevTools(
    applyMiddleware(Thunk),
  );

  const store = createStore(rootReducer, middlewares);

  return store;
}

export * from './users/actions.async';

export type RootState = ReturnType<typeof rootReducer>;