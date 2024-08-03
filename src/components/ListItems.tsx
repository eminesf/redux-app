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

interface ListItemsProps {
  products: Products[];
}

export const ListItems: React.FC<ListItemsProps> = ({ products }) => {
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
          </CardContent>
          <CardFooter>
            <Button>Add to cart</Button>
          </CardFooter>
        </Card>
      </div>
    ));
  }, [products]);

  return <div className="flex flex-wrap gap-2">{productItems}</div>;
};
