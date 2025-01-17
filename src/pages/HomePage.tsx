import { ListItems } from "@/components/ListItems";
import { fetchProducts } from "@/redux/slices/productsSlice";
import { productsSliceSelector } from "@/redux/slices/productsSlice.selectors";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useEffect } from "react";

export const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector(productsSliceSelector);

  useEffect(() => {
    const abortController = new AbortController();
    dispatch(fetchProducts(abortController.signal));
    return () => abortController.abort();
  }, [dispatch]);

  return (
    <div className="p-8">
      <ListItems products={products} />
    </div>
  );
};
