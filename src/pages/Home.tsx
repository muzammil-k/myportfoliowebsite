import Hero from '../components/Hero'
import ClientLogos from '../components/ClientLogos'
import ProjectShowcase from '../components/ProjectShowcase'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import About from '../components/About'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <ClientLogos />
      <ProjectShowcase />
      <Services />
      <Testimonials />
      <About />
      <Contact />
    </>
  )
}
