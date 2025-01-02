"use client";
import { useState } from "react";
import { Play } from "lucide-react";
import Modal from "../components/dialog";
const AboutTxt = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  return (
    <main className="flex flex-col-reverse justify-center w-full gap-12 px-4 py-6 mt-8 md:mt-10 md:flex-row">
      <div className="md:w-[1000px] relative w-full ">
        <div
          className="absolute flex items-center justify-center w-full h-full cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <Play className="absolute z-30 w-10 h-10 mb-12 md:mb-0 md:w-14 md:h-14 stroke-white animate-play" />
        </div>

        <div
          className="absolute z-20 flex items-end justify-center w-full h-full pb-12 cursor-pointer bg-black/20"
          onClick={() => setIsOpen(true)}
        >
          <p className="text-3xl text-white md:text-5xl font-abril">
            Discover Your Roots
          </p>
        </div>
        <img src="/AboutUs/test.jpg" className="w-full h-full" />
      </div>
      <div className="md:w-[1000px] font-montserrat">
        <p className="font-abril leading-none  text-[38px] sm:text-[45px] md:text-[50px] text-[#B78738]">
          About Us
        </p>
        <p className="mt-2 text-sm md:mt-4 md:text-xl">
          At YourTravelShop, we believe that every pilgrimage is not just a
          journey, but a deeply spiritual experience. Since our founding, our
          mission has been to provide the most seamless, comforting, and
          enriching Hajj, Umrah, and Ziyarat trips.
        </p>
        <p className="mt-2 text-sm md:text-xl">
          We understand the sacredness of these travels, and we are dedicated to
          making every step of your journey as meaningful as the destination
          itself. Our team is committed to providing personalized care, offering
          expert guidance, and ensuring that every detail of your trip is
          handled with the utmost attention. Whether you are a first-time
          traveler or returning for another pilgrimage, we are here to guide you
          through each step, making your journey memorable and spiritually
          fulfilling.
        </p>
        <p className="mt-2 text-sm md:text-xl">
          Watch the video to learn more about our passion for helping you
          achieve a life-changing experience, grounded in faith and trust.
        </p>
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
export default AboutTxt;
