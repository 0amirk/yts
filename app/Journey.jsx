"use client";
import "@splidejs/react-splide/css";
import { PhoneOutgoing } from "lucide-react";

const Journey = () => {
  return (
    <main className="flex justify-center w-full mb-12 text-white/95">
      <div className="flex flex-col bg-white w-[97%] shadow-lg backdrop-blur-md md:w-[98%] rounded-b-lg ">
        <div className="text-center flex flex-col-reverse lg:flex-row items-center justify-center gap-12 mt-8 md:mt-10 w-full px-4 py-6 text-[#B78738] flec-col ">
          <div>
            <p className="text-[25px] md:text-[35px] font-semibold text-[#B78738] font-charm">
              Plan Your Spiritual Journey With Us
            </p>
            <p className="text-[#303030] mt-4 max-w-3xl">
              Our legacy of facilitating pilgrims in performing their Umrah and
              obligatory religious Hajj duty goes back to over two decades when
              the visionary Late Haji Bashir Bhai Chokhawala laid the foundation
              of yourtravelshop.com in partnership with Haji Yusuf Bhai Kherada
              of Al Khalid Tours, Mumbai in 1995. Coupled with our vast and deep
              knowledge of the UK Mualim brothers and sisters.
            </p>
            <p className="text-[#303030] mt-4 max-w-3xl">
              The above put together drives our expertise to be able to curate
              nothing but the best for your journey to the house of Allah.
            </p>
            <button className="border-[#B78738] text-[#B78738] border rounded-lg font-medium md:text-xl ease-in-out transition-all duration-500 hover:scale-105 px-5 py-1 mt-6">
              View Packages
            </button>
          </div>
          <div className="relative w-full sm:max-w-xl lg:w-1/3">
            <img src="/journey.jpg" className="h-[400px] w-full rounded-lg" />
            <div className="absolute flex gap-1 top-3 left-3 bg-[#B78738] rounded-lg p-2">
              <a href="tel:02085547070">
                <PhoneOutgoing className="stroke-black" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Journey;
