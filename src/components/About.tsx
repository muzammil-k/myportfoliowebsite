import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={ref} className="py-48 px-8 md:px-24 relative overflow-hidden bg-brand-black">
      <motion.div style={{ y }} className="absolute -right-20 top-0 text-[30vw] font-black text-brand-gray-mid/20 select-none pointer-events-none">
        02
      </motion.div>
      
      <div className="relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-brand-orange uppercase tracking-[0.6em] text-[10px] font-bold">The Vision</span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-4xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-16 text-brand-white"
        >
          Design is the <span className="text-brand-orange italic">energy</span> that connects artistic vision with <span className="text-brand-gray-light">digital impact.</span>
        </motion.h2>

        <div className="grid grid-cols-12 gap-12">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-6"
          >
            <p className="text-brand-gray-light text-lg md:text-xl font-light leading-relaxed">
              Based in the pulse of creativity, we specialize in high-intensity visual storytelling. Our neutral foundations provide balance, while vibrant accents symbolize the energy and enthusiasm we bring to every project.
            </p>
          </motion.div>
          
          <div className="col-span-12 md:col-span-6 flex flex-col gap-8 justify-end">
             <div className="flex justify-between border-b border-brand-gray-mid pb-4 group">
                <span className="text-[10px] uppercase tracking-[0.3em] text-brand-gray-mid group-hover:text-brand-orange transition-colors">Service 01</span>
                <span className="text-sm font-bold text-brand-white">Art Direction</span>
             </div>
             <div className="flex justify-between border-b border-brand-gray-mid pb-4 group">
                <span className="text-[10px] uppercase tracking-[0.3em] text-brand-gray-mid group-hover:text-brand-orange transition-colors">Service 02</span>
                <span className="text-sm font-bold text-brand-white">3D Motion</span>
             </div>
             <div className="flex justify-between border-b border-brand-gray-mid pb-4 group">
                <span className="text-[10px] uppercase tracking-[0.3em] text-brand-gray-mid group-hover:text-brand-orange transition-colors">Service 03</span>
                <span className="text-sm font-bold text-brand-white">Web Experiences</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
