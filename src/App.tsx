import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import SmoothScroll from './components/SmoothScroll'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AboutPage from './pages/About'
import ProjectsPage from './pages/Projects'
import CustomCursor from './components/CustomCursor'

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <SmoothScroll>
        <div className="grain relative min-h-screen bg-brand-black">
          <CustomCursor />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
            </Routes>
          </main>

          <footer className="py-24 px-8 md:px-24 border-t border-white/5 flex flex-col md:flex-row justify-between items-start text-brand-gray-light text-[10px] uppercase tracking-[0.4em] relative z-20 bg-brand-black">
            <div className="max-w-xs mb-12 md:mb-0">
               <Link to="/" className="text-3xl font-black tracking-tighter text-brand-white block mb-8">
                 CP<span className="text-brand-orange">.</span>
               </Link>
               <p className="normal-case text-sm font-light leading-relaxed mb-8">
                 A visual alchemist studio dedicated to high-intensity creative pulse. Pushing the boundaries of what's possible in the digital realm.
               </p>
               <span className="block text-brand-gray-mid tracking-widest uppercase text-[10px] font-bold">Based in New York // Global</span>
            </div>

            <div className="grid grid-cols-2 gap-24">
               <div>
                  <span className="block text-brand-orange font-bold mb-8 tracking-[0.3em]">Studio</span>
                  <ul className="flex flex-col gap-4">
                     <li><Link to="/about" className="hover:text-brand-white transition-colors">Process</Link></li>
                     <li><Link to="/projects" className="hover:text-brand-white transition-colors">Awards</Link></li>
                     <li><a href="/#contact" className="hover:text-brand-white transition-colors">Contact</a></li>
                  </ul>
               </div>
               <div>
                  <span className="block text-brand-orange font-bold mb-8 tracking-[0.3em]">Resources</span>
                  <ul className="flex flex-col gap-4">
                     <li><a href="#" className="hover:text-brand-white transition-colors">Savee</a></li>
                     <li><a href="#" className="hover:text-brand-white transition-colors">Behance</a></li>
                     <li><a href="#" className="hover:text-brand-white transition-colors">Dribbble</a></li>
                  </ul>
               </div>
            </div>
          </footer>
        </div>
      </SmoothScroll>
    </Router>
  )
}

export default App
