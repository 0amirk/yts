import Navbar from "../Navbar";
import Journey from "../Journey";
import ChooseUs from "../ChooseUs";
import Hero from "../Hero";
import Packages from "../Packages";
import AboutHero from "./AboutHero";
import Catalyst from "../Catalyst";
import Awards from "../Awards";
import Footer from "../Footer";
import Accred from "../Accred";
import AboutTxt from "./AboutTxt";
import AboutChoose from "./AboutChoose";
import Testimonials from "./Testimonials";

export default function About() {
  return (
    <>
      <Navbar />
      <AboutHero />
      <AboutTxt />
      <AboutChoose />
      <Awards />
      <Testimonials />
      <Catalyst />
      <Accred />
      <Footer />
    </>
  );
}
