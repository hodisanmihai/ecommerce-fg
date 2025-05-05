"use client";

import React, { useState, useEffect } from "react";
import "./animatedCheckbox.css";
import { getCurierPrice } from "@/sanity/getCurier";
import { useCart } from "@/app/Cart/components/CartContext";
import { loadStripe } from "@stripe/stripe-js";
import { useForm } from "../context/FormContext";

interface PaymentProps {
  isFormValid: boolean;
}

const Payment: React.FC<PaymentProps> = ({ isFormValid }) => {
  const { cart } = useCart();
  const [selectedPayment, setSelectedPayment] = useState<string>("");
  const [curierPrice, setCurierPrice] = useState<number>(0);
  const { formData } = useForm();

  useEffect(() => {
    const fetchCurierPrice = async () => {
      try {
        const price = await getCurierPrice();
        setCurierPrice(price);
      } catch (error) {
        console.error("Eroare la aducerea pretului curierului:", error);
      }
    };

    fetchCurierPrice();
  }, []);

  // Funcția pentru rotunjirea valorilor la 2 zecimale
  const roundPrice = (price: number): string => {
    return price.toFixed(2); // Rotunjim la 2 zecimale
  };

  const subtotal = cart
    .filter((item) => item && item.price)
    .reduce((total, item) => total + item.price * item.quantity, 0);

  const total = subtotal + curierPrice;

  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

  // Funcția care va iniția checkout-ul Stripe
  const handleStripeCheckout = async () => {
    if (selectedPayment !== "card") return; // să plătească doar dacă a selectat Card

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cartItems: [
            ...cart.map((item) => ({
              name: item.name,
              price: item.price,
              quantity: item.quantity,
            })),
            {
              name: "Cost Transport",
              price: curierPrice,
              quantity: 1,
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error("Server error la crearea sesiunii de checkout");
      }

      const data = await response.json();

      const stripe = await stripePromise;

      if (!stripe) {
        throw new Error("Stripe nu s-a incarcat corect");
      }

      const { error } = await stripe.redirectToCheckout({
        sessionId: data.id,
      });

      if (error) {
        console.error("Stripe checkout error:", error.message);
      }
    } catch (error) {
      console.error("Checkout error:", error);
    }
  };

  // Funcția care redirecționează utilizatorul la succes
  const handleCashPayment = () => {
    if (selectedPayment === "cash") {
      // Aici se face redirecționarea
      window.location.href = "/checkout/response/success"; // Redirecționăm direct
    }
  };

  const saveOrderDataToLocalStorage = () => {
    localStorage.setItem("fullName", formData.fullName);
    localStorage.setItem("email", formData.email);
    localStorage.setItem("phone", formData.phone);
    localStorage.setItem("county", formData.county);
    localStorage.setItem("city", formData.city);
    localStorage.setItem("address", formData.address);
    localStorage.setItem("postalCode", formData.postalCode);
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("totalAmount", (subtotal + curierPrice).toFixed(2));
  };

  return (
    <div className="w-full h-full">
      <div className="w-full h-full flex flex-col items-center justify-around text-[#333]">
        <div className="w-full h-[50%] flex flex-col items-center justify-around">
          <div className="w-full justify-between flex md:pt-0 md:pb-0 pt-4 pb-4">
            <h4>Subtotal</h4>
            <h4>
              <span>{roundPrice(subtotal)}</span> RON
            </h4>
          </div>

          <div className="w-full justify-between flex mb-4 md:mb-0">
            <h4>Livrare</h4>
            <h4>
              <span>{roundPrice(curierPrice)}</span> RON
            </h4>
          </div>

          <div className="w-full justify-between flex font-extrabold text-lg md:text-[24px] text-gray-800">
            <h4>Total</h4>
            <h4>
              <span>{roundPrice(total)}</span> RON
            </h4>
          </div>
        </div>

        <div className="w-full h-[50%] flex flex-col items-center justify-around ">
          <div className="w-full flex flex-row justify-evenly gap-4 md:mt-0 mt-4 md:mb-0 mb-4">
            <div className="checkbox-wrapper-11">
              <input
                id="cash"
                type="checkbox"
                checked={selectedPayment === "cash"}
                onChange={() => isFormValid && setSelectedPayment("cash")}
                name="payment"
                value="cash"
                disabled={!isFormValid}
              />
              <label htmlFor="cash">Plata la livrare</label>
            </div>

            <div className="checkbox-wrapper-11">
              <input
                id="card"
                type="checkbox"
                checked={selectedPayment === "card"}
                onChange={() => isFormValid && setSelectedPayment("card")}
                name="payment"
                value="card"
                disabled={!isFormValid}
              />
              <label htmlFor="card">Card Online</label>
            </div>
          </div>

          <button
            disabled={!isFormValid || !selectedPayment}
            onClick={() => {
              saveOrderDataToLocalStorage(); // salvează datele întâi

              if (selectedPayment === "card") {
                handleStripeCheckout();
              } else {
                handleCashPayment();
              }
            }}
            className={`text-center w-full py-2 rounded-full text-[18px] text-gray-800 font-semibold transition-transform duration-300 ${
              isFormValid && selectedPayment
                ? "bg-[#D5F05F] hover:bg-[#a7e25f] hover:scale-95"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            Plateste acum
          </button>

          {!isFormValid && (
            <p className="text-red-500 text-sm mt-4 mb-4 text-center">
              Te rugăm să completezi toate câmpurile necesare pentru a plasa
              comanda.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Payment;
