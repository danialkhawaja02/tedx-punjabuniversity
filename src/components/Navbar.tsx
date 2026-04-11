import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 }
    );
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 bg-ted-black/80 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <div className="flex items-baseline gap-2">
          <span className="text-ted-red font-bold text-4xl tracking-tighter">TEDx</span>
          <span className="font-medium text-xl text-white">Punjab University</span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          <a href="#about" className="text-sm font-medium text-ted-gray hover:text-white transition-colors duration-300">About</a>
          <a href="#speakers" className="text-sm font-medium text-ted-gray hover:text-white transition-colors duration-300">Speakers</a>
          <a href="#schedule" className="text-sm font-medium text-ted-gray hover:text-white transition-colors duration-300">Schedule</a>
          <a href="#team" className="text-sm font-medium text-ted-gray hover:text-white transition-colors duration-300">Our Team</a>
          <a href="#partners" className="text-sm font-medium text-ted-gray hover:text-white transition-colors duration-300">Partners</a>
          <button className="bg-ted-red text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-white hover:text-ted-black transition-all duration-300">
            Apply to Attend
          </button>
        </div>
      </div>
    </nav>
  );
}
