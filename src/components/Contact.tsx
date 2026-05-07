import { motion } from 'framer-motion';
import { Instagram, Twitter, Linkedin, Github, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-48 px-8 md:px-24 bg-brand-black overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-orange/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 grid grid-cols-12 gap-12">
        <div className="col-span-12 lg:col-span-7">
          <span className="text-brand-orange uppercase tracking-[0.6em] text-[10px] font-bold block mb-4">Get in Touch</span>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase text-brand-white leading-none mb-12">
            Let's build <br /> your <span className="text-brand-orange italic">vision.</span>
          </h2>

          <form className="space-y-8 max-w-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-4">Your Name</label>
                <input type="text" placeholder="John Doe" className="w-full bg-brand-gray-mid/10 border border-white/5 rounded-full px-8 py-4 text-white focus:outline-none focus:border-brand-orange transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-4">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-brand-gray-mid/10 border border-white/5 rounded-full px-8 py-4 text-white focus:outline-none focus:border-brand-orange transition-colors" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-4">Project Details</label>
              <textarea placeholder="Tell us about your project..." rows={4} className="w-full bg-brand-gray-mid/10 border border-white/5 rounded-3xl px-8 py-6 text-white focus:outline-none focus:border-brand-orange transition-colors resize-none" />
            </div>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group w-full md:w-auto bg-brand-orange text-white px-12 py-5 rounded-full font-bold uppercase text-xs tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-white hover:text-black transition-all duration-500"
            >
              Send Message
              <ArrowUpRight size={18} />
            </motion.button>
          </form>
        </div>

        <div className="col-span-12 lg:col-start-9 lg:col-span-4 flex flex-col justify-between pt-12 lg:pt-24 lg:border-l lg:border-white/5 lg:pl-12">
          <div>
            <h3 className="text-brand-orange uppercase tracking-[0.4em] text-[10px] font-bold mb-8">Socials</h3>
            <ul className="space-y-6">
              {[
                { name: 'Instagram', icon: <Instagram size={20} />, href: '#' },
                { name: 'Twitter', icon: <Twitter size={20} />, href: '#' },
                { name: 'LinkedIn', icon: <Linkedin size={20} />, href: '#' },
                { name: 'GitHub', icon: <Github size={20} />, href: '#' },
              ].map((social) => (
                <li key={social.name}>
                  <a href={social.href} className="group flex items-center justify-between text-2xl font-bold text-white hover:text-brand-orange transition-colors">
                    <div className="flex items-center gap-4">
                      <span className="text-brand-gray-mid group-hover:text-brand-orange transition-colors">{social.icon}</span>
                      {social.name}
                    </div>
                    <ArrowUpRight size={24} className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-24">
            <h3 className="text-brand-orange uppercase tracking-[0.4em] text-[10px] font-bold mb-4">Email Directly</h3>
            <a href="mailto:hello@alchemist.studio" className="text-xl md:text-2xl font-bold text-white hover:text-brand-orange transition-colors">
              hello@alchemist.studio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
