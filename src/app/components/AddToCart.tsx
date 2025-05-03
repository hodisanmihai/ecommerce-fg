"use client";

import React from "react";
import { useCart } from "../Cart/components/CartContext"; // Importă hook-ul useCart

// Tipul pentru props
interface AddToCartProps {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
  };
}

const AddToCart = ({ product }: AddToCartProps) => {
  const { addToCart, setCartOpen } = useCart(); // Obținem funcțiile addToCart și setCartOpen din context

  // Handle pentru adăugarea produsului în coș
  const handleAddToCart = () => {
    addToCart({
      ...product, // Preiei toate proprietățile din obiectul `product`
      quantity: 1, // Adaugi câmpul `quantity` cu valoarea 1
    });
    setCartOpen(true); // Deschidem coșul imediat ce produsul a fost adăugat
  };

  return (
    <div>
      <button
        onClick={handleAddToCart}
        className="w-full py-2 rounded-full bg-[#D5F05F] text-[18px] text-gray-800 font-semibold transition-transform duration-300 hover:bg-[#a7e25f] hover:scale-95"
      >
        Adaugă
      </button>
    </div>
  );
};

export default AddToCart;
