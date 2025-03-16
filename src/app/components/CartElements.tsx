"use client";

import React from "react";
import { Trash2 } from "lucide-react";
import Image from "next/image";

const CartElements = () => {
  return (
    <div className="w-full h-[20%] bg-[#F5F5F5] rounded-2xl flex p-2  text-[#333]">
      {/* Image content */}
      <div className="w-[30%] h-full bg-blue-500">Ima</div>
      {/* Content elements */}
      <div className="w-[70%] h-full ">
        {/* Top Content */}
        <div className="w-full h-1/2  flex justify-between pl-2">
          <h4 className="font-extrabold text-lg md:text-[16px] text-center">
            Ghiveci Eco din Lemn
          </h4>
          <Trash2 className="w-6 h-6  cursor-pointer" />
        </div>
        {/* Bottom Content */}
        <div className="w-full h-1/2 flex justify-between items-end  pl-2">
          <div className="flex  gap-2 text-center">
            <span className="w-6 h-6  bg-white rounded-sm border-1 border-[#333333]/50 ">
              -
            </span>
            <span className="w-6 h-6  bg-white rounded-sm border-1 border-[#333333]/50 ">
              2
            </span>
            <span className="w-6 h-6  bg-white rounded-sm border-1 border-[#333333]/50 ">
              +
            </span>
          </div>
          <h4 className="flex gap-2">
            <span>100</span>RON
          </h4>
        </div>
      </div>
    </div>
  );
};

export default CartElements;
