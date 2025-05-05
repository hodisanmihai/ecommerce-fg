"use client";

import React from "react";
import ProductCards from "./ProductCards";

const Products = () => {
  return (
    <div
      className="z-0 w-screen h-full  flex flex-col items-center justify-center text-[#333] py-10"
      id="produse"
    >
      {/* Container principal */}
      <div className="w-full md:w-[80%] h-auto flex flex-col justify-between items-center p-6">
        {/* Titluri */}
        <div className="w-full h-auto flex flex-col items-center justify-around gap-6 mb-8">
          <h1 className="font-extrabold text-3xl md:text-[64px] leading-tight text-center">
            Solutii Eco pentru Casa Ta
          </h1>
          <h3 className="font-normal text-lg md:text-[20px] text-center">
            Fă un pas spre un stil de viață mai verde cu produsele noastre.
          </h3>
        </div>
        {/* Eemente */}
        <div className="w-full mt-12 flex items-center justify-center">
          <div className="w-[90%] ] ">
            <ProductCards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
