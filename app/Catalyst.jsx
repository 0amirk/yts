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
      <div className="relative flex flex-col items-start justify-center gap-12 bg-gray-200/30 font-montserrat md:flex-row-reverse md:items-center">
        <div className="md:w-[70%] max-w-[1000px]">
          <img src="/catalyst.webp" />
        </div>
        <div className="px-4 py-6 text-black md:mt-12 fade-side">
          <p className="text-[30px] md:text-[35px] font-abril">
            Your Intention Will Be The Catalyst Of Your Transformation
          </p>
          <p className="mt-4 text-base md:text-xl">
            Your determination will decide the beginning of your spiritual
            journey.
          </p>
          <form className="md:w-[70%] flex p-3 mt-8 border border-gray-400 rounded-lg">
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
