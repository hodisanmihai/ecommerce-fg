"use client";

import React, { useState } from "react";
import Background from "./components/Background";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Mission from "./components/Mission";
import Products from "./components/Products";
import Cart from "./Cart/components/Cart"; // Importăm Cart
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useCart } from "./Cart/components/CartContext"; // Importăm useCart pentru a accesa contextul

export default function Home() {
  const { isCartOpen, setCartOpen } = useCart(); // Obținem starea și funcția de deschidere a cart-ului

  return (
    <div className="overflow-x-hidden">
      <Background />
      {/* Dacă cart-ul este deschis, îl afișăm */}
      {isCartOpen && <Cart onClose={() => setCartOpen(false)} />}
      <Navbar />
      <Hero />
      <Mission />
      <Products />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
