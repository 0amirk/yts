"use client";
import { useState, useEffect } from "react";
import Modal from "./components/dialog";
import { Play } from "lucide-react";
const ChooseUs = () => {
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
    <main className="relative chooseUs-bg">
      <div className="absolute top-[10%] flex justify-center w-full">
        <Play
          className="cursor-pointer w-14 h-14 stroke-white animate-play"
          onClick={() => setIsOpen(true)}
        />
      </div>
      <div className="flex items-center justify-center h-full ">
        <p className="text-[38px] sm:text-[45px] md:text-[50px] font-abril text-white">
          Why Choose Us
        </p>
      </div>
      <div className="absolute text-center items-center bottom-[-30%] md:bottom-[-30%] h-[300px] w-full flex justify-center gap-12">
        <div className="flex flex-col items-center w-[250px] h-[188px] px-2 py-4 bg-white fade-in">
          <img src="/hajj.svg" className="w-14 h-14" />
          <p className="text-xl font-bold md:text-3xl">20K+</p>
          <p className="md:text-lg">Hajj and Umrah Pilgrims</p>
        </div>
        <div
          className="flex flex-col items-center w-[250px] h-[188px] px-2 py-4 bg-white fade-in"
          style={{ transitionDelay: ` 0.2s` }}
        >
          <img src="/kaaba.svg" className="w-14 h-14" />
          <p className="text-xl font-bold md:text-3xl">22+</p>
          <p className="md:text-lg">Years Of Pilgrim Experience</p>
        </div>
        <div
          className="flex flex-col items-center w-[250px] h-[188px] px-2 py-4 bg-white fade-in"
          style={{ transitionDelay: ` 0.4s` }}
        >
          <img src="/plane.svg" className="w-14 h-14" />
          <p className="text-xl font-bold md:text-3xl">75+</p>
          <p className="md:text-lg">Years Of Travel Legacy</p>
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

export default ChooseUs;
