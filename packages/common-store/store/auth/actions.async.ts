import { ThunkDispatch, ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';

import { device } from '../../mock';
import { checkDeviceAsync } from './actions';
import { DevicePayload, IAuthState } from './types';
// import { IDevice } from '@lib/types';
/*
    you can replace this implementation with whatever api call using axios or fetch etc 
*/

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const checkDevice = (): ThunkAction<void, IAuthState, unknown, AnyAction> => {
  return async (dispatch: ThunkDispatch<IAuthState, {}, AnyAction>) => {
    let response: DevicePayload = { deviceData: device };
    dispatch(checkDeviceAsync.request(null));

    await sleep(1000);

    if (response.deviceData) {
      return dispatch(checkDeviceAsync.success(response.deviceData));
    }

    return dispatch(checkDeviceAsync.failure('device does not exist'));
  }
}

// export const loginAction = (credentials: UserCredentials): ThunkAction<void, IAuthState, unknown, AnyAction> => {
//   return async (dispatch: ThunkDispatch<IAuthState, {}, AnyAction>) => {
// let response: UserPayload;

// dispatch(loginUserAsync.request);

// await sleep(2000);

/*     if (credentials.userName === 'Stas') {
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

        return dispatch(loginUserAsync.failure(response?.errorMessage || 'чт-то не так'));
      }
      return dispatch(loginUserAsync.failure('wrong password'));
    }
    return dispatch(loginUserAsync.failure('user does not exist')); */
// };
//};

export default { checkDevice }