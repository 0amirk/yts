"use client";
import { useEffect } from "react";

const Catalyst = () => {
  useEffect(() => {
    const fadeIns = document.querySelectorAll(".fade-side");

    const observerOptions = {
      root: null, // Use the viewport
      threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, observerOptions);

    // Observe all the targeted elements
    fadeIns.forEach((fadeIn) => {
      observer.observe(fadeIn);

      // Fallback check: add the show class if already visible
      if (fadeIn.getBoundingClientRect().top < window.innerHeight) {
        fadeIn.classList.add("show");
      }
    });

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, []);
  return (
    <main>
      <div className="relative flex items-start bg-black md:items-center catalyst-bg">
        <div className="absolute top-[-68%] md:top-[-20%] z-20 flex justify-center w-full min-h-[400px] md:min-h-0 md:h-1/3">
          <div className="text-black text-sm md:text-[15px] bg-white  w-[80%] p-2">
            <div className="bg-[#ca9745]  flex flex-col-reverse gap-3 md:flex-row h-full ">
              <div className="bg-black md:w-[30%] p-4 md:h-full flex justify-center items-center">
                <img src="/Award1.svg" className="w-[126px] h-[147px]" />
              </div>
              <div className="md:max-w-[70%] p-4 flex flex-col justify-center">
                <p className="text-[24px] md:text-[33px] mb-4 font-bold">
                  Awards & Accolades
                </p>
                <p>
                  Over the years we have received numerous awards and letters of
                  endorsements in recognizing the services we provide, most
                  recently the public voted and nominated us for both{" "}
                  <span className="font-bold">
                    {" "}
                    the Best Hajj and Best UK Umrah Operator 2018 and 2019{" "}
                  </span>{" "}
                  categories, at the awards ceremony organized by the Council of
                  British Hajis, CBHUK.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:max-w-lg max-w-[300px] px-4 py-6 mt-20 md:mt-12 text-white fade-side">
          <p className="text-[30px] md:text-[35px] font-semibold font-charm">
            Your Intention Will Be The Catalyst Of Your Transformation
          </p>
          <p className="mt-4 text-base md:text-xl">
            Your determination will decide the beginning of your spiritual
            journey.
          </p>
          <form className="md:w-[70%] flex p-3 mt-8 border border-white rounded-lg">
            <input
              type="text"
              placeholder="Email Address"
              className="w-full px-3 py-1 bg-transparent focus:outline-none focus:ring-0"
            />
            <button className="hover:opacity-90">Submit</button>
          </form>
        </div>
      </div>
    </main>
  );
};
export default Catalyst;
