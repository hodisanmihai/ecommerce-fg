"use client";

import React from "react";
import { useCart } from "@/app/Cart/components/CartContext"; // Importăm contextul pentru a obține produsele din coș

const SummaryProduct = () => {
  const { cart } = useCart(); // Obținem produsele din coș

  // Funcție pentru rotunjirea prețului la 2 zecimale folosind toFixed
  const roundPrice = (price: number): string => {
    return price.toFixed(2); // Rotunjim la 2 zecimale
  };

  return (
    <div className="w-full h-full flex flex-col gap-4 px-4 md:px-6">
      {/* Verificăm dacă există produse în coș */}
      {cart.length > 0 ? (
        <div className="h-[300px] md:h-auto overflow-y-auto overflow-x-clip ">
          {/* Adăugăm overflow-y-auto pentru scroll pe mobil */}
          {cart.map((item) => (
            <div
              key={item.id}
              className="w-full md:w-[90%] h-[120px] md:h-[100px] flex m-3 "
            >
              {/* Imaginea produsului */}
              <div
                className="w-[30%] md:w-[20%] h-[100%] md:h-[100%] bg-gray-400 rounded-2xl border-2 border-white"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              {/* Detaliile produsului */}
              <div className="flex flex-col justify-between pl-4 md:pl-6 py-2">
                {/* Numele produsului */}
                <h3 className="font-extrabold text-sm md:text-lg text-start">
                  {item.name}
                </h3>

                {/* Cantitatea produsului */}
                <h3 className="font-normal text-sm md:text-lg text-start">
                  {item.quantity}x
                </h3>

                {/* Prețul total pentru produs */}
                <h3 className="font-extrabold text-sm md:text-lg text-start">
                  {roundPrice(item.price * item.quantity)} RON
                </h3>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h3 className="text-center text-xl">Nu există produse în coș.</h3>
      )}
    </div>
  );
};

export default SummaryProduct;
