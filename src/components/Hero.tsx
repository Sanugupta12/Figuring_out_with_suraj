import { useEffect, useRef } from 'react';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ticker = tickerRef.current;
    if (!ticker) return;
    let pos = 0;
    const speed = 0.5;
    const animate = () => {
      pos -= speed;
      if (pos <= -ticker.scrollWidth / 2) pos = 0;
      ticker.style.transform = `translateX(${pos}px)`;
      requestAnimationFrame(animate);
    };
    const id = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(id);
  }, []);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const tags = ['E-Commerce', 'Content Services', 'Production', 'Brand Building', 'Digital Strategy', 'Creative Direction', 'Platform Development', 'Media Production'];

  return (
    <section id="hero" className="relative min-h-screen bg-black flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-[#B8FF4F]/5 blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-[#F5C518]/5 blur-[100px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8FF4F]/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-12 flex-1 flex flex-col justify-center">
        <div className="inline-flex items-center gap-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#B8FF4F] animate-pulse" />
          <span className="text-[#B8FF4F] text-xs font-semibold tracking-[0.2em] uppercase">Figuring Out with Suraj</span>
        </div>

        <h1 className="text-[clamp(3rem,8vw,7rem)] font-black leading-[0.92] tracking-tight text-white mb-6 max-w-4xl">
          We Build<br />
          <span className="text-[#B8FF4F]">Brands</span> That<br />
          <span className="relative inline-block">
            <span>Actually</span>
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
              <path d="M0 10 Q75 2 150 8 Q225 14 300 6" stroke="#F5C518" strokeWidth="3" strokeLinecap="round" fill="none"/>
            </svg>
          </span> Move.
        </h1>

        <p className="text-white/50 text-lg max-w-xl leading-relaxed mb-12 font-light">
          From selling products globally to building platforms and producing content — Figuring Out is where strategy meets execution.
        </p>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => handleScroll('#services')}
            className="group flex items-center gap-3 bg-[#B8FF4F] text-black font-bold px-8 py-4 rounded-full hover:bg-[#d4ff7a] transition-all duration-200 hover:scale-105"
          >
            Explore Services
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => handleScroll('#work')}
            className="group flex items-center gap-3 border border-white/20 text-white font-medium px-8 py-4 rounded-full hover:border-white/50 hover:bg-white/5 transition-all duration-200"
          >
            <Play size={16} className="fill-white" />
            See Our Work
          </button>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-20 max-w-lg">
          {[
            { num: '120+', label: 'Brands Served' },
            { num: '3x', label: 'Avg. Growth' },
            { num: '5+', label: 'Years of Impact' },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-black text-white">{s.num}</div>
              <div className="text-white/40 text-xs font-medium mt-1 tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full overflow-hidden border-t border-b border-white/5 py-4">
        <div ref={tickerRef} className="flex gap-12 whitespace-nowrap" style={{ width: 'max-content' }}>
          {[...tags, ...tags].map((tag, i) => (
            <span key={i} className="flex items-center gap-3 text-white/25 text-sm font-medium tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B8FF4F]/50 flex-shrink-0" />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
