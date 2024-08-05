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

export interface ProductsAtCart {
  id: string;
  name: string;
  photo: string;
  value: number;
  sumValue?: number;
  quantity?: number;
}

export interface ProductsAtCartState {
  productsAtCart: Array<ProductsAtCart>;
  loading: boolean;
  error: string | null;
}
