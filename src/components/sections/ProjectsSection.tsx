import { ExternalLink, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BackgroundDecor } from '@/components/layout/BackgroundDecor'
import { projects } from '@/data/projects'

export function ProjectsSection() {
  return (
    <section id="projects" className="section-band">
      <BackgroundDecor />
      <div className="container mx-auto px-4">
        <div className="section-heading centered reveal">
          <span className="eyebrow eyebrow-numbered">
            <span className="eyebrow-index">04</span>
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
  )
}
