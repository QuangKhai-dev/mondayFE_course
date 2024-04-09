// rxslide
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  board: {
    name: '',
    arrColumn: [],
    viewBoard: [],
  },
};

const createBoardSlice = createSlice({
  name: 'createSlice',
  initialState,
  reducers: {
    handleChangeNameBoard: (state, action) => {
      state.board.name = action.payload;
    },
  },
});

export const { handleChangeNameBoard } = createBoardSlice.actions;

export default createBoardSlice.reducer;
