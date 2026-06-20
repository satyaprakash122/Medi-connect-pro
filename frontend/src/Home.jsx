import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Gallery from "./components/Gallery";
import Profiles from "./components/Profiles";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Gallery />
      <Profiles />
      <AboutUs />
      <ContactUs />
    </>
  );
}

export default Home;