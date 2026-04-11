import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TEAM = [
  { name: "Ali Raza", role: "Organizer", image: "https://picsum.photos/seed/ali/400/400" },
  { name: "Sara Ahmed", role: "Co-organizer", image: "https://picsum.photos/seed/sara/400/400" },
  { name: "Zainab Khan", role: "Marketing Lead", image: "https://picsum.photos/seed/zainab/400/400" },
  { name: "Usman Tariq", role: "Design Lead", image: "https://picsum.photos/seed/usman/400/400" },
];

export default function Team() {
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

      const cards = gsap.utils.toArray<HTMLDivElement>(".team-card");
      gsap.from(cards, {
        opacity: 0,
        scale: 0.8,
        y: 50,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="team" ref={sectionRef} className="py-32 bg-white text-ted-black relative border-t border-ted-black/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 ref={titleRef} className="text-5xl md:text-7xl font-black mb-6">
            THE <span className="text-ted-red">TEAM.</span>
          </h2>
          <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto">
            The people bringing this vision to life.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM.map((member, index) => (
            <div key={index} className="team-card group relative aspect-square rounded-full overflow-hidden border border-ted-black/10 cursor-pointer">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-white p-6 text-center">
                <h3 className="text-2xl font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{member.name}</h3>
                <p className="text-ted-red font-bold uppercase tracking-widest text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
