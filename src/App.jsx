import Header from './components/Header'
import TerminalSidebar from './components/Sidebar/TerminalSidebar'
import Hero from './components/Sections/Hero'
import Skills from './components/Sections/Skills'
import Experience from './components/Sections/Experience'
import Projects from './components/Sections/Projects'
import About from './components/Sections/About'
import Contact from './components/Sections/Contact'

export default function App() {
  return (
    <div className="bg-dark-bg text-white min-h-screen overflow-x-hidden">
      <Header />
      <TerminalSidebar />
      <div>
        <main className="flex-1 pt-16">
          <Hero />
          <Skills />
          <Experience />
          <Projects />
          <About />
          <Contact />
        </main>
      </div>

    </div>
  )
}
