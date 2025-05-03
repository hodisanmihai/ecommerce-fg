"use client";

import React from "react";
import Navbar from "./components/Navbar";
import Background from "../components/Background";
import CheckoutLayout from "./components/CheckoutLayout";
import Footer from "../components/Footer";

const CheckoutPage = () => {
  return (
    <div>
      <Background />
      <Navbar />
      <CheckoutLayout />
      <Footer />
    </div>
  );
};

export default CheckoutPage;
