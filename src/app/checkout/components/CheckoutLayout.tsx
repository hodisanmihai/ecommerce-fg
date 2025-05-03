"use client";

import React, { useState } from "react";
import Form from "./Form";
import Summary from "./Summary";
import Payment from "./summaryComponents/Payment";

const CheckoutLayout: React.FC = () => {
  const [isFormValid, setIsFormValid] = useState(false);

  return (
    <div className="w-full min-h-[800px] md:h-[800px] mt-20 flex justify-center items-center mb-12 text-[#333]">
      {/* Container */}
      <div className="w-[90%] md:w-[80%] h-auto md:h-[90%] bg-white/50 shadow-xl rounded-2xl flex flex-col md:flex-row items-center justify-center p-0 md:p-0">
        {/* Stanga */}
        <div className="w-full md:w-[55%] h-auto md:h-full p-4 md:p-12">
          {/* Elemente */}
          <h1 className="font-extrabold text-4xl md:text-[48px] text-center md:text-start">
            Checkout
          </h1>
          <h3 className="font-extrabold text-lg md:text-[20px] text-center md:text-start pt-6 md:pt-12 pb-4 md:pb-6">
            Detalii Livrare
          </h3>
          {/* Form */}
          <div className="w-full flex justify-center">
            <Form onFormValidityChange={(isValid) => setIsFormValid(isValid)} />
          </div>
        </div>

        {/* Dreapta */}
        <div className="bg-[#E2E2E2] w-full md:w-[45%] h-auto md:h-full mt-6 md:mt-0">
          {/* sus */}
          <div className="w-full h-[60%] md:p-6 pt-6 md:pt-12">
            <h3 className="font-extrabold text-lg md:text-[20px] text-center md:text-start">
              Cosul Tau
            </h3>
            <div className="w-full h-full pt-3 pb-3">
              <Summary />
            </div>
          </div>
          {/* jos */}
          <div className="bg-white rounded-t-2xl w-full h-[40%] p-4 md:p-6">
            <Payment isFormValid={isFormValid} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutLayout;
