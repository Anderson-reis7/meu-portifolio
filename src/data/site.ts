import { Github, Instagram, Linkedin } from 'lucide-react'
import type { HighlightItem, NavigationItem, SocialLink } from '@/types/content'

export const CONTACT_EMAIL = 'andersonreis.developer@gmail.com'

export const navigationItems: NavigationItem[] = [
  { label: 'Início', target: 'home', index: '00' },
  { label: 'Sobre', target: 'about', index: '01' },
  { label: 'Conhecimentos', target: 'skills', index: '02' },
  { label: 'Experiência', target: 'experience', index: '03' },
  { label: 'Projetos', target: 'projects', index: '04' },
  { label: 'Contato', target: 'contact', index: '05' },
]

export const highlights: HighlightItem[] = [
  {
    value: 'Fullstack',
    label: 'Frontend, backend Java, mobile e desktop',
  },
  {
    value: '4+',
    label: 'Projetos publicados no GitHub',
  },
  {
    value: 'Mobile',
    label: 'Capacitor e experiências responsivas',
  },
]

export const deliveryPillars: string[] = [
  'Interfaces limpas e responsivas',
  'Código organizado e manutenível',
  'Base para sistemas corporativos',
]

export const socialLinks: SocialLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/anderson-reis-santana/', icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com/Anderson-reis7', icon: Github },
  { label: 'Instagram', href: 'https://www.instagram.com/anderson_reis7/', icon: Instagram },
]
