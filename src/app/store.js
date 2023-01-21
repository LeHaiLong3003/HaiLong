import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import { history } from '../utils/history';
import rootSaga from './rootSaga';

const rootReducer = combineReducers({
  router: connectRouter(history),
});

const sagaMiddleware = createSagaMiddleware();

const configStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(sagaMiddleware, routerMiddleware(history)),
  });
  sagaMiddleware.run(rootSaga);
  return store;
};
const store = configStore();

export default store;
