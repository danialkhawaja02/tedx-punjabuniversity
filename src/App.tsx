import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Impact from "./components/Impact";
import Theme from "./components/About"; // Renamed to Theme internally
import Speakers from "./components/Speakers";
import Experience from "./components/Experience";
import Team from "./components/Team";
import Sponsors from "./components/Sponsors";
import Join from "./components/Join";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    // Smooth scroll setup
    const lenis = document.documentElement;
    lenis.style.scrollBehavior = "smooth";
    
    // Progress bar animation
    gsap.to("#progress-bar", {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3,
      }
    });
  }, []);

  return (
    <div className="relative bg-ted-black min-h-screen">
      {/* Progress Bar */}
      <div
        id="progress-bar"
        className="fixed top-0 left-0 right-0 h-1 bg-ted-red z-[60] origin-left scale-x-0"
      />
      
      <Navbar />
      
      <main>
        <Hero />
        <Impact />
        <Theme />
        <Speakers />
        <Experience />
        <Team />
        <Sponsors />
        <Join />
        <FinalCTA />
      </main>
      
      <Footer />
    </div>
  );
}
