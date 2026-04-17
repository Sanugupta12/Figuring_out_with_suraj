import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Amara Osei',
    company: 'NovaTrade Africa',
    role: 'Founder & CEO',
    quote:
      "Suraj and the Figuring Out team completely transformed how we approach e-commerce. Within 6 months, we had distribution channels across 4 new markets. They don't just advise — they execute.",
    avatar: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Kofi Mensah',
    company: 'Baobab Creative Co.',
    role: 'Creative Director',
    quote:
      "The production quality they delivered was beyond anything we expected at our budget. The brand documentary they made for us has become our best-performing piece of content. Period.",
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Zara Kimani',
    company: 'The STEM Circle',
    role: 'Co-Founder',
    quote:
      "We came to Figuring Out needing a platform. We left with an entire content ecosystem. Their content services team is genuinely exceptional — they understood our brand better than we did.",
    avatar: 'https://images.pexels.com/photos/3768914/pexels-photo-3768914.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  return (
    <section id="testimonials" className="bg-black py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#B8FF4F] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">Client Stories</span>
          <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
            Heard from the<br />People We've Built For
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-[#111] to-[#0d0d0d] border border-white/8 rounded-3xl p-10 md:p-14">
            <div className="absolute top-8 right-10 opacity-10">
              <Quote size={80} className="text-[#B8FF4F]" />
            </div>

            <div className="flex items-center gap-4 mb-8">
              <img
                src={current.avatar}
                alt={current.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-white/10"
              />
              <div>
                <div className="text-white font-bold">{current.name}</div>
                <div className="text-white/40 text-sm">{current.role}, {current.company}</div>
              </div>
              <div className="ml-auto hidden sm:flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-4 h-4 rounded-sm bg-[#F5C518]" />
                ))}
              </div>
            </div>

            <blockquote className="text-white/75 text-xl md:text-2xl leading-relaxed font-light italic">
              "{current.quote}"
            </blockquote>

            <div className="flex items-center justify-between mt-10 pt-8 border-t border-white/8">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`rounded-full transition-all duration-300 ${
                      i === index ? 'w-8 h-2 bg-[#B8FF4F]' : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-3">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:border-white/40 hover:text-white transition-all"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:border-white/40 hover:text-white transition-all"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { label: 'E-Commerce', count: '40+', sub: 'Brands Scaled' },
            { label: 'Platforms', count: '30+', sub: 'Built & Launched' },
            { label: 'Productions', count: '200+', sub: 'Assets Delivered' },
            { label: 'Growth', count: '3x', sub: 'Average Revenue Lift' },
          ].map((s) => (
            <div key={s.label} className="text-center bg-white/3 border border-white/8 rounded-2xl py-8 px-4 hover:bg-white/5 transition-colors">
              <div className="text-4xl font-black text-white mb-1">{s.count}</div>
              <div className="text-[#B8FF4F] text-xs font-semibold tracking-wide uppercase mb-1">{s.label}</div>
              <div className="text-white/30 text-xs">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
