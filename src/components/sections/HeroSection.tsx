import { Code2, Layers3 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BackgroundDecor } from '@/components/layout/BackgroundDecor'
import profile from '@/assets/photo-profile.jpeg'
import { deliveryPillars, highlights } from '@/data/site'

interface HeroSectionProps {
  onNavigate: (target: string) => void
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
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
            integrações e experiências mobile e desktop. Meu objetivo é entregar soluções claras, rápidas
            e bem estruturadas para empresas e produtos digitais.
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
            <Button onClick={() => onNavigate('projects')} size="lg" className="btn-glow">
              Ver projetos
            </Button>
            <Button onClick={() => onNavigate('contact')} variant="outline" size="lg">
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
              {...{ fetchpriority: 'high' }}
            />
          </div>

          <div className="profile-badge" aria-hidden="true">
            <Code2 className="h-4 w-4" />
            React &amp; Java
          </div>

          <div className="profile-summary">
            <strong>Anderson Reis</strong>
            <span>Fullstack: React, Java 8+, Spring Boot, Firebase e Capacitor</span>
          </div>
        </div>
      </div>
    </section>
  )
}
