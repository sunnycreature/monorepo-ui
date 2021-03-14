import actionTypes from './action.enum';
import { IDocActionType, IDocState } from './types';

const INITIAL_STATE: IDocState = {
  docData: {},
  loading: false,
  isLoggedIn: false,
  errorMessage: '',
};
/**
 *
 * @param state
 * @param action
 */
const docReducer = (
  state = INITIAL_STATE,
  action: IDocActionType,
): IDocState => {
  switch (action.type) {
    case actionTypes.DOC_PENDING:
      return { ...state, loading: true };
    case actionTypes.DOC__SUCCESS:
      return {
        ...state,
        loading: false,
        docData: action.payload,
        isLoggedIn: true,
      };
    case actionTypes.DOC__ERROR:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload.errorMessage || ' ',
      };
    default:
      return state;
  }
};
export default docReducer;
