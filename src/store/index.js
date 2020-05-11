import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import UserConstants from '../constants/user';

import appReducers from '../reducers';

const rootReducer = (state, action) => {
  if (action.type === UserConstants.USER_LOGOUT) {
    state = undefined
  }

  return appReducers(state, action)
}

const persistConfig = {
  key: 'spotifyStorage',
  storage,
  blacklist: ['auth', 'content'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const persistor = persistStore(store)

export { store, persistor };
