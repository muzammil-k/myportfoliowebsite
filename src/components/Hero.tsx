import { motion, useScroll, useTransform } from 'framer-motion';
import LiquidEther from './LiquidEther';
import heroImage from '../assets/Untitled.webp';

export default function Hero() {
  const { scrollY } = useScroll();
  
  // Parallax for the background text
  const xLeft = useTransform(scrollY, [0, 1000], [0, -150]);
  const xRight = useTransform(scrollY, [0, 1000], [0, 150]);
  
  // Parallax for the central portrait
  const imgY = useTransform(scrollY, [0, 1000], [0, 100]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-black pt-32 pb-48">
      {/* 1. Optimized Liquid Ether Layer */}
      <div className="absolute inset-0 z-0">
        <LiquidEther
          colors={['#FA692A', '#ffa300', '#D9D9D9']}
          mouseForce={15}
          cursorSize={80}
          isViscous={false}
          resolution={0.4}
          autoDemo={true}
          autoSpeed={0.5}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#0D0D0D_100%)] opacity-70" />
      </div>

      <div className="absolute inset-0 z-10 pointer-events-none select-none overflow-hidden">
        {/* Desktop Horizontal Text */}
        <div className="hidden md:flex flex-col justify-center items-center w-full h-full">
          <motion.h1 
            style={{ x: xLeft }}
            className="text-[14vw] font-black text-white/[0.05] leading-none tracking-tighter whitespace-nowrap uppercase"
          >
            MUZAMMIL KHAN
          </motion.h1>
          <motion.h1 
            style={{ x: xRight }}
            className="text-[14vw] font-black text-brand-orange/[0.05] leading-none tracking-tighter whitespace-nowrap uppercase -mt-8"
          >
            GRAPHICS DESIGNER
          </motion.h1>
        </div>

        {/* Mobile Horizontal Text (Fit to screen) */}
        <div className="md:hidden absolute inset-0 flex flex-col justify-center gap-24 pointer-events-none">
          <motion.h1 
            style={{ x: xLeft }}
            className="text-[7.5vw] font-black text-white/[0.05] leading-none tracking-tighter uppercase whitespace-nowrap text-center w-full"
          >
            MUZAMMIL KHAN
          </motion.h1>
          <motion.h1 
            style={{ x: xRight }}
            className="text-[7.5vw] font-black text-brand-orange/[0.05] leading-none tracking-tighter uppercase whitespace-nowrap text-center w-full"
          >
            GRAPHICS DESIGNER
          </motion.h1>
        </div>
      </div>

      {/* 3. Central Picture Layer */}
      <div className="relative z-20 flex flex-col items-center px-6 mt-[-10vh] md:mt-0">
        <motion.div 
          style={{ y: imgY }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-[85vw] md:w-[32vw] aspect-[4/5] overflow-hidden rounded-[40px] md:rounded-[60px] border border-white/10 shadow-[0_0_80px_rgba(250,105,42,0.15)] group"
        >
          <div 
            className="w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" 
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/20 opacity-60" />
          <div className="absolute inset-0 bg-brand-orange/5 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-1000" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-4 md:mt-12 text-center relative z-30 pointer-events-none w-full px-2"
        >
           <span className="text-brand-orange uppercase tracking-[0.4em] md:tracking-[0.8em] text-[8px] md:text-xs font-bold mb-2 md:mb-4 block">Design Manager</span>
           <h2 className="text-[11vw] sm:text-7xl md:text-9xl font-black text-white tracking-tighter uppercase leading-none mix-blend-difference whitespace-nowrap">
             PURE <span className="text-brand-orange italic">ENERGY.</span>
           </h2>
        </motion.div>
      </div>

      {/* 4. Bottom Services Bar */}
      <div className="absolute bottom-12 md:bottom-12 left-0 w-full px-6 md:px-24 z-30">
         <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 border-t border-white/10 pt-8 md:pt-12 pb-4 md:pb-8">
            {[
              { id: "01", title: "Product" },
              { id: "02", title: "Packaging" },
              { id: "03", title: "Film" },
              { id: "04", title: "Creative" }
            ].map((service) => (
              <div key={service.id} className="group cursor-default">
                 <span className="text-brand-orange font-black text-sm md:text-lg mb-1 md:mb-2 block group-hover:scale-110 transition-transform origin-left">#{service.id}</span>
                 <span className="text-lg md:text-2xl font-bold uppercase tracking-tight block group-hover:text-brand-orange transition-colors">
                   {service.title}
                 </span>
              </div>
            ))}
         </div>
      </div>
      
      {/* 5. Gradient Fade to next section */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-brand-black to-transparent z-40 pointer-events-none" />
    </section>
  );
}
