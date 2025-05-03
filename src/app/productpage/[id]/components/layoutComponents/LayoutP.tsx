"use client";

import React from "react";
import Images from "./Images";
import BottomContent from "./BottomContent";
import Description from "./Description";

// Define a type for the product prop
interface Product {
  _id: string;
  name: string;
  image1: {
    asset: {
      url: string;
    };
  };
  image2?: {
    asset: {
      url: string;
    };
  };
  image3?: {
    asset: {
      url: string;
    };
  };
  image4?: {
    asset: {
      url: string;
    };
  };
  image5?: {
    asset: {
      url: string;
    };
  };
  price: number;
  description: string;
  detail1?: string;
  details2?: string;
  details3?: string;
  details4?: string;
}

interface LayoutPProps {
  product: Product; // Define the product prop type
}

const LayoutP: React.FC<LayoutPProps> = ({ product }) => {
  // Create an array of image objects dynamically
  const images = [
    { src: product.image1.asset.url, alt: "Image 1" },
    product.image2 ? { src: product.image2.asset.url, alt: "Image 2" } : null,
    product.image3 ? { src: product.image3.asset.url, alt: "Image 3" } : null,
    product.image4 ? { src: product.image4.asset.url, alt: "Image 4" } : null,
    product.image5 ? { src: product.image5.asset.url, alt: "Image 5" } : null,
  ].filter((image) => image !== null); // Filter out any null images

  // Create an array of details dynamically
  const details = [
    product.detail1,
    product.details2,
    product.details3,
    product.details4,
  ];

  return (
    <div className="w-full min-h-[800px] md:h-[800px] md:mt20 mt-20 flex justify-center items-center mb-12">
      {/* Container */}
      <div className="w-[90%] md:w-[80%] h-[90%] bg-white/70 shadow-xl rounded-2xl flex items-center justify-center p-5 md:p-0">
        {/* Element */}
        <div className="w-full md:w-[90%] h-full flex flex-col md:flex-row justify-between">
          {/* left */}
          <div className="w-full md:w-[45%] h-full flex flex-col mb-4 md:mb-0">
            <Images images={images} /> {/* Pass the images array here */}
            <BottomContent product={product} />
          </div>

          {/* right */}
          <div className="w-full md:w-[50%] h-full">
            <Description
              name={product.name}
              description={product.description}
              details={details} // Pass details array here
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutP;
