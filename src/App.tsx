import { type ChangeEvent, type CSSProperties, type FormEvent, useEffect, useRef, useState } from 'react'
import {
  Check,
  Code2,
  Copy,
  Database,
  ExternalLink,
  Github,
  Instagram,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Server,
  Smartphone,
  Sun,
  X,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import './App.css'
import profile from '@/assets/photo-profile.jpeg'
import elevador from '@/assets/elevado-interativo.png'
import conversor from '@/assets/conversor-dinheiro.png'
import cifra from '@/assets/cifra-cesa.png'
import jokenpo from '@/assets/jokepo.png'

interface Project {
  id: number
  title: string
  description: string
  image: string
  github: string
  technologies: string[]
}

interface SkillGroup {
  title: string
  description: string
  icon: typeof Code2
  color: string
  skills: string[]
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Elevador Interativo',
    description: 'Simulação interativa de um elevador com interface objetiva, estados visuais e animações suaves.',
    image: elevador,
    github: 'https://github.com/Anderson-reis7/projet-elevador',
    technologies: ['JavaScript', 'HTML', 'CSS'],
  },
  {
    id: 2,
    title: 'Conversor de Moedas',
    description: 'Aplicação para conversão de moedas com foco em usabilidade, leitura rápida e integração com API.',
    image: conversor,
    github: 'https://github.com/Anderson-reis7/conversor-de-dinheiro',
    technologies: ['JavaScript', 'API', 'CSS'],
  },
  {
    id: 3,
    title: 'Cifra de César',
    description: 'Ferramenta de criptografia baseada na técnica clássica da Cifra de César.',
    image: cifra,
    github: 'https://github.com/Anderson-reis7/cifra-de-cesar',
    technologies: ['JavaScript', 'Criptografia', 'HTML'],
  },
  {
    id: 4,
    title: 'Jokenpô',
    description: 'Jogo de pedra, papel e tesoura com regras simples, feedback visual e interação direta.',
    image: jokenpo,
    github: 'https://github.com/Anderson-reis7/jokenpo',
    technologies: ['JavaScript', 'Game Logic', 'CSS'],
  },
]

const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    description: 'Interfaces responsivas, acessíveis e performáticas para produtos digitais.',
    icon: Code2,
    color: 'var(--skill-cyan)',
    skills: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'HTML5', 'CSS3'],
  },
  {
    title: 'Backend',
    description: 'Construção e manutenção de aplicações corporativas com base Java.',
    icon: Server,
    color: 'var(--skill-violet)',
    skills: ['Java 8+', 'Spring Boot', 'Apache Wicket', 'APIs REST'],
  },
  {
    title: 'Dados e Integrações',
    description: 'Organização de fluxos, consumo de APIs e preparo para integrações de sistemas.',
    icon: Database,
    color: 'var(--skill-green)',
    skills: ['REST', 'JSON', 'Validações', 'Regras de negócio'],
  },
  {
    title: 'Mobile',
    description: 'Experiências adaptadas para uso mobile e rotinas de produto.',
    icon: Smartphone,
    color: 'var(--skill-amber)',
    skills: ['Capacitor', 'PWA', 'Design responsivo', 'Performance Web'],
  },
]

const highlights = [
  {
    value: 'Fullstack',
    label: 'Frontend, backend Java e mobile',
  },
  {
    value: '4+',
    label: 'Projetos publicados no GitHub',
  },
  {
    value: 'Mobile',
    label: 'Capacitor e experiências responsivas',
  },
]

const deliveryPillars = [
  'Interfaces limpas e responsivas',
  'Código organizado e manutenível',
  'Base para sistemas corporativos',
]

const navigationItems = [
  { label: 'Início', target: 'home', index: '00' },
  { label: 'Sobre', target: 'about', index: '01' },
  { label: 'Conhecimentos', target: 'skills', index: '02' },
  { label: 'Projetos', target: 'projects', index: '03' },
  { label: 'Contato', target: 'contact', index: '04' },
]

const CONTACT_EMAIL = 'andersonreis.developer@gmail.com'

function useScrollReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>('.reveal')
    if (targets.length === 0) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      targets.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -64px 0px' },
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

