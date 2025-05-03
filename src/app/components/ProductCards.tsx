import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getProducts } from "@/sanity/getProducts";
import Link from "next/link";
import { useCart } from "../Cart/components/CartContext"; // Importă useCart pentru a folosi contextul coșului

// Definim tipul pentru produs
interface Product {
  _id: string;
  name: string;
  image1: {
    asset: {
      url: string;
    };
  };
  price: number;
  description: string;
}

const ProductCards = () => {
  const { addToCart, setCartOpen } = useCart(); // Destructurăm funcțiile necesare din context
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await getProducts();
      setProducts(fetchedProducts);
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product._id,
      name: product.name,
      price: product.price,
      image: product.image1.asset.url,
      quantity: 1, // Adaugă quantity, pentru a respecta tipul definit în context
    });
    setCartOpen(true); // Deschide coșul imediat ce produsul este adăugat
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
      {products.map((product) => (
        <div
          key={product._id}
          className="w-full md:w-[70%] h-[400px] bg-white rounded-2xl costumShadow flex flex-col items-center justify-center"
        >
          <div className="w-[90%] h-[90%] flex-col">
            {/* Poza */}
            <div className="w-full h-1/2 rounded-2xl bg-gray-300 relative">
              <Image
                src={product.image1.asset.url}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="rounded-2xl"
              />
            </div>
            {/* Container cu elemente */}
            <div className="w-full h-1/2 flex flex-col items-center justify-end gap-5">
              <h3 className="font-extrabold text-lg md:text-[16px] text-center text-gray-800">
                {product.name}
              </h3>
              <Link
                href={`/productpage/${product._id}`}
                className="w-full py-2 rounded-full bg-[#DFD1FF] text-[18px] text-gray-800 font-semibold transition-transform duration-300 hover:bg-[#c0a2ff] hover:scale-95 text-center"
              >
                Vezi detalii
              </Link>
              <button
                onClick={() => handleAddToCart(product)} // Adaugă produsul la coș și deschide coșul
                className="w-full py-2 rounded-full bg-[#D5F05F] text-[18px] text-gray-800 font-semibold transition-transform duration-300 hover:bg-[#a7e25f] hover:scale-95"
              >
                Adaugă
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
