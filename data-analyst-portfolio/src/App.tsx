import Navbar from './components/Navbar'
import { useTheme } from './components/useTheme'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import AiAnalytics from './sections/AiAnalytics'
import Workflow from './sections/Workflow'
import Education from './sections/Education'
import Certifications from './sections/Certifications'
import Resume from './sections/Resume'
import Contact from './sections/Contact'

export default function App() {
  const { theme, toggle } = useTheme()
  return (
    <>
      <Navbar theme={theme} onToggle={toggle} />
      <main id="main">
        <Hero theme={theme} />
        <About />
        <Skills />
        <Projects />
        <AiAnalytics theme={theme} />
        <Workflow />
        <Education />
        <Certifications />
        <Resume />
        <Contact />
      </main>
    </>
  )
}
