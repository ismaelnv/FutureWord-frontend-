import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    query:'',
  },
  reducers: {

    setSearchQuery: (state, action: PayloadAction<string>) => {

      state.query = action.payload;  // Actualiza el estado de la búsqueda
    },
    clearSearchQuery: (state) =>{

      state.query = '';
    },
  },
});

export const { setSearchQuery, clearSearchQuery } = searchSlice.actions;
export default searchSlice.reducer;