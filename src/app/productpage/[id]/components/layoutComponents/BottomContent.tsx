"use client";

import React from "react";
import AddToCart from "@/app/components/AddToCart";

interface BottomContentProps {
  price: number;
}

const BottomContent: React.FC<BottomContentProps> = ({ price }) => {
  return (
    <div className="w-full  flex items-center justify-center mt-15">
      <div className="w-[90%] h-full  flex items-center justify-center">
        <div className="w-1/2 h-full font-extrabold text-[#111] text-[24px] ">
          {price} <span>RON</span>
        </div>
        <div className="w-1/2 h-full ">
          <AddToCart />
        </div>
      </div>
    </div>
  );
};

export default BottomContent;
