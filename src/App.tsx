import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import Partners from "./components/sections/Partners";
import Problem from "./components/sections/Problem";
import HowItWorks from "./components/sections/HowItWorks";
import Benefits from "./components/sections/Benefits";
import Audience from "./components/sections/Audience";
import Validation from "./components/sections/Validation";
import Pricing from "./components/sections/Pricing";
import FAQ from "./components/sections/FAQ";
import CTAFinal from "./components/sections/CTAFinal";
import Footer from "./components/sections/Footer";

export default function App() {
  return (
    <div className="grain-overlay">
      <Navbar />
      <Hero />
      <Partners />
      <Problem />
      <HowItWorks />
      <Benefits />
      <Audience />
      <Validation />
      <Pricing />
      <FAQ />
      <CTAFinal />
      <Footer />
    </div>
  );
}
