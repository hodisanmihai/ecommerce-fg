"use client";

import Background from "./components/Background";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Mission from "./components/Mission";
import Products from "./components/Products";
import Cart from "./Cart/components/Cart";
import About from "./components/About";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import { useCart } from "./Cart/components/CartContext";

export default function Home() {
  const { isCartOpen, setCartOpen } = useCart();
  return (
    <div className="overflow-x-hidden">
      <Background />
      {isCartOpen && <Cart onClose={() => setCartOpen(false)} />}
      <Navbar />
      <Hero />
      <Mission />
      <Products />
      <About />
      <Contact />
      <Faq />
      <Footer />
    </div>
  );
}
