import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const stats = [
  { label: "Social Media Posts", value: "300+" },
  { label: "Short-Form Reels", value: "200+" },
  { label: "Global Clients", value: "10+" },
  { label: "Years Experience", value: "05+" },
];

export default function Statistics() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 15]);

  return (
    <section ref={container} className="py-24 md:py-48 bg-brand-orange text-brand-black relative overflow-hidden">
      <motion.div 
        style={{ rotate }}
        className="absolute inset-0 border-[20px] md:border-[40px] border-black/10 pointer-events-none" 
      />
      
      <div className="relative z-10 px-6 md:px-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-24">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <span className="text-[12vw] md:text-[8vw] font-black tracking-tighter leading-none block">
                {stat.value}
              </span>
              <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold mt-2 md:mt-4 block">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
