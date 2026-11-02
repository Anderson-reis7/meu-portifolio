# Deploy no GitHub Pages

O site é publicado automaticamente pelo GitHub Actions a cada push na branch `main`.
O workflow está em [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml): ele instala
as dependências com `npm ci`, roda `npm run build` e publica a pasta `dist` no GitHub Pages.

A pasta `dist` **não** é versionada; ela é gerada no CI.

## Configuração inicial (uma vez)

1. No repositório, abra **Settings → Pages**.
2. Em **Source**, selecione **GitHub Actions**.
3. Confirme que `base` em [`vite.config.js`](vite.config.js) é igual ao nome do repositório
   (`/meu-portifolio/`).

O site fica disponível em `https://<usuario>.github.io/meu-portifolio/`.

## Publicar uma alteração

```bash
git add .
git commit -m "Descrição das mudanças"
git push
```

Acompanhe a execução na aba **Actions**. Em poucos minutos o site é atualizado.

## Verificar antes de publicar

```bash
npm run check
```

```bash
npm run build && npm run preview
```

## Domínio personalizado

1. Crie `public/CNAME` com o domínio.
2. Aponte o DNS para o GitHub Pages.
3. Em **Settings → Pages**, informe o domínio e troque `base` em `vite.config.js` para `/`.

## Problemas comuns

- **Página em branco**: confira o `base` do Vite e se a fonte do Pages é "GitHub Actions".
- **Workflow falhou**: abra o log em Actions; normalmente é erro de lint/tipos ou lockfile
  desatualizado (`npm install` local e commit do `package-lock.json`).
