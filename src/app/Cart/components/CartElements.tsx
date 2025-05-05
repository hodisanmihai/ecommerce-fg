"use client";

import React from "react";
import { Trash2 } from "lucide-react";
import { useCart } from "./CartContext"; // Importăm contextul pentru a manipula coșul
import Image from "next/image";

// Definim tipul pentru prop-ul product
interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number; // Adăugăm cantitatea produsului
}

interface CartElementsProps {
  product: Product; // Definim corect tipul pentru prop-ul product
}

// Funcția pentru rotunjirea prețului
const roundPrice = (price: number): string => {
  return price.toFixed(2); // Rotunjim la 2 zecimale
};

const CartElements = ({ product }: CartElementsProps) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart(); // Obținem funcțiile din context

  return (
    <div className="w-full h-[20%] bg-[#F5F5F5] rounded-2xl flex p-2 text-[#333] mb-4">
      {/* Image content */}
      <div className="w-[30%] h-full bg-blue-500">
        <Image
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content elements */}
      <div className="w-[70%] h-full">
        {/* Top Content */}
        <div className="w-full h-1/2 flex justify-between pl-2">
          <h4 className="font-extrabold text-lg md:text-[16px] text-center">
            {product.name}
          </h4>
          {/* Buton Trash pentru eliminarea produsului */}
          <Trash2
            className="w-6 h-6 cursor-pointer"
            onClick={() => removeFromCart(product.id)} // Elimină produsul din coș
          />
        </div>

        {/* Bottom Content */}
        <div className="w-full h-1/2 flex justify-between items-end pl-2">
          <div className="flex gap-2 text-center">
            {/* Butonul de scădere a cantității */}
            <span
              className="w-6 h-6 bg-white rounded-sm border-1 border-[#333333]/50 cursor-pointer"
              onClick={() => decreaseQuantity(product.id)} // Scade cantitatea
            >
              -
            </span>
            <span className="w-6 h-6 bg-white rounded-sm border-1 border-[#333333]/50">
              {product.quantity} {/* Afișăm cantitatea curentă */}
            </span>
            {/* Butonul de creștere a cantității */}
            <span
              className="w-6 h-6 bg-white rounded-sm border-1 border-[#333333]/50 cursor-pointer"
              onClick={() => increaseQuantity(product.id)} // Crește cantitatea
            >
              +
            </span>
          </div>
          <h4 className="flex gap-2">
            <span>{roundPrice(product.price * product.quantity)}</span> RON{" "}
            {/* Prețul total pentru produs, rotunjit la 2 zecimale */}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default CartElements;
