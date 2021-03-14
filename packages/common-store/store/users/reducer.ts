import { Reducer } from 'redux';

import { UsersTypes, UserState } from './types';
import { UserActionType } from './actions';

const initialState: UserState = {  
  data: null,
  loading: false,
  error: false,
  status: 'not loaded',
};

const reducer: Reducer<UserState, UserActionType> = (state = initialState, action: UserActionType) => {
  switch (action.type) {
    case UsersTypes.LOGIN:
      return { ...state, error: false, status: 'user log in', loading: true };

    case UsersTypes.LOGIN_SUCCCES:
      return { ...state, data: action.payload, error: false, status: '', loading: false };      

      case UsersTypes.LOGIN_FAILURE:
        return { ...state, error: true, status: action.payload, loading: false };            

    default:
      return state;
  }
};

export default reducer;
