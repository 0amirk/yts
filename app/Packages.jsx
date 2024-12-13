"use client";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { MoveRight } from "lucide-react";

const Packages = () => {
  return (
    <main className="flex justify-center w-full mb-6 text-white/95">
      <div className="flex flex-col bg-white w-[97%] shadow-lg backdrop-blur-md md:w-[98%] rounded-b-lg ">
        <div className="text-center flex flex-col items-center justify-start mt-8 md:mt-10 w-full px-4 py-6 text-[#B78738] flec-col ">
          <p className="text-[25px] md:!text-[35px] text-[#B78738] font-charm md:text-lg">
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
        {/* DESKTOP */}
        <div className="hidden px-6 mt-4 mb-8 text-black md:mb-10 cursor-grab active:cursor-grabbing md:block">
          <Splide
            options={{
              type: "slide",
              drag: "snap",
              perPage: 3,
              gap: 30,
              drag: true,
              pagination: false,
            }}
          >
            <SplideSlide>
              <div className="flex flex-col items-start justify-center h-full">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src="/hajj-updated.jpg"
                    className="transition-transform duration-300 ease-in-out rounded-lg hover:scale-110"
                  />
                </div>
                <div className="mt-2 ml-4">
                  <p className="text-3xl text-[#B78738] font-semibold font-charm">
                    Hajj{" "}
                    <span className="text-xl font-normal text-black">2025</span>
                  </p>
                  <p className="mt-3 text-lg font-semibold max-w-[300px]">
                    The Reward For An Accepted Hajj is Paradise
                  </p>
                  <button className="mt-1 text-lg group">
                    <div className="flex items-center gap-[6px]">
                      <p>Enquire Now</p>{" "}
                      <MoveRight className="mt-1 duration-100 group-hover:translate-x-1" />
                    </div>
                  </button>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="flex flex-col items-start justify-center h-full">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src="/umrah-updated.jpg"
                    className="transition-transform duration-300 ease-in-out rounded-lg hover:scale-110"
                  />
                </div>
                <div className="mt-2 ml-4">
                  <p className="text-3xl text-[#B78738] font-semibold font-charm">
                    Umrah{" "}
                    <span className="text-xl font-normal text-black">2025</span>
                  </p>
                  <p className="mt-3 text-lg font-semibold max-w-[300px]">
                    Umrah Trips That Are Planned As Per Your Needs
                  </p>
                  <button className="mt-1 text-lg group">
                    <div className="flex items-center gap-[6px]">
                      <p>Enquire Now</p>{" "}
                      <MoveRight className="mt-1 duration-100 group-hover:translate-x-1" />
                    </div>
                  </button>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="flex flex-col items-start justify-center h-full">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src="/ramadan-updated.jpg"
                    className="transition-transform duration-300 ease-in-out rounded-lg hover:scale-110"
                  />
                </div>
                <div className="mt-2 ml-4">
                  <p className="text-3xl text-[#B78738] font-semibold font-charm">
                    Ramadan{" "}
                    <span className="text-xl font-normal text-black">2025</span>
                  </p>
                  <p className="mt-3 text-lg font-semibold max-w-[300px]">
                    Curating The Best For Your Ramadan Umrah
                  </p>
                  <button className="mt-1 text-lg group">
                    <div className="flex items-center gap-[6px]">
                      <p>Enquire Now</p>{" "}
                      <MoveRight className="mt-1 duration-100 group-hover:translate-x-1" />
                    </div>
                  </button>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="flex flex-col items-start justify-center h-full">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src="/ziyarat.jpg"
                    className="transition-transform duration-300 ease-in-out rounded-lg hover:scale-110"
                  />
                </div>
                <div className="mt-2 ml-4">
                  <p className="text-3xl text-[#B78738] font-semibold font-charm">
                    Ziyarat{" "}
                    <span className="text-xl font-normal text-black">2025</span>
                  </p>
                  <p className="mt-3 text-lg font-semibold max-w-[300px]">
                    Offer Salutations And Greetings To Muhammad{" "}
                    <span className="text-[#B78738] font-bold">ﷺ</span>
                  </p>
                  <button className="mt-1 text-lg group">
                    <div className="flex items-center gap-[6px]">
                      <p>Enquire Now</p>{" "}
                      <MoveRight className="mt-1 duration-100 group-hover:translate-x-1" />
                    </div>
                  </button>
                </div>
              </div>
            </SplideSlide>
          </Splide>
        </div>
        {/* MOBILE */}
        <div className="px-6 mt-4 mb-8 text-black md:hidden md:mb-10 cursor-grab active:cursor-grabbing">
          <Splide
            options={{
              type: "slide",
              drag: "snap",
              perPage: 1,
              gap: 30,
              drag: true,
              pagination: false,
            }}
          >
            <SplideSlide>
              <div className="flex flex-col items-start justify-center h-full">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src="/hajj-updated.jpg"
                    className="transition-transform duration-300 ease-in-out rounded-lg hover:scale-110"
                  />
                </div>
                <div className="mt-2 ml-4">
                  <p className="text-3xl text-[#B78738] font-semibold font-charm">
                    Hajj{" "}
                    <span className="text-xl font-normal text-black">2025</span>
                  </p>
                  <p className="mt-3 text-lg font-semibold max-w-[300px]">
                    The Reward For An Accepted Hajj is Paradise
                  </p>
                  <button className="mt-1">
                    <div className="flex items-center gap-[6px]">
                      <p>Enquire Now</p> <MoveRight className="mt-1" />
                    </div>
                  </button>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="flex flex-col items-start justify-center h-full">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src="/umrah-updated.jpg"
                    className="transition-transform duration-300 ease-in-out rounded-lg hover:scale-110"
                  />
                </div>
                <div className="mt-2 ml-4">
                  <p className="text-3xl text-[#B78738] font-semibold font-charm">
                    Umrah{" "}
                    <span className="text-xl font-normal text-black">2025</span>
                  </p>
                  <p className="mt-3 text-lg font-semibold max-w-[300px]">
                    Umrah Trips Planned As Per Your Needs
                  </p>
                  <button className="mt-1">
                    <div className="flex items-center gap-[6px]">
                      <p>Enquire Now</p> <MoveRight className="mt-1" />
                    </div>
                  </button>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="flex flex-col items-start justify-center h-full">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src="/ramadan-updated.jpg"
                    className="transition-transform duration-300 ease-in-out rounded-lg hover:scale-110"
                  />
                </div>
                <div className="mt-2 ml-4">
                  <p className="text-3xl text-[#B78738] font-semibold font-charm">
                    Ramadan{" "}
                    <span className="text-xl font-normal text-black">2025</span>
                  </p>
                  <p className="mt-3 text-lg font-semibold max-w-[300px]">
                    Curating The Best For Ramadan Umrah
                  </p>
                  <button className="mt-1">
                    <div className="flex items-center gap-[6px]">
                      <p>Enquire Now</p> <MoveRight className="mt-1" />
                    </div>
                  </button>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="flex flex-col items-start justify-center h-full">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src="/ziyarat.jpg"
                    className="transition-transform duration-300 ease-in-out rounded-lg hover:scale-110"
                  />
                </div>
                <div className="mt-2 ml-4">
                  <p className="text-3xl text-[#B78738] font-semibold font-charm">
                    Ziyarat{" "}
                    <span className="text-xl font-normal text-black">2025</span>
                  </p>
                  <p className="mt-3 text-lg font-semibold max-w-[300px]">
                    Offer Salutations And Greetings To Muhammad{" "}
                    <span className="text-[#B78738] font-bold text-xl">ﷺ</span>
                  </p>
                  <button className="mt-1">
                    <div className="flex items-center gap-[6px]">
                      <p>Enquire Now</p> <MoveRight className="mt-1" />
                    </div>
                  </button>
                </div>
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </main>
  );
};

export default Packages;
