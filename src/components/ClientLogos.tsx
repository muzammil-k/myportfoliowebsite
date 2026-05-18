import { motion } from 'framer-motion';

const logos = [
  "ILLUSTRATOR", "PHOTOSHOP", "CANVA", "FIGMA", "CAPCUT", "INDESIGN", "PREMIER PRO", "DAVINCI", "AFTER EFFECT"
];

export default function ClientLogos() {
  return (
    <section className="py-24 bg-brand-black border-y border-white/5 overflow-hidden">
      <div className="flex whitespace-nowrap">
        <motion.div 
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 md:gap-24 items-center"
        >
          {[...logos, ...logos].map((logo, i) => (
            <span key={i} className="text-4xl md:text-6xl font-black text-brand-gray-mid/30 tracking-tighter hover:text-brand-orange transition-colors cursor-default">
              {logo}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
