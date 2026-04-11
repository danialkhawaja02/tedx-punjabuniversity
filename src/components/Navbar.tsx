import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-24 flex items-center justify-between w-full">
        <div className="flex items-baseline gap-1 sm:gap-2 shrink min-w-0">
          <span className="text-ted-red font-bold text-2xl sm:text-4xl tracking-tighter">TEDx</span>
          <span className="font-medium text-sm sm:text-xl text-white truncate">Punjab University</span>
        </div>

        {/* Desktop Menu */}
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

        {/* Mobile Menu Button */}
        <div className="md:flex hidden md:hidden items-center"></div>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white hover:text-ted-red transition-colors focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-24 left-0 w-full bg-ted-black/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 overflow-hidden flex flex-col ${isMobileMenuOpen ? "opacity-100 h-[calc(100vh-6rem)] py-10 visible" : "opacity-0 h-0 py-0 invisible"
          }`}
      >
        <div className="flex flex-col items-center justify-center gap-8 h-full">
          <a onClick={() => setIsMobileMenuOpen(false)} href="#about" className="text-xl font-medium text-ted-gray hover:text-white transition-colors duration-300">About</a>
          <a onClick={() => setIsMobileMenuOpen(false)} href="#speakers" className="text-xl font-medium text-ted-gray hover:text-white transition-colors duration-300">Speakers</a>
          <a onClick={() => setIsMobileMenuOpen(false)} href="#schedule" className="text-xl font-medium text-ted-gray hover:text-white transition-colors duration-300">Schedule</a>
          <a onClick={() => setIsMobileMenuOpen(false)} href="#team" className="text-xl font-medium text-ted-gray hover:text-white transition-colors duration-300">Our Team</a>
          <a onClick={() => setIsMobileMenuOpen(false)} href="#partners" className="text-xl font-medium text-ted-gray hover:text-white transition-colors duration-300">Partners</a>
          <button onClick={() => setIsMobileMenuOpen(false)} className="bg-ted-red text-white px-8 py-3 rounded-full text-base font-bold hover:bg-white hover:text-ted-black transition-all duration-300 mt-4">
            Apply to Attend
          </button>
        </div>
      </div>
    </nav>
  );
}
