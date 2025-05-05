"use client";

import React, { useEffect, useState } from "react";
import { Undo2 } from "lucide-react";
import CartElements from "./CartElements";
import { useCart } from "./CartContext";
import { getCurierPrice } from "@/sanity/getCurier";
import { motion, AnimatePresence } from "framer-motion"; // Importăm AnimatePresence
import Link from "next/link";

// Funcția pentru rotunjirea prețurilor
const roundPrice = (price: number): string => {
  return price.toFixed(2); // Rotunjim la 2 zecimale
};

const Cart = ({ onClose }: { onClose: () => void }) => {
  const { cart, isCartOpen } = useCart(); // Destructurăm datele din contextul coșului
  const [curierPrice, setCurierPrice] = useState(0);

  useEffect(() => {
    const fetchCurierPrice = async () => {
      const price = await getCurierPrice();
      setCurierPrice(price);
    };
    fetchCurierPrice();
  }, []);

  // Calculăm totalul doar pentru elementele valide din coș
  const totalAmount = cart
    .filter((item) => item && item.price) // Filtrăm elementele care au un preț valid
    .reduce((total, item) => total + item.price * item.quantity, 0); // Calculăm totalul incluzând cantitatea

  return (
    <AnimatePresence>
      {isCartOpen && ( // Coșul este vizibil doar dacă isCartOpen este true
        <motion.div
          className="w-screen h-screen fixed bg-black/50 z-10 backdrop-blur-xs flex items-center justify-end"
          initial={{ opacity: 0 }} // Coșul începe invizibil
          animate={{ opacity: 1 }} // Se face vizibil la deschidere
          exit={{ opacity: 0 }} // Se face invizibil la închidere
          transition={{ duration: 0.3 }}
        >
          {/* Cart Container */}
          <motion.div
            className="w-[470px] h-[95%] bg-white md:mr-10 ml-5 mr-5 rounded-2xl flex flex-col items-center"
            initial={{ x: "100%" }} // Coșul începe din dreapta
            animate={{ x: 0 }} // Se mișcă la poziția normală
            exit={{ x: "100%" }} // La închidere se mișcă înapoi spre dreapta
            transition={{ duration: 0.3 }} // Durata animației
          >
            {/* Top Content */}
            <div className="w-full h-[10%] flex items-center justify-between p-10">
              <Undo2
                className="w-8 h-8 text-gray-800 cursor-pointer"
                onClick={onClose} // Închide cart-ul când se face clic
              />
              <h3 className="font-extrabold text-lg md:text-[24px] text-center text-gray-800">
                Produse
              </h3>
            </div>
            {/* Item Stack */}
            <div className="w-full h-[65%] overflow-y-auto pl-10 pr-10">
              {cart.length === 0 ? (
                <div className="text-center text-gray-500 text-lg ">
                  Coșul este gol
                </div>
              ) : (
                cart
                  .filter((product) => product && product.id)
                  .map((product) => (
                    <CartElements key={product.id} product={product} />
                  ))
              )}
            </div>

            {/* Bottom content */}
            <div className="w-full h-[25%] bg-[#E2E2E2] rounded-2xl flex flex-col items-center justify-between p-10 text-[#333]">
              {/* Subtotal */}
              <div className="w-full justify-between flex">
                <h4> Subtotal </h4>
                <h4>
                  <span>{roundPrice(totalAmount)}</span> RON
                </h4>
              </div>
              {/* Livrare */}
              <div className="w-full justify-between flex">
                <h4> Livrare </h4>
                <h4>
                  <span>{roundPrice(curierPrice)}</span> RON
                </h4>
              </div>
              {/* Total */}
              <div className="w-full justify-between flex font-extrabold text-lg md:text-[24px] text-center text-gray-800">
                <h4> Total </h4>
                <h4>
                  <span>{roundPrice(totalAmount + curierPrice)}</span> RON
                </h4>
              </div>
              {/* CTA */}
              <Link
                href="../checkout"
                className="text-center w-full py-2 rounded-full bg-[#D5F05F] text-[18px] text-gray-800 font-semibold transition-transform duration-300 hover:bg-[#a7e25f] hover:scale-95"
              >
                Mergi la plata
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Cart;
