# VisioSoil Landing Page

Landing page informativa do projeto VisioSoil, um aplicativo de classificação textural do solo por inteligência artificial.

## O que isso faz?

- Apresenta o projeto VisioSoil para potenciais usuários e parceiros
- Exibe informações sobre o funcionamento do aplicativo
- Mostra as conquistas do projeto (3º lugar na FETEPS 2025)
- Lista os parceiros institucionais
- Formulário para solicitação de acesso antecipado

## O que é?

Uma landing page web responsiva, single-page application (SPA), desenvolvida para apresentar o projeto VisioSoil. O aplicativo em si (que está em desenvolvimento separado) classifica a textura do solo a partir de fotos tiradas com celular, voltado principalmente para pequenos produtores rurais.

## Tecnologias Utilizadas

| Tecnologia | Versão | Função |
|------------|--------|--------|
| React | 19.x | Framework de UI |
| TypeScript | 5.x | Tipagem estática |
| Vite | 7.x | Build tool e dev server |
| Tailwind CSS | 4.x | Estilização utility-first |
| Motion (Framer Motion) | 12.x | Animações e transições |
| Lucide React | latest | Ícones SVG |

## Ambição do Projeto

Este é o site institucional de um projeto real que:
- Conquistou 3º lugar na 16ª FETEPS 2025 (Feira Tecnológica do Centro Paula Souza)
- Foi desenvolvido na Fatec Shunji Nishimura de Pompéia
- Possui parcerias com instituições como UFMG e Instituto Politécnico de Santarém (Portugal)

O aplicativo VisioSoil está em desenvolvimento ativo e esta landing page serve para captação de usuários beta e divulgação do projeto.

## Estágio do Projeto

**Status: Completo**

A landing page está finalizada e funcional com as seguintes seções:
- [x] Hero com apresentação do produto
- [x] Seção de problema/solução
- [x] Como funciona (3 passos)
- [x] Benefícios do aplicativo
- [x] Conquistas (FETEPS 2025 com carrossel de fotos)
- [x] Parceiros institucionais
- [x] FAQ
- [x] Formulário de contato/acesso antecipado
- [x] Footer

## Problemas Conhecidos e Limitações

1. **Formulário não funcional**: O formulário de contato é apenas visual, não está integrado a nenhum backend. Necessita integração futura com API ou serviço como Supabase/EmailJS.

2. **Precisão reportada**: A página menciona 80% de precisão com 5 classes texturais, que são os valores atuais do protótipo em desenvolvimento.

## Como Executar

### Pré-requisitos
- Node.js 18+
- npm 9+

### Instalação

```bash
git clone https://github.com/LukeSantossz/visiosoil-landing.git
cd visiosoil-landing
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Acesse: http://localhost:5173

### Build de Produção

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
│   │   ├── sections/     # Seções da landing page
│   │   └── ui/           # Componentes reutilizáveis (Button, Logo, BackgroundAnimation)
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
- João Pedro Moreno Alegre
- Lucas dos Santos Gonçalves
- Fernanda Miyuki Kasita Kashima

**Orientadores:**
- Gustavo Faulin
- Ricardo Favan

## Links

- Projeto na FETEPS: https://feteps.cps.sp.gov.br/projetos/smartsee-classificacao-textural-do-solo/
- Fatec Shunji Nishimura: https://www.fundacaonishimura.com.br

## Licença

MIT
