import React from "react";

const About = () => {
  const cardDescription = [
    {
      description:
        "Fiecare ghiveci pe care îl creăm este realizat cu grijă față de natură și cu un design modern, potrivit pentru orice spațiu. Credem că micile alegeri pot face o mare diferență – de aceea, ne dedicăm misiunii de a aduce natura mai aproape de tine într-un mod sustenabil.",
    },
    {
      description:
        "Totul a început cu o idee simplă: cum putem face produsele de zi cu zi mai sustenabile? Din dorința de a reduce impactul asupra mediului, am creat o gamă de ghivece eco-friendly, fabricate din materiale reciclate și sustenabile. Ne dorim ca fiecare produs pe care îl oferim să contribuie la un stil de viață mai verde și mai responsabil",
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
              Misiunea Noastră
            </h1>
            <h3 className="font-normal text-lg md:text-[20px] text-center">
              Angajamentul nostru este să aducem sustenabilitatea în fiecare
              colț al casei tale.
            </h3>
          </div>

          {/* Carduri */}
          <div className="w-full mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
            {cardDescription.map((item, index) => (
              <div
                key={index}
                className="w-full sm:w-[40%] md:min-h-[300px]  bg-white p-6 rounded-2xl costumShadow font-bold text-lg md:text-[20px] text-start"
              >
                {item.description}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
