"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ImageData {
  src: string;
  alt: string;
}

interface ImagesProps {
  images: ImageData[]; // Array of image objects
}

const Images: React.FC<ImagesProps> = ({ images }) => {
  const [mainImage, setMainImage] = useState<ImageData>({
    src: images[0].src, // Use the first image as the main one
    alt: images[0].alt, // Set alt for the main image as well
  });

  const handleImageClick = (image: ImageData) => {
    setMainImage(image);
  };

  return (
    <div className="w-full h-auto flex flex-col items-center justify-between gap-6 md:gap-0 overflow-clip">
      {/* Main Image Section */}
      <div className="w-full flex justify-center items-center relative  ">
        {/* Aspect ratio container to maintain good proportions */}
        <div className="w-full h-0 pb-[75%] relative   ">
          <Image
            src={mainImage.src}
            alt={mainImage.alt}
            layout="fill"
            objectFit="fill"
            className="object-fill transition-opacity duration-500 ease-in-out opacity-100 p-4 rounded-4xl  "
          />
        </div>
      </div>

      {/* Bottom Image Thumbnails */}
      <div className="w-[100%] h-[25%]  p-2 flex justify-evenly items-end flex-wrap md:flex-nowrap gap-3 md:gap-0 ">
        {images.map((image, index) => (
          <div
            key={index}
            className="w-[90px] h-[90px] cursor-pointer flex"
            onClick={() => handleImageClick(image)} // Pass the whole image object
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={5500}
              height={100}
              className="object-fill transition-transform duration-300 hover:scale-105 rounded-md "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Images;
