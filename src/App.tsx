import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import Problem from "./components/sections/Problem";
import HowItWorks from "./components/sections/HowItWorks";
import Benefits from "./components/sections/Benefits";
import Achievements from "./components/sections/Achievements";
import FAQ from "./components/sections/FAQ";
import CTAFinal from "./components/sections/CTAFinal";
import Footer from "./components/sections/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Benefits />
        <Achievements />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
    </div>
  );
}
