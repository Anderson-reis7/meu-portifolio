import { BackgroundDecor } from '@/components/layout/BackgroundDecor'

export function AboutSection() {
  return (
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
            Firebase (Firestore, Cloud Functions e Storage) para SaaS multi-tenant e Capacitor para
            levar experiências web a contextos mobile.
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
  )
}
