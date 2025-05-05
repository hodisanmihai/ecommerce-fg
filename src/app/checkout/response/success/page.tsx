"use client";

import { useEffect } from "react";
import Background from "@/app/components/Background";
import Link from "next/link";

const Page = () => {
  useEffect(() => {
    const sendEmail = async () => {
      try {
        // Recuperarea datelor din localStorage
        const fullName = localStorage.getItem("fullName");
        const email = localStorage.getItem("email");
        const phone = localStorage.getItem("phone");
        const county = localStorage.getItem("county");
        const city = localStorage.getItem("city");
        const address = localStorage.getItem("address");
        const postalCode = localStorage.getItem("postalCode");
        const cart = JSON.parse(localStorage.getItem("cart") || "[]");
        const totalAmount = parseFloat(
          localStorage.getItem("totalAmount") || "0"
        );

        if (
          !fullName ||
          !email ||
          !phone ||
          !county ||
          !city ||
          !address ||
          !postalCode ||
          !cart ||
          !totalAmount
        ) {
          throw new Error("Nu s-au găsit datele necesare din localStorage.");
        }

        const orderData = {
          name: fullName,
          email: email,
          phone: phone,
          cart: cart,
          totalAmount: totalAmount,
        };

        // Trimite cererea POST către API-ul de trimitere a emailului
        const response = await fetch("/api/sendEmail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderData),
        });

        if (!response.ok) {
          throw new Error("A apărut o eroare la trimiterea emailului.");
        }

        const data = await response.json();
        console.log("Email trimis cu succes:", data);
      } catch (error) {
        console.error("Eroare la trimiterea emailului:", error);
      }
    };

    // Apelează funcția care trimite email-ul
    sendEmail();
  }, []);

  return (
    <div className="relative flex items-center justify-center min-h-screen">
      <Background />
      <div className="absolute inset-0 bg-black opacity-10"></div>{" "}
      <div className="relative z-10 text-center p-8 bg-white rounded-xl shadow-2xl max-w-lg w-full transform transition-all duration-500 ease-in-out hover:scale-105">
        <div className="mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-24 w-24 mx-auto text-teal-600 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">
          🎉 Comanda a fost plasată cu succes!
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Mulțumim pentru achiziție! Vei primi un email de confirmare în scurt
          timp. Între timp, te poți întoarce la magazin pentru a explora mai
          multe oferte.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block px-8 py-3 text-white hover:text-[#333] bg-teal-600 rounded-full text-lg font-semibold hover:bg-[#D5F05F] transform transition-all duration-300 ease-in-out hover:scale-105"
        >
          Întoarce-te la magazin
        </Link>
      </div>
    </div>
  );
};

export default Page;
