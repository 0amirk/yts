"use client";
import { PhoneOutgoing } from "lucide-react";
import { useEffect } from "react";

const Journey = () => {
  useEffect(() => {
    const showColor = document.querySelectorAll(".show-color");

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

    showColor.forEach((showColor) => observer.observe(showColor));

    // Cleanup the observer on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    <main className="flex items-center justify-center w-full px-6 py-12 xl:px-24 md:py-16 font-montserrat">
      <div className="flex flex-col items-center justify-center max-w-[2000px]">
        <p className="text-[38px] sm:text-[45px] md:text-[50px] text-center font-abril text-[#B78738] md:mb-8">
          Plan Your Spiritual Journey With Us
        </p>
        <div className="flex flex-col md:flex-row-reverse items-center justify-around w-[100%] ">
          <div className="text-center md:w-1/2  w-full px-3 md:px-10 py-6 text-[#B78738]">
            <div>
              <p className="text-[#303030] max-w-3xl">
                Our legacy of facilitating pilgrims in performing their Umrah
                and obligatory religious Hajj duty goes back to over two decades
                when the visionary Late Haji Bashir Bhai Chokhawala laid the
                foundation of yourtravelshop.com in partnership with Haji Yusuf
                Bhai Kherada of Al Khalid Tours, Mumbai in 1995. Coupled with
                our vast and deep knowledge of the UK Mualim brothers and
                sisters.
              </p>
              <p className="text-[#303030] mt-4 max-w-3xl">
                The above put together drives our expertise to be able to curate
                nothing but the best for your journey to the house of Allah.
              </p>
              <button className="border-[#B78738] text-[#B78738] border font-medium md:text-xl px-5 py-1 mt-6">
                View Packages
              </button>
            </div>
          </div>
          <div className="relative w-full group md:w-1/3 xl:max-w-[700px]">
            <div className="h-[400px] md:h-[500px]">
              <img
                src="/journey.jpg"
                className="relative w-full h-full transition-all duration-500 ease-in-out show-color"
              />
              <div className="absolute top-[2%] right-[2%] hover:scale-95 hover:opacity-80 opacity-90 duration-300 ease-in-out px-5 py-3 bg-white">
                <a
                  href="tel:02085547070"
                  className="relative z-20 flex items-center gap-3 text-xl"
                >
                  <PhoneOutgoing className="stroke-black" /> Call Us
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
