import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { dummyProducts } from "../statics/dummy-products";

const initialState = /*JSON.parse(localStorage.getItem("products")) ||*/ {items:[]};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action)=>{
        const product = dummyProducts.find(product=>product.id === action.payload.id);
        //return nv state
        return {items:[...state.items, {...product, qty: action.payload.qty}]}
    }
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

export const {addToCart } = cartSlice.actions;
export default cartSlice.reducer;
