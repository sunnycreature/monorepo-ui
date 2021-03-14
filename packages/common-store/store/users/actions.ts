import { ActionType, action, createAsyncAction } from 'typesafe-actions';

import { UsersTypes, User, UserCredentials } from './types';

export const loginUserAsync = createAsyncAction(
  UsersTypes.LOGIN,
  UsersTypes.LOGIN_SUCCCES,
  UsersTypes.LOGIN_FAILURE,
)<UserCredentials, User, string>();

// const fetchUser = (payload: string) => action(UsersTypes.LOGIN, payload);

// const fetchUserSuccess = (payload: User) => action(UsersTypes.FETCH_SUCCCES, payload);

// const fetchUserFailure = (payload: string) => action(UsersTypes.FETCH_FAILURE, payload);

const actions = { loginUserAsync };

export type UserActionType = ActionType<typeof actions>;