import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../types";

export interface dataState {
  data: Product[];
}

const initialState: dataState = {
  data: [],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    createData: (state, action: PayloadAction<Product>) => {
      state.data.push(action.payload);
    },
    deleteData: (state, action: PayloadAction<number>) => {
      const filteredData = state.data.filter(
        (data) => data.id !== action.payload
      );
      state.data = filteredData;
    },
    updateData: (state, action: PayloadAction<Product>) => {
      const { id, name, image, price } = action.payload;
      const index = state.data.findIndex((data) => data.id === id);
      state.data[index].name = name;
      state.data[index].price = price;
      state.data[index].image = image;
    },
  },
});

export const { createData, deleteData, updateData } = dataSlice.actions;

export default dataSlice.reducer;
