import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Moon, Sun, Github, Linkedin, Instagram, Mail, ExternalLink, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import './App.css'

interface Project {
  id: number
  title: string
  description: string
  image: string
  github: string
  technologies: string[]
}

const projects: Project[] = [
  {
    id: 1,
    title: "Elevador Interativo",
    description: "Simulação interativa de um elevador com interface moderna e animações suaves.",
    image: "dist/elevado-interativo.png",
    github: "https://github.com/Anderson-reis7/projet-elevador",
    technologies: ["JavaScript", "HTML", "CSS"]
  },
  {
    id: 2,
    title: "Conversor de Moedas",
    description: "Aplicação para conversão de moedas em tempo real com interface intuitiva.",
    image: "dist/conversor-dinheiro.png",
    github: "https://github.com/Anderson-reis7/conversor-de-dinheiro",
    technologies: ["JavaScript", "API", "CSS"]
  },
  {
    id: 3,
    title: "Cifra de César",
    description: "Ferramenta de criptografia usando a técnica clássica da Cifra de César.",
    image: "dist/cifra-cesa.png",
    github: "https://github.com/Anderson-reis7/cifra-de-cesar",
    technologies: ["JavaScript", "Criptografia", "HTML"]
  },
  {
    id: 4,
    title: "Jokenpô",
    description: "Jogo clássico de pedra, papel e tesoura com design moderno e interativo.",
    image: "dist/jokepo.png",
    github: "https://github.com/Anderson-reis7/jokenpo",
    technologies: ["JavaScript", "Game Logic", "CSS"]
  }
]

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Contato de ${formData.name}`)
    const body = encodeURIComponent(`Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`)
    window.open(`mailto:andersonreis.developer@gmail.com?subject=${subject}&body=${body}`)
    setFormData({ name: '', email: '', message: '' })
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1 
            className="text-2xl font-bold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Anderson Reis
          </motion.h1>
          
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">
              Início
            </button>
            <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">
              Sobre
            </button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-primary transition-colors">
              Projetos
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">
              Contato
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="rounded-full"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <motion.nav 
            className="md:hidden bg-background border-t border-border"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left hover:text-primary transition-colors">
                Início
              </button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left hover:text-primary transition-colors">
                Sobre
              </button>
              <button onClick={() => scrollToSection('projects')} className="block w-full text-left hover:text-primary transition-colors">
                Projetos
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left hover:text-primary transition-colors">
                Contato
              </button>
            </div>
          </motion.nav>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.img
              src="dist/profile.png"
              alt="Anderson Reis"
              className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary shadow-lg"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.05 }}
            />
            <motion.h1 
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Anderson Reis
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Desenvolvedor Frontend
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="max-w-2xl mx-auto"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                Olá, meu nome é Anderson, desenvolvedor Frontend apaixonado por tecnologia e por criar experiências digitais envolventes. 
                Trabalho com JavaScript, TypeScript, React e Next.js, sempre buscando desenvolver interfaces modernas, responsivas e de alta performance.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex justify-center space-x-4"
            >
              <Button onClick={() => scrollToSection('projects')} size="lg">
                Ver Projetos
              </Button>
              <Button onClick={() => scrollToSection('contact')} variant="outline" size="lg">
                Entrar em Contato
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center space-y-6"
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Sobre Mim
            </motion.h2>
            <motion.div 
              className="max-w-3xl mx-auto space-y-6 text-lg text-muted-foreground"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p>
                Sou um desenvolvedor frontend dedicado a criar experiências digitais excepcionais. 
                Com foco em tecnologias modernas como React, TypeScript e Next.js, busco sempre 
                entregar soluções que combinam performance, usabilidade e design atrativo.
              </p>
              <p>
                Minha paixão pela tecnologia me motiva a estar sempre aprendendo e explorando 
                novas ferramentas e técnicas para criar interfaces cada vez mais envolventes e eficientes.
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {['JavaScript', 'TypeScript', 'React', 'Next.js'].map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.8 + index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  className="bg-background p-4 rounded-lg border border-border text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold">{tech}</h3>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-center space-y-6 mb-12"
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Meus Projetos
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Aqui estão alguns dos projetos que desenvolvi, demonstrando minhas habilidades 
              em diferentes tecnologias e conceitos de programação.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <motion.div 
                  className="aspect-video overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300"
                  />
                </motion.div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.github, '_blank')}
                      className="flex items-center space-x-2"
                    >
                      <Github className="h-4 w-4" />
                      <span>Código</span>
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-center space-y-6 mb-12"
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Entre em Contato
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Estou sempre aberto a novas oportunidades e colaborações. 
              Vamos conversar sobre como posso ajudar em seu próximo projeto!
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Sua mensagem..."
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  <Mail className="h-5 w-5 mr-2" />
                  Enviar Mensagem
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-xl font-semibold mb-4">Conecte-se Comigo</h3>
                <div className="space-y-4">
                  <motion.a
                    href="https://www.linkedin.com/in/anderson-reis-santana/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    <span>LinkedIn</span>
                    <ExternalLink className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  </motion.a>
                  <motion.a
                    href="https://github.com/Anderson-reis7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    <span>GitHub</span>
                    <ExternalLink className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  </motion.a>
                  <motion.a
                    href="https://www.instagram.com/anderson_reis7/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    <span>Instagram</span>
                    <ExternalLink className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  </motion.a>
                  <motion.a
                    href="mailto:andersonreis.developer@gmail.com"
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.3 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    <span>andersonreis.developer@gmail.com</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Anderson Reis. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

