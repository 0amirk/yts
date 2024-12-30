"use client";
import FloatingDockDemo from "../FloatingDock";
const AboutHero = () => {
  return (
    <main>
      <FloatingDockDemo />
      <div className="AboutHero w-full relative z-10 mt-16 !h-[45vh] flex justify-center items-center  text-white/95">
        <p className="text-[38px] sm:text-[45px] md:text-[50px] font-abril text-white">
          Trust Us To Guide You On A Journey Of Faith
        </p>
      </div>
    </main>
  );
};

export default AboutHero;
