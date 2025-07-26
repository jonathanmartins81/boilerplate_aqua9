/**
 * Componente JsonLd - Structured Data para SEO
 *
 * Este componente adiciona dados estruturados JSON-LD ao HTML
 * para melhorar a compreensão dos motores de busca sobre o conteúdo.
 *
 * Funcionalidades:
 * - Schema para SoftwareApplication (aplicação)
 * - Schema para Organization (empresa Aqua9)
 * - Schema para Person (Jonathan Simão)
 * - Schema para BreadcrumbList (navegação)
 * - Schema para WebSite (site)
 *
 * Benefícios:
 * - Melhor indexação nos motores de busca
 * - Rich snippets nos resultados de busca
 * - Compreensão do contexto da aplicação
 * - Melhor SEO técnico
 */

import { jsonLdConfig } from '@/utils/SEO';

/**
 * Componente JsonLd
 *
 * Renderiza múltiplos scripts JSON-LD com dados estruturados
 * para diferentes entidades relacionadas ao projeto.
 *
 * @returns Scripts JSON-LD para SEO
 */
export function JsonLd() {
  return (
    <>
      {/* Schema para SoftwareApplication - Descreve a aplicação */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdConfig.softwareApplication),
        }}
      />

      {/* Schema para Organization - Descreve a empresa Aqua9 */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdConfig.organization),
        }}
      />

      {/* Schema para Person - Descreve Jonathan Simão */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdConfig.person),
        }}
      />

      {/* Schema para BreadcrumbList - Navegação do site */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://aqua9.com.br',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Boilerplate Aqua9',
                item: 'https://aqua9.com.br',
              },
            ],
          }),
        }}
      />

      {/* Schema para WebSite - Informações do site */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Boilerplate Aqua9',
            url: 'https://aqua9.com.br',
            description:
              'Boilerplate Next.js profissional da Aqua9 para projetos internos',
            author: {
              '@type': 'Person',
              name: 'Jonathan Simão',
              url: 'https://aqua9.com.br',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Aqua9',
              url: 'https://aqua9.com.br',
            },
            potentialAction: {
              '@type': 'SearchAction',
              target: {
                '@type': 'EntryPoint',
                urlTemplate:
                  'https://aqua9.com.br/search?q={search_term_string}',
              },
              'query-input': 'required name=search_term_string',
            },
          }),
        }}
      />
    </>
  );
}
