import { ActionType } from 'typesafe-actions';
import * as actions from './doc.action.creators';

export interface IDocument {
  number: number;
}

type IDocState = {
  docData: IDocument[] | undefined;
  loading: boolean;
  isLoggedIn: boolean;
  errorMessage: string;
};

type IDocPayload = Partial<{
  errorMessage: string;
  docData: IDocument[];
}>;

type IDocActionType = ActionType<typeof actions>;

export { IDocState, IDocActionType, IDocPayload };