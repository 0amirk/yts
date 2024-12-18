"use client";
import "@splidejs/react-splide/css";
import { MoveRight } from "lucide-react";
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
          <p className="mt-6 md:text-[25px] text-[20px] font-medium text-black font-oswald">
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
          <div className="flex flex-col items-center shrink md:flex-row">
            {/* First Div */}
            <div className="flex flex-col items-start justify-end w-full  md:w-1/2 !h-[300px] md:!h-[500px] fade-in">
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src="/hajj.jpg"
                  loading="lazy"
                  className="w-full h-full duration-500 ease-in-out hover:scale-[140%]"
                />
                <div className="absolute bottom-0 w-full max-w-[250px] p-2 mb-2 ml-2 md:mb-4 md:ml-4 bg-black/50">
                  <div className="w-full text-white feature-box">
                    <p className="text-[30px] md:text-[35px] font-semibold font-oswald">
                      Hajj{" "}
                      <span className="md:text-[30px] font-normal">2025</span>
                    </p>
                    <button className="mt-1 md:text-lg group">
                      <Link href="/hajj">
                        <div className="flex items-center gap-[6px]">
                          <p>Enquire Now</p>{" "}
                          <MoveRight className="mt-1 duration-200 group-hover:translate-x-1" />
                        </div>
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/*Second Div*/}
            <div className="flex flex-col items-start justify-end w-full  md:w-1/2 !h-[300px] md:!h-[500px] fade-in">
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src="/umrah.jpg"
                  loading="lazy"
                  className="w-full h-full duration-500 ease-in-out hover:scale-[140%]"
                />
                <div className="absolute bottom-0 w-full max-w-[250px] p-2 mb-2 ml-2 md:mb-4 md:ml-4 bg-black/50">
                  <div className="w-full text-white feature-box">
                    <p className="text-[30px] md:text-[35px] font-semibold font-oswald">
                      Umrah{" "}
                      <span className="md:text-[30px] font-normal">2025</span>
                    </p>
                    <button className="mt-1 md:text-lg group">
                      <Link href="/umrah">
                        <div className="flex items-center gap-[6px]">
                          <p>Enquire Now</p>{" "}
                          <MoveRight className="mt-1 duration-200 group-hover:translate-x-1" />
                        </div>
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* NEXT ROW */}
          <div className="flex flex-col items-center shrink md:flex-row">
            {/* THIRD DIV */}
            <div className="flex flex-col items-start justify-end w-full  md:w-1/2 !h-[300px] md:!h-[500px] fade-in">
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src="/ramadan.jpg"
                  loading="lazy"
                  className="w-full h-full duration-500 ease-in-out hover:scale-[140%]"
                />
                <div className="absolute bottom-0 w-full max-w-[280px] p-2 mb-2 ml-2 md:mb-4 md:ml-4 bg-black/50">
                  <div className="w-full text-white feature-box">
                    <p className="text-[30px] md:text-[35px] font-semibold font-oswald">
                      Ramadan{" "}
                      <span className="md:text-[30px] font-normal">2025</span>
                    </p>
                    <button className="mt-1 md:text-lg group">
                      <Link href="/ramadan">
                        <div className="flex items-center gap-[6px]">
                          <p>Enquire Now</p>{" "}
                          <MoveRight className="mt-1 duration-200 group-hover:translate-x-1" />
                        </div>
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* FOURTH DIV */}
            <div className="flex flex-col items-start justify-end w-full  md:w-1/2 !h-[300px] md:!h-[500px] fade-in">
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src="/ziyarat.jpg"
                  loading="lazy"
                  className="w-full h-full duration-500 ease-in-out hover:scale-[140%]"
                />
                <div className="absolute bottom-0 w-full max-w-[250px] p-2 mb-2 ml-2 md:mb-4 md:ml-4 bg-black/50">
                  <div className="w-full text-white feature-box">
                    <p className="text-[30px] md:text-[35px] font-semibold font-oswald">
                      Ziyarat{" "}
                      <span className="md:text-[30px] font-normal">2025</span>
                    </p>

                    <button
                      className="mt-1 md:text-lg group"
                      onClick={() => setIsOpen(true)}
                    >
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
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={closeModal}>
        <div className="hidden overflow-hidden rounded-lg md:block">
          <iframe
            width="700"
            height="512"
            src="https://www.youtube-nocookie.com/embed/waRrwCyuGa0?si=RohBSYmUZqrr3E7Y"
            title="Why Choose Us"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className=""
          ></iframe>
        </div>
        <div className="overflow-hidden rounded-lg md:hidden">
          <iframe
            width="350"
            height="300"
            src="https://www.youtube-nocookie.com/embed/waRrwCyuGa0?si=RohBSYmUZqrr3E7Y"
            title="Why Choose Us"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </Modal>
    </main>
  );
};

export default Packages;
