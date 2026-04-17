import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/95 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => handleNav('#hero')}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 bg-[#B8FF4F] rounded-sm flex items-center justify-center">
            <span className="text-black font-black text-xs leading-none">FO</span>
          </div>
          <span className="text-white font-bold text-sm tracking-wide">
            Figuring Out<span className="text-[#B8FF4F]">.</span>
          </span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.href)}
              className="text-white/60 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => handleNav('#contact')}
          className="hidden md:inline-flex items-center gap-2 bg-[#B8FF4F] text-black text-sm font-bold px-5 py-2.5 rounded-full hover:bg-[#d4ff7a] transition-all duration-200 hover:scale-105"
        >
          Let's Talk
        </button>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-1"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black/98 backdrop-blur-md border-t border-white/5 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.href)}
              className="text-white/70 hover:text-white text-left text-base font-medium tracking-wide transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#contact')}
            className="mt-2 bg-[#B8FF4F] text-black font-bold px-5 py-3 rounded-full text-sm"
          >
            Let's Talk
          </button>
        </div>
      )}
    </nav>
  );
}
