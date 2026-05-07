import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    content: "The level of visual energy and attention to detail in their motion work is unparalleled. Truly a visionary designer.",
    author: "Elena Vance",
    role: "Creative Director, Lumina"
  },
  {
    id: 2,
    content: "Transformed our brand from static to cinematic. The interactive elements they built for us are still a major talking point.",
    author: "Marcus Thorne",
    role: "CEO, Void Studio"
  },
  {
    id: 3,
    content: "A design manager who truly understands how to bridge the gap between artistic intent and user conversion.",
    author: "Sarah Jenkins",
    role: "Head of Design, Solaris"
  }
];

export default function Testimonials() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section ref={containerRef} className="py-48 bg-brand-black overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-orange/50 to-transparent" />
      
      <div className="px-8 md:px-24 mb-32">
        <span className="text-brand-orange uppercase tracking-[0.6em] text-[10px] font-bold block mb-4">Feedback</span>
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-brand-white">Client Voices.</h2>
      </div>

      <div className="space-y-12">
        <motion.div style={{ x: x1 }} className="flex gap-12 whitespace-nowrap">
           {testimonials.map((t) => (
             <div key={t.id} className="flex-shrink-0 w-[450px] p-12 bg-brand-gray-mid/20 rounded-[40px] border border-white/5 backdrop-blur-xl">
                <p className="text-xl font-medium text-brand-white italic mb-12 normal-case whitespace-normal leading-relaxed">
                  "{t.content}"
                </p>
                <div>
                   <span className="block font-bold text-brand-orange uppercase tracking-widest text-xs mb-1">{t.author}</span>
                   <span className="block text-brand-gray-light text-[10px] uppercase tracking-widest">{t.role}</span>
                </div>
             </div>
           ))}
           {/* Duplicate for seamless effect if needed, but here we use scroll transform */}
        </motion.div>

        <motion.div style={{ x: x2 }} className="flex gap-12 whitespace-nowrap pl-48">
           {[...testimonials].reverse().map((t) => (
             <div key={t.id} className="flex-shrink-0 w-[450px] p-12 bg-brand-gray-mid/20 rounded-[40px] border border-white/5 backdrop-blur-xl">
                <p className="text-xl font-medium text-brand-white italic mb-12 normal-case whitespace-normal leading-relaxed">
                  "{t.content}"
                </p>
                <div>
                   <span className="block font-bold text-brand-orange uppercase tracking-widest text-xs mb-1">{t.author}</span>
                   <span className="block text-brand-gray-light text-[10px] uppercase tracking-widest">{t.role}</span>
                </div>
             </div>
           ))}
        </motion.div>
      </div>
    </section>
  );
}
