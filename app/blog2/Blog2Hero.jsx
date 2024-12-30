"use client";
import FloatingDockDemo from "../FloatingDock";
const Blog2Hero = () => {
  return (
    <main>
      <FloatingDockDemo />
      <div className="AboutHero w-full relative z-10 mt-16 !h-[45vh] flex justify-center items-center  text-white/95">
        <p className="font-bold text-7xl font-abril">Blog 2</p>
      </div>
    </main>
  );
};

export default Blog2Hero;
