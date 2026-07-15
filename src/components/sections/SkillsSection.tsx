import type { CSSProperties } from 'react'
import { skillGroups } from '@/data/skills'

export function SkillsSection() {
  return (
    <section id="skills" className="section">
      <div className="container mx-auto px-4">
        <div className="section-heading centered reveal">
          <span className="eyebrow eyebrow-numbered">
            <span className="eyebrow-index">02</span>
            Conhecimentos
          </span>
          <h2>Tecnologias atualizadas para projetos web, backend Java, mobile e desktop.</h2>
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
  )
}
