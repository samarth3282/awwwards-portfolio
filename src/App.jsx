import React, { useEffect, useState } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import ServiceSummary from "./sections/ServiceSummary";
import Services from "./sections/Services";
import ReactLenis from "lenis/react";
import About from "./sections/About";
import Works from "./sections/Works";
import ContactSummary from "./sections/ContactSummary";
import Contact from "./sections/Contact";
import Profiles from './sections/Profiles'
import { useProgress } from "@react-three/drei";
import { useLocation } from "react-router-dom";

const App = () => {
  const { progress } = useProgress();
  const [isReady, setIsReady] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (progress === 100) {
      setIsReady(true);
    }
  }, [progress]);

  // Handle scroll restoration when returning from /underdev
  useEffect(() => {
    if (location.pathname === "/" && isReady) {
      const scrollPosition = sessionStorage.getItem('portfolioScrollPosition');
      if (scrollPosition) {
        setTimeout(() => {
          window.scrollTo({
            top: parseInt(scrollPosition),
            behavior: 'smooth'
          });
          // Clear the stored position after use
          sessionStorage.removeItem('portfolioScrollPosition');
        }, 500); // Wait a bit longer for the page to fully load
      }
    }
  }, [location.pathname, isReady]);

  return (
    <ReactLenis root className="relative w-screen min-h-screen overflow-x-auto">
      {!isReady && (
        <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black text-white transition-opacity duration-700 font-light">
          <p className="mb-4 text-xl tracking-widest animate-pulse">
            Loading {Math.floor(progress)}%
          </p>
          <div className="relative h-1 overflow-hidden rounded w-60 bg-white/20">
            <div
              className="absolute top-0 left-0 h-full transition-all duration-300 bg-white"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      )}
      <div
        className={`${isReady ? "opacity-100" : "opacity-0"
          } transition-opacity duration-1000`}
      >
        <Navbar />
        <Hero />
        <ServiceSummary />
        <Services />
        <About />
        <Works />
        <Profiles />
        <ContactSummary />
        <Contact />
      </div>
    </ReactLenis>
  );
};

export default App;
