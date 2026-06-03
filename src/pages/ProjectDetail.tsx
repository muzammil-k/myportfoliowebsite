import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

// Import local static thumbnails and resources
import thumbnail from '../assets/EmiratesFoodMart/thumbnail.png';
import img1 from '../assets/EmiratesFoodMart/1.webp';
import img2 from '../assets/EmiratesFoodMart/2.webp';
import img3 from '../assets/EmiratesFoodMart/3.webp';
import img4 from '../assets/EmiratesFoodMart/4.webp';

import iqraThumbnail from '../assets/IQRABOT/thumbnail.jpeg';
import iqraImg1 from '../assets/IQRABOT/ADD_THIS_IN_A_MOCKUP_202605300020.jpeg';

import marcoThumbnail from '../assets/marco/thumbnail.png';
import brandThumbnail from '../assets/portfolio_webp/logos & branding/branding/corporate brand identity.webp';
import printThumbnail from '../assets/portfolio_webp/menu & brouchers/brouchers/marco digital.webp';
import xauusdThumbnail from '../assets/portfolio_webp/logos & branding/branding/xauusd bullet.webp';

const formatLogoName = (filename: string): string => {
  const cleanName = filename.trim();
  const lookup: Record<string, string> = {
    '1': 'Thrift',
    'ap carriers 1': 'AP Carriers',
    'Artboard 1': 'The Karate Club',
    'Artboard 1s': 'The Karate Club (Identity)',
    'Artboard 2': 'The Karate Club Mockups',
    'Artboard 3': 'The Karate Club Emblem',
    'BHY': 'BHY Logo',
    'CARBON SPARK 3': 'Carbon Spark',
    'cs shield withou topa': 'CS Shield',
    'Envelope With String Mockups': 'Envelope Mockup',
    'equator communication 2': 'Equator Communication',
    'find aim 3': 'Find Aim',
    'flith force cleaners 4': 'Filth Force Cleaners',
    'gospel 2': 'Gospel',
    'i point main': 'I-Point',
    'M BRIDGE': 'M-Bridge',
    'MEDIC APP 2': 'Medic App',
    'NURTURE FIR TREE': 'Nurture Fir Tree',
    'OFF BEAT 2': 'Off Beat',
    'ROTO': 'Roto',
    'TM3': 'TM3',
    'Untitled-1': 'Geometric Mark',
    'Untitled-3': 'Creative Monogram',
    'Untitled-4': 'Corporate Identity',
    'WHITE': 'White Shield',
    'wefg': 'Modern Signet',
    'world migratio. 3ai': 'World Migration',
    'zinda chic 2': 'Zinda Chic',
    'ta red jpg': 'TA Red Logo',
    'nin ani 22': 'Nin Ani Logo',
    'maroon': 'Maroon Emblem',
    'ASTRON EAGLE': 'Astron Eagle',
    'bakery': 'Bakery Logo',
    'bet on better': 'Bet On Better',
    'novizio': 'Novizio'
  };

  if (lookup[cleanName]) {
    return lookup[cleanName];
  }

  return cleanName
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase());
};

// Dynamic WebP portfolio files using Vite's glob import
const logoFiles = import.meta.glob('../assets/portfolio_webp/logos & branding/logos/*.webp', { eager: true, import: 'default' });
const logoImages = Object.entries(logoFiles).map(([path, url]) => {
  const filename = path.split('/').pop()?.replace('.webp', '') || '';
  return {
    url: url as string,
    category: 'Logos',
    name: formatLogoName(filename)
  };
});

const brandingFiles = import.meta.glob('../assets/portfolio_webp/logos & branding/branding/*.webp', { eager: true, import: 'default' });
const brandingImages = Object.entries(brandingFiles).map(([path, url]) => ({
  url: url as string,
  category: 'Branding',
  name: path.split('/').pop()?.replace('.webp', '') || ''
}));

const brochureFiles = import.meta.glob('../assets/portfolio_webp/menu & brouchers/brouchers/*.webp', { eager: true, import: 'default' });
const brochureImages = Object.entries(brochureFiles).map(([path, url]) => ({
  url: url as string,
  category: 'Brochures',
  name: path.split('/').pop()?.replace('.webp', '') || ''
}));

const menuFiles = import.meta.glob('../assets/portfolio_webp/menu & brouchers/menu/*.webp', { eager: true, import: 'default' });
const menuImages = Object.entries(menuFiles).map(([path, url]) => ({
  url: url as string,
  category: 'Menus',
  name: path.split('/').pop()?.replace('.webp', '') || ''
}));

