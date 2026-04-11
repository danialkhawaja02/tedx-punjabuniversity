import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Impact() {
  const sectionRef = useRef<HTMLElement>(null);
  const numbersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in section
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      });

      // Animate numbers
      const stats = gsap.utils.toArray<HTMLDivElement>(".stat-item");
      
      gsap.from(stats, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: numbersRef.current,
          start: "top 85%",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-ted-black text-white border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-6">THE POWER OF <span className="text-ted-red">TEDx</span></h2>
          <p className="text-xl text-ted-gray max-w-2xl mx-auto font-light">
            A global movement devoted to ideas worth spreading, bringing communities together to spark deep discussion and connection.
          </p>
        </div>

        <div ref={numbersRef} className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="stat-item">
            <div className="text-6xl md:text-8xl font-black text-stroke-red mb-4">18M+</div>
            <div className="text-xl font-medium tracking-widest uppercase text-ted-gray">Talks Viewed</div>
          </div>
          <div className="stat-item">
            <div className="text-6xl md:text-8xl font-black text-stroke-red mb-4">3000+</div>
            <div className="text-xl font-medium tracking-widest uppercase text-ted-gray">Events Yearly</div>
          </div>
          <div className="stat-item">
            <div className="text-6xl md:text-8xl font-black text-stroke-red mb-4">180+</div>
            <div className="text-xl font-medium tracking-widest uppercase text-ted-gray">Countries</div>
          </div>
        </div>
      </div>
    </section>
  );
}
