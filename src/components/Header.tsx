import React from "react";
import { SideSheet } from "./SideSheet";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">Minha Loja</h1>
        <div className="relative">
          <SideSheet />
        </div>
      </div>
    </header>
  );
};

export default Header;
