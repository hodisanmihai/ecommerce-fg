"use client";

import React from "react";

interface DescriptionProps {
  name: string;
  description: string;
  details: (string | undefined)[]; // Array of details that can contain strings or undefined
}

const Description: React.FC<DescriptionProps> = ({
  name,
  description,
  details,
}) => {
  // Filter out undefined or empty details
  const filteredDetails = details.filter(Boolean); // This will remove undefined, null, and empty strings

  return (
    <div className="text-[#111] h-[90%] flex flex-col justify-between mt-6 gap-6 md:gap-0">
      <h1 className="font-extrabold text-4xl md:text-[64px]">{name}</h1>
      <h2 className="font-extrabold text-2xl md:text-[24px]">
        Descriere Produs :
      </h2>
      <h3 className="text-xl md:text-[16px]">{description}</h3>
      <h2 className="font-extrabold text-2xl md:text-[24px]">
        Informatii Produs :
      </h2>
      <ul className="text-xl md:text-[16px]">
        {filteredDetails.length > 0 ? (
          filteredDetails.map((detail, index) => (
            <li key={index}>- {detail}</li>
          ))
        ) : (
          <li>No details available</li>
        )}
      </ul>
    </div>
  );
};

export default Description;
