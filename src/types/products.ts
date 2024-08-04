export interface Products {
  id: string;
  name: string;
  description: string;
  photo: string;
  value: number;
}

export interface ProductsState {
  products: Array<Products>;
  loading: boolean;
  error: string | null;
}
