/* eslint-disable no-underscore-dangle */
import { createStore,  applyMiddleware, compose } from 'redux';
import reducer from 'src/reducers';
import authMiddleware from 'src/middlewares/auth';
import registerMiddleware from 'src/middlewares/register';
import userUpdateMiddleware from 'src/middlewares/userUpdate';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(authMiddleware, registerMiddleware, userUpdateMiddleware),
);

const persistConfig = {
  key: 'reducer',
  storage: storage,
  //whitelist: ['reducer'] // which reducer want to store
};
const persistedReducer = persistReducer(persistConfig, reducer);


  export const store = createStore(persistedReducer, enhancers);
  export const persistor = persistStore(store);

