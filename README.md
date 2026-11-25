<div align="center">

# Rodrigo Santos · Portfólio

**Engenharia de Software · QA e Back-end**<br>
Universidade de Brasília (FCTE) · Brasília, DF

[![Site](https://img.shields.io/badge/site-rocsantos.github.io-1f3a2e?style=for-the-badge)](https://rocsantos.github.io)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-rodrigosantossoftware-0a66c2?style=for-the-badge)](https://www.linkedin.com/in/rodrigosantossoftware)
[![Currículos](https://img.shields.io/badge/curr%C3%ADculos-PT%20%7C%20EN-8a5c14?style=for-the-badge)](#currículos)

</div>

Portfólio pessoal com minha trajetória profissional, estudos de caso e currículos.
É feito à mão em HTML, CSS e JavaScript puros, sem framework e sem etapa de build, e publicado no GitHub Pages.

> **English:** personal portfolio of Rodrigo Santos, Junior Software Engineer focused on QA and back end.
> English resumes (US Letter) are linked in the [Currículos](#currículos) table below.

## O que tem no site

- **Trajetória profissional:** linha do tempo com os estágios em Quality Assurance no Portal de Compras Públicas (2025–2026) e em desenvolvimento full stack no Supremo Tribunal Federal (2021–2022).
- **Repositórios no GitHub:** lista carregada da API pública do GitHub, com projetos em destaque caso a API não responda.
- **Estudos de caso:** cada projeto contado por dentro, com o problema, a arquitetura, o fluxo de dados e as decisões técnicas.
- **Stack:** ferramentas agrupadas em back-end e dados, qualidade, front-end e desktop, e infraestrutura.
- **Contato:** LinkedIn, GitHub, e-mail, WhatsApp e currículos em PDF.

## Projetos em destaque

### WebTutoria · Trabalho de Conclusão de Curso

Plataforma de tutoria acadêmica que conecta estudantes e monitores. Desenvolvi o back-end, o banco de dados e toda a estratégia de testes:

- API REST em **Django** com recomendação híbrida (**Scikit-learn**), que combina similaridade de conteúdo e métricas de engajamento;
- **88%** de cobertura unitária com Pytest e coverage.py;
- **38 cenários E2E** em Robot Framework com SeleniumLibrary, todos aprovados;
- testes de API com Postman e nota **A** de segurança no SonarCloud.

[Código](https://github.com/TutoriaWebApp) · [Demonstração online](https://frontend-tan-psi-widf390s11.vercel.app/)

### ERP Arquitetura & Sync CAD/BIM · Freelance

Sistema de gestão para um escritório de arquitetura, com um agente desktop que mantém os arquivos de projeto sincronizados:

- monolito modular em **NestJS** com Prisma ORM e MySQL 8;
- agente em **Tauri**, na bandeja do Windows, que sincroniza arquivos CAD/BIM na rede local (SMB);
- interface em React, Vite, Tailwind CSS e TanStack Query.

[Código](https://github.com/Rocsantos/Architecture)

## Currículos

| Foco | Português (A4, base ABNT) | English (US Letter) |
|---|---|---|
| QA / Analista de Testes Júnior | [PDF](assets/doc/RodrigoSantos_Curriculo_QA_Jr.pdf) | [PDF](assets/doc/RodrigoSantos_Resume_QA_Jr.pdf) |
| Engenharia de Software Júnior | [PDF](assets/doc/RodrigoSantos_Curriculo_EngSoftware_Jr.pdf) | [PDF](assets/doc/RodrigoSantos_Resume_SoftwareEngineer_Jr.pdf) |

## Como o site foi feito

- **Zero dependências:** HTML semântico, CSS e JavaScript puro, sem npm e sem build.
- **Dois temas:** claro, em tons editoriais, e escuro, na paleta Dracula. Segue a preferência do sistema, e a escolha manual fica salva no navegador.
- **Movimento com propósito:** animações de entrada com `IntersectionObserver`, números com contagem animada, barra de progresso de leitura e menu que destaca a seção atual.
- **Acessibilidade:** respeita `prefers-reduced-motion`, tem foco visível para quem navega pelo teclado e rótulos ARIA na navegação.

## Estrutura

```text
rocsantos.github.io/
├── index.html      # conteúdo e marcação das seções
├── index.css       # temas claro/Dracula, layout e responsividade
├── index.js        # configuração pessoal, tema, animações e API do GitHub
└── assets/
    ├── doc/        # currículos em PDF (português e inglês)
    └── image/      # foto de perfil
```

Os links de contato ficam num só lugar, no topo do [`index.js`](index.js):

```js
var PORTFOLIO_CONFIG = {
    githubUsername: "Rocsantos",
    linkedinUrl: "https://www.linkedin.com/in/rodrigosantossoftware",
    // e-mail e WhatsApp seguem o mesmo padrão
};
```

## Contato

[rocsantos.github.io](https://rocsantos.github.io) ·
[LinkedIn](https://www.linkedin.com/in/rodrigosantossoftware) ·
[rodrigocarvalho4675@gmail.com](mailto:rodrigocarvalho4675@gmail.com)

<sub>© Rodrigo Carvalho dos Santos · Brasília, DF</sub>
