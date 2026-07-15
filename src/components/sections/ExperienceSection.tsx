import { experience } from '@/data/experience'

export function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <div className="container mx-auto px-4">
        <div className="section-heading centered reveal">
          <span className="eyebrow eyebrow-numbered">
            <span className="eyebrow-index">03</span>
            Experiência
          </span>
          <h2>Experiência profissional recente.</h2>
          <p>
            Projetos de prestação de serviços (MEI) com entrega ponta a ponta, do frontend ao
            empacotamento final.
          </p>
        </div>

        <div className="experience-grid">
          {experience.map((item, index) => (
            <article
              key={item.role}
              className="experience-card reveal"
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <div className="experience-header">
                <h3>{item.role}</h3>
                <div className="experience-meta">
                  <span>{item.context}</span>
                  <span className="experience-period">{item.period}</span>
                </div>
              </div>
              <ul className="experience-bullets">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
