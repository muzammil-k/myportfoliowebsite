import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="pt-32 md:pt-48 pb-12 md:pb-24 px-6 md:px-24 bg-brand-black min-h-screen relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-brand-orange/10 blur-[100px] md:blur-[150px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-brand-orange/5 blur-[100px] md:blur-[150px] rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-brand-orange uppercase tracking-[0.3em] md:tracking-[0.6em] text-[9px] md:text-xs font-bold block mb-4 md:mb-8 text-center md:text-left">The Alchemist</span>
          <h1 className="text-[12vw] md:text-[8vw] font-black text-white tracking-tighter leading-[0.9] mb-12 md:mb-24 uppercase text-center md:text-left">
            Storytelling <br /> Through <br /> <span className="text-brand-orange italic">Design.</span>
          </h1>
        </motion.div>

        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 mt-12 md:mt-32">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="w-full lg:col-span-6"
          >
            <div className="aspect-[4/5] w-full bg-zinc-900 rounded-[24px] md:rounded-[40px] overflow-hidden border border-white/5">
              <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center grayscale" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="w-full lg:col-span-6 flex flex-col justify-center space-y-6 md:space-y-12"
          >
            <p className="text-base md:text-3xl text-brand-white font-medium leading-relaxed">
              With over 8 years of experience in creative direction and motion design, I've dedicated my career to bridging the gap between artistic vision and commercial impact.
            </p>
            <p className="text-zinc-500 text-xs md:text-lg font-light leading-relaxed">
              My philosophy is simple: Design is the energy that connects people to ideas. Every project is an opportunity to create a digital artifact that leaves a lasting impression on the human psyche.
            </p>
            
            <div className="pt-6 md:pt-12 grid grid-cols-2 gap-6 md:gap-12 border-t border-white/5">
               <div>
                  <span className="text-brand-orange font-bold text-[8px] md:text-xs uppercase tracking-widest block mb-3 md:mb-4">Focus</span>
                  <ul className="text-white text-[8px] md:text-sm space-y-1.5 md:space-y-2 uppercase tracking-widest font-bold">
                     <li>Creative Direction</li>
                     <li>3D Animation</li>
                     <li>Brand Systems</li>
                  </ul>
               </div>
               <div>
                  <span className="text-brand-orange font-bold text-[8px] md:text-xs uppercase tracking-widest block mb-3 md:mb-4">Philosophy</span>
                  <p className="text-zinc-400 text-[8px] leading-relaxed uppercase tracking-widest font-medium">
                    Motion is the soul of design.
                  </p>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
