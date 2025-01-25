import { configureStore } from '@reduxjs/toolkit';
import { menuApi } from './services/menuApi';

const store = configureStore({
  reducer: {
    [menuApi.reducerPath]: menuApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(menuApi.middleware),
});

export default store;
