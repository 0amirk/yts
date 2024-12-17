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
    <main className="flex justify-around items-center flex-col-reverse md:flex-row  md:gap-12 w-full mb-6 bg-[#ca9745] px-4 py-6">
      <div className="rounded-lg fade-in">
        <div
          className="relative flex items-center justify-center mt-6 mb-6 cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <Play className="absolute w-14 h-14 stroke-black animate-play" />
          <img src="/WhyChooseUs.jpg" className="rounded-lg" />
        </div>
      </div>
      <div className=" text-[white] mt-6 mb-6 md:w-[768px] text-center">
        <p className="text-[25px] md:text-[35px] font-semibold font-charm">
          Why Choose Us
        </p>
        <p className="mt-2 text-lg md:text-xl md:mt-0">
          We are a Pilgrim Centric travel curation group of experts, Our
          objective is to provide you experiences that are Life Transforming.
        </p>
        <div className="flex gap-4 mt-8">
          <div className="flex flex-col items-center w-1/3 fade-in">
            <img src="/hajj.svg" className="w-14 h-14" />
            <p className="text-xl font-bold md:text-3xl">20K+</p>
            <p className="md:text-lg">Hajj and Umrah Pilgrims</p>
          </div>
          <div
            className="flex flex-col items-center justify-center w-1/3 fade-in"
            style={{ transitionDelay: ` 0.2s` }}
          >
            <img src="/kaaba.svg" className="w-14 h-14 stroke-white " />
            <p className="text-xl font-bold md:text-3xl">22+</p>
            <p className="md:text-lg">Years Of Pilgrim Experience</p>
          </div>
          <div
            className="flex flex-col items-center w-1/3 fade-in"
            style={{ transitionDelay: ` 0.4s` }}
          >
            <img src="/plane.svg" className="w-14 h-14" />
            <p className="text-xl font-bold md:text-3xl">75+</p>
            <p className="md:text-lg ">Years Of Travel Legacy</p>
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

export default ChooseUs;
