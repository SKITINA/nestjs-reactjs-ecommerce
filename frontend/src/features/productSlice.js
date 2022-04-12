import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { dummyProducts } from "../statics/dummy-products";

const initialState = /*JSON.parse(localStorage.getItem("products")) ||*/ [];

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    listProducts:async (state, action)=>{
      return action.payload
    }
  },
});

export const getProductsByCategory =category=>async(dispatch)=>{
  const {data} = await axios.get(`/product/category/${category}`);
  dispatch(listProducts(data));
}

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

export const { listProducts } = productsSlice.actions;
export default productsSlice.reducer;
