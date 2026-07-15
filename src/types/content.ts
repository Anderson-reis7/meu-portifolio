import type { LucideIcon } from 'lucide-react'

export interface Project {
  id: number
  title: string
  description: string
  image: string
  github: string
  technologies: string[]
}

export interface SkillGroup {
  title: string
  description: string
  icon: LucideIcon
  color: string
  skills: string[]
}

export interface ExperienceItem {
  role: string
  context: string
  period: string
  bullets: string[]
}

export interface NavigationItem {
  label: string
  target: string
  index: string
}

export interface HighlightItem {
  value: string
  label: string
}

export interface SocialLink {
  label: string
  href: string
  icon: LucideIcon
}
