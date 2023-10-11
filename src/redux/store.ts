import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './filterSlice';
import todosReducer from './todosSlice';
export const store = configureStore({
  reducer: {
    filter: filterReducer,
    todo: todosReducer
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
