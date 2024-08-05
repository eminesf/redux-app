import { RootState } from "@/redux/store";

export const productsAtCartSliceSelector = (state: RootState) =>
  state.productsAtCart;
