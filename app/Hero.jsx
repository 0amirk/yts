"use client";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import FloatingDockDemo from "./FloatingDock";
const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "soul yearns for transformation",
      "heart seeks peace from within",
      "mind desires freedom from anxiety ",
    ],
    loop: 0,
  });

  return (
    <main className="w-full relative z-10 mt-16 h-[90vh] flex justify-center  text-white/95 ">
      <FloatingDockDemo />
      <div className="flex justify-center w-[100%] bg-black rounded-b-lg ">
        <div className="flex w-full h-full overflow-hidden bg-black rounded-b-lg hero-bg ">
          <div className="flex flex-col md:items-end  justify-end items-center w-full  text-[#B78738]">
            <div className="px-4 py-6 sm:px-12 flex justify-center flex-col md:px-16 rounded-t-lg text-start bg-black/65  md:h-[70%] w-full md:w-[50%] ">
              <p className="text-[38px] sm:text-[45px] md:text-[50px] font-bold font-charm">
                Transform Your Life
              </p>
              <p className="text-[30px] sm:text-[36px] md:mt-[-10px] md:text-[40px] font-charm">
                By Transforming Yourself!
              </p>
              <p className="mt-6 text-base text-white md:mt-4 md:text-lg ">
                Your {text} <Cursor />
              </p>
              <div>
                <p className="mt-2 text-base font-semibold text-white md:mt-2 md:text-lg">
                  <span className="text-[#B78738] text-[25px] mr-1 font-charm">
                    ﷻ ﷲ
                  </span>{" "}
                  will help you to achieve all that you desire
                </p>
                <button className="border-[#B78738] text-[#B78738] border hover:text-black hover:bg-[#B78738] hover:opacity-95 rounded-lg font-medium md:text-xl ease-in-out transition-all duration-500 hover:scale-105 px-5 py-1 mt-6">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
