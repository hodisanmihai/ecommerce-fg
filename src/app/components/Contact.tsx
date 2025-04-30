"use client";

import React from "react";
import { Mail } from "lucide-react";
import { Smartphone, Facebook, Instagram } from "lucide-react";

const Contact = () => {
  const contact = [
    {
      icon: <Mail size={32} />,
      title: "Email: exemplu@gmail.com",
      link: "mailto:exemplu@gmail.com",
    },
    {
      icon: <Smartphone size={32} />,
      title: "Telefon: 0712-345-678",
      link: "tel:0712345678",
    },
  ];

  const social = [
    {
      icon: <Instagram size={32} />,
      title: "Instagram : @instagram",
      link: "https://instagram.com/",
    },
    {
      icon: <Facebook size={32} />,
      title: "Facebook : @facebook",
      link: "https://facebook.com/",
    },
  ];

  return (
    <div>
      <div className="z-0 w-full h-full flex flex-col items-center justify-center text-[#333] py-10 bg-[#DFD1FF]">
        {/* Container principal */}
        <div className="w-full md:w-[80%] h-auto flex flex-col justify-between items-center p-6">
          {/* Titluri */}
          <div className="w-full h-auto flex flex-col items-center justify-around gap-6 mb-8">
            <h1 className="font-extrabold text-3xl md:text-[64px] leading-tight text-center">
              Contactează-ne
            </h1>
            <h3 className="font-normal text-lg md:text-[20px] text-center">
              Suntem aici pentru tine – contactează-ne pentru orice întrebare!
            </h3>
          </div>

          {/* Carduri */}
          <div className="w-full mt-12 flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-12">
            {contact.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className=" w-[90%] md:w-auto flex flex-row items-center justify-center gap-4 bg-white pl-12 pr-12 md:pt-6 md:pb-6 pt-3 pb-3 rounded-2xl costumShadow font-bold text-lg md:text-[20px] text-center costumShadow transition"
              >
                {item.icon}
                <span>{item.title}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="w-full md:w-[80%] h-auto flex flex-col justify-between items-center p-6">
          {/* Titluri */}
          <div className="w-full h-auto flex flex-col items-center justify-around gap-6 mb-8">
            <h1 className="font-extrabold text-3xl md:text-[64px] leading-tight text-center">
              Eco & Social – Hai cu noi!
            </h1>
            <h3 className="font-normal text-lg md:text-[20px] text-center">
              Fii la curent cu cele mai noi produse, oferte și inspirație pentru
              un stil de viață eco-friendly.
            </h3>
          </div>

          {/* Carduri */}
          <div className="w-full mt-12 flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-12">
            {social.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className=" w-[90%] md:w-auto flex flex-row items-center justify-center gap-4 bg-white pl-12 pr-12 md:pt-6 md:pb-6 pt-3 pb-3 rounded-2xl costumShadow font-bold text-lg md:text-[20px] text-center costumShadow transition"
              >
                {item.icon}
                <span>{item.title}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
