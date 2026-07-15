import { type ChangeEvent, type FormEvent, useRef, useState } from 'react'
import { Check, Copy, ExternalLink, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BackgroundDecor } from '@/components/layout/BackgroundDecor'
import { CONTACT_EMAIL, socialLinks } from '@/data/site'

export function ContactSection() {
  const [copied, setCopied] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const copyTimeoutRef = useRef<ReturnType<typeof setTimeout>>()

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
      clearTimeout(copyTimeoutRef.current)
      copyTimeoutRef.current = setTimeout(() => setCopied(false), 2000)
    } catch {
      // clipboard indisponível: o link mailto abaixo continua funcional
    }
  }

  return (
    <section id="contact" className="section">
      <BackgroundDecor />
      <div className="container mx-auto px-4">
        <div className="section-heading centered reveal">
          <span className="eyebrow eyebrow-numbered">
            <span className="eyebrow-index">05</span>
            Contato
          </span>
          <h2>Vamos conversar sobre oportunidades e projetos.</h2>
          <p>
            Estou aberto a oportunidades profissionais e colaborações em produtos web, interfaces
            responsivas, aplicações Java e soluções mobile e desktop.
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
              {socialLinks.map((link) => {
                const Icon = link.icon

                return (
                  <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                    <Icon className="h-5 w-5" />
                    {link.label}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )
              })}
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
  )
}
