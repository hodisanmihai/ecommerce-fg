"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { Undo2 } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/app/Cart/components/CartContext"; // Importă contextul coșului

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart, isCartOpen, setCartOpen } = useCart(); // Obținem starea coșului și funcțiile din context
  const cartCount = cart.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  ); // Obținem numărul de produse din coș

  const handleCartToggle = () => {
    setCartOpen(!isCartOpen); // Comută starea cart-ului
  };

  return (
    <div className="w-full h-[70px] fixed glassmorphism-gradient flex items-center justify-center z-5 text-[#333]">
      <div className="w-[95%] h-[90%] flex items-center justify-between">
        {/* Stânga - Logo & Meniu */}
        <div className="flex items-center">
          <div className="text-4xl md:text-6xl">LOGO</div>
          <div className="hidden md:flex ml-12 text-[20px] gap-6">
            <Link href="/produse">Produse</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/faq">Faq</Link>
            <Link href="/" className="flex items-center">
              <Undo2 className="w-6 h-6 text-gray-800 cursor-pointer" />
            </Link>
          </div>
        </div>

        {/* Dreapta - Coș + Burger Menu */}
        <div className="flex items-center gap-4 relative">
          {/* Coș de cumpărături */}
          <div
            className="relative"
            onClick={handleCartToggle} // Folosește handleCartToggle pentru a comuta starea coșului
          >
            <FontAwesomeIcon
              icon={faCartShopping}
              className="text-4xl cursor-pointer"
            />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
                {cartCount}
              </span>
            )}
          </div>

          {/* Buton meniu mobil */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
          </button>
        </div>
      </div>

      {/* Meniu mobil */}
      {menuOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-white/90 shadow-md flex flex-col items-center py-4 gap-4 md:hidden">
          <Link href="/produse" onClick={() => setMenuOpen(false)}>
            Produse
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
          <Link href="/faq" onClick={() => setMenuOpen(false)}>
            Faq
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
