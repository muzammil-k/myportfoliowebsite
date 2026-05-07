import { motion } from 'framer-motion';
import ServicesScene from './ServicesScene';
import BorderGlow from './BorderGlow';

const services = [
  { id: "01", title: "Art Direction", desc: "Crafting cohesive visual narratives that resonate with audiences across all platforms." },
  { id: "02", title: "3D & Motion", desc: "Bringing static concepts to life through dynamic motion and immersive 3D environments." },
  { id: "03", title: "Brand Identity", desc: "Building strong, memorable brands through strategic design and high-intensity aesthetics." },
  { id: "04", title: "Digital Design", desc: "Designing high-performance web experiences that prioritize both beauty and usability." },
];

export default function Services() {
  return (
    <section className="relative py-48 px-8 md:px-24 bg-brand-black overflow-hidden border-t border-brand-gray-mid">
      <ServicesScene />
      
      <div className="relative z-10">
        <div className="mb-24">
          <span className="text-brand-orange uppercase tracking-[0.6em] text-[10px] font-bold block mb-4">What We Do</span>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase text-brand-white">
            Pushing <br /> Boundaries.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service) => (
            <motion.div 
              key={service.id}
              whileHover={{ y: -10 }}
              className="h-full"
            >
              <BorderGlow 
                borderRadius={24}
                className="h-full border-none"
                backgroundColor="#0D0D0D"
                glowColor="18 100 58" // Brand Orange HSL
                edgeSensitivity={20}
                glowRadius={50}
                glowIntensity={1.2}
              >
                <div className="p-8 h-full bg-brand-gray-mid/10 backdrop-blur-xl group flex flex-col">
                  <span className="text-brand-orange font-black text-4xl block mb-8 opacity-20 group-hover:opacity-100 transition-opacity">
                    {service.id}
                  </span>
                  <h3 className="text-xl font-bold mb-4 uppercase text-brand-white">{service.title}</h3>
                  <p className="text-brand-gray-light text-sm font-light leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </BorderGlow>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
