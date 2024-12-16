import Navbar from "../Navbar";
import Journey from "../Journey";
import ChooseUs from "../ChooseUs";
import Hero from "../Hero";
import Packages from "../Packages";
import AboutHero from "./AboutHero";

export default function About() {
  return (
    <div>
      <Navbar />
      <AboutHero />
      <Journey />
      <ChooseUs />
    </div>
  );
}
