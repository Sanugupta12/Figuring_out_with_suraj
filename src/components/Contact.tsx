import { useState } from 'react';
import { Send, Mail, MapPin, Phone, CheckCircle } from 'lucide-react';
import emailjs from 'emailjs-com';

const services = ['E-Commerce', 'Content Services', 'Production', 'All Three'];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_c3bd3nq",   // 🔥 replace karo
        "template_7napdnv",  // 🔥 replace karo
        {
          name: form.name,
          email: form.email,
          company: form.company,
          service: form.service,
          message: form.message,
        },
        "3g6l5kpgkHkGiJgxo"    // 🔥 replace karo
      );

      setSubmitted(true);
    } catch (error) {
      console.error(error);
      alert("Failed to send message ❌");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="bg-[#0a0a0a] py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT SIDE */}
          <div>
            <span className="text-[#B8FF4F] text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">
              Get in Touch
            </span>

            <h2 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
              Let's Figure<br />This Out<br />
              <span className="text-[#B8FF4F]">Together.</span>
            </h2>

            <p className="text-white/50 text-base leading-relaxed mb-12">
              Whether you're ready to launch or still exploring — Suraj's team is here to help you.
            </p>

            <div className="space-y-5">
              {[
                { icon: Mail, label: 'Email', value: 'surajrajgupta440@gmail.com' },
                { icon: Phone, label: 'Phone', value: '+91 7480927876' },
                { icon: MapPin, label: 'Location', value: 'Patna, Bihar' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#B8FF4F]/10 flex items-center justify-center">
                    <Icon size={18} className="text-[#B8FF4F]" />
                  </div>
                  <div>
                    <div className="text-white/30 text-xs">{label}</div>
                    <div className="text-white text-sm">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FORM */}
          <div className="bg-[#111] border border-white/8 rounded-3xl p-8 md:p-10">
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle size={40} className="text-[#B8FF4F] mx-auto mb-4" />
                <h3 className="text-white text-2xl font-bold">Message Sent ✅</h3>
                <p className="text-white/50 mt-2">We’ll contact you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">

                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                  className="w-full p-3 rounded bg-white/5 text-white"
                />

                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="w-full p-3 rounded bg-white/5 text-white"
                />

                <input
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Company"
                  className="w-full p-3 rounded bg-white/5 text-white"
                />

                <div className="flex gap-2 flex-wrap">
                  {services.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setForm({ ...form, service: s })}
                      className={`px-3 py-2 rounded ${
                        form.service === s ? 'bg-[#B8FF4F] text-black' : 'bg-gray-700 text-white'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Message"
                  required
                  className="w-full p-3 rounded bg-white/5 text-white"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#B8FF4F] text-black py-3 rounded flex justify-center items-center gap-2"
                >
                  {loading ? "Sending..." : <>Send <Send size={16} /></>}
                </button>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}