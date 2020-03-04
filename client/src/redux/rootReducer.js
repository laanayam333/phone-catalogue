import { combineReducers } from 'redux';

import phoneReducer from './phone/phoneReducer';

import UIReducer from './UI/UIReducer';

const rootReducer = combineReducers({
  phoneReducer,
  UIReducer
});

export default rootReducer;
