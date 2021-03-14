import { ActionType } from 'typesafe-actions';
import * as actions from './doc.action.creators';

type IDocState = {
  docData: {};
  loading: boolean;
  isLoggedIn: boolean;
  errorMessage: string;
};

type IDocPayload = Partial<{
  errorMessage: string;
  docData: {};
}>;

type IDocActionType = ActionType<typeof actions>;

export { IDocState, IDocActionType, IDocPayload };