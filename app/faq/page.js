import Navbar from "../Navbar";
import Questions from "./Questions";
import Footer from "../Footer";
import Accred from "../Accred";
import FaqHero from "./FaqHero";

export default function FAQ() {
  return (
    <>
      <Navbar />
      <FaqHero />
      <Questions />
      <Accred />
      <Footer />
    </>
  );
}
