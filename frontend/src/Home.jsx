import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Gallery from "./components/Gallery";
import Profiles from "./components/Profiles";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Gallery />
      <Profiles />
    </>
  );
}

export default Home;