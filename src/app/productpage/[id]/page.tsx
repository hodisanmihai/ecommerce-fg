"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // ✅ Use useParams instead of useRouter
import Background from "../../components/Background";
import Navbar from "./components/layoutComponents/Navbar";
import Cart from "../../components/Cart";
import LayoutP from "./components/layoutComponents/LayoutP";
import { getProductById } from "@/sanity/getProducts"; // ✅ Import function to fetch product

const ProductPage = () => {
  const { id } = useParams(); // ✅ Get product ID from URL
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof id === "string") {
      // Ensure id is a string
      const fetchProduct = async () => {
        const productData = await getProductById(id);

        // You can directly pass the product's details (no need to create an array here)
        setProduct(productData);
        setLoading(false);
      };
      fetchProduct();
    }
  }, [id]);

  if (loading) return <div>Loading...</div>; // ✅ Show loading state while fetching
  if (!product) return <div>Product not found</div>; // ✅ Handle case where product doesn't exist

  return (
    <div className="overflow-x-hidden">
      <Background />
      <Navbar />
      <LayoutP product={product} />
    </div>
  );
};

export default ProductPage;
