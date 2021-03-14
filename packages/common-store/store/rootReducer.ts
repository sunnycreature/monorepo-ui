import { StateType } from 'typesafe-actions';
import userReducer from './user/reducer';
import configReducer from './config/reducer';

const rootReducer = {
  users: userReducer,
  config: configReducer,
};

export type RootState = StateType<typeof rootReducer>;

export default rootReducer;
