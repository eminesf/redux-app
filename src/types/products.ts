export interface Products {
  id: string;
  name: string;
  description: string;
  photo: string;
}

export interface ProductsState {
  products: Array<Products>;
  loading: boolean;
  error: string | null;
}
