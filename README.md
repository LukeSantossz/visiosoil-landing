# VisioSoil Landing Page

Landing page informativa do projeto VisioSoil, um aplicativo de classificacao textural do solo por inteligencia artificial.

## O que isso faz?

- Apresenta o projeto VisioSoil para potenciais usuarios e parceiros
- Exibe informacoes sobre o funcionamento do aplicativo
- Mostra as conquistas do projeto (3o lugar na FETEPS 2025)
- Lista os parceiros institucionais
- Formulario para solicitacao de acesso antecipado

## O que e?

Uma landing page web responsiva, single-page application (SPA), desenvolvida para apresentar o projeto VisioSoil. O aplicativo em si (que esta em desenvolvimento separado) classifica a textura do solo a partir de fotos tiradas com celular, voltado principalmente para pequenos produtores rurais.

## Tecnologias Utilizadas

| Tecnologia | Versao | Funcao |
|------------|--------|--------|
| React | 19.x | Framework de UI |
| TypeScript | 5.x | Tipagem estatica |
| Vite | 7.x | Build tool e dev server |
| Tailwind CSS | 4.x | Estilizacao utility-first |
| Motion (Framer Motion) | 12.x | Animacoes e transicoes |
| Lucide React | latest | Icones SVG |

## Ambicao do Projeto

Este e o site institucional de um projeto real que:
- Conquistou 3o lugar na 16a FETEPS 2025 (Feira Tecnologica do Centro Paula Souza)
- Foi desenvolvido na Fatec Shunji Nishimura de Pompeia
- Possui parcerias com instituicoes como UFMG e Instituto Politecnico de Santarem (Portugal)

O aplicativo VisioSoil esta em desenvolvimento ativo e esta landing page serve para captacao de usuarios beta e divulgacao do projeto.

## Estagio do Projeto

**Status: Completo**

A landing page esta finalizada e funcional com as seguintes secoes:
- [x] Hero com apresentacao do produto
- [x] Secao de problema/solucao
- [x] Como funciona (3 passos)
- [x] Beneficios do aplicativo
- [x] Conquistas (FETEPS 2025 com carrossel de fotos)
- [x] Parceiros institucionais
- [x] Validacao e credibilidade
- [x] FAQ
- [x] Formulario de contato/acesso antecipado
- [x] Footer

## Problemas Conhecidos e Limitacoes

1. **Formulario nao funcional**: O formulario de contato e apenas visual, nao esta integrado a nenhum backend. Necessita integracao futura com API ou servico como Supabase/EmailJS.

2. **Logos dos parceiros**: Utilizamos placeholders estilizados ao inves das logos oficiais das instituicoes. As logos oficiais devem ser adicionadas na pasta `public/images/partners/`.

3. **Precisao reportada**: A pagina menciona 80% de precisao com 5 classes texturais, que sao os valores atuais do prototipo em desenvolvimento.

4. **SEO**: Faltam meta tags Open Graph, structured data e sitemap.xml para melhor indexacao.

## Como Executar

### Pre-requisitos
- Node.js 18+
- npm 9+

### Instalacao

```bash
git clone https://github.com/seu-usuario/visiosoil-landing.git
cd visiosoil-landing
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Acesse: http://localhost:5173

### Build de Producao

```bash
npm run build
npm run preview
```

## Estrutura de Arquivos

```
visiosoil-landing/
├── public/
│   └── images/           # Imagens do projeto (FETEPS, etc.)
├── src/
│   ├── components/
│   │   ├── sections/     # Secoes da landing page
│   │   └── ui/           # Componentes reutilizaveis (Button, Logo)
│   ├── App.tsx           # Componente raiz
│   ├── main.tsx          # Entry point
│   └── index.css         # Estilos globais e tema
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Equipe

**Desenvolvedores:**
- Joao Pedro Moreno Alegre
- Lucas dos Santos Goncalves
- Fernanda Miyuki Kasita Kashima

**Orientadores:**
- Prof. Gustavo Faulin
- Prof. Ricardo Favan

## Links

- Projeto na FETEPS: https://feteps.cps.sp.gov.br/projetos/smartsee-classificacao-textural-do-solo/
- Fatec Shunji Nishimura: https://www.fundacaonishimura.com.br

## Licenca

MIT
