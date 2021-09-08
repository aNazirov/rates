import { configureStore } from '@reduxjs/toolkit';
import { rooReducer } from './rootReducer';

export const store = configureStore({
  reducer: rooReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export type State = ReturnType<typeof store.getStore>