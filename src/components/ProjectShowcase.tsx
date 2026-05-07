import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const projects = [
  { id: 1, title: "CYBERPUNK", category: "Brand Experience", img: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=2000&auto=format&fit=crop" },
  { id: 2, title: "NEBULA", category: "Digital Art", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop" },
  { id: 3, title: "KINETIC", category: "Motion Direction", img: "https://images.unsplash.com/photo-1635334468644-8461019053c9?q=80&w=2000&auto=format&fit=crop" },
  { id: 4, title: "VOID", category: "Visual Identity", img: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2000&auto=format&fit=crop" },
];

export default function ProjectShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-black">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-24 px-8 md:px-24">
          <div className="flex-shrink-0 w-[60vw] md:w-[40vw] flex flex-col justify-center">
            <h2 className="text-[12vw] font-black tracking-tighter leading-none mb-4 uppercase">
              Selected <br /> <span className="text-zinc-800">Works</span>
            </h2>
            <p className="text-zinc-500 text-sm uppercase tracking-[0.4em]">Horizontal Showcase // 2024</p>
          </div>

          {projects.map((project) => (
            <div key={project.id} className="flex-shrink-0 w-[85vw] md:w-[45vw] group relative">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/5">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.img})` }}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="px-8 py-3 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full">View Project</span>
                </div>
              </div>
              <div className="mt-8 flex justify-between items-end">
                <div>
                  <h3 className="text-3xl font-bold tracking-tight mb-2 uppercase">{project.title}</h3>
                  <p className="text-zinc-500 text-xs uppercase tracking-widest">{project.category}</p>
                </div>
                <span className="text-zinc-900 text-8xl font-black leading-none select-none">0{project.id}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
