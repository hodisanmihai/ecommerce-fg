"use client";

import Background from "./components/Background";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Mission from "./components/Mission";
import Products from "./components/Products";
import Cart from "./components/Cart";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className=" overflow-x-hidden">
      <Background />
      <Cart />
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
