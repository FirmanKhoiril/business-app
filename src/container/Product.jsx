import React from "react";
import { ProductCard } from "../components";

const Product = () => {
  return (
    <div id="product" className="h-full flex flex-col ">
      <h2 className="text-secondary font-semibold text-center text-xl text-orange-500 my-2 w-40 m-auto border-b border-black/40 hover:border-orange-500 py-2">Product</h2>
      <div className="flex lg:px-36 flex-wrap justify-evenly lg:space-x-4 space-y-8 sm:space-y-4 lg:space-y-0 py-12 flex-col md:flex-row   items-center">
        <ProductCard />
      </div>
    </div>
  );
};

export default Product;
