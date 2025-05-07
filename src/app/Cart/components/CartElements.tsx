"use client";

import React from "react";
import { Trash2 } from "lucide-react";
import { useCart } from "./CartContext";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartElementsProps {
  product: Product;
}

const roundPrice = (price: number): string => {
  return price.toFixed(2);
};

const CartElements = ({ product }: CartElementsProps) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  return (
    <div className="w-full bg-[#F5F5F5] rounded-2xl flex flex-col sm:flex-row p-4 text-[#333] gap-4 mb-4">
      {/* Imaginea */}
      <div className="w-full sm:w-[30%] aspect-square overflow-hidden rounded-xl bg-blue-500">
        <Image
          width={640}
          height={640}
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Conținut */}
      <div className="w-full sm:w-[70%] flex flex-col justify-between">
        {/* Titlu și buton Trash */}
        <div className="flex justify-between items-center">
          <h4 className="font-extrabold text-lg md:text-xl">{product.name}</h4>
          <Trash2
            className="w-6 h-6 cursor-pointer"
            onClick={() => removeFromCart(product.id)}
          />
        </div>

        {/* Control cantitate și preț */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-2">
            {/* Scade cantitatea */}
            <button
              className="w-8 h-8 bg-white rounded-md border border-gray-400 flex items-center justify-center text-lg font-bold"
              onClick={() => decreaseQuantity(product.id)}
            >
              -
            </button>
            {/* Cantitate curentă */}
            <span className="w-8 h-8 bg-white rounded-md border border-gray-400 flex items-center justify-center">
              {product.quantity}
            </span>
            {/* Crește cantitatea */}
            <button
              className="w-8 h-8 bg-white rounded-md border border-gray-400 flex items-center justify-center text-lg font-bold"
              onClick={() => increaseQuantity(product.id)}
            >
              +
            </button>
          </div>

          {/* Preț total */}
          <h4 className="text-md font-semibold">
            {roundPrice(product.price * product.quantity)} RON
          </h4>
        </div>
      </div>
    </div>
  );
};

export default CartElements;
