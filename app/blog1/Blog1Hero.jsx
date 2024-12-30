"use client";
import FloatingDockDemo from "../FloatingDock";
const Blog1Hero = () => {
  return (
    <main>
      <FloatingDockDemo />
      <div className="AboutHero w-full relative z-10 mt-16 !h-[45vh] flex justify-center items-center  text-white/95">
        <p className="font-bold text-7xl font-abril">Blog 1</p>
      </div>
    </main>
  );
};

export default Blog1Hero;
