import {configureStore} from '@reduxjs/toolkit';
import {allReducer} from './all-reducer';

const store = configureStore({
  reducer: allReducer,
});
export default store;
// Kiểu tự động tạo ra cho RootState
export type RootState = ReturnType<typeof allReducer>;
export type AppDispatch = typeof store.dispatch;
