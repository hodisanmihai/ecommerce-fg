"use client";

import React, { useEffect, useState } from "react";
import { getFAQ } from "@/sanity/getFAQ";

interface FAQ {
  question: string;
  answer: string;
}

const Faq = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const data = await getFAQ();
        setFaqs(data);
      } catch (error) {
        console.error("Eroare la aducerea FAQ-urilor:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFAQs();
  }, []);

  if (loading) {
    return <div>Se încarcă întrebările...</div>;
  }

  return (
    <div
      id="faq"
      className="w-full flex flex-col items-center justify-center bg-[#DFD1FF] py-18"
    >
      <div className="w-full max-w-7xl px-6 text-center">
        {/* Title Section */}
        <h1 className="font-extrabold text-3xl md:text-[64px] leading-tight mb-4 text-[#333]">
          Întrebări frecvente
        </h1>
        <h3 className="font-normal text-lg md:text-[20px] pt-2 pb-12 text-[#555]">
          Îți răspundem la cele mai comune întrebări!
        </h3>

        {/* FAQ List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all flex flex-col gap-6"
            >
              <h3 className="font-extrabold text-lg md:text-[20px] text-[#333]">
                {faq.question}
              </h3>
              <p className="font-normal text-md md:text-[16px] text-[#555]">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
