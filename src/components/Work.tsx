import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Retail Brand Expansion',
    category: 'E-Commerce',
    description: 'Scaled a Lagos-based fashion brand to 12 international marketplaces, tripling monthly revenue in 8 months.',
    tag: 'Commerce',
    accent: '#B8FF4F',
    img: 'https://images.pexels.com/photos/5632398/pexels-photo-5632398.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Creator Platform Launch',
    category: 'Content Services',
    description: 'Architected and launched a full-stack media platform for a lifestyle brand, growing to 50K users in 3 months.',
    tag: 'Platform',
    accent: '#F5C518',
    img: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Brand Documentary Series',
    category: 'Production',
    description: 'Produced a 6-part documentary series for an FMCG brand, earning 2M+ views across digital channels.',
    tag: 'Production',
    accent: '#B8FF4F',
    img: 'https://images.pexels.com/photos/3379934/pexels-photo-3379934.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'B2B Distribution Network',
    category: 'E-Commerce',
    description: 'Built a supplier-to-retailer distribution pipeline for 40+ SKUs across 3 countries.',
    tag: 'Commerce',
    accent: '#F5C518',
    img: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function Work() {
  return (
    <section id="work" className="bg-black py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[#B8FF4F] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">Our Work</span>
            <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
              Results That<br />Speak Volumes
            </h2>
          </div>
          <button className="self-start md:self-auto flex items-center gap-2 text-white/50 text-sm font-medium hover:text-white transition-colors group">
            View All Projects
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`group relative overflow-hidden rounded-3xl border border-white/8 cursor-pointer transition-all duration-300 hover:border-white/20 ${
                i === 0 ? 'md:col-span-2' : ''
              }`}
            >
              <div className={`relative overflow-hidden ${i === 0 ? 'h-80' : 'h-56'}`}>
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute top-5 left-5">
                  <span
                    className="text-xs font-bold px-3 py-1.5 rounded-full"
                    style={{
                      backgroundColor: `${p.accent}20`,
                      color: p.accent,
                      border: `1px solid ${p.accent}40`,
                    }}
                  >
                    {p.category}
                  </span>
                </div>
                <div className="absolute top-5 right-5">
                  <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-[#B8FF4F] group-hover:scale-110 transition-all duration-300">
                    <ArrowUpRight size={15} className="text-white group-hover:text-black transition-colors" />
                  </div>
                </div>
              </div>
              <div className="p-7">
                <h3 className="text-white font-bold text-xl mb-2">{p.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
