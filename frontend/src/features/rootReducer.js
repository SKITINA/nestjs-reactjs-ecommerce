import { combineReducers } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productReducer from "./productSlice";

export default combineReducers({
  products: productReducer,
  cart: cartSlice
});
