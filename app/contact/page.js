import Accred from "../Accred";
import Footer from "../Footer";
import Navbar from "../Navbar";
import ContactHero from "./ContactHero";
import ContactInfo from "./ContactInfo";
import MapComponent from "./Map";

export default function Contact() {
  return (
    <>
      <Navbar />
      <ContactHero />
      <ContactInfo />
      <MapComponent />
      <Accred />
      <Footer />
    </>
  );
}
