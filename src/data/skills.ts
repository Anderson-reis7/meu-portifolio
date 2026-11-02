import { Code2, Database, Monitor, Server, Smartphone } from 'lucide-react'
import type { SkillGroup } from '@/types/content'

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    description: 'Interfaces responsivas, acessíveis e performáticas para produtos digitais.',
    icon: Code2,
    color: 'var(--skill-cyan)',
    skills: [
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Vite',
      'TanStack Query',
      'Zod',
      'HTML5',
      'CSS3',
      'Apache Wicket',
    ],
  },
  {
    title: 'Backend & BaaS',
    description: 'Aplicações corporativas e SaaS com base Java, Firebase e Supabase.',
    icon: Server,
    color: 'var(--skill-violet)',
    skills: [
      'Java 8+',
      'Spring Boot',
      'Node.js',
      'APIs REST',
      'Supabase',
      'PostgreSQL + RLS',
      'Edge Functions',
      'Firebase Authentication',
      'Firestore',
    ],
  },
  {
    title: 'Dados e Integrações',
    description: 'Segurança de dados, pagamentos recorrentes e integrações entre sistemas.',
    icon: Database,
    color: 'var(--skill-green)',
    skills: ['REST', 'JSON', 'Paddle Billing', 'Webhooks (HMAC)', 'Row Level Security', 'Geração de PDF', 'Regras de negócio'],
  },
  {
    title: 'Mobile',
    description: 'Apps híbridos publicáveis e experiências web preparadas para o celular.',
    icon: Smartphone,
    color: 'var(--skill-amber)',
    skills: ['Capacitor', 'Android / iOS', 'PWA', 'Design responsivo', 'AdMob', 'Geração de AAB'],
  },
  {
    title: 'SaaS & Qualidade',
    description: 'SaaS multi-tenant com backend serverless, testes automatizados e rotinas de CI e backup.',
    icon: Monitor,
    color: 'var(--skill-rose)',
    skills: [
      'Cloud Firestore',
      'Cloud Functions',
      'Firebase Storage',
      'Vitest',
      'Playwright',
      'GitHub Actions',
      'Cloudflare Pages',
    ],
  },
]
