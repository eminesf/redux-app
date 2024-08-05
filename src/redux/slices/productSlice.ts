import { v4 as uuidv4 } from "uuid";
import { Products, ProductsState } from "@/types/products";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "@/utils/utils";

const initialState: ProductsState = {
  products: [],
  loading: true,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (signal: AbortSignal) => {
    try {
      const response = await axios.get<Products[]>(`${baseUrl}/products`, {
        method: "GET",
        signal,
      });
      return response.data;
    } catch (error) {
      if (axios.isCancel(error)) {
        return [];
      }
      throw error;
    }
  }
);

export const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (
      state,
      action: PayloadAction<{
        name: string;
        description: string;
        value: number;
      }>
    ) => {
      state.products.push({
        id: uuidv4(),
        name: action.payload.name,
        description: action.payload.description,
        photo: "https://placehold.co/250x250/teal/white",
        value: action.payload.value,
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = true;
        state.products = action.payload;
      })
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to fetch products";
      });
  },
});

export default ProductsSlice.reducer;
export const { addProducts } = ProductsSlice.actions;
