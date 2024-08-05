import React, { useEffect } from "react";

import { GrCart, GrTrash } from "react-icons/gr";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "@/components/ui/separator";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { Card, CardHeader, CardTitle } from "./ui/card";
import {
  deleteProductAtCartOptimistic,
  fetchProductsAtCart,
} from "@/redux/slices/productAtCartSlice";

export const SideSheet: React.FC = () => {
  const dispatch = useAppDispatch();
  const productsAtCart = useAppSelector(
    (state) => state.productsAtCart.productsAtCart
  );

  useEffect(() => {
    const abortController = new AbortController();
    dispatch(fetchProductsAtCart(abortController.signal));
    return () => abortController.abort();
  }, [dispatch, productsAtCart]);

  return (
    <Sheet>
      <SheetTrigger>
        <GrCart className="w-8 h-8 text-white"></GrCart>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Carrinho</SheetTitle>
          <SheetDescription>
            <Separator />
            {productsAtCart.map((productAtCart) => {
              return (
                <div className="m-2" key={productAtCart.id}>
                  <Card>
                    <CardHeader>
                      <div className="flex gap-4">
                        <img
                          src={productAtCart.photo}
                          alt="colorful square"
                          height={100}
                          width={100}
                        />
                        <div>
                          <CardTitle>{productAtCart.name}</CardTitle>
                          <p className="font-semibold pt-2">
                            R$: {productAtCart.value}
                          </p>
                          <p>Quantidade: {productAtCart.quantity}</p>
                        </div>
                        <div>
                          <button
                            onClick={() =>
                              dispatch(
                                deleteProductAtCartOptimistic(productAtCart.id)
                              )
                            }
                          >
                            <GrTrash className="hover:scale-125 cursor-pointer ease-in-out hover:text-red-500" />
                          </button>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </div>
              );
            })}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
