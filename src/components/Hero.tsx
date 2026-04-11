import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const title1Ref = useRef<HTMLHeadingElement>(null);
  const title2Ref = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        [title1Ref.current, title2Ref.current],
        { y: 100, opacity: 0, rotateX: -20 },
        { y: 0, opacity: 1, rotateX: 0, duration: 1.2, stagger: 0.1, delay: 0.5 }
      )
        .fromTo(
          subtitleRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "-=0.8"
        )
        .fromTo(
          detailsRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "-=0.8"
        )
        .fromTo(
          buttonsRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "-=0.8"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-ted-black text-white">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-ted-red/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col items-center text-center">
        <div className="perspective-1000">
          <h1 ref={title1Ref} className="text-7xl md:text-[120px] font-black leading-[0.85] tracking-tighter mb-2">
            CARPE DIEM
          </h1>
          <h1 ref={title2Ref} className="text-5xl md:text-8xl font-bold leading-none tracking-tight text-ted-red mb-8">
            Seize the Day
          </h1>
        </div>

        <p ref={subtitleRef} className="text-xl md:text-3xl font-light text-ted-gray max-w-3xl mb-12 leading-tight">
          Ideas that demand action. Stories that redefine possibilities.
        </p>

        <div ref={detailsRef} className="flex flex-col md:flex-row items-center gap-6 md:gap-12 mb-16 text-lg font-medium tracking-wide">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-ted-red animate-pulse" />
            28 April 2026
          </div>
          <div className="hidden md:block w-px h-6 bg-white/20" />
          <div className="flex items-center gap-3">
            Punjab University, Lahore
          </div>
        </div>

        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-6">
          <button className="bg-ted-red text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-ted-black transition-all duration-500 flex items-center justify-center gap-2 group">
            Apply to Attend
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="border border-white/20 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-500">
            Become a Partner
          </button>
        </div>
      </div>
    </section>
  );
}
