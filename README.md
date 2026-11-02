# Portfólio Anderson Reis

Um portfólio moderno e minimalista desenvolvido com React, TypeScript e Vite, apresentando os projetos e habilidades do desenvolvedor frontend Anderson Reis.

## 🚀 Características

- **Design Moderno e Minimalista**: Interface limpa e elegante que destaca o conteúdo
- **Modo Escuro/Claro**: Alternância entre temas claro e escuro
- **Totalmente Responsivo**: Adaptado para desktop, tablet e mobile
- **Animações Suaves**: Revelação por scroll com IntersectionObserver e respeito a `prefers-reduced-motion`
- **Formulário de Contato**: Integração com email para facilitar o contato
- **Performance Otimizada**: Carregamento rápido e experiência fluida

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca para construção da interface
- **TypeScript** - Tipagem estática para maior robustez
- **Vite 6** - Build tool moderna e rápida
- **Tailwind CSS 4** - Framework CSS utilitário (configurado via CSS, sem `tailwind.config.js`)
- **Lucide React** - Ícones modernos
- **shadcn/ui (Button)** - Único componente de UI mantido; os demais foram removidos por não serem usados

## 📱 Seções do Portfólio

### 1. Hero Section
- Foto de perfil
- Apresentação pessoal
- Botões de ação para navegação

### 2. Sobre Mim
- Descrição profissional
- Tecnologias principais
- Cards com habilidades

### 3. Projetos
- **HVAC Field Reports**: SaaS de relatórios de serviço para técnicos de climatização (React, Supabase, Paddle Billing)
- **Clínica Domus**: Sistema de gestão para clínicas multidisciplinares (React, Firebase)
- **MeuGestar**: Plataforma web e mobile de acompanhamento da gestação (React, Capacitor, Firebase)
- **Conversor de Moedas**: Aplicação para conversão de moedas em tempo real

Os dados dos projetos ficam em `src/data/projects.ts` e as imagens em `src/assets/`.

### 4. Contato
- Formulário de contato funcional
- Links para redes sociais
- Informações de contato direto

## 🎨 Design e UX

- **Paleta de Cores**: Tons neutros com acentos sutis
- **Tipografia**: Fontes modernas e legíveis
- **Espaçamento**: Layout bem estruturado com breathing room
- **Micro-interações**: Hover effects e transições suaves
- **Acessibilidade**: Contraste adequado e navegação por teclado

## 📧 Funcionalidade de Email

O formulário de contato utiliza o protocolo `mailto:` para abrir o cliente de email padrão do usuário com os dados preenchidos, garantindo uma experiência simples e direta.

## 🚀 Como Executar

### Pré-requisitos
- Node.js 20 ou superior
- npm (o projeto usa `package-lock.json`; é o mesmo gerenciador do CI)

### Instalação
```bash
# Clone o repositório
git clone [url-do-repositorio]

# Entre no diretório
cd meu-portifolio

# Instale as dependências
npm install

# Execute o servidor de desenvolvimento
npm run dev

# Acesse http://localhost:5173
```

### Build para Produção
```bash
# Checar tipos e lint
npm run check

# Gerar build otimizado
npm run build

# Visualizar build localmente
npm run preview
```

O deploy é automático via GitHub Actions a cada push na `main` (veja [DEPLOY.md](DEPLOY.md)).

## 📁 Estrutura do Projeto

```
meu-portifolio/
├── .github/workflows/deploy.yml   # build e deploy no GitHub Pages
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/                    # imagens dos projetos (WebP) e foto de perfil
│   ├── components/
│   │   ├── layout/                # Header, Footer, BackgroundDecor
│   │   ├── sections/              # Hero, Sobre, Conhecimentos, Experiência, Projetos, Contato
│   │   └── ui/                    # Button (shadcn)
│   ├── data/                      # conteúdo: projetos, experiência, skills, site
│   ├── hooks/                     # useDarkMode, useScrolled, useScrollReveal
│   ├── types/                     # tipos do conteúdo
│   ├── App.tsx
│   ├── App.css
│   ├── main.tsx
│   └── index.css
├── eslint.config.js
├── package.json
├── tsconfig.json
└── vite.config.js
```

## 🌟 Destaques Técnicos

- **TypeScript**: Código tipado para maior confiabilidade
- **Componentes Reutilizáveis**: Arquitetura modular e escalável
- **Performance**: Otimizações de carregamento e renderização
- **SEO Friendly**: Meta tags e estrutura semântica
- **Cross-browser**: Compatibilidade com navegadores modernos

## 📱 Responsividade

O portfólio foi desenvolvido com abordagem mobile-first, garantindo uma experiência excelente em:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🎯 Próximas Melhorias

- [ ] Implementar blog pessoal
- [ ] Adicionar mais projetos
- [ ] Integração com CMS
- [ ] Analytics e métricas
- [ ] PWA (Progressive Web App)

## 📞 Contato

- **Email**: andersonreis.developer@gmail.com
- **LinkedIn**: [Anderson Reis Santana](https://www.linkedin.com/in/anderson-reis-santana/)
- **GitHub**: [Anderson-reis7](https://github.com/Anderson-reis7)
- **Instagram**: [@anderson_reis7](https://www.instagram.com/anderson_reis7/)

---

Desenvolvido com ❤️ por Anderson Reis

