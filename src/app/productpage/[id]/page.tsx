"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // ✅ Use useParams instead of useRouter
import Background from "../../components/Background";
import Navbar from "./components/layoutComponents/Navbar";
import Cart from "@/app/Cart/components/Cart";
import LayoutP from "./components/layoutComponents/LayoutP";
import { getProductById } from "@/sanity/getProducts"; // ✅ Import function to fetch product
import { useCart } from "@/app/Cart/components/CartContext"; // Importă useCart pentru a accesa contextul
import Footer from "@/app/components/Footer";

const ProductPage = () => {
  const { id } = useParams(); // ✅ Get product ID from URL
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const { isCartOpen, setCartOpen } = useCart(); // Accesăm starea și funcțiile din contextul coșului

  useEffect(() => {
    if (typeof id === "string") {
      const fetchProduct = async () => {
        const productData = await getProductById(id);
        setProduct(productData);
        setLoading(false);
      };
      fetchProduct();
    }
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="overflow-x-hidden">
      <Background />
      <Navbar />
      {isCartOpen && <Cart onClose={() => setCartOpen(false)} />}{" "}
      <LayoutP product={product} />
      <Footer />
    </div>
  );
};

export default ProductPage;
