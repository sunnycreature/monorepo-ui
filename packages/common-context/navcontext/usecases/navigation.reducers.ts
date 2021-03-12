import { createTypedHandler, handleTypedActions } from 'redux-actions-ts';
import { navigateTo } from './navigation.actions'

const navigateToReducer = (state = {}, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const navigation = handleTypedActions(
  [createTypedHandler(navigateTo, navigateToReducer)],
  {},
)
