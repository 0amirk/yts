import Image from "next/image";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Packages from "./Packages";
import Journey from "./Journey";
import ChooseUs from "./ChooseUs";
export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Packages />
      <Journey />
      <ChooseUs />
    </div>
  );
}
