"use client";

import React, { useState } from "react";
import Cart from "@/app/Cart/components/Cart"; // Importăm componenta Cart
import { getProductById } from "@/sanity/getProducts";

const Page = () => {
  const [isCartOpen, setIsCartOpen] = useState(false); // Starea pentru deschiderea cart-ului

  // Funcția care va închide cart-ul
  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  return (
    <div>
      {/* Restul paginii */}

      {/* Dacă cart-ul este deschis, renderizăm componenta Cart */}
      {isCartOpen && <Cart onClose={handleCloseCart} />}
    </div>
  );
};

export default Page;
