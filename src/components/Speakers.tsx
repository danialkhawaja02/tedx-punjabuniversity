import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SPEAKERS } from "../types";
import SpeakerCard from "./SpeakerCard";

gsap.registerPlugin(ScrollTrigger);

export default function Speakers() {
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="speakers" ref={sectionRef} className="py-32 bg-ted-black text-white relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <h2 ref={titleRef} className="text-5xl md:text-7xl font-black mb-6">
              MEET OUR <br />
              <span className="text-ted-red">VOICES.</span>
            </h2>
            <p className="text-xl text-ted-gray font-light">
              A diverse lineup of thinkers, doers, and storytellers ready to share ideas worth spreading.
            </p>
          </div>
          
          <div className="hidden md:block">
            <div className="text-stroke text-8xl font-black opacity-10 select-none">SPEAKERS</div>
          </div>
        </div>
        
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
          {SPEAKERS.map((speaker, index) => (
            <SpeakerCard key={speaker.id} speaker={speaker} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