const posterFiles = import.meta.glob('../assets/portfolio_webp/menu & brouchers/posters/*.webp', { eager: true, import: 'default' });
const posterImages = Object.entries(posterFiles).map(([path, url]) => ({
  url: url as string,
  category: 'Posters',
  name: path.split('/').pop()?.replace('.webp', '') || ''
}));

const marcoFiles = import.meta.glob('../assets/portfolio_webp/social media posts/marco furniture/*.webp', { eager: true, import: 'default' });
const marcoImages = Object.entries(marcoFiles).map(([path, url]) => ({
  url: url as string,
  category: 'Social Media',
  name: path.split('/').pop()?.replace('.webp', '') || ''
}));

const xauusdFiles = import.meta.glob('../assets/portfolio_webp/social media posts/xauusd bullet/*.webp', { eager: true, import: 'default' });
const xauusdImages = Object.entries(xauusdFiles).map(([path, url]) => ({
  url: url as string,
  category: 'Social Media',
  name: path.split('/').pop()?.replace('.webp', '') || ''
}));

// Shared projects portfolio definition
const projectsData = {
  'marco-furniture': {
    title: 'Marco Furniture',
    client: 'Marco Furniture (Australia)',
    role: 'Lead Creative & Visual Marketer',
    scope: 'Full-Scale Brand Strategy, Digital Marketing, & Visual Merchandising',
    description: 'Spearheaded core logo branding and corporate identity guidelines, ensuring visual consistency across digital and physical touchpoints. Designed and curated 300+ high-engagement social media posts, establishing a cohesive, premium, and minimalist grid aesthetic. Produced and edited 200+ short-form social media reels and targeted Meta Ads reels, optimizing for high conversion, smooth cinematic transitions, and viewer retention. Designed large-format window posters and physical marketing collateral for showroom displays.',
    thumbnail: marcoThumbnail,
    categories: ['Social Media'],
    images: marcoImages
  },
  'iqra-engine': {
    title: 'IQRA Engine',
    client: 'IQRA — The Dynamic AI-First Engine (Oman)',
    role: 'Identity & Branding Specialist',
    scope: 'Logo Design & Tech-Centric Brand Systems',
    description: 'Concepted and executed the official corporate logo for a cutting-edge, tech-forward platform. Fused modern typography with clean visual metaphors to reflect an "AI-First" narrative, prioritizing scale, technological precision, and dynamic functionality. Delivered vector source files, high-resolution web transparency assets, and circular watermark variants suitable for cross-platform integration.',
    thumbnail: iqraThumbnail,
    categories: [],
    images: [
      { url: iqraImg1, category: 'Logo Design', name: 'Official Logo & Brandmetaphor' }
    ]
  },
  'brand-identity-logos': {
    title: 'Brand Identity & Logos',
    client: 'Various International Brands',
    role: 'Creative Director & Graphic Designer',
    scope: 'Logo Design, Corporate Guidelines, & Branding Assets',
    description: 'A comprehensive showcase of professional logo designs and brand identity systems developed for startups, tech firms, corporate agencies, and commercial clients globally. Focuses on high-impact minimalism, geometric precision, and scalable brand design.',
    thumbnail: brandThumbnail,
    categories: ['Logos', 'Branding'],
    images: [...logoImages, ...brandingImages]
  },
  'emirates-food-mart': {
    title: 'Emirates Food Mart',
    client: 'Premium Canadian Retail Store',
    role: 'Commercial Graphic Designer',
    scope: 'Large-Format Print Design & Retail Merchandising',
    description: 'Designed high-impact storefront window posters to maximize foot traffic and showcase premium product lines. Handled full-scale layout design, color grading, and texture-matching, ensuring crisp, high-resolution outputs for massive physical print dimensions.',
    thumbnail: thumbnail,
    categories: [],
    images: [
      { url: img1, category: 'Storefront', name: 'Storefront Window Post 1' },
      { url: img2, category: 'Storefront', name: 'Storefront Window Post 2' },
      { url: img3, category: 'Storefront', name: 'Storefront Window Post 3' },
      { url: img4, category: 'Storefront', name: 'Storefront Window Post 4' }
    ]
  },
  'print-media-design': {
    title: 'Print Media & Marketing',
    client: 'Corporate & Commercial Clients',
    role: 'Layout & Typography Specialist',
    scope: 'Brochures, Menus, Flyers, & Large-Format Posters',
    description: 'A collection of print designs, including professional tri-fold brochures, restaurant menu cards, promotional flyers, and corporate posters. Designed with a strong focus on typography hierarchy, grid systems, high-contrast layouts, and print-ready production standards.',
    thumbnail: printThumbnail,
    categories: ['Brochures', 'Menus', 'Posters'],
    images: [...brochureImages, ...menuImages, ...posterImages]
  },
  'xauusd-bullet': {
    title: 'XAUUSD Bullet',
    client: 'Financial Trading & Education Academy',
    role: 'Content & Identity Lead',
    scope: 'Social Grid Aesthetics, Copywriting, & Infographics',
    description: 'Designed cohesive social media graphics and visual templates for a premium gold-trading signals and educational platform. Established a high-contrast dark-and-gold visual theme optimized for social feeds, focusing on clarity of trading results, educational infographics, and promotional materials.',
    thumbnail: xauusdThumbnail,
    categories: ['Social Media'],
    images: xauusdImages
  }
};

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectsData[slug as keyof typeof projectsData] : null;

  const [activeTab, setActiveTab] = useState(
    project && project.categories.length > 1 ? project.categories[0] : 'All'
  );
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter gallery items based on selected tab
  const filteredImages = project 
    ? project.images.filter(img => activeTab === 'All' || img.category === activeTab)
    : [];

  // Reset filter tab on project page change
  useEffect(() => {
    if (project && project.categories.length > 1) {
      setActiveTab(project.categories[0]);
    } else {
      setActiveTab('All');
    }
    setLightboxIndex(null);
  }, [slug, project]);

  // Keyboard navigation & body scroll lock for Lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev! - 1 + filteredImages.length) % filteredImages.length);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev! + 1) % filteredImages.length);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, filteredImages.length]);

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
        <Link to="/projects" className="inline-flex items-center gap-4 text-brand-gray-light hover:text-brand-white transition-colors uppercase tracking-[0.3em] text-[10px] font-bold mb-12 group">
          <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
          Back to Projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24"
        >
          <h1 className="text-[10vw] md:text-[6vw] font-black text-white tracking-tighter leading-[0.9] uppercase mb-12">
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
          {/* Filtering tabs */}
          {project.categories.length > 1 && (
            <div className="flex flex-wrap gap-3 justify-center md:justify-start border-b border-white/5 pb-6">
              {project.categories.map((cat) => {
                const count = project.images.filter(img => img.category === cat).length;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveTab(cat)}
                    className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                      activeTab === cat
                        ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/20 scale-105'
                        : 'bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {cat} ({count})
                  </button>
                );
              })}
            </div>
          )}

          {/* Responsive Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {filteredImages.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: (idx % 4) * 0.05 }}
                onClick={() => setLightboxIndex(idx)}
                className="w-full aspect-square rounded-2xl overflow-hidden border border-white/5 relative group cursor-pointer bg-zinc-900"
              >
                <img
                  src={img.url}
                  alt={img.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-[10px] text-brand-orange uppercase font-bold tracking-widest mb-1">{img.category}</span>
                  <h4 className="text-white text-sm font-bold tracking-tight truncate uppercase">{img.name}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal overlay */}
      {lightboxIndex !== null && filteredImages[lightboxIndex] && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-12 transition-all duration-300"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Top Info Bar */}
          <div className="absolute top-6 right-6 flex items-center gap-6 z-50">
            <span className="text-zinc-500 text-xs font-mono">
              {lightboxIndex + 1} / {filteredImages.length}
            </span>
            <button 
              onClick={() => setLightboxIndex(null)}
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X size={20} />
            </button>
          </div>

          {/* Previous Button */}
          {filteredImages.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev! - 1 + filteredImages.length) % filteredImages.length);
              }}
              className="absolute left-6 p-4 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors cursor-pointer z-40"
              aria-label="Previous Image"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {/* Next Button */}
          {filteredImages.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev! + 1) % filteredImages.length);
              }}
              className="absolute right-6 p-4 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors cursor-pointer z-40"
              aria-label="Next Image"
            >
              <ChevronRight size={24} />
            </button>
          )}

          {/* Image Container */}
          <div 
            className="relative max-w-full max-h-[80vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              src={filteredImages[lightboxIndex].url}
              alt={filteredImages[lightboxIndex].name}
              className="max-w-full max-h-[75vh] object-contain rounded-lg border border-white/5 shadow-2xl"
            />
            <div className="mt-6 text-center max-w-lg">
              <span className="text-[10px] text-brand-orange uppercase font-bold tracking-widest block mb-1">
                {filteredImages[lightboxIndex].category}
              </span>
              <h4 className="text-white text-lg font-black tracking-tight uppercase truncate">
                {filteredImages[lightboxIndex].name}
              </h4>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
