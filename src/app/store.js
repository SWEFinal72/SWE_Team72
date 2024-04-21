import {configureStore} from '@reduxjs/toolkit';
import  {apiSlice}  from './api/apiSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import authReducer from '../Features/auth/authSlice';



  export  const store = configureStore({
    reducer: {
      // Add the generated reducer as a specific top-level slice
      [apiSlice.reducerPath]: apiSlice.reducer,
      auth: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
      devTools : true
  });

  // the fix is making just const store and export default store


setupListeners(store.dispatch);