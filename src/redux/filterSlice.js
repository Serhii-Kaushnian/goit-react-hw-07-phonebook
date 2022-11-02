import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    filterContacts: (state, action) => {
      return {
        ...state,
        filter: action.payload,
      };
    },
    clearFilter: state => {
      return {
        ...state,
        filter: '',
      };
    },
  },
});

export const {  filterContacts, clearFilter } =
  contactsSlice.actions;
export const contactReducer = contactsSlice.reducer;
