# ✦ ARCANA — Arquitetura do Projeto

## 1. Visão geral

O ARCANA é uma aplicação web de Tarot desenvolvida como projeto pessoal de portfólio, com foco em desenvolvimento Full Stack, organização de código, experiência do usuário e identidade visual.

A aplicação está sendo construída de forma incremental, começando pelo frontend em React.

## 2. Tecnologias

### Implementadas
- React.js — construção da interface.
- JavaScript — lógica e interatividade.
- Vite — ambiente de desenvolvimento.
- CSS3 — estilização e responsividade.
- Git — versionamento do código.

### Planejadas
- Node.js e Express — API REST.
- PostgreSQL — banco de dados relacional.
- Prisma — acesso e modelagem dos dados.
- Autenticação — contas e informações individuais dos usuários.

As tecnologias planejadas ainda não fazem parte da implementação atual.

## 3. Arquitetura atual

O frontend utiliza uma arquitetura baseada em componentes React.

Cada componente visual possui uma pasta própria, contendo seu arquivo JSX e seu arquivo CSS.

### Componentes

| Componente | Responsabilidade |
|---|---|
| Header | Identidade visual e navegação principal |
| Hero | Apresentação e chamada inicial |
| Features | Apresentação das funcionalidades |
| Biblioteca | Listagem, pesquisa e filtros das cartas |

### Dados

A pasta `src/data` contém os dados locais das cartas de Tarot.

Atualmente, esses dados são utilizados diretamente pelo frontend, sem comunicação com um servidor ou banco de dados.

## 4. Fluxo de dados atual

1. Os dados das cartas são definidos em arquivos JavaScript.
2. O componente Biblioteca importa esses dados.
3. O React utiliza `useState` para controlar a pesquisa e o filtro selecionado.
4. Os dados são filtrados conforme a interação do usuário.
5. A interface renderiza os resultados utilizando `map()`.

## 5. Arquitetura planejada

A evolução Full Stack prevê a seguinte comunicação:

**Frontend React → API REST Express → Prisma ORM → PostgreSQL**

O frontend será responsável pela apresentação e interação.

O backend ficará responsável pelas regras de negócio, autenticação e disponibilização dos dados por meio de endpoints.

O banco de dados armazenará as informações persistentes da aplicação.

## 6. Princípios de organização

- Separação de responsabilidades.
- Componentes reutilizáveis.
- Código legível e organizado.
- Evolução incremental.
- Responsividade.
- Documentação contínua.
- Versionamento com Git.

## 7. Status

**Em desenvolvimento.**

A arquitetura descrita representa o estado atual do projeto e seu planejamento inicial. Novas decisões técnicas serão documentadas conforme a aplicação evoluir.