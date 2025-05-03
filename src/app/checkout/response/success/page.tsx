"use client";

import Background from "@/app/components/Background";

const Page = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen ">
      <Background />
      <div className="absolute inset-0 bg-black opacity-10"></div>{" "}
      {/* Overlay pentru a face textul mai vizibil */}
      <div className="relative z-10 text-center p-8 bg-white rounded-xl shadow-2xl max-w-lg w-full transform transition-all duration-500 ease-in-out hover:scale-105">
        <div className="mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-24 w-24 mx-auto text-teal-600 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">
          🎉 Comanda a fost plasata cu succes!
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Mulțumim pentru achiziție! Vei primi un email de confirmare în scurt
          timp. Între timp, te poți întoarce la magazin pentru a explora mai
          multe oferte.
        </p>
        <a
          href="/"
          className="mt-6 inline-block px-8 py-3 text-white hover:text-[#333] bg-teal-600 rounded-full text-lg font-semibold hover:bg-[#D5F05F] transform transition-all duration-300 ease-in-out hover:scale-105"
        >
          Întoarce-te la magazin
        </a>
      </div>
    </div>
  );
};

export default Page;
