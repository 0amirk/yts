"use client";
import { useEffect } from "react";
const Precautions = () => {
  useEffect(() => {
    const opacityIns = document.querySelectorAll(".precautions-opacity");

    const observerOptions = {
      root: null, // Use the viewport
      threshold: 0.7, // Trigger when 70% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, observerOptions);

    opacityIns.forEach((opacityIn) => observer.observe(opacityIn));

    // Cleanup the observer on component unmount
    return () => observer.disconnect();
  }, []);
  const CARDS = [
    {
      id: 0,
      img: "/hands.png",
      text: "Wash your hands often using soap and water properly",
    },
    {
      id: 1,
      img: "/face.png",
      text: "Avoid touching your face, eyes, nose, or mouth frequently",
    },
    {
      id: 2,
      img: "/cover.png",
      text: "Cover your mouth and nose when you cough or sneeze",
    },
    {
      id: 3,
      img: "/mask.png",
      text: "Dispose of used masks and tissues properly and regularly",
    },
  ];
  return (
    <main>
      <div>
        <div className="flex flex-col items-center justify-center w-full px-4 py-6 mt-16 mb-12 text-center font-montserrat">
          <p className="text-[25px] md:text-[35px] font-abril text-[#B78738]">
            Saftey Tips While Performing Umrah
          </p>
          <p className="md:mb-12 mb-6 text-lg md:text-xl text-[#303030] mt-2 ">
            Some of the most important points to consider while perfoming
            Umrah/Hajj, keeping in mind the most recent pandemic.
          </p>
          <div className="flex justify-center max-w-[2000px]">
            <div className="flex flex-wrap items-center justify-around w-full gap-4">
              {CARDS.map((card, index) => {
                return (
                  <div
                    className="flex flex-col shadow-lg px-4 py-8 h-64 precautions-opacity max-w-[150px] sm:max-w-[250px] md:max-w-[280px] items-center justify-center group"
                    key={index}
                    style={{ transitionDelay: ` ${index * 0.3}s` }}
                  >
                    <div className="flex items-center justify-center w-20 h-20 md:w-32 md:h-32">
                      <img src={card.img} />
                    </div>
                    <p className="text-sm md:text-lg text-[#303030] max-w-[250px] group-hover:text-[#b78738] transition-all duration-300">
                      {card.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Precautions;
