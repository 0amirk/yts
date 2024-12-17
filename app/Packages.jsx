"use client";
import "@splidejs/react-splide/css";
import { MoveRight } from "lucide-react";
import { useEffect } from "react";

const Packages = () => {
  useEffect(() => {
    const fadeIns = document.querySelectorAll(".fade-in");

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

    fadeIns.forEach((fadeIn) => observer.observe(fadeIn));

    // Cleanup the observer on component unmount
    return () => observer.disconnect();
  }, []);
  return (
    <main className="flex justify-center w-full mb-6 font-montserrat text-white/95">
      <div className="flex flex-col bg-white shadow-lg backdrop-blur-md w-[100%] rounded-b-lg ">
        <div className="text-center flex flex-col items-center justify-start mt-8 md:mt-10 w-full px-4 py-6 text-[#B78738] ">
          <p className="text-[25px] md:!text-[40px] text-[#B78738] font-mySoul md:text-lg">
            Explore options to visit the house of ﷻ ﷲ
          </p>
          <p className="mt-6 md:text-[25px] text-[20px] font-semibold text-black">
            Pilgrim Packages
          </p>
          <p className="text-[#303030] mt-2 max-w-5xl">
            Our expert team of experienced professionals in England, India, and
            Saudi Arabia is committed to ensuring that every aspect of this holy
            spiritual pilgrimage is executed flawlessly, and the pilgrim is in a
            relaxed state of mind during the sacred journey.
          </p>
        </div>
        <div className="px-6 mt-4 mb-8 text-black md:mb-10 md:block">
          <div className="flex flex-col items-center justify-around gap-x-4 gap-y-4 md:gap-y-8 md:flex-wrap md:flex-row">
            {/* First Div */}
            <div className="flex flex-col items-start justify-center h-full fade-in feature-box">
              <div className="overflow-hidden">
                <img
                  src="/hajj-updated.jpg"
                  loading="lazy"
                  className="md:h-[200px] md:w-[320px]"
                />
              </div>
              <div className="mt-2 ml-2">
                <p className="text-3xl text-[#B78738] font-semibold font-charm">
                  Hajj{" "}
                  <span className="text-xl font-normal text-black">2025</span>
                </p>
                <p className="mt-3 text-lg font-semibold max-w-[300px]">
                  The Reward For An Accepted Hajj is Paradise
                </p>
                <button className="mt-1 md:text-lg group">
                  <div className="flex items-center gap-[6px]">
                    <p>Enquire Now</p>{" "}
                    <MoveRight className="mt-1 duration-200 group-hover:translate-x-1" />
                  </div>
                </button>
              </div>
            </div>

            {/* Second Div */}
            <div
              className="flex flex-col items-start justify-center h-full fade-in feature-box"
              style={{ transitionDelay: ` 0.2s` }}
            >
              <div className="overflow-hidden">
                <img
                  src="/umrah-updated.jpg"
                  loading="lazy"
                  className="md:h-[200px] md:w-[320px]"
                />
              </div>
              <div className="mt-2 ml-2">
                <p className="text-3xl text-[#B78738] font-semibold font-charm">
                  Umrah{" "}
                  <span className="text-xl font-normal text-black">2025</span>
                </p>
                <p className="mt-3 text-lg font-semibold max-w-[300px]">
                  Umrah Trips That Are Planned As Per Your Needs
                </p>
                <button className="mt-1 md:text-lg group">
                  <div className="flex items-center gap-[6px]">
                    <p>Enquire Now</p>{" "}
                    <MoveRight className="mt-1 duration-200 group-hover:translate-x-1" />
                  </div>
                </button>
              </div>
            </div>
            {/* third div */}
            <div
              className="flex flex-col items-start justify-center h-full fade-in feature-box"
              style={{ transitionDelay: ` 0.4s` }}
            >
              <div className="overflow-hidden">
                <img
                  src="/ramadan-updated.jpg"
                  loading="lazy"
                  className="md:h-[200px] md:w-[320px]"
                />
              </div>
              <div className="mt-2 ml-2">
                <p className="text-3xl text-[#B78738] font-semibold font-charm">
                  Ramadan{" "}
                  <span className="text-xl font-normal text-black">2025</span>
                </p>
                <p className="mt-3 text-lg font-semibold max-w-[300px]">
                  Curating The Best For Ramadan Umrah
                </p>
                <button className="mt-1">
                  <div className="flex md:text-lg items-center gap-[6px] group">
                    <p>Enquire Now</p>{" "}
                    <MoveRight className="mt-1 duration-200 group-hover:translate-x-1" />
                  </div>
                </button>
              </div>
            </div>

            {/* fourth div */}
            <div
              className="flex flex-col items-start justify-center h-full fade-in feature-box"
              style={{ transitionDelay: ` 0.6s` }}
            >
              <div className="overflow-hidden">
                <img
                  src="/ziyarat.jpg"
                  loading="lazy"
                  className="md:h-[200px] md:w-[320px]"
                />
              </div>
              <div className="mt-2 ml-2">
                <p className="text-3xl text-[#B78738] font-semibold font-charm">
                  Ziyarat{" "}
                  <span className="text-xl font-normal text-black">2025</span>
                </p>
                <p className="mt-3 text-lg font-semibold max-w-[300px]">
                  Offer Salutations And Greetings To Muhammad{" "}
                  <span className="text-[#B78738] font-bold">ﷺ</span>
                </p>
                <button className="mt-1 md:text-lg group">
                  <div className="flex items-center gap-[6px]">
                    <p>Enquire Now</p>{" "}
                    <MoveRight className="mt-1 duration-200 group-hover:translate-x-1" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Packages;
