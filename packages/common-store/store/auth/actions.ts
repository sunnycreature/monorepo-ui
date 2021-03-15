import { IBaseUrl, IDevice } from '@lib/types';
import { ActionType, createAction, createAsyncAction } from 'typesafe-actions';

import { AuthTypes, IAuthState } from './types';

export const init = createAction(AuthTypes.INIT)<IAuthState>();
export const setSettings = createAction(AuthTypes.SET_SETTINGS)<IBaseUrl>();
export const setDevice = createAction(AuthTypes.SET_DEVICE)<IDevice>();
export const setSettingsForm = createAction(AuthTypes.SET_SETTINGS_FORM)<boolean>();

export const checkDeviceAsync = createAsyncAction(
  AuthTypes.CONNECTION,
  AuthTypes.CONNECTION_SUCCCES,
  AuthTypes.CONNECTION_FAILURE,
)<null, IDevice, string>();

const actions = { init, setSettings, setDevice, setSettingsForm, checkDeviceAsync };

export type AuthActionType = ActionType<typeof actions>;