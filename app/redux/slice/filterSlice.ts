import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {FilterState} from '../type/filterType';
const initState: FilterState = {
  id: '',
  name: '',
};
const filterSlice = createSlice({
  name: 'filter',
  initialState: initState,
  reducers: {
    searchFilterChange: (state, action: PayloadAction<FilterState>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
    },
  },
});
export const {searchFilterChange} = filterSlice.actions;
export default filterSlice.reducer;
