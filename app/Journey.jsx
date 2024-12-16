"use client";
import "@splidejs/react-splide/css";
import { PhoneOutgoing } from "lucide-react";

const Journey = () => {
  return (
    <main className="flex justify-center w-full mb-6">
      <div className="flex flex-col w-[100%] ">
        <div className="text-center flex flex-col-reverse lg:flex-row-reverse items-center justify-center md:justify-around gap-12 mt-8 md:mt-10 w-full px-4 py-6 text-[#B78738]">
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
            <button className="border-[#B78738] text-[#B78738] border rounded-lg font-medium md:text-xl px-5 py-1 mt-6">
              View Packages
            </button>
          </div>
          <div className="relative w-full sm:max-w-xl group lg:w-1/3  border-b-2 border-r pb-1 pr-1 border-[#B78738] rounded-lg">
            <div className="hover:translate-y-[-1%] hover:translate-x-[-1%] duration-200 ease-in-out">
              <img src="/journey.jpg" className="h-[400px] w-full rounded-lg" />
              <div className="absolute top-0 left-0 flex gap-1 p-3 bg-white rounded-br-lg">
                <div className="round-top-white ml-[-8px]"></div>
                <div className="round-bottom-white"></div>
                <a href="tel:02085547070" className="relative z-20">
                  <PhoneOutgoing className="stroke-black" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Journey;
