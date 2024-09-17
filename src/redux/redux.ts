import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';
import errorReducer from './errorSlice'; 

const store = configureStore({

  reducer: {
    
    search: searchReducer, // Reducer para manejar la búsqueda
    error: errorReducer,
  }
});

export default store;

export interface RootStore{

  search: {

    query: string
  }

}


