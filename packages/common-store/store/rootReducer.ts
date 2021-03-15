import { StateType } from 'typesafe-actions';
import userReducer from './user/reducer';
import authReducer from './auth/reducer';

const rootReducer = {
  users: userReducer,
  auth: authReducer,
};

export type RootState = StateType<typeof rootReducer>;

export default rootReducer;
