import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = /*JSON.parse(localStorage.getItem("products")) ||*/ [];

export const getProductsByCategory = createAsyncThunk("products/getProductsByCategory", async (category) => {
  const { data } = await axios.get(`/products/category/${category}`);
  return data;
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductsByCategory.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

// export const {  } = productsSlice.actions;
export default productsSlice.reducer;
