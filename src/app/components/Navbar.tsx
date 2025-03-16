"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const cartCount = 0; // Simulează numărul de produse din coș

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
          </div>
        </div>

        {/* Dreapta - Coș + Burger Menu */}
        <div className="flex items-center gap-4 relative">
          {/* Coș de cumpărături */}
          <div className="relative">
            <FontAwesomeIcon icon={faCartShopping} className="text-4xl" />
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
