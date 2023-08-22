import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

export interface modalState {
  isOpen: boolean;
}

const initialState: modalState = {
  isOpen: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    modalToggle: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { modalToggle } = modalSlice.actions;

export default modalSlice.reducer;
