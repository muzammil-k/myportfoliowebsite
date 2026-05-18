import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import thumbnail from '../assets/EmiratesFoodMart/thumbnail.png';
import img1 from '../assets/EmiratesFoodMart/1.webp';
import img2 from '../assets/EmiratesFoodMart/2.webp';
import img3 from '../assets/EmiratesFoodMart/3.webp';
import img4 from '../assets/EmiratesFoodMart/4.webp';

// In a real app, this data would come from an API or a shared content file
const projectsData = {
  'emirates-food-mart': {
    title: 'Emirates Food Mart',
    client: 'Premium Canadian Retail Store',
    role: 'Commercial Graphic Designer',
    scope: 'Large-Format Print Design & Retail Merchandising',
    description: 'Designed high-impact storefront window posters to maximize foot traffic and showcase premium product lines. Handled full-scale layout design, color grading, and texture-matching, ensuring crisp, high-resolution outputs for massive physical print dimensions.',
    thumbnail: thumbnail,
    images: [img1, img2, img3, img4]
  }
};

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectsData[slug as keyof typeof projectsData] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-brand-black flex items-center justify-center pt-32">
        <div className="text-center">
          <h1 className="text-4xl font-black text-white uppercase mb-8">Project Not Found</h1>
          <Link to="/projects" className="text-brand-orange uppercase tracking-widest text-sm hover:text-white transition-colors">
            Return to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 md:pt-48 pb-12 md:pb-32 px-6 md:px-24 bg-brand-black min-h-screen">
      <div className="max-w-7xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-4 text-brand-gray-light hover:text-brand-white transition-colors uppercase tracking-[0.3em] text-[10px] font-bold mb-12 group">
          <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-32"
        >
          <h1 className="text-[12vw] md:text-[8vw] font-black text-white tracking-tighter leading-[0.9] uppercase mb-12">
            {project.title}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 pt-12 border-t border-white/10">
             <div className="md:col-span-2">
                <p className="text-brand-gray-light text-lg md:text-xl font-light leading-relaxed">
                  {project.description}
                </p>
             </div>
             <div className="flex flex-col gap-8">
                <div>
                  <span className="text-brand-orange uppercase tracking-[0.4em] text-[10px] font-bold block mb-2">Client</span>
                  <span className="text-white text-sm md:text-base font-medium">{project.client}</span>
                </div>
                <div>
                  <span className="text-brand-orange uppercase tracking-[0.4em] text-[10px] font-bold block mb-2">Role</span>
                  <span className="text-white text-sm md:text-base font-medium">{project.role}</span>
                </div>
                <div>
                  <span className="text-brand-orange uppercase tracking-[0.4em] text-[10px] font-bold block mb-2">Scope</span>
                  <span className="text-white text-sm md:text-base font-medium">{project.scope}</span>
                </div>
             </div>
          </div>
        </motion.div>

        <div className="space-y-12 md:space-y-24">
           {/* Hero / Thumbnail Image */}
           <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
             className="w-full rounded-[20px] md:rounded-[40px] overflow-hidden border border-white/5"
           >
              <img src={project.thumbnail} alt={`${project.title} cover`} className="w-full h-auto object-cover" />
           </motion.div>

           {/* Gallery Images Bento Grid */}
           <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 md:auto-rows-[400px]">
             {project.images.map((img, i) => {
                const bentoClasses = [
                  "md:col-span-8 md:row-span-1",
                  "md:col-span-4 md:row-span-2",
                  "md:col-span-4 md:row-span-1",
                  "md:col-span-4 md:row-span-1"
                ][i % 4];

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                    className={`w-full rounded-[20px] md:rounded-[40px] overflow-hidden border border-white/5 relative group h-[300px] md:h-auto ${bentoClasses}`}
                  >
                    <img src={img} alt={`${project.title} detail ${i + 1}`} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </motion.div>
                );
             })}
           </div>
        </div>
      </div>
    </div>
  );
}
