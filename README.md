# 🚀 Boilerplate Aqua9 - Next.js Profissional

<div align="center">

![Aqua9 Logo](public/img/logo-gh.svg)

**Template Next.js moderno e otimizado para projetos profissionais da Aqua9**

[![Build Status](https://github.com/aqua9/boilerplate_aqua9/workflows/ci/badge.svg)](https://github.com/aqua9/boilerplate_aqua9/actions)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

**Desenvolvido por**: [Jonathan Simão](https://aqua9.com.br)
**Site**: [aqua9.com.br](https://aqua9.com.br)
**Versão**: 1.0.0

</div>

---

## 📋 Sobre o Projeto

Este é um boilerplate Next.js profissional desenvolvido pela **Aqua9** para acelerar o desenvolvimento de projetos web modernos. O template inclui as melhores práticas de desenvolvimento, ferramentas de qualidade de código, testes automatizados e configurações otimizadas para produção.

### ✨ **Características Principais**

- ⚡ **Performance otimizada** com Next.js 15 e App Router
- 🎨 **Design system** com Tailwind CSS 4
- 🔒 **Segurança robusta** com Arcjet e validações
- 📊 **Analytics completo** com PostHog e Sentry
- 🧪 **Testes automatizados** com Vitest e Playwright
- 📚 **Documentação** com Storybook
- 🚀 **Deploy ready** para Vercel e outras plataformas
- 🎯 **Qualidade de código** automatizada e padronizada

## 🛠️ Stack Tecnológica

Este projeto utiliza uma stack moderna e robusta, cuidadosamente selecionada para garantir qualidade, performance e escalabilidade.

### **🎯 Core Framework**

| Tecnologia                                    | Versão | Descrição                             |
| --------------------------------------------- | ------ | ------------------------------------- |
| [Next.js](https://nextjs.org/)                | 15.x   | Framework React com App Router e SSR  |
| [React](https://reactjs.org/)                 | 18.x   | Biblioteca JavaScript para interfaces |
| [TypeScript](https://www.typescriptlang.org/) | 5.x    | Tipagem estática para JavaScript      |
| [Tailwind CSS](https://tailwindcss.com/)      | 4.x    | Framework CSS utility-first           |

### **🔧 Desenvolvimento & Qualidade**

| Ferramenta                                           | Propósito                  | Configuração             |
| ---------------------------------------------------- | -------------------------- | ------------------------ |
| [ESLint](https://eslint.org/)                        | Linting e análise estática | Configuração rigorosa    |
| [Prettier](https://prettier.io/)                     | Formatação de código       | Padrões consistentes     |
| [EditorConfig](https://editorconfig.org/)            | Configuração de editores   | Padronização de ambiente |
| [Lefthook](https://github.com/evilmartians/lefthook) | Git hooks                  | Automação de qualidade   |

### **🧪 Testes & Documentação**

| Ferramenta                                            | Tipo                  | Descrição                        |
| ----------------------------------------------------- | --------------------- | -------------------------------- |
| [Vitest](https://vitest.dev/)                         | Testes unitários      | Framework rápido e moderno       |
| [React Testing Library](https://testing-library.com/) | Testes de componentes | Foco em comportamento do usuário |
| [Playwright](https://playwright.dev/)                 | Testes E2E            | Automação de navegadores         |
| [Storybook](https://storybook.js.org/)                | Documentação          | Componentes isolados             |

### **🗄️ Banco de Dados & ORM**

| Tecnologia                                       | Propósito            | Características         |
| ------------------------------------------------ | -------------------- | ----------------------- |
| [DrizzleORM](https://orm.drizzle.team/)          | ORM TypeScript-first | Type-safe, performático |
| [PGLite](https://github.com/electric-sql/pglite) | PostgreSQL in-memory | Desenvolvimento local   |

### **📊 Analytics & Monitoramento**

| Serviço                                  | Funcionalidade            | Integração   |
| ---------------------------------------- | ------------------------- | ------------ |
| [PostHog](https://posthog.com/)          | Analytics e feature flags | Automática   |
| [Sentry](https://sentry.io/)             | Monitoramento de erros    | Real-time    |
| [Better Stack](https://betterstack.com/) | Logs e observabilidade    | Centralizada |

### **🔒 Segurança & Performance**

| Ferramenta                        | Proteção                | Benefício           |
| --------------------------------- | ----------------------- | ------------------- |
| [Arcjet](https://arcjet.com/)     | Proteção contra bots    | Segurança proativa  |
| [Checkly](https://checklyhq.com/) | Monitoramento de uptime | Disponibilidade     |
| [Codecov](https://codecov.io/)    | Cobertura de testes     | Qualidade de código |

## 🎯 Qualidade de Código Automatizada

Este boilerplate implementa um sistema completo de qualidade de código que garante **padronização automática** e **correção contínua** de todo o código do projeto, incluindo arquivos de teste.

### **🛠️ Ferramentas de Qualidade**

#### **Prettier**

- ✅ **Formatação automática** de todos os arquivos
- ✅ **Padrões consistentes** definidos no `.prettierrc`
- ✅ **Configuração global** para espaçamento, aspas, ponto e vírgula
- ✅ **Integração com editores** para formatação ao salvar
- ✅ **Comando manual**: `npm run format`

#### **ESLint**

- ✅ **Análise estática** de código JavaScript/TypeScript
- ✅ **Detecção de erros** e boas práticas
- ✅ **Plugins especializados** para React, TypeScript, Tailwind
- ✅ **Configuração rigorosa** para qualidade máxima
- ✅ **Correção automática**: `npm run lint:fix`

#### **EditorConfig**

- ✅ **Padronização de editores** em todos os sistemas
- ✅ **Configuração consistente** de recuos e finais de linha
- ✅ **Suporte universal** para diferentes IDEs
- ✅ **Configuração automática** via `.editorconfig`

#### **Lefthook (Git Hooks)**

- ✅ **Automação de qualidade** antes de cada commit
- ✅ **Execução automática** de lint e format
- ✅ **Verificação de tipos** TypeScript
- ✅ **Prevenção de commits** com código não padronizado

### **🚀 Benefícios da Automação**

#### **Para o Desenvolvedor**

- ⚡ **Zero configuração** manual de formatação
- 🔄 **Correção automática** ao salvar arquivos
- 🚫 **Impossibilidade** de commitar código mal formatado
- 📈 **Produtividade aumentada** com menos preocupações

#### **Para a Equipe**

- 🎯 **Padrões consistentes** em todo o projeto
- 🔍 **Detecção precoce** de problemas de qualidade
- 🚀 **Onboarding simplificado** para novos desenvolvedores
- 📊 **Métricas de qualidade** automatizadas

#### **Para o Projeto**

- 🛡️ **Prevenção de bugs** através de análise estática
- 📝 **Código legível** e bem estruturado
- 🔧 **Manutenibilidade** aumentada
- 🚀 **Performance otimizada** com boas práticas

### **📋 Como Funciona na Prática**

1. **Durante o Desenvolvimento**:
   - Editor formata automaticamente ao salvar
   - ESLint mostra erros em tempo real
   - TypeScript verifica tipos continuamente

2. **Antes do Commit**:
   - Lefthook executa lint e format automaticamente
   - Verificação de tipos TypeScript
   - Bloqueio de commit se houver problemas

3. **No CI/CD**:
   - Verificação de qualidade em pull requests
   - Relatórios de cobertura de testes
   - Análise de segurança automatizada

### **🔧 Configuração Personalizada**

Todas as ferramentas podem ser configuradas através dos arquivos:

- `.prettierrc` - Configuração do Prettier
- `.eslintrc.js` - Regras do ESLint
- `.editorconfig` - Configuração de editores
- `lefthook.yml` - Hooks do Git

## 🚀 Como começar

### **Pré-requisitos**

- Node.js 18+
- npm ou yarn
- Git

### **Instalação**

1. **Clone o repositório**:

```bash
git clone https://github.com/aqua9/boilerplate_aqua9.git
cd boilerplate_aqua9
```

2. **Instale as dependências**:

```bash
npm install
# ou
yarn install
```

3. **Configure as variáveis de ambiente**:

```bash
cp .env.example .env.local
```

4. **Inicie o servidor de desenvolvimento**:

```bash
npm run dev
# ou
yarn dev
```

5. **Abra [http://localhost:3000](http://localhost:3000)** no seu navegador para ver o resultado.

A página atualiza automaticamente conforme você edita os arquivos.

## 📋 Comandos Disponíveis

### **🚀 Desenvolvimento**

| Comando         | Descrição                   | Uso                   |
| --------------- | --------------------------- | --------------------- |
| `npm run dev`   | Servidor de desenvolvimento | `localhost:3000`      |
| `npm run build` | Build de produção           | Otimizado para deploy |
| `npm run start` | Servidor de produção        | Teste local do build  |

### **🔧 Qualidade de Código**

| Comando                | Ação                | Resultado              |
| ---------------------- | ------------------- | ---------------------- |
| `npm run lint`         | Análise estática    | Relatório de problemas |
| `npm run lint:fix`     | Correção automática | Código limpo           |
| `npm run format`       | Formatação          | Padrões consistentes   |
| `npm run format:check` | Verificação         | Validação de formato   |

### **🧪 Testes**

| Comando                 | Tipo       | Descrição                |
| ----------------------- | ---------- | ------------------------ |
| `npm run test`          | Unitários  | Execução completa        |
| `npm run test:watch`    | Unitários  | Modo desenvolvimento     |
| `npm run test:e2e`      | End-to-end | Automação de navegadores |
| `npm run test:coverage` | Cobertura  | Relatório detalhado      |

### **📚 Documentação**

| Comando                   | Ambiente        | Porta            |
| ------------------------- | --------------- | ---------------- |
| `npm run storybook`       | Desenvolvimento | `localhost:6006` |
| `npm run build-storybook` | Produção        | Build estático   |

### **✅ Verificação**

| Comando              | Verificação  | Benefício      |
| -------------------- | ------------ | -------------- |
| `npm run type-check` | TypeScript   | Tipos corretos |
| `npm run check-deps` | Dependências | Código limpo   |

## 📚 Recursos e Documentação

### **📖 Documentação Oficial**

| Recurso          | Descrição                             | Link                                             |
| ---------------- | ------------------------------------- | ------------------------------------------------ |
| **Next.js**      | Framework React com App Router        | [Documentação](https://nextjs.org/docs)          |
| **React**        | Biblioteca JavaScript para interfaces | [Documentação](https://react.dev/)               |
| **TypeScript**   | Tipagem estática para JavaScript      | [Handbook](https://www.typescriptlang.org/docs/) |
| **Tailwind CSS** | Framework CSS utility-first           | [Documentação](https://tailwindcss.com/docs)     |

### **🏢 Recursos da Aqua9**

| Recurso          | Descrição                   | Link                                                             |
| ---------------- | --------------------------- | ---------------------------------------------------------------- |
| **Site Oficial** | Visite nosso site           | [aqua9.com.br](https://aqua9.com.br)                             |
| **GitHub**       | Nossos projetos open source | [github.com/aqua9](https://github.com/aqua9)                     |
| **Contato**      | Entre em contato conosco    | [contato@aqua9.com.br](mailto:contato@aqua9.com.br)              |
| **LinkedIn**     | Siga nossa empresa          | [linkedin.com/company/aqua9](https://linkedin.com/company/aqua9) |

### **🛠️ Ferramentas Utilizadas**

| Ferramenta     | Categoria                   | Documentação                          |
| -------------- | --------------------------- | ------------------------------------- |
| **DrizzleORM** | ORM TypeScript-first        | [Docs](https://orm.drizzle.team/docs) |
| **Vitest**     | Framework de testes         | [Guide](https://vitest.dev/guide/)    |
| **Storybook**  | Documentação de componentes | [Docs](https://storybook.js.org/docs) |
| **PostHog**    | Analytics e feature flags   | [Docs](https://posthog.com/docs)      |
| **Sentry**     | Monitoramento de erros      | [Docs](https://docs.sentry.io/)       |
| **Arcjet**     | Proteção de segurança       | [Docs](https://docs.arcjet.com/)      |

## 🚀 Deploy e Produção

### **☁️ Plataformas Recomendadas**

#### **Vercel (Recomendado)**

A forma mais fácil e otimizada de fazer deploy de aplicações Next.js.

```bash
# Deploy com Vercel CLI
npm i -g vercel
vercel

# Ou conecte seu repositório GitHub
# https://vercel.com/new
```

**Vantagens:**

- ⚡ Deploy automático a cada push
- 🔧 Configuração zero
- 📊 Analytics integrados
- 🌍 CDN global
- 🔒 SSL automático

#### **Outras Opções**

| Plataforma       | Tipo      | Características               |
| ---------------- | --------- | ----------------------------- |
| **Netlify**      | PaaS      | Suporte nativo ao Next.js     |
| **Railway**      | PaaS      | Deploy simples e rápido       |
| **AWS Amplify**  | Cloud     | Para projetos empresariais    |
| **Docker**       | Container | Para ambientes personalizados |
| **DigitalOcean** | VPS       | Controle total do servidor    |

### **🔧 Configuração de Produção**

#### **Variáveis de Ambiente**

```bash
# .env.production
NEXT_PUBLIC_APP_URL=https://seu-dominio.com
DATABASE_URL=postgresql://...
NEXT_PUBLIC_POSTHOG_KEY=phc_...
SENTRY_DSN=https://...
```

#### **Otimizações Recomendadas**

- ✅ **Compressão**: Gzip/Brotli habilitados
- ✅ **Cache**: Headers otimizados
- ✅ **Imagens**: Otimização automática
- ✅ **Bundle**: Code splitting automático

## 🤝 Contribuição

Contribuições são muito bem-vindas! Este projeto é mantido pela **Aqua9** e aceitamos contribuições da comunidade.

### **📋 Como Contribuir**

1. **Fork o projeto**
2. **Crie uma branch** para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit suas mudanças** (`git commit -m 'Add some AmazingFeature'`)
4. **Push para a branch** (`git push origin feature/AmazingFeature`)
5. **Abra um Pull Request**

### **📝 Padrões de Contribuição**

- ✅ **Código limpo** e bem documentado
- ✅ **Testes** para novas funcionalidades
- ✅ **TypeScript** para tipagem adequada
- ✅ **Commits semânticos** seguindo Conventional Commits
- ✅ **Pull requests** com descrição clara

### **🐛 Reportando Bugs**

Se você encontrou um bug, por favor:

1. Verifique se já não foi reportado
2. Use o template de issue
3. Inclua passos para reproduzir
4. Adicione screenshots se relevante

## 📄 Licença

Este projeto está licenciado sob a **MIT License** - veja o arquivo [LICENSE](LICENSE) para detalhes.

### **📋 Termos da Licença**

- ✅ **Uso comercial** permitido
- ✅ **Modificação** permitida
- ✅ **Distribuição** permitida
- ✅ **Uso privado** permitido
- ✅ **Sem garantias** de funcionamento

---

<div align="center">

**Desenvolvido com ❤️ pela [Aqua9](https://aqua9.com.br)**

[![Website](https://img.shields.io/badge/Website-aqua9.com.br-blue?style=flat-square)](https://aqua9.com.br)
[![Email](https://img.shields.io/badge/Email-contato@aqua9.com.br-red?style=flat-square)](mailto:contato@aqua9.com.br)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Aqua9-blue?style=flat-square&logo=linkedin)](https://linkedin.com/company/aqua9)

</div>
