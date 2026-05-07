import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  { id: 1, title: "CYBERPUNK", category: "Brand Experience", img: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=2000&auto=format&fit=crop" },
  { id: 2, title: "NEBULA", category: "Digital Art", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop" },
  { id: 3, title: "KINETIC", category: "Motion Direction", img: "https://images.unsplash.com/photo-1635334468644-8461019053c9?q=80&w=2000&auto=format&fit=crop" },
  { id: 4, title: "VOID", category: "Visual Identity", img: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2000&auto=format&fit=crop" },
  { id: 5, title: "AURA", category: "Interactive Install", img: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=2000&auto=format&fit=crop" },
  { id: 6, title: "PRISM", category: "Creative Coding", img: "https://images.unsplash.com/photo-1618556450991-2f1af64e8191?q=80&w=2000&auto=format&fit=crop" },
];

export default function ProjectsPage() {
  return (
    <div className="pt-32 md:pt-48 pb-12 md:pb-24 px-6 md:px-24 bg-brand-black min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 md:mb-32"
        >
          <span className="text-brand-orange uppercase tracking-[0.4em] md:tracking-[0.6em] text-[10px] md:text-xs font-bold block mb-6 md:mb-8 text-center md:text-left">Selected Works</span>
           <h1 className="text-[12vw] md:text-[10vw] font-black text-white tracking-tighter leading-[0.8] uppercase text-center md:text-left">
            Curated <br /> Portfolio<span className="text-brand-orange italic">.</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          {projects.map((project, i) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i % 2 * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[30px] md:rounded-[40px] border border-white/5">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.img})` }}
                />
                <div className="absolute inset-0 bg-brand-black/40 group-hover:bg-brand-black/10 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
                   <div className="w-16 h-16 md:w-24 md:h-24 bg-white text-brand-black rounded-full flex items-center justify-center shadow-2xl">
                      <ArrowUpRight size={24} />
                   </div>
                </div>
              </div>
              <div className="mt-8 md:mt-12 flex justify-between items-start">
                <div>
                   <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-2">{project.title}</h3>
                   <p className="text-brand-orange text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold">{project.category}</p>
                </div>
                <span className="text-zinc-800 text-5xl md:text-6xl font-black leading-none">0{project.id}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
