import type { ExperienceItem } from '@/types/content'

export const experience: ExperienceItem[] = [
  {
    role: 'Desenvolvedor Full Stack — HVAC Field Reports (SaaS para técnicos de climatização, EUA)',
    context: 'Prestação de Serviços (MEI)',
    period: '2026 – Atual',
    bullets: [
      'Desenvolvimento ponta a ponta: arquitetura, modelagem do banco e das políticas de segurança, frontend responsivo fiel ao protótipo aprovado',
      'Frontend mobile-first com React 18, TypeScript (strict), Vite 7, React Router 7, TanStack Query 5 e Zod 4, com design system próprio em CSS',
      'Backend em Supabase: PostgreSQL 17 com Row Level Security, funções SECURITY DEFINER, Auth (Google OAuth e e-mail/senha com PKCE), Storage privado e Edge Functions em Deno',
      'Relatórios em PDF (US Letter) gerados no aparelho com pdf-lib, snapshots imutáveis com hash SHA-256 e links públicos com token de 256 bits',
      'Assinaturas recorrentes com Paddle Billing: webhooks verificados por HMAC, processamento idempotente e preços definidos no servidor',
      'Mais de 170 testes com Vitest (incluindo RLS contra PostgreSQL real via PGlite) e fluxos E2E com Playwright em desktop e celular',
      'CI e backup agendado com GitHub Actions, backups criptografados (AES-256-GCM) com restauração testada e deploy em Cloudflare Pages com CSP',
    ],
  },
  {
    role: 'Desenvolvedor Full Stack — Clínica Domus (SaaS multi-tenant de gestão clínica)',
    context: 'Prestação de Serviços (MEI)',
    period: '12/2025 – Atual',
    bullets: [
      'Desenvolvimento de SaaS multi-tenant para clínicas multidisciplinares com React 19, TypeScript e Vite 6',
      'Módulos de clínicas, pacientes, profissionais, agendamentos, prontuários eletrônicos e controle financeiro, com diferentes níveis de acesso',
      'Modelagem de dados no Cloud Firestore com regras de segurança que isolam dados por clínica e papel de usuário',
      'Lógica de backend serverless com Firebase Cloud Functions (Node 22, TypeScript), Firebase Auth e Firebase Storage',
      'Dashboards com Recharts e geração de relatórios em PDF com jsPDF',
      'Testes automatizados com Vitest, incluindo regras do Firestore via emulador (@firebase/rules-unit-testing), e E2E com Playwright',
    ],
  },
  {
    role: 'Desenvolvedor Full Stack — MeuGestar (plataforma web e mobile de acompanhamento da gestação)',
    context: 'Prestação de Serviços (MEI)',
    period: '12/2025 – Atual',
    bullets: [
      'Desenvolvimento de aplicação SPA com React, TypeScript e Vite, com foco em experiência mobile e responsividade',
      'Autenticação com Firebase Authentication (e-mail, Google e Apple Login) e sincronização em nuvem com Firestore e Firebase Storage',
      'Cartão pré-natal digital, exames e ultrassonografias, calculadoras obstétricas, relatórios em PDF e vínculo paciente–médico por QR Code',
      'Suporte a múltiplos idiomas, notificações, monetização com AdMob e recursos Premium',
      'Empacotamento mobile com Capacitor para Android e iOS, incluindo geração de Android App Bundle (AAB)',
      'Deploy web em produção via Firebase Hosting e testes automatizados com Vitest',
    ],
  },
]
