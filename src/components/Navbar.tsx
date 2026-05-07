import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import StaggeredMenu from './StaggeredMenu';

export default function Navbar() {
  const location = useLocation();
  
  const navItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
    { label: 'Projects', ariaLabel: 'View our projects', link: '/projects' }
  ];

  const socialItems = [
    { label: 'Instagram', link: 'https://instagram.com' },
    { label: 'Twitter', link: 'https://twitter.com' },
    { label: 'Behance', link: 'https://behance.net' },
    { label: 'Dribbble', link: 'https://dribbble.com' }
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 w-full z-[100] px-6 md:px-12 py-6 md:py-8 flex justify-between items-center pointer-events-none"
      >
        <div className="flex items-center gap-2 pointer-events-auto">
          <Link to="/">
            <motion.div 
              whileHover={{ rotate: 90, scale: 1.1 }}
              className="w-12 h-12 md:w-14 md:h-14 bg-brand-orange rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 shadow-[0_0_30px_rgba(250,105,42,0.3)] cursor-pointer"
            >
               <span className="text-white font-black text-xl md:text-2xl tracking-tighter">M</span>
            </motion.div>
          </Link>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4 bg-white/[0.03] backdrop-blur-3xl px-3 py-3 rounded-full border border-white/10 shadow-2xl pointer-events-auto">
          {navItems.map((item) => (
            <motion.div key={item.label} className="relative group overflow-hidden rounded-full">
              <Link 
                to={item.link}
                className={`px-8 py-3 rounded-full text-xs font-black transition-all tracking-[0.3em] uppercase relative block ${location.pathname === item.link ? 'text-brand-orange' : 'text-white'}`}
              >
                <span className="relative z-10 group-hover:text-brand-orange transition-colors">{item.label}</span>
                <motion.div 
                  className="absolute inset-0 bg-brand-orange/10 -translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center gap-4 pointer-events-auto">
          {/* Get in Touch Button (Desktop) */}
          <div className="hidden md:block">
            <a href="/#contact">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-brand-orange text-white px-10 py-4 rounded-full flex items-center gap-4 overflow-hidden border border-white/20 shadow-[0_0_40px_rgba(250,105,42,0.2)]"
              >
                <motion.div 
                  className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16, 1, 0.3, 1]"
                />
                <span className="relative z-10 text-base font-black tracking-tight group-hover:text-brand-orange transition-colors duration-500">Get in Touch</span>
                <div className="relative z-10 bg-white/20 group-hover:bg-brand-orange w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-500">
                  <ArrowUpRight size={18} className="text-white group-hover:text-white" />
                </div>
              </motion.button>
            </a>
          </div>
        </div>
      </motion.nav>

      {/* Staggered Menu for Mobile & Tablet */}
      <div className="md:hidden">
        <StaggeredMenu
          isFixed={true}
          items={navItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={true}
          accentColor="#FA692A"
          colors={['#111', '#1a1a1a', '#000']}
          menuButtonColor="#ffffff"
          openMenuButtonColor="#FA692A"
        />
      </div>
    </>
  );
}

