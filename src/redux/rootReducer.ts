import { combineReducers } from "@reduxjs/toolkit";
import { ProductsSlice } from "@/redux/slices/productsSlice";
import { ProductsAtCartSlice } from "@/redux/slices/productsAtCartSlice";

const rootReducer = combineReducers({
  products: ProductsSlice.reducer,
  productsAtCart: ProductsAtCartSlice.reducer,
});

export default rootReducer;
