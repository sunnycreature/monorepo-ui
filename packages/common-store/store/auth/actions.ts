import { IBaseUrl, IDevice, IUser } from '@lib/types';
import { ActionType, createAction, createAsyncAction } from 'typesafe-actions';

import { IAuthState } from './types';

const init = createAction('AUTH/INIT')<IAuthState>();
export const setSettings = createAction('AUTH/SET_SETTINGS')<IBaseUrl>();

export const setSettingsForm = createAction('AUTH/SET_SETTINGS_FORM')<boolean>();
export const disconnect = createAction('AUTH/DISCONNECT')();

const checkDeviceAsync = createAsyncAction(
  'AUTH/CONNECTION',
  'AUTH/CONNECTION_SUCCCES',
  'AUTH/CONNECTION_FAILURE',
)<undefined, IDevice, string>();

const loginUserAsync = createAsyncAction(
  'AUTH/LOGIN',
  'AUTH/LOGIN_SUCCCES',
  'AUTH/LOGIN_FAILURE',
)<string, IUser, string>();

export const authActions = { init, setSettings, disconnect, setSettingsForm, checkDeviceAsync, loginUserAsync };

export type AuthActionType = ActionType<typeof authActions>;