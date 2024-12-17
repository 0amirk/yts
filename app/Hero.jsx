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
    <main className="w-full relative z-10 h-[100vh] flex justify-center  text-white/95 font-montserrat">
      <FloatingDockDemo />
      <div className="flex justify-center w-[100%] bg-black rounded-b-lg ">
        <div className="flex w-full h-full overflow-hidden bg-black rounded-b-lg hero-bg ">
          <div className="flex flex-col md:items-end  justify-start items-center w-full  text-[#FFFFFF]">
            <div className="px-4 py-6 flex md:justify-center justify-end h-full flex-col md:px-12 rounded-tl-lg text-start w-full md:w-[50%] ">
              <p className="text-[38px] sm:text-[45px] md:text-[50px] font-mySoul ">
                Transform Your Life
              </p>
              <p className="text-[30px] sm:text-[36px] md:mt-[-10px] md:text-[40px] font-mySoul ">
                By Transforming Yourself!
              </p>
              <p className="mt-6 text-base text-white md:mt-4 md:text-lg ">
                Your soul yearns for transformation | Your heart seeks peace
                from within | Your mind desires freedom from anxiety
              </p>
              <div>
                <p className="mt-2 text-base font-semibold text-white md:mt-2 md:text-lg">
                  <span className=" text-[25px] mr-1 font-montserrat">ﷻ ﷲ</span>{" "}
                  will help you to achieve all that you desire
                </p>
                <button className="border-[#FFFFFF] text-[#FFFFFF] border hover:text-black hover:bg-white/80   hover:opacity-95 rounded-lg font-medium md:text-xl ease-in-out transition-all duration-500 hover:scale-105 px-5 py-1 mt-6">
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
