"use client ";

import React from "react";
import { Undo2 } from "lucide-react";
import CartElements from "./CartElements";

const Cart = () => {
  return (
    <div className="w-screen h-screen fixed bg-black/20 z-10 backdrop-blur-xs flex items-center justify-end">
      {/* Cart Container */}
      <div className="w-[470px] h-[95%] bg-white md:mr-10 ml-5 mr-5 rounded-2xl flex flex-col items-center">
        {/* Top Content */}
        <div className="w-full h-[10%] flex items-center justify-between p-10">
          <Undo2 className="w-8 h-8 text-gray-800 cursor-pointer" />
          <h3 className="font-extrabold text-lg md:text-[24px] text-center text-gray-800">
            Produse
          </h3>
        </div>
        {/* Item Stack */}
        <div className="w-full h-[65%] overflow-y-auto pl-10 pr-10">
          {/* Element */}
          <CartElements />
        </div>
        {/* Bottom content */}
        <div className="w-full h-[25%] bg-[#E2E2E2] rounded-2xl flex flex-col items-center justify-between p-10 text-[#333]">
          {/* Subtotal */}
          <div className="w-full justify-between flex">
            <h4> Subtotal </h4>
            <h4>
              <span>100</span> RON
            </h4>
          </div>
          {/* Livrare */}
          <div className="w-full justify-between flex">
            <h4> Livrare </h4>
            <h4>
              <span>20</span> RON
            </h4>
          </div>
          {/* Total */}
          <div className="w-full justify-between flex font-extrabold text-lg md:text-[24px] text-center text-gray-800">
            <h4> Total </h4> {/* Corectat */}
            <h4>
              <span>120</span> RON
            </h4>
          </div>
          {/* CTA */}
          <button className="w-full py-2 rounded-full bg-[#D5F05F] text-[18px] text-gray-800 font-semibold transition-transform duration-300 hover:bg-[#a7e25f] hover:scale-95">
            Mergi la plata
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
