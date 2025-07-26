/**
 * Componente DynamicSEO - SEO Dinâmico
 *
 * Este componente permite configurar metadados SEO dinâmicos
 * para páginas específicas, baseados em props ou estado.
 *
 * Funcionalidades:
 * - Metadados dinâmicos por página
 * - Open Graph personalizado
 * - Twitter Cards personalizados
 * - Structured Data dinâmico
 * - URLs canônicas dinâmicas
 *
 * Uso:
 * ```tsx
 * <DynamicSEO
 *   title="Título da Página"
 *   description="Descrição personalizada"
 *   image="/custom-image.png"
 *   type="article"
 * />
 * ```
 */

'use client';

import { DynamicSEOConfig } from '@/utils/SEO';
import { useEffect } from 'react';

/**
 * Props do componente DynamicSEO
 */
interface DynamicSEOProps extends Partial<DynamicSEOConfig> {
  /** Título da página (obrigatório) */
  title: string;
  /** Descrição da página */
  description?: string;
  /** Palavras-chave específicas */
  keywords?: string[];
  /** Imagem para Open Graph e Twitter */
  image?: string;
  /** Tipo de conteúdo */
  type?: 'website' | 'article' | 'product' | 'profile';
  /** URL canônica */
  canonical?: string;
  /** Autor da página */
  author?: string;
  /** Data de publicação (para artigos) */
  publishedTime?: string;
  /** Data de modificação */
  modifiedTime?: string;
  /** Seção do site */
  section?: string;
  /** Tags específicas */
  tags?: string[];
}

/**
 * Componente DynamicSEO
 *
 * Atualiza os metadados da página dinamicamente baseado nas props fornecidas.
 *
 * @param props - Configurações de SEO dinâmicas
 * @returns null (componente não renderiza nada visível)
 */
export function DynamicSEO({
  title,
  description,
  keywords,
  image,
  type = 'website',
  canonical,
  author,
  publishedTime,
  modifiedTime,
  section,
  tags,
}: DynamicSEOProps) {
  useEffect(() => {
    // Atualiza o título da página
    document.title = title;

    // Atualiza meta tags
    updateMetaTag('description', description || '');
    updateMetaTag('keywords', keywords?.join(', ') || '');
    updateMetaTag('author', author || '');
    updateMetaTag('robots', 'index, follow');

    // Atualiza Open Graph
    updateMetaTag('og:title', title);
    updateMetaTag('og:description', description || '');
    updateMetaTag('og:type', type);
    updateMetaTag('og:image', image || '');
    updateMetaTag('og:url', canonical || window.location.href);

    // Atualiza Twitter Cards
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description || '');
    updateMetaTag('twitter:image', image || '');

    // Atualiza meta tags específicas para artigos
    if (type === 'article') {
      updateMetaTag('article:published_time', publishedTime || '');
      updateMetaTag('article:modified_time', modifiedTime || '');
      updateMetaTag('article:section', section || '');
      updateMetaTag('article:tag', tags?.join(', ') || '');
    }

    // Atualiza URL canônica
    if (canonical) {
      updateCanonicalUrl(canonical);
    }

    // Cleanup function para restaurar metadados originais
    return () => {
      // Aqui você pode restaurar os metadados originais se necessário
      document.title = 'Boilerplate Aqua9 - Next.js Profissional';
    };
  }, [
    title,
    description,
    keywords,
    image,
    type,
    canonical,
    author,
    publishedTime,
    modifiedTime,
    section,
    tags,
  ]);

  // Componente não renderiza nada visível
  return null;
}

/**
 * Função auxiliar para atualizar meta tags
 *
 * @param name - Nome da meta tag
 * @param content - Conteúdo da meta tag
 */
function updateMetaTag(name: string, content: string) {
  if (!content) return;

  let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
  if (!meta) {
    meta = document.querySelector(
      `meta[property="${name}"]`
    ) as HTMLMetaElement;
  }

  if (!meta) {
    meta = document.createElement('meta');
    if (
      name.startsWith('og:') ||
      name.startsWith('twitter:') ||
      name.startsWith('article:')
    ) {
      meta.setAttribute('property', name);
    } else {
      meta.setAttribute('name', name);
    }
    document.head.appendChild(meta);
  }

  meta.setAttribute('content', content);
}

/**
 * Função auxiliar para atualizar URL canônica
 *
 * @param url - URL canônica
 */
function updateCanonicalUrl(url: string) {
  let canonical = document.querySelector(
    'link[rel="canonical"]'
  ) as HTMLLinkElement;

  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }

  canonical.setAttribute('href', url);
}

/**
 * Hook para SEO dinâmico
 *
 * Hook que pode ser usado em componentes para gerar metadados dinâmicos
 * baseados no estado ou props do componente.
 *
 * @param config - Configuração de SEO dinâmico
 * @returns Função para atualizar metadados
 */
export function useDynamicSEO(config: DynamicSEOConfig) {
  useEffect(() => {
    // Aplica as configurações de SEO
    document.title = config.title;

    if (config.description) {
      updateMetaTag('description', config.description);
    }

    if (config.keywords) {
      updateMetaTag('keywords', config.keywords.join(', '));
    }

    if (config.canonical) {
      updateCanonicalUrl(config.canonical);
    }

    // Aplica configurações específicas do Open Graph
    if (config.openGraph) {
      if (config.openGraph.title) {
        updateMetaTag('og:title', config.openGraph.title);
      }
      if (config.openGraph.description) {
        updateMetaTag('og:description', config.openGraph.description);
      }
      if (config.openGraph.image) {
        updateMetaTag('og:image', config.openGraph.image);
      }
      if (config.openGraph.type) {
        updateMetaTag('og:type', config.openGraph.type);
      }
    }

    // Aplica configurações específicas do Twitter
    if (config.twitter) {
      if (config.twitter.title) {
        updateMetaTag('twitter:title', config.twitter.title);
      }
      if (config.twitter.description) {
        updateMetaTag('twitter:description', config.twitter.description);
      }
      if (config.twitter.image) {
        updateMetaTag('twitter:image', config.twitter.image);
      }
      if (config.twitter.card) {
        updateMetaTag('twitter:card', config.twitter.card);
      }
    }
  }, [config]);

  return {
    updateSEO: (newConfig: Partial<DynamicSEOConfig>) => {
      // Função para atualizar SEO dinamicamente
      // Aqui você pode implementar a lógica de atualização
      console.log('Atualizando SEO:', { ...config, ...newConfig });
    },
    config,
  };
}
