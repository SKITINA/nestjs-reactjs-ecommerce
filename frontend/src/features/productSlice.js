import { createSlice } from "@reduxjs/toolkit";
import { dummyProducts } from "../statics/dummy-products";

const initialState = /*JSON.parse(localStorage.getItem("products")) ||*/ dummyProducts;

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    
  },
});

// export const InCartProductsSelector = (state) => {
//   return state.products.filter((product) => product.shopped);
// };
// export const ProductsLength = (state) => {
//   return InCartProductsSelector(state).length;
// };
// export const totalPriceSelector = (state) => {
//   return state.products.reduce((acc, curr) => {
//     if (curr.shopped) return acc + parseInt(curr.price) * curr.quantity;
//     return acc;
//   }, 0);
// };

export const { } = productsSlice.actions;
export default productsSlice.reducer;
