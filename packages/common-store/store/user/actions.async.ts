import { ThunkDispatch, ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';

import { user } from '../../mock';
import { loginUserAsync } from './actions';
import { UserCredentials, UserPayload, UserState } from './types';
/*
    you can replace this implementation with whatever api call using axios or fetch etc 
*/

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const LoginAction = (credentials: UserCredentials): ThunkAction<void, UserState, unknown, AnyAction> => {
  return async (dispatch: ThunkDispatch<UserState, {}, AnyAction>) => {
    let response: UserPayload;

    dispatch(loginUserAsync.request(null, null));

    await sleep(2000);

    if (credentials.userName === 'Stas') {
      if (credentials.password === '123') {
        response = {
          userData: user
        };

        if (response.userData) {
          return dispatch(loginUserAsync.success(response.userData));
        }

        return dispatch(loginUserAsync.failure(response?.errorMessage || 'чт-то не так'));
      }
      return dispatch(loginUserAsync.failure('wrong password'));
    }
    return dispatch(loginUserAsync.failure('user does not exist'));
  };
};

export default { LoginAction }