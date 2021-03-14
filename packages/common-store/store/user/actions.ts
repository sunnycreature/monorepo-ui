import { ActionType, createAsyncAction } from 'typesafe-actions';

import { UsersTypes, User } from './types';

export const loginUserAsync = createAsyncAction(
  UsersTypes.LOGIN,
  UsersTypes.LOGIN_SUCCCES,
  UsersTypes.LOGIN_FAILURE,
)<null, User, string>();

const actions = loginUserAsync;

export type UserActionType = ActionType<typeof actions>;