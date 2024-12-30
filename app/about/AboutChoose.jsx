"use client";
import { useEffect } from "react";

const AboutChoose = () => {
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
    <main>
      <div>
        <div className="flex items-center justify-center h-full mt-12">
          <p className="text-[38px] sm:text-[45px] md:text-[50px] font-abril text-[#B78738]">
            Why Choose Us
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-12 text-center md:flex-row">
          <div className="flex flex-col font-montserrat items-center w-[350px] px-6 py-4 mt-4 bg-white fade-in shadow-lg">
            <img src="/hajj.svg" className="w-14 h-14" />
            <p className="text-xl font-bold md:text-3xl">20K+</p>
            <p className="font-semibold md:text-lg">Hajj and Umrah Pilgrims</p>
            <p className="mt-2 text-sm">
              We have had the privilege of guiding over 20,000 pilgrims on their
              sacred journeys. Our commitment to providing a seamless and
              spiritual experience ensures that each pilgrim’s journey is
              handled with the utmost care and dedication.
            </p>
          </div>
          <div
            className="flex flex-col font-montserrat items-center  w-[350px] px-6 py-4 mt-4 bg-white fade-in shadow-lg"
            style={{ transitionDelay: ` 0.2s` }}
          >
            <img src="/kaaba.svg" className="w-14 h-14" />
            <p className="text-xl font-bold md:text-3xl">22+</p>
            <p className="font-semibold md:text-lg">
              Years Of Pilgrim Experience
            </p>
            <p className="mt-2 text-sm">
              With over 22 years of specialized experience in organizing Hajj
              and Umrah trips, we have developed a deep understanding of the
              needs of every pilgrim. Our expertise ensures that your spiritual
              journey is safe, and meaningful.
            </p>
          </div>
          <div
            className="flex flex-col font-montserrat items-center w-[350px] px-6 py-4 mt-4 bg-white fade-in shadow-lg"
            style={{ transitionDelay: ` 0.4s` }}
          >
            <img src="/plane.svg" className="w-14 h-14" />
            <p className="text-xl font-bold md:text-3xl">75+</p>
            <p className="font-semibold md:text-lg">Years Of Travel Legacy</p>
            <p className="mt-2 text-sm">
              With a legacy spanning over 75 years in the travel industry, we
              bring unmatched knowledge and reliability to every trip. Our long
              history is a testament to our dedication to providing high-quality
              travel experiences for pilgrims across the globe.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};
export default AboutChoose;
