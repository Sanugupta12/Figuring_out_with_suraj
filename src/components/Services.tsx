import { useState } from 'react';
import { ShoppingCart, Layers, Film, ArrowUpRight, Check } from 'lucide-react';

const services = [
  {
    id: 'ecommerce',
    number: '01',
    icon: ShoppingCart,
    title: 'E-Commerce',
    tagline: 'Sell Smarter. Scale Faster.',
    description:
      'Suraj connects brands and businesses to a network of buyers, resellers, and platforms — creating multi-channel commerce ecosystems that drive consistent revenue.',
    features: [
      'B2B product distribution',
      'Multi-platform selling strategy',
      'Inventory & supply chain consulting',
      'Cross-border commerce setup',
      'Revenue optimization frameworks',
    ],
    accent: '#B8FF4F',
    bg: 'from-[#B8FF4F]/10 to-transparent',
  },
  {
    id: 'content',
    number: '02',
    icon: Layers,
    title: 'Content Services',
    tagline: 'Your Brand. Your Platform. Built Right.',
    description:
      'We architect and build the digital homes that brands need — from content platforms and websites to full media ecosystems that attract, retain, and convert audiences.',
    features: [
      'Platform architecture & design',
      'Content strategy & planning',
      'Website & app development',
      'SEO & audience growth systems',
      'Brand identity & voice development',
    ],
    accent: '#F5C518',
    bg: 'from-[#F5C518]/10 to-transparent',
  },
  {
    id: 'production',
    number: '03',
    icon: Film,
    title: 'Production',
    tagline: 'Content That Commands Attention.',
    description:
      'From ideation to final cut — Figuring Out Media handles every layer of content production, giving brands the creative firepower they need to dominate their niche.',
    features: [
      'Video & film production',
      'Photography & visual direction',
      'Scriptwriting & creative concept',
      'Post-production & editing',
      'Distribution & publishing strategy',
    ],
    accent: '#B8FF4F',
    bg: 'from-[#B8FF4F]/10 to-transparent',
  },
];

export default function Services() {
  const [active, setActive] = useState('ecommerce');
  const current = services.find((s) => s.id === active)!;
  const Icon = current.icon;

  return (
    <section id="services" className="bg-[#0a0a0a] py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[#B8FF4F] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">What We Do</span>
            <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
              Three Ways<br />We Help You Win
            </h2>
          </div>
          <p className="text-white/40 max-w-xs text-sm leading-relaxed">
            Figuring Out operates at the intersection of commerce, content, and creative production.
          </p>
        </div>

        <div className="flex gap-2 mb-12 overflow-x-auto pb-2">
          {services.map((s) => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              className={`flex items-center gap-2.5 px-5 py-3 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                active === s.id
                  ? 'bg-[#B8FF4F] text-black'
                  : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white'
              }`}
            >
              <s.icon size={15} />
              {s.title}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${current.bg} border border-white/8 p-10 flex flex-col justify-between min-h-[480px]`}>
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-white/15 text-8xl font-black leading-none select-none">{current.number}</span>
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: `${current.accent}20`, color: current.accent }}
                >
                  <Icon size={26} />
                </div>
              </div>
              <h3 className="text-4xl font-black text-white mb-3">{current.title}</h3>
              <p className="font-semibold mb-4" style={{ color: current.accent }}>{current.tagline}</p>
              <p className="text-white/50 text-sm leading-relaxed">{current.description}</p>
            </div>
            <button className="mt-8 self-start flex items-center gap-2 text-white font-semibold text-sm group">
              Learn More <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          <div className="bg-white/3 border border-white/8 rounded-3xl p-10 flex flex-col justify-between">
            <div>
              <h4 className="text-white/40 text-xs font-semibold tracking-[0.2em] uppercase mb-8">What's Included</h4>
              <ul className="space-y-5">
                {current.features.map((f) => (
                  <li key={f} className="flex items-start gap-4">
                    <div
                      className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                      style={{ backgroundColor: `${current.accent}20`, color: current.accent }}
                    >
                      <Check size={13} strokeWidth={2.5} />
                    </div>
                    <span className="text-white/70 text-sm leading-relaxed font-medium">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 pt-8 border-t border-white/8">
              <p className="text-white/30 text-xs mb-4">Ready to get started?</p>
              <button
                onClick={() => {
                  const el = document.querySelector('#contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-4 rounded-2xl font-bold text-black text-sm transition-all hover:opacity-90"
                style={{ backgroundColor: current.accent }}
              >
                Start a Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
