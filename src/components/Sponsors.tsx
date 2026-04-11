import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SPONSORS = [
  { name: "Partner 1", logo: "https://picsum.photos/seed/partner1/200/100" },
  { name: "Partner 2", logo: "https://picsum.photos/seed/partner2/200/100" },
  { name: "Partner 3", logo: "https://picsum.photos/seed/partner3/200/100" },
  { name: "Partner 4", logo: "https://picsum.photos/seed/partner4/200/100" },
  { name: "Partner 5", logo: "https://picsum.photos/seed/partner3/200/100" },
  { name: "Partner 6", logo: "https://picsum.photos/seed/partner4/200/100" },
];

export default function Sponsors() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      });

      const logos = gsap.utils.toArray<HTMLDivElement>(".sponsor-logo");
      gsap.from(logos, {
        opacity: 0,
        scale: 0.9,
        y: 30,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="partners" ref={sectionRef} className="py-32 bg-ted-black text-white relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 ref={titleRef} className="text-5xl md:text-7xl font-black mb-6">
            OUR <span className="text-ted-red">PARTNERS.</span>
          </h2>
          <p className="text-xl text-ted-gray font-light max-w-2xl mx-auto">
            Collaborating to make ideas worth spreading.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {SPONSORS.map((sponsor, index) => (
            <div key={index} className="sponsor-logo w-full p-6 bg-white/5 border border-white/10 rounded-xl hover:border-ted-red/50 hover:bg-white/10 transition-all duration-300 group cursor-pointer">
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="w-full h-auto object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
