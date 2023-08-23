import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface dataState {
  data: object[];
}

const initialState: dataState = {
  data: [],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    createData: (state, action: PayloadAction<object>) => {
      state.data.push(action.payload);
    },
  },
});

export const { createData } = dataSlice.actions;

export default dataSlice.reducer;
