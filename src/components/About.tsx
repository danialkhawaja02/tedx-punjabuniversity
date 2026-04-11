import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Theme() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const keywordsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      });

      tl.fromTo(
        textRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );

      const keywords = gsap.utils.toArray<HTMLSpanElement>(".keyword");
      tl.fromTo(
        keywords,
        { opacity: 0, y: 20, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.15, ease: "back.out(1.7)" },
        "-=0.5"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-32 bg-white text-ted-black overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div ref={textRef} className="relative z-10">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-ted-red mb-6">The Theme</h2>
            <h3 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tighter">
              CARPE DIEM: <br />
              <span className="text-ted-red">SEIZE THE DAY</span>
            </h3>

            <div className="space-y-6 text-xl text-gray-600 font-light leading-relaxed">
              <p>
                In a world of constant change, the present moment is our most powerful asset. "Carpe Diem" is not just a phrase; it's a call to action.
              </p>
              <p>
                TEDxPunjab University 2026 invites ideas and stories that reflect resilience, the courage to transform, the power of bold actions, and the spirit of innovation.
              </p>
            </div>

            <div ref={keywordsRef} className="mt-12 flex flex-wrap gap-4">
              {['Action', 'Resilience', 'Innovation', 'Transformation'].map((keyword) => (
                <span key={keyword} className="keyword px-6 py-3 rounded-full border border-ted-black/10 text-sm font-bold uppercase tracking-widest hover:bg-ted-red hover:text-white hover:border-ted-red transition-all duration-300 cursor-default">
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative">
              <img
                src="https://picsum.photos/seed/seize/800/1000"
                alt="Carpe Diem"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
