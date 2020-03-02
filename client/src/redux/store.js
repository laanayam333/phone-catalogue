import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import rootReducer from './phone/phoneReducer';

const FETCH_PHONES_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_PHONES_SUCCESS = 'FETCH_PHONES_SUCCESS';
const FETCH_PHONES_FAILURE = 'FETCH_PHONES_FAILURE';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

export default store;
