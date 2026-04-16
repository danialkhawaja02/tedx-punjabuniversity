import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import imgMuneeza from "../assets/images/Muneeza.webp";
import imgZaeem from "../assets/images/Zaeem.webp";
import imgRida from "../assets/images/Rida.webp";
import imgMarryam from "../assets/images/Marryam.webp";
import imgMaryum from "../assets/images/Maryum.webp";
import imgShaheryar from "../assets/images/Shaheryar.webp";
import imgDanial from "../assets/images/Danial.webp";
import imgMahnoor from "../assets/images/Mahnoor.webp";
import imgMBurhan from "../assets/images/MBurhan.webp";
import imgBurhan from "../assets/images/Burhan.webp";
import imgUsman from "../assets/images/Usman.webp";
import imgWania from "../assets/images/Wania.webp";
import imgSaleha from "../assets/images/Saleha.webp";
import imgAyesha from "../assets/images/Ayesha.webp";

gsap.registerPlugin(ScrollTrigger);

const TEAM = [
  { name: "Muneeza Wasim", role: "Organizer", image: imgMuneeza },
  { name: "Zaeem Bhatti", role: "Co-Organizer", image: imgZaeem },
  { name: "Rida Fatima", role: "Operations Lead", image: imgRida },
  { name: "Marryam Saeed", role: "Marketing Lead", image: imgMarryam },
  { name: "Maryum Iqbal", role: "Creative Lead", image: imgMaryum },
  { name: "Muhammad shaheryar", role: "Registration Lead", image: imgShaheryar },
  { name: "Danial Sohail", role: "Curation Lead", image: imgDanial },
  { name: "Mahnoor Imran", role: "Curation Co-Lead", image: imgMahnoor },
  { name: "Muhammad Burhan", role: "Logistics Lead", image: imgMBurhan },
  { name: "Burhan Rasool", role: "Logistics Co-Lead", image: imgBurhan },
  { name: "Usman Muneer", role: "Visuals Lead", image: imgUsman },
  { name: "Wania Badar", role: "Visuals Co-Lead", image: imgWania },
  { name: "Saleha Tahir", role: "Graphics Lead", image: imgSaleha },
  { name: "Ayesha Faisal", role: "Graphics Co-Lead", image: imgAyesha },
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

        <div ref={gridRef} className="flex flex-col gap-6 lg:gap-8">
          {/* Top 2 Organizer Roles */}
          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {TEAM.slice(0, 2).map((member, index) => (
              <div key={index} className="team-card group flex flex-col w-[calc(50%-0.75rem)] sm:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1.5rem)]">
                <div className="relative aspect-square w-full overflow-hidden cursor-pointer mb-4 border border-ted-black/10">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-center px-1">
                  <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">{member.name}</h3>
                  <p className="text-ted-red font-bold uppercase tracking-widest text-[10px] md:text-xs">{member.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Remaining Core Team Members */}
          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {TEAM.slice(2).map((member, index) => (
              <div key={index + 2} className="team-card group flex flex-col w-[calc(50%-0.75rem)] sm:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1.5rem)]">
                <div className="relative aspect-square w-full overflow-hidden cursor-pointer mb-4 border border-ted-black/10">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-center px-1">
                  <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">{member.name}</h3>
                  <p className="text-ted-red font-bold uppercase tracking-widest text-[10px] md:text-xs">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
