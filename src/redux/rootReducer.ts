import { combineReducers } from "@reduxjs/toolkit";
import { ProductsSlice } from "@/redux/slices/productSlice";
import { ProductsAtCartSlice } from "@/redux/slices/productAtCartSlice";

const rootReducer = combineReducers({
  products: ProductsSlice.reducer,
  productsAtCart: ProductsAtCartSlice.reducer,
});

export default rootReducer;
