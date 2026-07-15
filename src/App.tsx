import './App.css'
import { useDarkMode } from '@/hooks/useDarkMode'
import { useScrolled } from '@/hooks/useScrolled'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { ContactSection } from '@/components/sections/ContactSection'

function scrollToSection(target: string) {
  document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function App() {
  const [darkMode, setDarkMode] = useDarkMode()
  const isScrolled = useScrolled()
  useScrollReveal()

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header
        darkMode={darkMode}
        isScrolled={isScrolled}
        onToggleDarkMode={() => setDarkMode((value) => !value)}
        onNavigate={scrollToSection}
      />

      <main>
        <HeroSection onNavigate={scrollToSection} />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}

export default App
