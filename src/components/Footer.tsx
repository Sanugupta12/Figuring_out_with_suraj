import { Instagram, Twitter, Youtube, Linkedin } from 'lucide-react';

const links = {
  Services: ['E-Commerce', 'Content Services', 'Production', 'Brand Strategy'],
  Company: ['About Suraj', 'Our Work', 'Testimonials', 'Contact'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
};

const socials = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Twitter, label: 'Twitter/X', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/8">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 bg-[#B8FF4F] rounded-sm flex items-center justify-center">
                <span className="text-black font-black text-xs">FO</span>
              </div>
              <span className="text-white font-bold text-sm tracking-wide">
                Figuring Out<span className="text-[#B8FF4F]">.</span>
              </span>
            </div>
            <p className="text-white/35 text-sm leading-relaxed max-w-xs mb-8">
              Commerce. Content. Production. One team. Built by Suraj for brands that are ready to grow.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-[#B8FF4F] hover:border-[#B8FF4F]/30 hover:bg-[#B8FF4F]/10 transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-white/25 text-xs font-semibold tracking-[0.15em] uppercase mb-5">{title}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-white/45 text-sm hover:text-white transition-colors font-medium">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © 2025 Figuring Out with Suraj. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B8FF4F] animate-pulse" />
            <span className="text-white/25 text-xs">Available for new projects</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
