"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useCart } from "@/app/Cart/components/CartContext"; // Importă useCart pentru a accesa contextul
import { motion, AnimatePresence } from "framer-motion";

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
            <Link href="#produse">Produse</Link>
            <Link href="#about">About</Link>
            <Link href="#contact">Contact</Link>
            <Link href="#faq">Faq</Link>
          </div>
        </div>

        {/* Dreapta - Coș + Burger Menu */}
        <div className="flex items-center gap-4 relative">
          {/* Coș de cumpărături */}
          <div
            className="relative"
            onClick={handleCartToggle} // Schimbă starea cart-ului
          >
            <FontAwesomeIcon
              icon={faCartShopping}
              className="text-4xl cursor-pointer"
            />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs px-2 rounded-full">
                {cartCount}
              </span>
            )}
          </div>

          {/* Buton meniu mobil */}
          <button
            className="md:hidden text-3xl z-5"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
          </button>
        </div>
      </div>

      {/* Meniu mobil */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-gradient-to-b from-white/100 to-white/80 z-4 flex flex-col justify-center items-center overflow-hidden h-screen"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {["Produse", "About", "Contact", "FAQ"].map((item, index) => (
              <motion.div
                key={index}
                className="py-6 text-3xl text-gray-900 w-full text-center hover:bg-[#f0f0f0]"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
