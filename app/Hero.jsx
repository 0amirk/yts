"use client";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { Splide, SplideSlide } from "@splidejs/react-splide";
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
    <main className="w-full  mt-16  h-[80vh] flex justify-center  text-white/95 ">
      <div className="flex justify-center w-[97%] md:w-[98%] bg-black rounded-b-lg ">
        <Splide
          options={{
            perPage: 1,
            height: 600,
          }}
          className="block w-full h-full"
        >
          <SplideSlide className="h-[100%]">
            <div className="flex !h-full bg-black rounded-b-lg hero-bg ">
              <div className="text-center flex flex-col items-center justify-start mt-12 md:mt-24  w-full px-4 py-6 text-[#B78738] flec-col ">
                <p className="text-[38px] sm:text-[45px] md:text-[50px] font-bold font-charm">
                  Transform Your Life
                </p>
                <p className="text-[30px] sm:text-[36px] md:mt-[-10px] md:text-[40px] font-charm">
                  By Transforming Yourself!
                </p>
                <p className="mt-6 text-base text-center text-white md:mt-4 md:text-lg ">
                  Your {text} <Cursor />
                </p>
                <div>
                  <p className="mt-2 text-base font-semibold text-white md:mt-2 md:text-lg">
                    <span className="text-[#B78738] text-[25px] mr-1 font-charm">
                      ﷻ ﷲ
                    </span>{" "}
                    will help you to achieve all that you desire
                  </p>
                </div>
                <button className="border-[#B78738] text-[#B78738] border hover:text-black hover:bg-[#B78738] hover:opacity-95 rounded-lg font-medium md:text-xl ease-in-out transition-all duration-500 hover:scale-105 px-5 py-1 mt-6">
                  Book Now
                </button>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </main>
  );
};

export default Hero;
