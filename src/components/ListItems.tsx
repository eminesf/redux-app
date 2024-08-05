import { Products } from "@/types/products";
import React, { useMemo } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAppDispatch } from "@/redux/store";
import { addProductAtCartOptimistic } from "@/redux/slices/productsAtCartSlice";

interface ListItemsProps {
  products: Products[];
}

export const ListItems: React.FC<ListItemsProps> = ({ products }) => {
  const dispatch = useAppDispatch();

  const productItems = useMemo(() => {
    return products.map((product) => (
      <div key={product.id}>
        <Card className="w-full md:w-96 flex flex-col items-center text-center">
          <CardHeader>
            <CardTitle>{product.name}</CardTitle>
            <CardDescription>{product.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <img src={product.photo} alt="colorful square" />
            <p className="font-semibold pt-2">R$: {product.value}</p>
          </CardContent>
          <CardFooter>
            <Button
              onClick={async () =>
                await dispatch(addProductAtCartOptimistic(product))
              }
            >
              Add to cart
            </Button>
          </CardFooter>
        </Card>
      </div>
    ));
  }, [products]);

  return <div className="flex flex-wrap gap-2">{productItems}</div>;
};
