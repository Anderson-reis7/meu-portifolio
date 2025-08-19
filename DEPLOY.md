# Deploy no GitHub Pages

Este projeto está configurado para deploy automático no GitHub Pages.

## Pré-requisitos

1. Conta no GitHub
2. Git instalado
3. Node.js e pnpm (ou npm) instalados

## Passos para Deploy

### 1. Criar Repositório no GitHub

1. Acesse [GitHub](https://github.com)
2. Clique em "New repository"
3. Nome do repositório: `portfolio-anderson`
4. Marque como público
5. Clique em "Create repository"

### 2. Configurar Git Local

```bash
# Inicializar git (se não estiver inicializado)
git init

# Adicionar origin remoto (substitua SEU_USUARIO pelo seu username do GitHub)
git remote add origin https://github.com/SEU_USUARIO/portfolio-anderson.git

# Adicionar todos os arquivos
git add .

# Fazer commit inicial
git commit -m "Initial commit - Portfolio Anderson"

# Enviar para GitHub
git push -u origin main
```

### 3. Fazer Deploy

```bash
# Instalar dependências (se não instaladas)
pnpm install

# Fazer deploy (isso irá fazer build e publicar no GitHub Pages)
pnpm run deploy
```

### 4. Configurar GitHub Pages

1. Vá para o repositório no GitHub
2. Clique em "Settings"
3. Role até "Pages" no menu lateral
4. Em "Source", selecione "Deploy from a branch"
5. Em "Branch", selecione "gh-pages"
6. Clique em "Save"

### 5. Acessar o Site

Após alguns minutos, seu portfólio estará disponível em:
`https://SEU_USUARIO.github.io/portfolio-anderson/`

## Atualizações Futuras

Para atualizar o site após fazer mudanças:

```bash
# Fazer commit das mudanças
git add .
git commit -m "Descrição das mudanças"
git push

# Fazer novo deploy
pnpm run deploy
```

## Comandos Disponíveis

- `pnpm run dev` - Executar em modo desenvolvimento
- `pnpm run build` - Fazer build para produção
- `pnpm run deploy` - Fazer deploy no GitHub Pages
- `pnpm run preview` - Visualizar build local

## Troubleshooting

Se houver problemas:

1. Verifique se o repositório está público
2. Confirme que o GitHub Pages está configurado para a branch "gh-pages"
3. Aguarde alguns minutos para a propagação
4. Limpe o cache do navegador

## Personalização

Para usar um domínio personalizado:

1. Adicione um arquivo `CNAME` na pasta `public/` com seu domínio
2. Configure o DNS do seu domínio para apontar para o GitHub Pages
3. Configure o domínio personalizado nas configurações do repositório