function BackgroundDecor() {
  return (
    <div className="bg-decor" aria-hidden="true">
      <span className="bg-grid" />
      <span className="glow-orb glow-orb-cyan" />
      <span className="glow-orb glow-orb-violet" />
    </div>
  )
}

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === 'undefined') {
      return false
    }

    const storedTheme = window.localStorage.getItem('theme')

    if (storedTheme) {
      return storedTheme === 'dark'
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [copied, setCopied] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const copyTimeoutRef = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    window.localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => () => clearTimeout(copyTimeoutRef.current), [])

  useScrollReveal()

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const subject = encodeURIComponent(`Contato de ${formData.name.trim()}`)
    const body = encodeURIComponent(
      `Nome: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMensagem:\n${formData.message.trim()}`,
    )

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
    setFormData({ name: '', email: '', message: '' })
  }

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL)
      setCopied(true)
      copyTimeoutRef.current = setTimeout(() => setCopied(false), 2000)
    } catch {
      // clipboard indisponível: o link mailto abaixo continua funcional
    }
  }

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setIsMenuOpen(false)
  }

  const currentYear = new Date().getFullYear()

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <header className={`site-header${isScrolled ? ' is-scrolled' : ''}`}>
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <button
            type="button"
            className="brand-button"
            onClick={() => scrollToSection('home')}
            aria-label="Ir para o início"
          >
            <span className="brand-mark" aria-hidden="true">
              &lt;
            </span>
            Anderson Reis
            <span className="brand-mark" aria-hidden="true">
              /&gt;
            </span>
          </button>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Navegação principal">
            {navigationItems.map((item) => (
              <button
                key={item.target}
                type="button"
                onClick={() => scrollToSection(item.target)}
                className="nav-link"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode((value) => !value)}
              className="rounded-full"
              aria-label={darkMode ? 'Ativar tema claro' : 'Ativar tema escuro'}
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="rounded-full md:hidden"
              onClick={() => setIsMenuOpen((value) => !value)}
              aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <nav id="mobile-menu" className="mobile-menu md:hidden" aria-label="Navegação mobile">
            <div className="container mx-auto space-y-1 px-4 py-4">
              {navigationItems.map((item) => (
                <button
                  key={item.target}
                  type="button"
                  onClick={() => scrollToSection(item.target)}
                  className="mobile-nav-link"
                >
                  <span className="mobile-nav-index">{item.index}</span>
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main>
        <section id="home" className="hero-section">
          <BackgroundDecor />
          <div className="hero-container container mx-auto grid items-center gap-12 px-4">
            <div className="hero-copy reveal">
              <span className="eyebrow">
                <span className="eyebrow-dot" aria-hidden="true" />
                Desenvolvedor Fullstack
              </span>
              <h1>
                Construo aplicações web completas, responsivas e preparadas para{' '}
                <span className="text-gradient">uso profissional</span>.
              </h1>
              <p>
                Sou Anderson Reis, desenvolvedor fullstack com foco em interfaces modernas, backend Java,
                integrações e experiências mobile. Meu objetivo é entregar soluções claras, rápidas e bem
                estruturadas para empresas e produtos digitais.
              </p>

              <div className="hero-pillars" aria-label="Pontos fortes">
                {deliveryPillars.map((pillar) => (
                  <span key={pillar}>
                    <Layers3 className="h-4 w-4" aria-hidden="true" />
                    {pillar}
                  </span>
                ))}
              </div>

              <div className="hero-actions">
                <Button onClick={() => scrollToSection('projects')} size="lg" className="btn-glow">
                  Ver projetos
                </Button>
                <Button onClick={() => scrollToSection('contact')} variant="outline" size="lg">
                  Entrar em contato
                </Button>
              </div>

              <div className="hero-stats" aria-label="Resumo profissional">
                {highlights.map((item) => (
                  <div key={item.value}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="profile-panel reveal reveal-delay">
              <div className="profile-frame">
                <img
                  src={profile}
                  alt="Foto profissional de Anderson Reis"
                  className="profile-photo"
                  width="420"
                  height="520"
                  decoding="async"
                  fetchPriority="high"
                />
              </div>

              <div className="profile-badge" aria-hidden="true">
                <Code2 className="h-4 w-4" />
                React &amp; Java
              </div>

              <div className="profile-summary">
                <strong>Anderson Reis</strong>
                <span>Fullstack: React, Java 8+, Spring Boot, Apache Wicket e Capacitor</span>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section-band">
          <BackgroundDecor />
          <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="section-heading reveal">
              <span className="eyebrow eyebrow-numbered">
                <span className="eyebrow-index">01</span>
                Sobre mim
              </span>
              <h2>Perfil técnico com foco em entrega clara, responsiva e sustentável.</h2>
            </div>

            <div className="content-stack reveal reveal-delay">
              <p>
                Atuo no desenvolvimento de interfaces modernas com JavaScript, TypeScript, React e Next.js,
                priorizando performance, organização visual e boa experiência para quem utiliza o produto.
              </p>
              <p>
                Também trabalho minha base fullstack com Java 8+, Spring Boot e Apache Wicket, além de
                Capacitor para levar experiências web a contextos mobile.
              </p>
              <div className="value-grid">
                <div>
                  <strong>Responsividade</strong>
                  <span>Layouts adaptados para celular, tablet e desktop.</span>
                </div>
                <div>
                  <strong>Backend Java</strong>
                  <span>Estrutura para APIs, regras de negócio e sistemas corporativos.</span>
                </div>
                <div>
                  <strong>Performance</strong>
                  <span>Imagens otimizadas, animações leves e código objetivo.</span>
                </div>
                <div>
                  <strong>Mobile</strong>
                  <span>Interfaces preparadas para PWA e empacotamento com Capacitor.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container mx-auto px-4">
            <div className="section-heading centered reveal">
              <span className="eyebrow eyebrow-numbered">
                <span className="eyebrow-index">02</span>
                Conhecimentos
              </span>
              <h2>Tecnologias atualizadas para projetos web, backend Java e mobile.</h2>
              <p>
                Stack organizada para atender demandas de interfaces, sistemas corporativos e produtos que
                precisam funcionar bem em múltiplos dispositivos.
              </p>
            </div>

            <div className="skill-grid">
              {skillGroups.map((group, index) => {
                const Icon = group.icon

                return (
                  <article
                    key={group.title}
                    className="skill-card reveal"
                    style={{ '--card-accent': group.color, transitionDelay: `${index * 70}ms` } as CSSProperties}
                  >
                    <div className="skill-card-icon">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3>{group.title}</h3>
                    <p>{group.description}</p>
                    <div className="chip-list">
                      {group.skills.map((skill) => (
                        <span key={skill} className="chip">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section id="projects" className="section-band">
          <BackgroundDecor />
          <div className="container mx-auto px-4">
            <div className="section-heading centered reveal">
              <span className="eyebrow eyebrow-numbered">
                <span className="eyebrow-index">03</span>
                Projetos
              </span>
              <h2>Projetos selecionados</h2>
              <p>
                Exemplos práticos de construção de interfaces, consumo de API, lógica de aplicação e cuidado
                com apresentação visual.
              </p>
            </div>

            <div className="projects-grid">
              {projects.map((project, index) => (
                <article
                  key={project.id}
                  className="project-card reveal"
                  style={{ transitionDelay: `${index * 70}ms` }}
                >
                  <div className="project-image">
                    <span className="project-index" aria-hidden="true">
                      0{index + 1}
                    </span>
                    <img
                      src={project.image}
                      alt={`Prévia do projeto ${project.title}`}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="chip-list">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="chip">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Button asChild variant="outline" size="sm" className="project-link">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        Código
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <BackgroundDecor />
          <div className="container mx-auto px-4">
            <div className="section-heading centered reveal">
              <span className="eyebrow eyebrow-numbered">
                <span className="eyebrow-index">04</span>
                Contato
              </span>
              <h2>Vamos conversar sobre oportunidades e projetos.</h2>
              <p>
                Estou aberto a oportunidades profissionais e colaborações em produtos web, interfaces
                responsivas, aplicações Java e soluções mobile.
              </p>
            </div>

            <div className="contact-grid">
              <form onSubmit={handleSubmit} className="contact-form reveal" aria-label="Formulário de contato">
                <div>
                  <label htmlFor="name">Nome</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    autoComplete="name"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    autoComplete="email"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message">Mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    placeholder="Sua mensagem..."
                  />
                </div>
                <Button type="submit" size="lg" className="w-full btn-glow">
                  <Mail className="h-5 w-5" />
                  Enviar mensagem
                </Button>
              </form>

              <aside className="contact-card reveal reveal-delay">
                <h3>Conecte-se comigo</h3>
                <p>
                  Para recrutadores e empresas, o LinkedIn e o email são os melhores canais para contato
                  profissional.
                </p>
                <div className="contact-links">
                  <a href="https://www.linkedin.com/in/anderson-reis-santana/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                    LinkedIn
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a href="https://github.com/Anderson-reis7" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                    GitHub
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a href="https://www.instagram.com/anderson_reis7/" target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-5 w-5" />
                    Instagram
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <div className="contact-email-row">
                    <a href={`mailto:${CONTACT_EMAIL}`}>
                      <Mail className="h-5 w-5" />
                      {CONTACT_EMAIL}
                    </a>
                    <button
                      type="button"
                      className="copy-email-button"
                      onClick={handleCopyEmail}
                      aria-label="Copiar endereço de email"
                    >
                      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container mx-auto px-4 text-center">
          <p>© {currentYear} Anderson Reis. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
