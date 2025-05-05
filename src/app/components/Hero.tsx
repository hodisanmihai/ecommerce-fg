"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="pt-12 md:pt-0 overflow-hidden overscroll-none z-0 w-screen h-screen bg-[#D5F05F] flex flex-col md:flex-row items-center justify-around text-[#333]">
      {/* Stanga */}
      <div className="w-full md:w-1/2 h-auto flex flex-col justify-center items-center gap-6 text-center md:text-left px-6">
        {/* Text */}
        <div className="w-[90%] md:w-[60%] flex flex-col gap-4">
          <h1 className="font-extrabold text-4xl md:text-[64px] leading-tight pt-6 md:pt-0">
            Sustenabilitate cu Stil
          </h1>
          <h3 className="font-normal text-lg md:text-[20px]">
            Ghivecele noastre eco-friendly sunt create din materiale
            sustenabile, perfecte pentru a aduce un colț de natură în casa ta.
          </h3>
        </div>
        {/* CTA */}
        <div className="w-full md:w-[60%] flex flex-col gap-10 mt-12">
          <Link
            href="#mission"
            className="text-center w-full py-3 rounded-full bg-[#FBF8EF] text-lg font-semibold transition hover:scale-105 hover:bg-[#f0e8d2]"
          >
            Explorează
          </Link>
          <Link
            href="#produse"
            className="text-center w-full py-3 rounded-full bg-[#DFD1FF] text-lg font-semibold transition hover:scale-105 hover:bg-[#cbb4ff]"
          >
            Descoperă colecția
          </Link>
        </div>
      </div>

      {/* Dreapta */}
      <div className="w-full md:w-1/2 h-[300px] md:h-full relative rounded-tl-full rounded-bl-full overflow-hidden">
        <Image
          src="/assets/bg-hero.jpg"
          alt="Hero"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Hero;
