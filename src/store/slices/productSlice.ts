import { v4 as uuidv4 } from "uuid";
import { ProductsState } from "@/types/products";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ProductsState = {
  products: [],
};

export const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, action: PayloadAction<{ name: string }>) => {
      state.products.push({
        id: uuidv4(),
        name: action.payload.name,
        photo: "https://placehold.co/250x250/teal/white",
      });
    },
  },
});

export default ProductsSlice.reducer;
export const { addProducts } = ProductsSlice.actions;
