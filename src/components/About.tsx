import { Target, Zap, Users } from 'lucide-react';

const pillars = [
  {
    icon: Target,
    title: 'Strategic Clarity',
    description: 'Every project starts with a deep understanding of your goals, market, and audience before a single asset is created.',
  },
  {
    icon: Zap,
    title: 'Execution Speed',
    description: "We move fast without breaking things. Suraj's team delivers at startup velocity with enterprise-level quality.",
  },
  {
    icon: Users,
    title: 'Collaborative by Design',
    description: 'We embed ourselves into your team, becoming partners — not vendors — in building your brand.',
  },
];

const stats = [
  { value: '120+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Retention' },
  { value: '3x', label: 'Average ROI' },
  { value: '5+', label: 'Years of Experience' },
];

export default function About() {
  return (
    <section id="about" className="bg-[#0a0a0a] py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <span className="text-[#B8FF4F] text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">About Figuring Out</span>
            <h2 className="text-5xl md:text-6xl font-black text-white leading-tight mb-8">
              Built by a<br />
              Doer, for<br />
              <span className="text-[#F5C518]">Doers.</span>
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-6">
              Suraj didn't build Figuring Out from a boardroom — he built it from the trenches. Years of navigating commerce, content, and creative production gave him a clear picture of what brands actually need to grow.
            </p>
            <p className="text-white/50 text-base leading-relaxed mb-10">
              Today, Figuring Out with Suraj is a full-service growth partner for ambitious brands — bringing together e-commerce expertise, platform-building capability, and world-class production into one focused team.
            </p>
            <button
              onClick={() => {
                const el = document.querySelector('#contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-black font-bold px-8 py-4 rounded-full hover:bg-[#B8FF4F] transition-all duration-300 hover:scale-105 text-sm"
            >
              Work with Suraj
            </button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#B8FF4F]/10 to-[#F5C518]/5 rounded-3xl blur-3xl" />
            <div className="relative bg-[#111] border border-white/8 rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team at work"
                className="w-full h-72 object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
              <div className="p-8">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((s) => (
                    <div key={s.label}>
                      <div className="text-4xl font-black text-white">{s.value}</div>
                      <div className="text-white/40 text-xs mt-1 font-medium tracking-wide">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="bg-white/3 border border-white/8 rounded-3xl p-8 hover:bg-white/5 hover:border-white/15 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#B8FF4F]/10 flex items-center justify-center mb-6 group-hover:bg-[#B8FF4F]/20 transition-colors">
                <p.icon size={22} className="text-[#B8FF4F]" />
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{p.title}</h3>
              <p className="text-white/45 text-sm leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
