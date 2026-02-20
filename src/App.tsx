import { lazy, Suspense } from "react";
import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import ErrorBoundary from "./components/ui/ErrorBoundary";

const Problem = lazy(() => import("./components/sections/Problem"));
const HowItWorks = lazy(() => import("./components/sections/HowItWorks"));
const Benefits = lazy(() => import("./components/sections/Benefits"));
const Achievements = lazy(() => import("./components/sections/Achievements"));
const FAQ = lazy(() => import("./components/sections/FAQ"));
const CTAFinal = lazy(() => import("./components/sections/CTAFinal"));
const Footer = lazy(() => import("./components/sections/Footer"));

const sections = [Problem, HowItWorks, Benefits, Achievements, FAQ, CTAFinal];

export default function App() {
  return (
    <div className="min-h-screen">
      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:text-sm focus:font-semibold focus:outline-none focus:ring-2 focus:ring-accent"
      >
        Pular para o conteúdo principal
      </a>
      <Navbar />
      <main id="conteudo-principal">
        <ErrorBoundary>
          <Hero />
        </ErrorBoundary>
        <Suspense>
          {sections.map((Section, i) => (
            <ErrorBoundary key={i}>
              <Section />
            </ErrorBoundary>
          ))}
        </Suspense>
      </main>
      <Suspense>
        <Footer />
      </Suspense>
    </div>
  );
}
