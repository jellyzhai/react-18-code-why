import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "count",
  initialState: {
    count: 10,
  },
  reducers: {
    addNumAction(state, action) {
      state.count += action.payload;
    },
    minusNumAction(state, action) {
      state.count -= action.payload;
    },
  },
});

export const { addNumAction, minusNumAction } = slice.actions;

export default slice.reducer;
