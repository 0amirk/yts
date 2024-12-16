import Image from "next/image";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Packages from "./Packages";
import Journey from "./Journey";
import ChooseUs from "./ChooseUs";
import Precautions from "./Precautions";
export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Packages />
      <Journey />
      <ChooseUs />
      <Precautions />
    </div>
  );
}
