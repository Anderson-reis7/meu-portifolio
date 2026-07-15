import type { ExperienceItem } from '@/types/content'

export const experience: ExperienceItem[] = [
  {
    role: 'Desenvolvedor Full Stack — Projeto Web e Mobile',
    context: 'Prestação de Serviços (MEI)',
    period: '12/2025 – Atual',
    bullets: [
      'Desenvolvimento de aplicação SPA com React e TypeScript',
      'Implementação de autenticação segura com Firebase',
      'Modelagem de dados com Firestore (NoSQL)',
      'Estruturação modular e separação de responsabilidades',
      'Deploy em produção via Firebase Hosting',
      'Empacotamento mobile com Capacitor e geração de Android App Bundle (AAB)',
    ],
  },
  {
    role: 'Desenvolvedor Full Stack — Projeto Desktop',
    context: 'Prestação de Serviços (MEI)',
    period: '12/2025 – Atual',
    bullets: [
      'Desenvolvimento de SaaS multi-tenant para clínicas médicas com React 19, TypeScript e Vite 6',
      'Modelagem de dados no Cloud Firestore com regras de segurança que isolam dados por clínica e papel de usuário',
      'Lógica de backend serverless com Firebase Cloud Functions (Node 22, TypeScript)',
      'Dashboards com Recharts e geração de relatórios em PDF com jsPDF',
      'Testes automatizados com Vitest, incluindo testes das regras do Firestore via emulador (@firebase/rules-unit-testing)',
      'Autenticação e armazenamento de arquivos com Firebase Auth e Firebase Storage',
    ],
  },
]
