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
    
  },
});

export const {  } = dataSlice.actions;

export default dataSlice.reducer;
