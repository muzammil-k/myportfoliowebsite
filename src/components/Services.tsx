import { motion } from 'framer-motion';
import ServicesScene from './ServicesScene';
import BorderGlow from './BorderGlow';

const services = [
  { id: "01", title: "Branding & Vector Design", desc: "Logo Creation, Watermarks, and Guidelines tailored for Tech, E-commerce, and Retail." },
  { id: "02", title: "Short-Form Video Production", desc: "Engaging Reels, Meta Ads, and Cinematic Pacing for Furniture, Education, and Marketing sectors." },
  { id: "03", title: "Social Media Engineering", desc: "Content Schedulers and High-Volume Layouts designed for B2C Brands and International Academies." },
  { id: "04", title: "Print & Large-Format Layout", desc: "High-resolution Window Posters and Showroom Banners for Physical Retail and Global Outlets." },
];

export default function Services() {
  return (
    <section className="relative py-24 md:py-48 px-6 md:px-24 bg-brand-black overflow-hidden border-t border-brand-gray-mid">
      <ServicesScene />
      
      <div className="relative z-10">
        <div className="mb-16 md:mb-24">
          <span className="text-brand-orange uppercase tracking-[0.4em] md:tracking-[0.6em] text-[10px] font-bold block mb-4">What We Do</span>
          <h2 className="text-[12vw] md:text-8xl font-black tracking-tighter uppercase text-brand-white leading-[0.9] md:leading-tight">
            Pushing <br /> Boundaries.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
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
                  <span className="text-brand-orange font-black text-3xl md:text-4xl block mb-6 md:mb-8 opacity-20 group-hover:opacity-100 transition-opacity">
                    {service.id}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold mb-4 uppercase text-brand-white">{service.title}</h3>
                  <p className="text-brand-gray-light text-xs md:text-sm font-light leading-relaxed">
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
