"use client";
import FloatingDockDemo from "../FloatingDock";
const AboutHero = () => {
  return (
    <main>
      <FloatingDockDemo />
      <div className="AboutHero w-full relative z-10 mt-16 md:!h-[65vh] !h-[50vh] text-white/95">
        <p className="text-[38px] sm:text-[45px] md:text-[50px] font-abril text-white justify-center flex items-center  px-4 py-6 bg-black/40 md:px-12 h-full w-full">
          Trust Us To Guide You On A Journey Of Faith
        </p>
      </div>
    </main>
  );
};

export default AboutHero;
