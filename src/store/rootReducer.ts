import { combineReducers } from '@reduxjs/toolkit';
import darkModeReducer from './reducers/darkMode/reducer';
import filesReducer from './reducers/files/reducer';

const rootReducer = combineReducers({
  darkMode: darkModeReducer,
  files: filesReducer,
});
export default rootReducer;
