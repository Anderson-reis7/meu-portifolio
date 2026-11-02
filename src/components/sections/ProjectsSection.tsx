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
            Produtos completos, do protótipo ao deploy: SaaS, plataforma de gestão clínica e aplicativo
            mobile, com foco em segurança, responsividade e testes automatizados.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => {
            const hasDetails = Boolean(project.highlights?.length || project.role || project.status)

            return (
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
                  <div className="project-title">
                    <h3>{project.title}</h3>
                    {project.subtitle ? <span className="project-subtitle">{project.subtitle}</span> : null}
                  </div>
                  <p>{project.description}</p>
                  <div className="chip-list">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="chip">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {hasDetails ? (
                    <details className="project-details">
                      <summary>Ver detalhes do projeto</summary>
                      <div className="project-details-body">
                        {project.highlights?.length ? (
                          <>
                            <h4>Destaques</h4>
                            <ul>
                              {project.highlights.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </>
                        ) : null}
                        {project.role ? (
                          <>
                            <h4>Meu papel</h4>
                            <p>{project.role}</p>
                          </>
                        ) : null}
                        {project.status ? (
                          <>
                            <h4>Status</h4>
                            <p>{project.status}</p>
                          </>
                        ) : null}
                      </div>
                    </details>
                  ) : null}

                  {project.github ? (
                    <Button asChild variant="outline" size="sm" className="project-link">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        Código
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  ) : null}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
