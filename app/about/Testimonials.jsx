"use client";
import { useEffect } from "react";

const Testimonials = () => {
  useEffect(() => {
    const opacityIns = document.querySelectorAll(".precautions-opacity");

    const observerOptions = {
      root: null, // Use the viewport
      threshold: 0.5, // Trigger when 50% of the element is visible
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

  return (
    <main>
      <div className="mb-12">
        <div className="flex items-center justify-center h-full mt-12">
          <p className="text-[38px] sm:text-[45px] md:text-[50px] font-abril text-[#B78738]">
            Testimonials
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-12 text-center precautions-opacity font-montserrat md:flex-row">
          <div className="flex flex-col font-montserrat items-start text-start w-[350px] px-6 py-4 mt-4 bg-gray-200/30">
            <p className="text-3xl font-bold md:text-5xl font-montserrat">“</p>
            <p className="font-semibold md:text-lg">
              I had a life changing experience while perfoming umrah with
              yourtravelshop.com, their guidance and facilities were impeccable.
              I pray to Allah for their well being.
            </p>
            <div className="flex items-center gap-3 mt-2 text-sm">
              <img src="/about/test.jpg" className="rounded-full w-14 h-14" />
              <p className="text-lg text-black/60">Mohammed Ozair</p>
            </div>
          </div>
          {/* SECOND */}
          <div className="flex flex-col font-montserrat items-start text-start w-[350px] px-6 py-4 mt-4 bg-gray-200/30">
            <p className="text-3xl font-bold md:text-5xl font-montserrat">“</p>
            <p className="font-semibold md:text-lg">
              I had a life changing experience while perfoming umrah with
              yourtravelshop.com, their guidance and facilities were impeccable.
              I pray to Allah for their well being.
            </p>
            <div className="flex items-center gap-3 mt-2 text-sm">
              <img src="/about/test.jpg" className="rounded-full w-14 h-14" />
              <p className="text-lg text-black/60">Mohammed Ozair</p>
            </div>
          </div>
          {/* THIRD */}
          <div className="flex flex-col font-montserrat items-start text-start w-[350px] px-6 py-4 mt-4 bg-gray-200/30">
            <p className="text-3xl font-bold md:text-5xl font-montserrat">“</p>
            <p className="font-semibold md:text-lg">
              I had a life changing experience while perfoming umrah with
              yourtravelshop.com, their guidance and facilities were impeccable.
              I pray to Allah for their well being.
            </p>
            <div className="flex items-center gap-3 mt-2 text-sm">
              <img src="/about/test.jpg" className="rounded-full w-14 h-14" />
              <p className="text-lg text-black/60">Mohammed Ozair</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Testimonials;
