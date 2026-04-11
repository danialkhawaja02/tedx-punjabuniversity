import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Speaker } from "../types";
import { ExternalLink } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function SpeakerCard({ speaker, index }: { speaker: Speaker; index: number; key?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: (index % 4) * 0.1,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
        }
      });
    }, cardRef);

    return () => ctx.revert();
  }, [index]);

  return (
    <div ref={cardRef} className="group cursor-pointer">
      <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-white/5 border border-white/10">
        <img
          src={speaker.image}
          alt={speaker.name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 right-4">
          <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-xs font-bold">{speaker.id}</span>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-start justify-between">
          <h3 className="text-2xl font-bold group-hover:text-ted-red transition-colors duration-300">
            {speaker.name}
          </h3>
          <a
            href={speaker.socialLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ted-gray hover:text-white transition-colors duration-300"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
        <p className="text-ted-red text-xs font-bold uppercase tracking-widest">
          {speaker.title}
        </p>
      </div>
    </div>
  );
}
