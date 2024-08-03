export interface Products {
  id: string;
  name: string;
  photo: string;
}

export interface ProductsState {
  products: Array<Products>;
}
