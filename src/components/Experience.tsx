import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TIMELINE = [
  { time: "10:00 AM - 10:30 AM", title: "Welcome Address", desc: "Muneeza Wasim — Organizer" },
  { time: "10:30 AM - 10:50 AM", title: "1st Talk session", desc: "Dr. Nousheen Zaidi — Environmental Health Researcher, Punjab University" },
  { time: "10:55 AM - 11:20 AM", title: "2nd Talk session", desc: "Mr. Mashhood Rastgar — Technology Leader, Coach & Entrepreneur" },
  { time: "11:20 AM - 12:00 PM", title: "Entertainment Sangeet session", desc: "Ravish" },
  { time: "12:00 PM - 12:20 PM", title: "3rd Talk session", desc: "Ms. Hamera Aisha — Wildlife Conservationist, WWF Pakistan" },
  { time: "12:20 PM - 1:00 PM", title: "Break", desc: "Take a break to refresh and recharge for the upcoming sessions." },
  { time: "1:00 PM - 1:30 PM", title: "4th Talk session", desc: "Iftikhar Thakur — Actor, Comedian, Philanthropist" },
  { time: "1:30 PM - 1:50 PM", title: "5th Talk Session", desc: "Dr. Ridah noor — Doctor, Broadcaster & TV presenter" },
  { time: "1:55 PM - 2:15 PM", title: "Entertainment Monologue Performance", desc: "Alishba" },
  { time: "2:15 PM - 2:35 PM", title: "6th Talk session", desc: "Muhammad Danial — Lawyer, Chef & Content creator" },
  { time: "2:35 PM - 3:10 PM", title: "Networking Break", desc: "Connect with fellow attendees, speakers, and partners in an engaging environment." },
  { time: "3:10 PM - 3:30 PM", title: "7th Talk Session", desc: "Dr. Bushra Nisar Khan — Academic & Zoology Researcher, Punjab University" },
  { time: "3:30 PM - 3:45 PM", title: "Conclusion remarks", desc: "Dr. Shahzeb Khan — Director, Directorate Student Affairs" },
  { time: "3:45 PM - 4:00 PM", title: "Shield Distribution & Picture Networking", desc: "Wrap up the event with reflections, gratitude and a look ahead." },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the vertical line
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 80%",
            scrub: 1,
          }
        }
      );

      // Animate timeline items
      const items = gsap.utils.toArray<HTMLDivElement>(".timeline-item");
      items.forEach((item, i) => {
        gsap.from(item, {
          opacity: 0,
          x: i % 2 === 0 ? -50 : 50,
          duration: 1,
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="schedule" ref={sectionRef} className="py-32 bg-ted-black text-white relative border-t border-white/10 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black mb-6">THE <span className="text-ted-red">EXPERIENCE.</span></h2>
          <p className="text-xl text-ted-gray font-light max-w-2xl mx-auto">
            A full day of immersive talks, networking, and interactive sessions.
          </p>
        </div>

        <div className="relative" ref={itemsRef}>
          {/* Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 transform md:-translate-x-1/2">
            <div ref={lineRef} className="absolute top-0 left-0 w-full h-full bg-ted-red origin-top" />
          </div>

          <div className="space-y-12">
            {TIMELINE.map((item, index) => (
              <div key={index} className={`timeline-item relative flex flex-col md:flex-row items-start md:items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-ted-black border-2 border-ted-red transform -translate-x-[7px] md:-translate-x-1/2 mt-1.5 md:mt-0 z-10" />

                {/* Content */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                  <div className="p-8 bg-white/5 border border-white/10 hover:border-ted-red/50 transition-colors duration-300 group">
                    <span className="text-ted-red font-bold tracking-widest text-sm mb-2 block">{item.time}</span>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-ted-red transition-colors">{item.title}</h3>
                    <p className="text-ted-gray font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
