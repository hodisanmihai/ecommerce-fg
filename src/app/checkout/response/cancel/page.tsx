"use client";

import Background from "@/app/components/Background";

const Page = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-red-400 to-pink-600">
      <Background />
      <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
      {/* Overlay pentru a face textul mai vizibil */}
      <div className="relative z-10 text-center p-8 bg-white rounded-xl shadow-2xl max-w-lg w-full transform transition-all duration-500 ease-in-out hover:scale-105">
        <div className="mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-24 w-24 mx-auto text-red-600 animate-shake"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">
          😞 Plata a fost anulată!
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Ne pare rău pentru asta! Poți încerca din nou sau poți contacta echipa
          noastră de suport pentru asistență.
        </p>
        <a
          href="/"
          className="mt-6 inline-block px-8 py-3 text-white bg-red-600 rounded-full text-lg font-semibold hover:bg-red-700 transform transition-all duration-300 ease-in-out hover:scale-105"
        >
          Întoarce-te la magazin
        </a>
      </div>
    </div>
  );
};

export default Page;
