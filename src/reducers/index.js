import { combineReducers } from 'redux'

import appReducer from './app';
import authReducer from './auth';
import contentReducer from './content';
import userReducer from './user';

const appReducers = combineReducers({
  app: appReducer,
  auth: authReducer,
  content: contentReducer,
  user: userReducer,
})

export default appReducers;
