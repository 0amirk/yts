"use client";
import "@splidejs/react-splide/css";
import { useEffect, useState } from "react";
import Link from "next/link";
import Modal from "./components/dialog";
const Packages = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);

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
    <main className="flex justify-center w-full font-montserrat text-white/95">
      <div className="flex flex-col w-full bg-white">
        <div className="text-center flex flex-col items-center justify-start mt-8 md:mt-10 w-full px-4 py-6 text-[#B78738] ">
          <p className="text-[25px] md:!text-[40px] text-[#B78738] font-abril  md:text-lg">
            Explore options to visit the house of{" "}
            <span className=""> ﷻ ﷲ </span>
          </p>
          <p className="mt-6 md:text-[25px] text-[20px] text-black font-semibold">
            Pilgrim Packages
          </p>
          <p className="text-[#303030] mt-2 max-w-5xl">
            Our expert team of experienced professionals in England, India, and
            Saudi Arabia is committed to ensuring that every aspect of this holy
            spiritual pilgrimage is executed flawlessly, and the pilgrim is in a
            relaxed state of mind during the sacred journey.
          </p>
        </div>
        <div className="mt-4 text-black md:block">
          <div className="flex flex-col items-center justify-center px-6 xl:px-24 shrink md:flex-row">
            {/* First Div */}
            <div className="flex flex-col items-start justify-end w-full  md:w-1/2 !h-[300px] md:!h-[400px] xl:!h-[500px] max-w-[1000px] fade-in">
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src="/hajj.png"
                  className="w-full h-full duration-500 ease-in-out hover:scale-[140%] hover:grayscale-0 filter grayscale"
                />
                <div className="absolute bottom-0 w-full max-w-[250px] p-2 mb-2 ml-2 md:mb-4 md:ml-4 bg-black/50">
                  <div className="w-full text-white feature-box">
                    <p className="text-[30px] md:text-[35px] font-abril">
                      Hajj{" "}
                      <span className="md:text-[30px] font-normal">2025</span>
                    </p>
                    <button className="mt-1 md:text-lg group">
                      <Link href="/hajj">
                        <p className="font-bold">Enquire Now</p>
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/*Second Div*/}
            <div className="flex flex-col items-start justify-end w-full  md:w-1/2 !h-[300px] md:!h-[400px] xl:!h-[500px] max-w-[1000px] fade-in">
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src="/umrah.webp"
                  className="w-full h-full duration-500 ease-in-out hover:scale-[140%] hover:grayscale-0 filter grayscale"
                />
                <div className="absolute bottom-0 w-full max-w-[250px] p-2 mb-2 ml-2 md:mb-4 md:ml-4 bg-black/50">
                  <div className="w-full text-white feature-box">
                    <p className="text-[30px] md:text-[35px] font-abril">
                      Umrah{" "}
                      <span className="md:text-[30px] font-normal">2025</span>
                    </p>
                    <button className="mt-1 md:text-lg group">
                      <Link href="/umrah">
                        <p className="font-bold">Enquire Now</p>{" "}
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* NEXT ROW */}
          <div className="flex flex-col items-center justify-center px-6 xl:px-24 shrink md:flex-row ">
            {/* THIRD DIV */}
            <div className="flex flex-col items-start justify-end w-full  md:w-1/2 !h-[300px] md:!h-[400px] xl:!h-[500px] max-w-[1000px] fade-in">
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src="/ramadan.jpg"
                  className="w-full h-full duration-500 ease-in-out hover:scale-[140%] hover:grayscale-0 filter grayscale"
                />
                <div className="absolute bottom-0 w-full max-w-[280px] p-2 mb-2 ml-2 md:mb-4 md:ml-4 bg-black/50">
                  <div className="w-full text-white feature-box">
                    <p className="text-[30px] md:text-[35px] font-abril">
                      Ramadan{" "}
                      <span className="md:text-[30px] font-normal">2025</span>
                    </p>
                    <button className="mt-1 md:text-lg group">
                      <Link href="/ramadan">
                        <p className="font-bold">Enquire Now</p>
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* FOURTH DIV */}
            <div className="flex flex-col items-start justify-end w-full  md:w-1/2 !h-[300px] md:!h-[400px] xl:!h-[500px] max-w-[1000px] fade-in">
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src="/ziyarat.webp"
                  className="w-full h-full duration-500 ease-in-out hover:scale-[140%] hover:grayscale-0 filter grayscale"
                />
                <div className="absolute bottom-0 w-full max-w-[250px] p-2 mb-2 ml-2 md:mb-4 md:ml-4 bg-black/50">
                  <div className="w-full text-white feature-box">
                    <p className="text-[30px] md:text-[35px] font-abril">
                      Ziyarat{" "}
                      <span className="md:text-[30px] font-normal">2025</span>
                    </p>

                    <button
                      className="mt-1 md:text-lg group"
                      onClick={() => setIsOpen(true)}
                    >
                      <p className="font-bold">Enquire Now</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={closeModal}>
        <div className="w-full overflow-hidden text-center text-black rounded-lg font-montserrat">
          <p className="text-2xl font-bold">Stay Updated</p>
          <form className="w-full mt-4 mb-4">
            <div className="flex flex-col gap-3 md:flex-row">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-3 py-1 bg-transparent border border-gray-400 focus:outline-none focus:ring-0"
              />
              <input
                type="text"
                placeholder="Email Address"
                className="w-full px-3 py-1 bg-transparent border border-gray-400 focus:outline-none focus:ring-0"
              />
              <input
                type="text"
                placeholder="Mobile Number"
                className="w-full px-3 py-1 bg-transparent border border-gray-400 focus:outline-none focus:ring-0"
              />
            </div>
            <textarea
              type="text"
              placeholder="Enter Your Message"
              className="w-full px-3 py-1 mt-4 bg-transparent border border-gray-400 focus:outline-none focus:ring-0"
            />
            <button className="border-[#B78738] text-[#B78738] border font-medium md:text-xl px-5 py-1 mt-4">
              Submit
            </button>
          </form>
        </div>
      </Modal>
    </main>
  );
};

export default Packages;
