import { Code2, Database, Monitor, Server, Smartphone } from 'lucide-react'
import type { SkillGroup } from '@/types/content'

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    description: 'Interfaces responsivas, acessíveis e performáticas para produtos digitais.',
    icon: Code2,
    color: 'var(--skill-cyan)',
    skills: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'HTML5', 'CSS3', 'Apache Wicket'],
  },
  {
    title: 'Backend & BaaS',
    description: 'Construção e manutenção de aplicações corporativas com base Java e Firebase.',
    icon: Server,
    color: 'var(--skill-violet)',
    skills: ['Java 8+', 'Spring Boot', 'APIs REST', 'Firebase Authentication', 'Firestore'],
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
    skills: ['Capacitor', 'PWA', 'Design responsivo', 'Geração de AAB'],
  },
  {
    title: 'Desktop',
    description: 'SaaS multi-tenant para uso administrativo, com backend serverless em Firebase.',
    icon: Monitor,
    color: 'var(--skill-rose)',
    skills: ['Cloud Firestore', 'Cloud Functions', 'Firebase Storage', 'Vitest'],
  },
]
