import { combineReducers, createStore, Reducer, Store } from 'redux';
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { UserState } from './user/types';
import rootReducer from './rootReducer';
export { RootState } from './rootReducer';

export type IState = UserState;

export interface StoreWithAsyncReducers extends Store {
  asyncReducers?: { [key: string]: Reducer }
  addReducer?: (key: string, asyncReducer: Reducer) => void
}

function createReducer(asyncReducers: { [key: string]: Reducer } = {}) {
  return combineReducers<any, any>({
    ...rootReducer,
    ...asyncReducers
  })
}

function configureStore() {
  const rootStore: Store = createStore(combineReducers(rootReducer), composeWithDevTools(applyMiddleware(thunk)));

  const store: StoreWithAsyncReducers = {
    ...rootStore,
    asyncReducers: {},
    addReducer: (key, asyncReducer) => {
      if (!store || !key || !store.asyncReducers) {
        return;
      }
      store.asyncReducers[key] = asyncReducer;
      store.replaceReducer(createReducer(store.asyncReducers))
    }
  }

  return store
}

const store = configureStore()

export default store;
