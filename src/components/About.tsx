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
    <section ref={ref} className="py-20 md:py-48 px-4 md:px-24 relative overflow-hidden bg-brand-black">
      <motion.div style={{ y }} className="absolute -right-6 md:-right-20 top-0 text-[28vw] md:text-[30vw] font-black text-brand-gray-mid/10 select-none pointer-events-none leading-none">
        02
      </motion.div>
      
      <div className="relative z-10 w-full">
        <div className="max-w-5xl mb-12 md:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-12"
          >
            <span className="text-brand-orange uppercase tracking-[0.4em] md:tracking-[0.6em] text-[10px] font-bold">The Vision</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-[8vw] md:text-7xl font-bold tracking-tighter leading-[1.1] mb-8 md:mb-16 text-brand-white break-words"
          >
            Design is the <span className="text-brand-orange italic">energy</span> that connects artistic vision with <span className="text-brand-gray-light">digital impact.</span>
          </motion.h2>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 md:gap-12">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="w-full lg:col-span-5"
          >
            <p className="text-brand-gray-light text-sm md:text-xl font-light leading-relaxed break-words">
              Based in the pulse of creativity, we specialize in high-intensity visual storytelling. Our neutral foundations provide balance, while vibrant accents symbolize the energy and enthusiasm we bring to every project.
            </p>
          </motion.div>
          
          <div className="w-full lg:col-start-7 lg:col-span-6 flex flex-col gap-6 md:gap-10 justify-end ml-auto text-right">
             <div className="flex justify-between items-end border-b border-brand-gray-mid/30 pb-4 md:pb-6 group">
                <span className="text-xs md:text-base uppercase tracking-[0.4em] text-brand-gray-mid group-hover:text-brand-orange transition-colors">Service 01</span>
                <span className="text-base md:text-3xl font-bold text-brand-white uppercase tracking-tighter">Art Direction</span>
             </div>
             <div className="flex justify-between items-end border-b border-brand-gray-mid/30 pb-4 md:pb-6 group">
                <span className="text-xs md:text-base uppercase tracking-[0.4em] text-brand-gray-mid group-hover:text-brand-orange transition-colors">Service 02</span>
                <span className="text-base md:text-3xl font-bold text-brand-white uppercase tracking-tighter">3D Motion</span>
             </div>
             <div className="flex justify-between items-end border-b border-brand-gray-mid/30 pb-4 md:pb-6 group">
                <span className="text-xs md:text-base uppercase tracking-[0.4em] text-brand-gray-mid group-hover:text-brand-orange transition-colors">Service 03</span>
                <span className="text-base md:text-3xl font-bold text-brand-white uppercase tracking-tighter">Web Experiences</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
