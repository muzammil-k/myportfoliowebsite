import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import emiratesThumbnail from '../assets/EmiratesFoodMart/thumbnail.png';

const projects = [
  { 
    id: 1, 
    title: "Marco Furniture", 
    category: "Brand Strategy", 
    location: "Australia",
    img: "/assets/marco-furniture.jpg", 
    role: "Lead Creative & Visual Marketer"
  },
  { 
    id: 2, 
    title: "IQRA Engine", 
    category: "Identity & Branding", 
    location: "Oman",
    img: "/assets/iqra-engine.jpg", 
    role: "Branding Specialist"
  },
  { 
    id: 3, 
    title: "UK Academy", 
    category: "Content Production", 
    location: "United Kingdom",
    img: "/assets/uk-academy.jpg", 
    role: "Media Strategist"
  },
  { 
    id: 4, 
    slug: "emirates-food-mart",
    title: "Emirates Food Mart", 
    category: "Print & Merchandising", 
    location: "Canada",
    img: emiratesThumbnail, 
    role: "Commercial Graphic Designer"
  }
];

export default function ProjectShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <section ref={containerRef} className="relative h-[300vh] md:h-[400vh] bg-black">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden no-scrollbar">
        <motion.div 
          style={{ x }} 
          className="flex gap-8 md:gap-24 px-6 md:px-24 py-20 md:py-0"
        >
          <div className="flex-shrink-0 w-[80vw] md:w-[40vw] flex flex-col justify-center snap-center">
            <h2 className="text-[14vw] md:text-[12vw] font-black tracking-tighter leading-[0.8] mb-4 uppercase">
              Selected <br /> <span className="text-zinc-800">Works</span>
            </h2>
            <p className="text-zinc-500 text-[10px] md:text-sm uppercase tracking-[0.4em]">Horizontal Showcase // 2024</p>
          </div>

          {projects.map((project) => {
            const isEmirates = project.id === 4;
            const content = (
              <div className="flex-shrink-0 w-[85vw] md:w-[45vw] group relative snap-center cursor-pointer">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[30px] md:rounded-2xl border border-white/5">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${project.img})` }}
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="px-8 py-3 bg-white text-black text-[10px] font-bold uppercase tracking-widest rounded-full">View Project</span>
                  </div>
                </div>
                <div className="mt-6 md:mt-8 flex justify-between items-end">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-2xl md:text-3xl font-black tracking-tight uppercase text-white">{project.title}</h3>
                    <div className="flex items-center gap-2 text-zinc-500 text-[10px] md:text-xs uppercase tracking-widest">
                      <span>{project.category}</span>
                      <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
                      <span>{project.location}</span>
                    </div>
                    <p className="text-zinc-400 text-sm md:text-base mt-2 font-medium">{project.role}</p>
                  </div>
                  <span className="text-zinc-900 text-6xl md:text-8xl font-black leading-none select-none">0{project.id}</span>
                </div>
              </div>
            );

            return isEmirates ? (
              <Link to={`/projects/${project.slug}`} key={project.id}>
                {content}
              </Link>
            ) : (
              <div key={project.id}>
                {content}
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
