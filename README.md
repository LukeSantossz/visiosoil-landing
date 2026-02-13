# 🌍 VisioSoil — Classificação Textural do Solo por IA

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Motion-12-FF0055?logo=framer&logoColor=white" />
  <img src="https://img.shields.io/badge/License-MIT-green" />
</p>

<p align="center">
  Landing page oficial do projeto <strong>VisioSoil</strong> — plataforma SaaS de classificação textural de solos agrícolas usando visão computacional e aprendizado de máquina.
</p>

---

## 📋 Sumário

- [Sobre o Projeto](#-sobre-o-projeto)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação](#-instalação)
- [Rodando o Projeto](#-rodando-o-projeto)
- [Build de Produção](#-build-de-produção)
- [Deploy](#-deploy)
- [Stack Técnica](#-stack-técnica)
- [Identidade Visual](#-identidade-visual)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Contribuindo](#-contribuindo)
- [Licença](#-licença)

---

## 🌱 Sobre o Projeto

O VisioSoil transforma uma foto de amostra de solo em diagnóstico granulométrico instantâneo, classificando a textura nas 12 classes do triângulo textural USDA (areia, silte, argila e suas combinações).

**Público-alvo:** Produtores rurais, laboratórios de solos, consultores agrícolas, seguradoras e cooperativas de crédito agrícola.

**Parceiros:** Fundação Shunji Nishimura, Instituto Politécnico de Setúbal (Portugal), UFMG, Centro Paula Souza.

---

## ✅ Pré-requisitos

Antes de começar, certifique-se de ter instalado:

| Ferramenta | Versão mínima | Como verificar |
|---|---|---|
| **Node.js** | 18.0+ | `node --version` |
| **npm** | 9.0+ | `npm --version` |
| **Git** | 2.0+ | `git --version` |

> **Dica:** Recomendamos usar o [nvm](https://github.com/nvm-sh/nvm) para gerenciar versões do Node.js.

---

## 📦 Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/visiosoil-landing.git
cd visiosoil-landing
```

### 2. Instale as dependências

```bash
npm install
```

Isso instalará todas as dependências listadas no `package.json`, incluindo React, Vite, Tailwind CSS, Motion e Lucide Icons.

---

## 🚀 Rodando o Projeto

### Servidor de desenvolvimento

```bash
npm run dev
```

O projeto estará disponível em:

```
http://localhost:5173
```

O Vite oferece **Hot Module Replacement (HMR)**, então qualquer alteração no código será refletida instantaneamente no navegador sem precisar recarregar a página.

### Verificação de tipos TypeScript

```bash
npx tsc --noEmit
```

---

## 📦 Build de Produção

### Gerar build otimizado

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`. O build inclui:
- Tree-shaking automático (remove código não utilizado)
- Minificação de CSS e JavaScript
- Code splitting inteligente
- Hashing de assets para cache busting

### Pré-visualizar o build localmente

```bash
npm run preview
```

Isso serve a pasta `dist/` em `http://localhost:4173` para testar o build antes do deploy.

---

## 🌐 Deploy

### Vercel (recomendado)

```bash
# Instalar CLI globalmente (uma vez)
npm install -g vercel

# Deploy
vercel --prod
```

Ou conecte o repositório GitHub diretamente no [dashboard da Vercel](https://vercel.com/new).

### Netlify

```bash
# Instalar CLI globalmente (uma vez)
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

### Servidor estático (Nginx, Apache, etc.)

Após `npm run build`, copie o conteúdo da pasta `dist/` para o diretório raiz do seu servidor web. Para SPA com rotas client-side, configure o servidor para redirecionar todas as rotas para `index.html`.

**Exemplo Nginx:**

```nginx
server {
    listen 80;
    server_name visiosoil.com.br;
    root /var/www/visiosoil/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache de assets estáticos
    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

---

## 🛠 Stack Técnica

| Camada | Tecnologia | Versão | Função |
|---|---|---|---|
| Build | Vite | 7.x | Bundler e dev server |
| Framework | React | 19.x | UI declarativa |
| Linguagem | TypeScript | 5.x | Tipagem estática |
| CSS | Tailwind CSS | 4.x | Utility-first styling |
| Animações | Motion | 12.x | Scroll reveals, transições |
| Ícones | Lucide React | latest | Ícones SVG otimizados |

---

## 🎨 Identidade Visual

### Paleta "Terra Inteligente"

| Token CSS | Hex | Uso |
|---|---|---|
| `--color-teal-deep` | `#0D7377` | Primária — ponte entre tech e natureza |
| `--color-soil-brown` | `#6B4226` | Secundária — conexão com o solo |
| `--color-sand-warm` | `#D4A574` | Acento quente — backgrounds e cards |
| `--color-cyan-electric` | `#00BCD4` | Acento tech — dados e destaques AI |
| `--color-charcoal-deep` | `#1A2332` | Base escura — seções premium |
| `--color-cream-off` | `#F5F0EB` | Base clara — fundo principal |

### Tipografia

| Família | Font | Uso |
|---|---|---|
| Display | **Syne** | Títulos, headlines, h1-h6 |
| Body | **Outfit** | Texto corrido, parágrafos, UI |
| Mono | **IBM Plex Mono** | Dados, métricas, porcentagens |

Todas as fontes são carregadas via Google Fonts no `index.html`.

---

## 📁 Estrutura do Projeto

```
visiosoil-landing/
├── public/                    # Assets estáticos (favicon, etc.)
├── src/
│   ├── assets/                # Imagens e recursos
│   ├── components/
│   │   ├── sections/          # Seções da landing page
│   │   │   ├── Navbar.tsx     # Navegação fixa com blur on scroll
│   │   │   ├── Hero.tsx       # Hero com triângulo textural animado
│   │   │   ├── Partners.tsx   # Barra de parceiros institucionais
│   │   │   ├── Problem.tsx    # Dores da análise tradicional
│   │   │   ├── HowItWorks.tsx # Processo em 3 passos
│   │   │   ├── Benefits.tsx   # 6 vantagens-chave (dark section)
│   │   │   ├── Audience.tsx   # 4 segmentos de público-alvo
│   │   │   ├── Validation.tsx # Metodologia e métricas científicas
│   │   │   ├── Pricing.tsx    # 3 planos SaaS
│   │   │   ├── FAQ.tsx        # Perguntas frequentes (accordion)
│   │   │   ├── CTAFinal.tsx   # Formulário de contato
│   │   │   └── Footer.tsx     # Links e copyright
│   │   └── ui/                # Componentes reutilizáveis
│   │       ├── Button.tsx     # Botão com variantes
│   │       └── Logo.tsx       # Logo SVG + wordmark
│   ├── hooks/
│   │   └── useScrollReveal.ts # Hook de animação scroll-triggered
│   ├── App.tsx                # Componente raiz
│   ├── main.tsx               # Entry point
│   └── index.css              # Tailwind v4 + tokens de tema
├── index.html                 # HTML entry com Google Fonts
├── vite.config.ts             # Config Vite + plugins
├── tsconfig.json              # Config TypeScript
├── package.json               # Dependências e scripts
└── README.md                  # Este arquivo
```

---

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/minha-feature`)
3. Commit suas alterações (`git commit -m 'feat: adiciona minha feature'`)
4. Push para a branch (`git push origin feature/minha-feature`)
5. Abra um Pull Request

### Convenção de commits

Utilizamos [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` nova funcionalidade
- `fix:` correção de bug
- `style:` alterações visuais/CSS
- `refactor:` refatoração sem mudança funcional
- `docs:` documentação

---

## 📝 Roadmap

- [ ] Adicionar fotos reais de solo e equipe
- [ ] Implementar demo interativa de upload de imagem com classificação
- [ ] Adicionar i18n (PT-BR / EN)
- [ ] Integrar formulário com backend (Supabase / API própria)
- [ ] Implementar animações Lottie nos ícones "Como Funciona"
- [ ] SEO: Open Graph tags, structured data, sitemap.xml
- [ ] Testes com Vitest + Testing Library
- [ ] CI/CD com GitHub Actions

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<p align="center">
  <strong>VisioSoil</strong> — Classificação textural do solo por inteligência artificial.<br/>
  <a href="https://visiosoil.com.br">visiosoil.com.br</a>
</p>
