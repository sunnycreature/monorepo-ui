import { ThunkDispatch, ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';

import { loginUserAsync } from './actions';
import { UserCredentials, UserPayload } from './types';
/*
    you can replace this implementation with whatever api call using axios or fetch etc 
*/

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 *
 * @param username
 * @param password
 */
export const LoginAction = (credentials: UserCredentials): ThunkAction<void, {}, {}, AnyAction> => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    let response: UserPayload;

    dispatch(loginUserAsync.request(credentials));

    sleep(200);

    if (credentials.userName === 'Stas') {
      if (credentials.password === '123') {
        response = {
          userData: {
            id: "1",
            name: 'Stas',
          }
        };

        if (response.userData) {
          return dispatch(loginUserAsync.success(response.userData));
        }

        return dispatch(loginUserAsync.failure(response?.errorMessage || ''));
      }
      return dispatch(loginUserAsync.failure('wrong password'));
    }
    return dispatch(loginUserAsync.failure('user does not exist'));
  };
};