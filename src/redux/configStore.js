import { configureStore } from '@reduxjs/toolkit';
import createBoardSlice from './createBoardSlice/createBoardSlice';
export const store = configureStore({
  reducer: {
    createBoardSlice,
  },
});
