import React from "react";
import { GrCart } from "react-icons/gr";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">Minha Loja</h1>
        <div className="relative">
          <Sheet>
            <SheetTrigger>
              <GrCart className="w-8 h-8 text-white"></GrCart>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Carrinho</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
