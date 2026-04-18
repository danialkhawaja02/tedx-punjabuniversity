import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        opacity: 0,
        y: 50,
        scale: 0.9,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-40 bg-ted-red text-white flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="text-[20vw] font-black whitespace-nowrap animate-marquee">
          CARPE DIEM SEIZE THE DAY CARPE DIEM SEIZE THE DAY CARPE DIEM SEIZE THE DAY
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 ref={textRef} className="text-5xl md:text-8xl font-black mb-12 leading-none tracking-tighter">
          Don't just watch ideas. <br />
          <span className="text-ted-black">Be part of them.</span>
        </h2>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfH_FaA7Wh5CWS7dYk1-SNugIgx9XKFzU0kj2cvDWMRsFCDqA/viewform" target="_blank" rel="noopener noreferrer" className="bg-ted-black text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-white hover:text-ted-black transition-all duration-500 shadow-2xl shadow-black/20">
          Apply to Attend
        </a>
      </div>
    </section>
  );
}
