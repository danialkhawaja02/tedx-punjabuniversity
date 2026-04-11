import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Calendar, MapPin, Clock } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Join() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        opacity: 0,
        y: 100,
        scale: 0.95,
        duration: 1.2,
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
    <section ref={sectionRef} className="py-32 bg-ted-black text-white relative overflow-hidden border-t border-white/10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ted-red/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div ref={cardRef} className="bg-white/5 border border-white/10 rounded-3xl p-10 md:p-16 backdrop-blur-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-ted-red/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-ted-red/20 transition-colors duration-700" />

          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-ted-red mb-4">Join The Event</h2>
              <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                TEDx Punjab University 2026
              </h3>
              <p className="text-ted-gray font-light text-lg mb-8">
                Be part of a community that believes in the power of ideas. Tickets are limited, seize your spot today.
              </p>

              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-ted-red/10 flex items-center justify-center text-ted-red">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <span className="font-medium">28 April 2026</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-ted-red/10 flex items-center justify-center text-ted-red">
                    <Clock className="w-5 h-5" />
                  </div>
                  <span className="font-medium">11:00 AM - 05:00 PM</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-ted-red/10 flex items-center justify-center text-ted-red">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="font-medium">Punjab University, Lahore</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center p-8 bg-black/40 rounded-2xl border border-white/5">
              <div className="text-center mb-8">
                <p className="text-sm font-bold uppercase tracking-widest text-ted-gray mb-2">Standard Pass</p>
                <p className="text-5xl font-black text-white">Apply Now</p>
              </div>
              <button className="w-full bg-ted-red text-white py-4 rounded-full font-bold text-lg hover:bg-white hover:text-ted-black transition-all duration-500 flex items-center justify-center gap-2 group/btn">
                Secure Your Spot
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
              <p className="text-xs text-ted-gray mt-4 text-center">Applications are reviewed on a rolling basis.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
