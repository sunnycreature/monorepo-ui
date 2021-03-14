import { ActionType, createAction } from 'typesafe-actions';

import { СonfigTypes } from './types';

export const setServerName = createAction(СonfigTypes.SET_SERVER_NAME)<string>();
export const setPort = createAction(СonfigTypes.SET_PORT)<number>();

const actions = { setServerName, setPort };

export type ConfigActionType = ActionType<typeof actions>;