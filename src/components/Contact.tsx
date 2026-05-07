import { motion } from 'framer-motion';
import { Instagram, Twitter, Linkedin, Github, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-48 px-5 md:px-24 bg-brand-black overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] md:w-[800px] h-[280px] md:h-[800px] bg-brand-orange/5 blur-[80px] md:blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 w-full">
          <span className="text-brand-orange uppercase tracking-[0.3em] md:tracking-[0.6em] text-[9px] md:text-[10px] font-bold block mb-4">Get in Touch</span>
          <h2 className="text-[10vw] md:text-8xl font-black tracking-tighter uppercase text-brand-white leading-[0.9] md:leading-none mb-8 md:mb-12">
            Let's build <br /> your <span className="text-brand-orange italic">vision.</span>
          </h2>

          <form className="space-y-4 md:space-y-8 w-full lg:max-w-2xl">
            <div className="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-8">
              <div className="space-y-1.5 w-full">
                <label className="text-[9px] uppercase tracking-widest text-zinc-500 font-bold ml-4 md:ml-6">Your Name</label>
                <input type="text" placeholder="John Doe" className="w-full bg-brand-gray-mid/10 border border-white/5 rounded-full px-5 md:px-8 py-3 md:py-4 text-white text-xs md:text-sm focus:outline-none focus:border-brand-orange transition-all box-border" />
              </div>
              <div className="space-y-1.5 w-full">
                <label className="text-[9px] uppercase tracking-widest text-zinc-500 font-bold ml-4 md:ml-6">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-brand-gray-mid/10 border border-white/5 rounded-full px-5 md:px-8 py-3 md:py-4 text-white text-xs md:text-sm focus:outline-none focus:border-brand-orange transition-all box-border" />
              </div>
            </div>
            <div className="space-y-1.5 w-full">
              <label className="text-[9px] uppercase tracking-widest text-zinc-500 font-bold ml-4 md:ml-6">Project Details</label>
              <textarea placeholder="Tell us about your project..." rows={4} className="w-full bg-brand-gray-mid/10 border border-white/5 rounded-xl md:rounded-3xl px-5 md:px-8 py-4 md:py-6 text-white text-xs md:text-sm focus:outline-none focus:border-brand-orange transition-all resize-none box-border" />
            </div>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group w-full md:w-auto bg-brand-orange text-white px-8 md:px-12 py-4 md:py-5 rounded-full font-bold uppercase text-[9px] md:text-xs tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-white hover:text-black transition-all duration-500"
            >
              Send Message
              <ArrowUpRight size={16} />
            </motion.button>
          </form>
        </div>

        <div className="lg:col-start-9 lg:col-span-4 flex flex-col justify-between pt-12 lg:pt-24 border-t lg:border-t-0 lg:border-l border-white/5 lg:pl-12 w-full">
          <div>
            <h3 className="text-brand-orange uppercase tracking-[0.4em] text-[10px] font-bold mb-8">Socials</h3>
            <ul className="space-y-4 md:space-y-6">
              {[
                { name: 'Instagram', icon: <Instagram size={20} />, href: '#' },
                { name: 'Twitter', icon: <Twitter size={20} />, href: '#' },
                { name: 'LinkedIn', icon: <Linkedin size={20} />, href: '#' },
                { name: 'GitHub', icon: <Github size={20} />, href: '#' },
              ].map((social) => (
                <li key={social.name}>
                  <a href={social.href} className="group flex items-center justify-between text-xl md:text-2xl font-bold text-white hover:text-brand-orange transition-colors">
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

          <div className="mt-16 md:mt-24">
            <h3 className="text-brand-orange uppercase tracking-[0.4em] text-[10px] font-bold mb-4">Email Directly</h3>
            <a href="mailto:hello@alchemist.studio" className="text-base md:text-2xl font-bold text-white hover:text-brand-orange transition-colors break-all">
              hello@alchemist.studio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
