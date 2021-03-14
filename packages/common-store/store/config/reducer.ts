import { Reducer } from 'redux';

import { ConfigState, СonfigTypes } from './types';
import { ConfigActionType } from './actions';

const initialState: ConfigState = {
  server: 'localhost',
  port: 3000,
};

const reducer: Reducer<ConfigState, ConfigActionType> = (state = initialState, action: ConfigActionType) => {
  switch (action.type) {
    case СonfigTypes.SET_SERVER_NAME:
      return { ...state, server: action.payload };

    case СonfigTypes.SET_PORT:
      return { ...state, port: action.payload };

    default:
      return state;
  }
};

export default reducer;
