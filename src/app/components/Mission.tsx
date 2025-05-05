"use client ";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  faGlobe,
  faRecycle,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

const Mission = () => {
  const cardData = [
    {
      id: 1,
      title: "Materiale Eco-Friendly",
      description:
        "Folosim doar materiale reciclabile și biodegradabile pentru a crea ghivece care protejează natura.",
      icon: faLeaf, // Folosim iconița pentru frunză
    },
    {
      id: 2,
      title: "Protejăm Mediul",
      description:
        "Fiecare produs contribuie la reducerea amprentei de carbon, protejând mediul înconjurător.",
      icon: faGlobe, // Folosim iconița pentru glob
    },
    {
      id: 3,
      title: "Reciclare și Reutilizare",
      description:
        "Promovăm economia circulară prin reutilizarea materialelor, contribuind la un viitor mai curat.",
      icon: faRecycle, // Folosim iconița pentru reciclare
    },
    {
      id: 4,
      title: "Decor Eco-Friendly",
      description:
        "Promovăm economia circulară prin reutilizarea materialelor, contribuind la un viitor mai curat.",
      icon: faHome, // Folosim un icon de casă pentru decor
    },
  ];

  return (
    <div
      className="z-0 w-full h-full flex flex-col items-center justify-center text-[#333] py-10"
      id="mission"
    >
      {/* Container principal */}
      <div className="w-full md:w-[80%] h-auto flex flex-col justify-between items-center p-6">
        {/* Titluri */}
        <div className="w-full h-auto flex flex-col items-center justify-around gap-6 mb-8">
          <h1 className="font-extrabold text-3xl md:text-[64px] leading-tight text-center">
            Misiunea Noastra
          </h1>
          <h3 className="font-normal text-lg md:text-[20px] text-center">
            Angajamentul nostru este să aducem sustenabilitatea în fiecare colț
            al casei tale.
          </h3>
        </div>

        {/* Carduri */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 mt-12">
          {cardData.map((card) => (
            <div key={card.id} className="flex justify-center items-center">
              <div className="w-full sm:w-[90%] lg:w-[550px] h-auto bg-white rounded-2xl costumShadow overflow-hidden flex flex-col hover:scale-105 transition-transform duration-300">
                {/* Header card */}
                <div className="w-full h-[30%] flex items-center justify-center pt-4">
                  <h3 className="font-extrabold text-lg md:text-[20px] text-center">
                    {card.title}
                  </h3>
                </div>
                {/* Corp card */}
                <div className="w-full flex flex-row p-4 pt-5">
                  {/* Icon */}
                  <div className="w-[40%] h-[100%] items-center text-center justify-center">
                    <FontAwesomeIcon
                      icon={card.icon}
                      className="text-green-500  text-6xl pt-10 md:pt-2 "
                      aria-label={card.title}
                    />
                  </div>
                  {/* Descriere */}
                  <div className="w-[60%] h-[150px] sm:h-[auto] md:h-full flex items-center justify-center p-2">
                    <h4 className="font-normal text-md md:text-[16px] text-center">
                      {card.description}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mission;
