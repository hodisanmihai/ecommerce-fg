"use client";

import React from "react";
import AddToCart from "@/app/components/AddToCart";

interface BottomContentProps {
  product: {
    _id: string;
    name: string;
    price: number;
    image1?: {
      asset?: {
        url: string;
      };
    };
  };
}

const BottomContent: React.FC<BottomContentProps> = ({ product }) => {
  return (
    <div className="w-full  flex items-center justify-center mt-15">
      <div className="w-[90%] h-full  flex items-center justify-center">
        <div className="w-1/2 h-full font-extrabold text-[#111] text-[24px] ">
          {product.price} <span>RON</span>
        </div>
        <div className="w-1/2 h-full ">
          <AddToCart
            product={{
              id: product._id,
              name: product.name,
              price: product.price,
              image: product.image1?.asset?.url || "",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default BottomContent;
