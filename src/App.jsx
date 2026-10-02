import Header from './components/Header'
import ParticleNetwork from './components/Animations/ParticleNetwork'
import DriftingBlobs from './components/Animations/DriftingBlobs'
import ScrollProgress from './components/Animations/ScrollProgress'
import BackToTop from './components/Animations/BackToTop'
import Hero from './components/Sections/Hero'
import Skills from './components/Sections/Skills'
import Certifications from './components/Sections/Certifications'
import Experience from './components/Sections/Experience'
import Projects from './components/Sections/Projects'
import Education from './components/Sections/Education'
import Achievements from './components/Sections/Achievements'
import Languages from './components/Sections/Languages'
import About from './components/Sections/About'
import Contact from './components/Sections/Contact'

export default function App() {
  return (
    <div className="bg-base text-text min-h-screen overflow-x-hidden relative">
      {/* Ambient background layers */}
      <ParticleNetwork />
      <DriftingBlobs />
      <div className="orb orb--cyan" />
      <div className="orb orb--amber" />
      <div className="grid-bg" />

      <ScrollProgress />
      <Header />
      <BackToTop />

      <main className="relative z-10">
        <Hero />
        <Skills />
        <Certifications />
        <Experience />
        <Projects />
        <Education />
        <Achievements />
        <Languages />
        <About />
        <Contact />
      </main>
    </div>
  )
}