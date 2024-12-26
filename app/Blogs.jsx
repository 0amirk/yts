"use client";
import Link from "next/link";
import { useEffect } from "react";
const Blogs = () => {
  useEffect(() => {
    const opacityIns = document.querySelectorAll(".precautions-opacity");

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

    opacityIns.forEach((opacityIn) => observer.observe(opacityIn));

    // Cleanup the observer on component unmount
    return () => observer.disconnect();
  }, []);
  return (
    <main className="flex justify-center w-full mb-6 text-white/95 font-montserrat">
      <div className="flex flex-col bg-white  w-[100%]">
        <div className="text-center flex flex-col items-center justify-start mt-8 md:mt-10 w-full px-4 py-6 text-[#B78738] ">
          <p className="text-[25px] md:!text-[35px] text-[#B78738] font-abril md:text-lg">
            Guide Blogs
          </p>
          <p className="mt-6 md:text-[25px] text-[20px] font-semibold text-black">
            Our Recent Features
          </p>
          <p className="text-[#303030] mt-2 max-w-5xl">
            In this section we have penned down a whole lot of information that
            will guide you to understand everything related to your commitment
            towards pilgrimage.
          </p>
        </div>
        <div className="px-6 mt-4 mb-8 text-black md:mb-10 md:block">
          <div className="flex flex-col items-center justify-center gap-y-2 gap-x-2 md:gap-y-2 md:shrink md:flex-row">
            {/* First Div */}
            <div className="flex flex-col items-start justify-center h-full overflow-hidden group precautions-opacity">
              <Link href="/blog1">
                <div className="relative overflow-hidden">
                  <img
                    src="/blog1.jpg"
                    loading="lazy"
                    className="h-[600px] w-[350px]"
                  />
                  <div className="absolute top-0 left-0 w-full h-full duration-500 bg-black opacity-35 group-hover:opacity-20"></div>
                  <div className="absolute bottom-0 z-0 px-4 pb-4 text-white">
                    <p className="text-3xl text-[#B78738] font-abril">
                      <span className="text-lg font-normal text-white/90">
                        17th August, 2021
                      </span>
                    </p>
                    <p className="mt-3 text-xl font-semibold  max-w-[300px]">
                      Guide For First Time Pilgrims Part 1
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="flex flex-col items-start justify-center h-full overflow-hidden group precautions-opacity">
              <Link href="/blog2">
                <div className="relative overflow-hidden">
                  <img
                    src="/blog2.jpg"
                    loading="lazy"
                    className="h-[600px] w-[350px]"
                  />
                  <div className="absolute top-0 left-0 w-full h-full duration-500 bg-black opacity-35 group-hover:opacity-20"></div>
                  <div className="absolute bottom-0 z-0 px-4 pb-4 text-white">
                    <p className="text-3xl text-[#B78738] font-abril">
                      <span className="text-lg font-normal text-white/80">
                        17th August, 2021
                      </span>
                    </p>
                    <p className="mt-3 text-xl font-semibold  max-w-[300px]">
                      Guide For First Time Pilgrims Part 2
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="flex flex-col items-start justify-center h-full overflow-hidden group precautions-opacity">
              <Link href="/blog3">
                <div className="relative overflow-hidden">
                  <img
                    src="/blog3.jpg"
                    loading="lazy"
                    className="h-[600px] w-[350px]"
                  />
                  <div className="absolute top-0 left-0 w-full h-full duration-500 bg-black opacity-35 group-hover:opacity-20"></div>
                  <div className="absolute bottom-0 z-0 px-4 pb-4 text-white">
                    <p className="text-3xl text-[#B78738] font-abril">
                      <span className="text-lg font-normal text-white/80">
                        17th August, 2021
                      </span>
                    </p>
                    <p className="mt-3 text-xl font-semibold  max-w-[300px]">
                      Guide For First Time Pilgrims Part 3
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="flex flex-col items-start justify-center h-full overflow-hidden group precautions-opacity">
              <Link href="/blog4">
                <div className="relative overflow-hidden">
                  <img
                    src="/blog4.jpg"
                    loading="lazy"
                    className="h-[600px] w-[350px]"
                  />
                  <div className="absolute top-0 left-0 w-full h-full duration-500 bg-black opacity-35 group-hover:opacity-20"></div>
                  <div className="absolute bottom-0 z-0 px-4 pb-4 text-white">
                    <p className="text-3xl text-[#B78738] font-abril">
                      <span className="text-lg font-normal text-white/80">
                        17th August, 2021
                      </span>
                    </p>
                    <p className="mt-3 text-xl font-semibold  max-w-[300px]">
                      Guide For First Time Pilgrims Part 4
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Blogs;
