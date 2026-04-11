import { Instagram, Twitter, Linkedin, Facebook, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ted-black text-white py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-ted-red font-bold text-4xl tracking-tighter">TEDx</span>
              <span className="font-medium text-xl">Punjab University</span>
            </div>
            <p className="text-ted-gray max-w-sm mb-8 leading-relaxed font-light">
              This independent TEDx event is operated under license from TED. Our mission is to spread ideas that spark conversation and inspire change within our community.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/tedxpunjabuniversity/" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-ted-red hover:border-ted-red transition-all duration-300 group">
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.linkedin.com/company/tedxpunjab-university/" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-ted-red hover:border-ted-red transition-all duration-300 group">
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.facebook.com/TEDxPunjabUniversity/" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-ted-red hover:border-ted-red transition-all duration-300 group">
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 tracking-wide">Quick Links</h4>
            <ul className="space-y-4 text-ted-gray text-sm font-light">
              <li><a href="#about" className="hover:text-white transition-colors duration-300">About Us</a></li>
              <li><a href="#speakers" className="hover:text-white transition-colors duration-300">Speakers</a></li>
              <li><a href="#schedule" className="hover:text-white transition-colors duration-300">Schedule</a></li>
              <li><a href="#team" className="hover:text-white transition-colors duration-300">Our Team</a></li>
              <li><a href="#partners" className="hover:text-white transition-colors duration-300">Partners</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 tracking-wide">Contact</h4>
            <ul className="space-y-4 text-ted-gray text-sm font-light">
              <li>tedxpunjabuniversity@gmail.com</li>
              <li>Punjab University, Lahore, Pakistan</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-ted-gray font-medium uppercase tracking-widest">
          <p>© 2026 TEDxPunjab University. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-ted-red fill-current" /> for the community
          </p>
        </div>
      </div>
    </footer>
  );
}
