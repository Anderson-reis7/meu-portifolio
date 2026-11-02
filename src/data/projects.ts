import clinicaDomus from '@/assets/clinica-domus.webp'
import meuGestar from '@/assets/meu-gestar.webp'
import hvacFieldReports from '@/assets/hvac-field-reports.webp'
import conversor from '@/assets/conversor-dinheiro.webp'
import type { Project } from '@/types/content'

export const projects: Project[] = [
  {
    id: 1,
    title: 'HVAC Field Reports',
    subtitle: 'SaaS de relatórios de serviço para técnicos de climatização (HVAC) nos EUA',
    description:
      'Aplicativo web mobile-first em que o técnico registra a visita no celular e entrega ao cliente, ainda no local, um relatório profissional em PDF: checklist, medições, fotos e assinatura. Desenvolvi o produto de ponta a ponta, do protótipo aprovado ao SaaS com banco de dados seguro, assinaturas recorrentes e backups criptografados.',
    image: hvacFieldReports,
    technologies: [
      'React 18',
      'TypeScript',
      'Vite 7',
      'TanStack Query',
      'Zod',
      'Supabase',
      'PostgreSQL + RLS',
      'Edge Functions',
      'Paddle Billing',
      'pdf-lib',
      'Vitest',
      'Playwright',
      'Cloudflare Pages',
      'GitHub Actions',
    ],
    highlights: [
      'Relatório guiado em 6 etapas: dados da visita, checklist de inspeção, medições, fotos, resumo e assinatura do cliente na tela.',
      'Salvamento automático com cópia local, fotos comprimidas no aparelho e fila de envio offline.',
      'PDF em tamanho US Letter gerado no próprio aparelho; link seguro para o cliente com validade e revogação.',
      'Relatórios concluídos imutáveis: cada versão vira um snapshot com hash SHA-256; correções geram nova versão preservando a original.',
      'Row Level Security em todas as tabelas, com isolamento total entre empresas e funções no servidor validando permissão, plano e concorrência.',
      'Assinatura com teste grátis de 7 dias e 4 ciclos de cobrança via Paddle Billing, com webhooks verificados por HMAC e processamento idempotente.',
      'Backups com checksums e criptografia AES-256-GCM; restauração testada em ambiente isolado (34/34 verificações).',
      'Mais de 170 testes (Vitest, incluindo RLS contra PostgreSQL real via PGlite) e E2E com Playwright em desktop e celular.',
      'Custo fixo zero: arquitetura apenas em camadas gratuitas (Supabase Free, Cloudflare Pages, GitHub).',
    ],
    role: 'Desenvolvimento full-stack completo: arquitetura, modelagem do banco e das políticas de segurança, frontend responsivo fiel ao protótipo, integração de pagamentos, geração de PDF, testes automatizados, documentação e rotinas de backup e restauração.',
    status:
      'Funcional no ambiente de homologação, com login real, relatórios, fotos, PDF e links públicos. Pagamentos validados no sandbox do Paddle; o lançamento comercial depende de domínio, textos jurídicos e aprovação do Paddle.',
  },
  {
    id: 2,
    title: 'Clínica Domus',
    subtitle: 'Sistema de Gestão Clínica',
    description:
      'Plataforma web de gestão para clínicas multidisciplinares, desenvolvida para centralizar processos administrativos e clínicos em um único ambiente. Contempla gerenciamento de clínicas, pacientes, profissionais, agendamentos, prontuários eletrônicos e controle financeiro, com diferentes níveis de acesso e foco em segurança, organização e usabilidade.',
    image: clinicaDomus,
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'CSS responsivo',
      'Firebase Cloud Functions',
      'Node.js',
      'Cloud Firestore',
      'Firebase Authentication',
      'Firebase Storage',
      'Vitest',
      'Playwright',
    ],
    highlights: [
      'Gerenciamento de clínicas, pacientes, profissionais, agendamentos, prontuários eletrônicos e controle financeiro.',
      'Diferentes níveis de acesso (dono da plataforma, dono da clínica, profissionais e colaboradores), com auditoria das ações.',
      'Interface com design responsivo, adaptada a computadores, tablets e dispositivos móveis.',
      'Back-end em Firebase Cloud Functions (Node.js) com Cloud Firestore, Authentication e Storage.',
      'Testes unitários com Vitest e de ponta a ponta com Playwright.',
    ],
    status: 'Projeto em desenvolvimento, com funcionalidades implementadas e módulos em evolução.',
  },
  {
    id: 3,
    title: 'MeuGestar',
    subtitle: 'Acompanhamento da gestação para gestantes e profissionais de saúde',
    description:
      'Plataforma web e mobile voltada ao acompanhamento da gestação, conectando gestantes e profissionais de saúde em um único ambiente. Desenvolvida com foco em experiência mobile, responsividade, segurança de dados e organização das informações clínicas, com autenticação, sincronização em nuvem, suporte a múltiplos idiomas e recursos Premium.',
    image: meuGestar,
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'Firebase Authentication',
      'Firestore',
      'Firebase Storage',
      'Capacitor',
      'Android',
      'iOS',
      'AdMob',
      'Google/Apple Login',
      'Vitest',
    ],
    highlights: [
      'Cartão pré-natal digital, acompanhamento de exames e ultrassonografias.',
      'Controle de pressão arterial, glicemia e ganho de peso, com evolução gestacional semana a semana.',
      'Calculadoras obstétricas (DUM, ecografia, peso fetal, biometria, Bishop, Apgar, ILA, Doppler) e tabelas de referência.',
      'Notificações, geração de relatórios em PDF e vínculo entre paciente e médico por QR Code.',
      'Apps Android e iOS com Capacitor, login Google/Apple, AdMob e recursos Premium.',
    ],
  },
  {
    id: 4,
    title: 'Conversor de Moedas',
    description:
      'Aplicação para conversão de moedas com foco em usabilidade, leitura rápida e integração com API.',
    image: conversor,
    github: 'https://github.com/Anderson-reis7/conversor-de-dinheiro',
    technologies: ['JavaScript', 'API', 'CSS'],
  },
]
