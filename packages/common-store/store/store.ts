import { createStore } from 'redux';
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { UserState } from './users/types';
import rootReducer from './rootReducer';

export { loginUserAsync, UserActionType } from './users/actions';
export type RootState = ReturnType<typeof rootReducer>;

export interface ApplicationState {
  users: UserState;
}

export { LoginAction } from './users/actions.async';
export type IState = UserState;

export const configureStore = () => {
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

  return store;
}