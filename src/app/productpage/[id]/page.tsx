"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Folosește useParams în loc de useRouter
import Background from "../../components/Background";
import Navbar from "./components/layoutComponents/Navbar";
import Cart from "@/app/Cart/components/Cart";
import LayoutP from "./components/layoutComponents/LayoutP";
import { getProductById } from "@/sanity/getProducts"; // Import function to fetch product
import { useCart } from "@/app/Cart/components/CartContext"; // Importă useCart pentru a accesa contextul
import Footer from "@/app/components/Footer";

// Tipizarea produsului
type Product = {
  _id: string;
  id: string;
  name: string;
  price: number;
  image: string;
  image1: { asset: { url: string } }; // Modificăm image1 pentru a fi un obiect cu `asset.url`
  description: string;
  // Adaugă orice alt câmp specific produsului aici
};

const ProductPage = () => {
  const { id } = useParams(); // Folosește useParams pentru a obține `id` din URL
  const [product, setProduct] = useState<Product | null>(null);
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
      {isCartOpen && <Cart onClose={() => setCartOpen(false)} />}
      <LayoutP product={product} />
      <Footer />
    </div>
  );
};

export default ProductPage;
