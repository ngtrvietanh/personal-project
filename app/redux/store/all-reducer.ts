import {combineReducers} from '@reduxjs/toolkit';
import filterReducer from '../slice/filterSlice';

export const allReducer = combineReducers({
  filter: filterReducer,
});
