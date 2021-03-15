import { Reducer } from 'redux';

import { config } from '../../mock'
import { AuthTypes, IAuthState } from './types';
import { AuthActionType } from './actions';

const initialState: IAuthState = {
  device: undefined,
  settings: config,
  error: false,
  loading: false,
  status: ''
};

const reducer: Reducer<IAuthState, AuthActionType> = (state = initialState, action: AuthActionType) => {
  switch (action.type) {
    case AuthTypes.INIT:
      return initialState;

    case AuthTypes.SET_DEVICE:
      return { ...state, device: action.payload };

    case AuthTypes.SET_SETTINGS:
      return { ...state, settings: action.payload };

    default:
      return state;
  }
};

export default reducer;
