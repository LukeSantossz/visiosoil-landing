import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import Partners from "./components/sections/Partners";
import Problem from "./components/sections/Problem";
import HowItWorks from "./components/sections/HowItWorks";
import Benefits from "./components/sections/Benefits";
import Audience from "./components/sections/Audience";
import Pricing from "./components/sections/Pricing";
import Validation from "./components/sections/Validation";
import FAQ from "./components/sections/FAQ";
import CTAFinal from "./components/sections/CTAFinal";
import Footer from "./components/sections/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <Problem />
        <HowItWorks />
        <Benefits />
        <Audience />
        <Pricing />
        <Validation />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
    </div>
  );
}
