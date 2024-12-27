"use client";
import FloatingDockDemo from "../FloatingDock";
const ContactHero = () => {
  return (
    <main>
      <FloatingDockDemo />
      <div className="AboutHero w-full relative z-10 mt-16 !h-[45vh] flex justify-center items-center  text-white/95">
        <p className="font-bold text-7xl font-abril">Contact Us</p>
      </div>
    </main>
  );
};

export default ContactHero;
