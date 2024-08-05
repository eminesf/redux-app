import { ProductsAtCart, ProductsAtCartState } from "@/types/products";
import { baseUrl } from "@/utils/utils";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: ProductsAtCartState = {
  productsAtCart: [],
  loading: true,
  error: null,
};

export const fetchProductsAtCart = createAsyncThunk(
  "products/fetchProductsAtCart",
  async (signal: AbortSignal) => {
    try {
      const response = await axios.get<ProductsAtCart[]>(
        `${baseUrl}/productsAtCart`,
        {
          method: "GET",
          signal,
        }
      );
      return response.data;
    } catch (error) {
      if (axios.isCancel(error)) {
        return [];
      }
      throw error;
    }
  }
);

export const addProductAtCartOptimistic = createAsyncThunk(
  "productsAtCart/addProductAtCartOptimistic",
  async (data: ProductsAtCart) => {
    try {
      return await axios.post(`${baseUrl}/productsAtCart`, data);
    } catch (error) {
      return console.log(error);
    }
  }
);

export const deleteProductAtCartOptimistic = createAsyncThunk(
  "product/deleteProductAtCartOptimistic",
  async (id: string) => {
    try {
      return await axios.delete(`${baseUrl}/productsAtCart/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      });
    } catch (error) {
      return console.log(error);
    }
  }
);

export const ProductsAtCartSlice = createSlice({
  name: "productsAtCart",
  initialState,
  reducers: {
    addProductAtCart: (state, action) => {
      state.productsAtCart.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addProductAtCartOptimistic.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to add book";
      })
      .addCase(fetchProductsAtCart.fulfilled, (state, action) => {
        state.loading = true;
        state.productsAtCart = action.payload;
      })
      .addCase(fetchProductsAtCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductsAtCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to fetch products";
      })
      .addCase(deleteProductAtCartOptimistic.rejected, (state, action) => {
        state.error = action.error.message ?? "Failed to delete book";
      });
  },
});

export default ProductsAtCartSlice.reducer;
export const { addProductAtCart } = ProductsAtCartSlice.actions;
