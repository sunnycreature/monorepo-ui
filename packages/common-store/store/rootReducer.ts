import { CombinedState, combineReducers } from 'redux';
import { Reducer } from 'react';

import userReducer from './users';

// : Reducer<CombinedState<any>, any>
const reducers = combineReducers({
  users: userReducer,
});

export default reducers;
