import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' }
  ];

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 w-full z-[100] px-8 py-8 flex justify-between items-center pointer-events-none"
    >
      <div className="flex items-center gap-2 pointer-events-auto">
        <Link to="/">
          <motion.div 
            whileHover={{ rotate: 90, scale: 1.1 }}
            className="w-14 h-14 bg-brand-orange rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 shadow-[0_0_30px_rgba(250,105,42,0.3)] cursor-pointer"
          >
             <span className="text-white font-black text-2xl tracking-tighter">G</span>
          </motion.div>
        </Link>
      </div>
      
      <div className="hidden md:flex items-center gap-4 bg-white/[0.03] backdrop-blur-3xl px-3 py-3 rounded-full border border-white/10 shadow-2xl pointer-events-auto">
        {navItems.map((item) => (
          <motion.div key={item.name} className="relative group overflow-hidden rounded-full">
            <Link 
              to={item.path}
              className={`px-8 py-3 rounded-full text-xs font-black transition-all tracking-[0.3em] uppercase relative block ${location.pathname === item.path ? 'text-brand-orange' : 'text-white'}`}
            >
              <span className="relative z-10 group-hover:text-brand-orange transition-colors">{item.name}</span>
              <motion.div 
                className="absolute inset-0 bg-brand-orange/10 -translate-y-full group-hover:translate-y-0 transition-transform duration-500"
              />
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="pointer-events-auto">
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
    </motion.nav>
  );
}
