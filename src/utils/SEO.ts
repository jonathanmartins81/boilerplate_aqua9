import type { Metadata } from 'next';

export const SEOConfig = {
  developer: {
    name: 'Jonathan Simão',
    email: 'contato@aqua9.com.br',
    website: 'https://aqua9.com.br',
    twitter: '@aqua9dev',
  },

  project: {
    name: 'Boilerplate Aqua9',
    description:
      'Boilerplate Next.js profissional da Aqua9 para projetos internos. Template moderno com TypeScript, Tailwind CSS e SEO otimizado.',
    version: '1.0.0',
    url: 'https://aqua9.com.br',
    repository: 'https://github.com/aqua9/boilerplate_aqua9',
  },

  keywords: [
    'boilerplate',
    'nextjs',
    'react',
    'typescript',
    'tailwindcss',
    'aqua9',
    'jonathan simão',
    'template',
    'fullstack',
    'web development',
    'frontend',
    'backend',
    'seo',
    'performance',
    'modern web',
    'developer tools',
    'code quality',
    'testing',
    'storybook',
    'drizzleorm',
    'posthog',
    'sentry',
  ],

  theme: {
    primary: '#1e3a8a',
    secondary: '#3b82f6',
    accent: '#60a5fa',
  },
};

export interface DynamicSEOConfig {
  title: string;
  description?: string;
  keywords?: string[];
  image?: string;
  canonical?: string;
  type?: 'website' | 'article' | 'product' | 'profile';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  openGraph?: {
    title?: string;
    description?: string;
    image?: string;
    type?: 'website' | 'article' | 'product' | 'profile';
  };
  twitter?: {
    title?: string;
    description?: string;
    image?: string;
    card?: 'summary' | 'summary_large_image' | 'app' | 'player';
  };
}

/**
 * Configurações de SEO por rota
 *
 * Define metadados específicos para cada página/rota da aplicação
 */
export const routeSEOConfig: Record<string, DynamicSEOConfig> = {
  // Página inicial
  '/': {
    title: 'Boilerplate Aqua9 - Next.js Profissional',
    description:
      'Boilerplate Next.js profissional da Aqua9 para projetos internos. Template moderno com TypeScript, Tailwind CSS e SEO otimizado.',
    keywords: ['boilerplate', 'nextjs', 'react', 'typescript', 'aqua9'],
    type: 'website',
    image: '/og-home.png',
    canonical: 'https://aqua9.com.br',
  },

  // Página sobre
  '/about': {
    title: 'Sobre - Boilerplate Aqua9',
    description:
      'Conheça mais sobre o Boilerplate Aqua9, desenvolvido por Jonathan Simão. Template profissional para projetos Next.js.',
    keywords: ['sobre', 'aqua9', 'jonathan simão', 'desenvolvedor', 'template'],
    type: 'website',
    image: '/og-about.png',
    canonical: 'https://aqua9.com.br/about',
  },

  // Página de contador (exemplo)
  '/counter': {
    title: 'Contador - Boilerplate Aqua9',
    description:
      'Exemplo de funcionalidade de contador implementada no Boilerplate Aqua9. Demonstração de componentes React.',
    keywords: ['contador', 'exemplo', 'react', 'componentes', 'demonstração'],
    type: 'website',
    image: '/og-counter.png',
    canonical: 'https://aqua9.com.br/counter',
  },

  // Página de portfólio
  '/portfolio': {
    title: 'Portfólio - Boilerplate Aqua9',
    description:
      'Portfólio de projetos desenvolvidos com o Boilerplate Aqua9. Exemplos de aplicações e sites profissionais.',
    keywords: ['portfólio', 'projetos', 'aplicações', 'sites', 'exemplos'],
    type: 'website',
    image: '/og-portfolio.png',
    canonical: 'https://aqua9.com.br/portfolio',
  },

  // Página de projeto específico (dinâmica)
  '/portfolio/[slug]': {
    title: 'Projeto {slug} - Boilerplate Aqua9',
    description:
      'Detalhes do projeto {slug} desenvolvido com o Boilerplate Aqua9. Tecnologias, funcionalidades e resultados.',
    keywords: ['projeto', 'detalhes', 'tecnologias', 'funcionalidades'],
    type: 'article',
    image: '/og-project.png',
    canonical: 'https://aqua9.com.br/portfolio/{slug}',
  },

  // Página de API
  '/api': {
    title: 'API - Boilerplate Aqua9',
    description:
      'Documentação da API do Boilerplate Aqua9. Endpoints, exemplos de uso e integração.',
    keywords: ['api', 'documentação', 'endpoints', 'integração'],
    type: 'website',
    image: '/og-api.png',
    canonical: 'https://aqua9.com.br/api',
  },
};

/**
 * Metadados padrão para todas as páginas
 *
 * Configuração completa de SEO que será aplicada em todas as páginas
 * da aplicação, incluindo Open Graph e Twitter Cards.
 */
export const defaultSEO: Metadata = {
  // Título da página com template dinâmico
  title: {
    default: 'Boilerplate Aqua9 - Next.js Profissional | Jonathan Simão',
    template: '%s | Boilerplate Aqua9',
  },

  // Descrição para SEO
  description: SEOConfig.project.description,

  // Palavras-chave para SEO
  keywords: SEOConfig.keywords,

  // Informações do autor
  authors: [{ name: SEOConfig.developer.name }],
  creator: SEOConfig.developer.name,
  publisher: 'Aqua9',

  // Configuração de detecção automática
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // URL base para metadados
  metadataBase: new URL(SEOConfig.project.url),

  // URLs alternativas
  alternates: {
    canonical: '/',
  },

  // Configuração para Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SEOConfig.project.url,
    title: 'Boilerplate Aqua9 - Next.js Profissional',
    description: SEOConfig.project.description,
    siteName: 'Aqua9 Boilerplate',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Boilerplate Aqua9 - Next.js Profissional',
      },
    ],
  },

  // Configuração para compartilhamento no Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'Boilerplate Aqua9 - Next.js Profissional',
    description: SEOConfig.project.description,
    images: ['/og-image.png'],
    creator: SEOConfig.developer.twitter,
    site: SEOConfig.developer.twitter,
  },

  // Configuração para bots de busca (Google, Bing, etc.)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Verificação para Google Search Console
  verification: {
    google: 'your-google-verification-code', // Substitua pelo código real
  },

  // Configuração de ícones para diferentes dispositivos
  icons: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      url: '/favicon.svg',
    },
    {
      rel: 'icon',
      type: 'image/png',
      url: '/favicon.png',
    },
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],

  // Configuração de manifest para PWA
  manifest: '/manifest.json',

  // Configuração de viewport
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },

  // Configuração de categoria
  category: 'technology',

  // Configuração de classificação
  classification: 'Web Development Tools',

  // Configuração de idioma e localização
  other: {
    language: 'pt-BR',
    'geo.region': 'BR',
    'geo.placename': 'Brazil',
    'geo.position': '-14.235004;-51.92528',
    ICBM: '-14.235004, -51.92528',
  },
};

/**
 * Função para gerar metadados dinâmicos baseados na rota
 *
 * Gera metadados específicos para uma rota, combinando configurações
 * padrão com configurações específicas da rota.
 *
 * @param pathname - Caminho da rota (ex: '/about', '/portfolio/project-1')
 * @param dynamicData - Dados dinâmicos para substituir placeholders
 * @returns Metadados personalizados para a rota
 */
export function generateDynamicSEO(
  pathname: string,
  dynamicData?: Record<string, string>
): Metadata {
  // Busca configuração específica da rota
  const routeConfig = routeSEOConfig[pathname] || routeSEOConfig['/'];

  // Se não encontrar configuração exata, tenta encontrar padrão dinâmico
  let config = routeConfig;
  if (!routeConfig && pathname.includes('/')) {
    // Busca por padrões dinâmicos (ex: /portfolio/[slug])
    const dynamicPatterns = Object.keys(routeSEOConfig).filter(key =>
      key.includes('[')
    );
    for (const pattern of dynamicPatterns) {
      const regex = new RegExp(pattern.replace(/\[([^\]]+)\]/g, '([^/]+)'));
      if (regex.test(pathname)) {
        config = routeSEOConfig[pattern];
        break;
      }
    }
  }

  // Se não encontrou configuração, usa a padrão
  if (!config) {
    config = routeSEOConfig['/'];
  }

  // Substitui placeholders por dados dinâmicos
  let title = config.title;
  let description = config.description || SEOConfig.project.description;
  let canonical = config.canonical || `${SEOConfig.project.url}${pathname}`;

  if (dynamicData) {
    Object.entries(dynamicData).forEach(([key, value]) => {
      const placeholder = `{${key}}`;
      title = title.replace(placeholder, value);
      description = description.replace(placeholder, value);
      canonical = canonical.replace(placeholder, value);
    });
  }

  // Gera metadados combinando configurações padrão com específicas
  return {
    ...defaultSEO,
    title,
    description,
    keywords: config.keywords || SEOConfig.keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      ...defaultSEO.openGraph,
      title,
      description,
      url: canonical,
      images: config.image
        ? [
            {
              url: config.image,
              width: 1200,
              height: 630,
              alt: title,
            },
          ]
        : defaultSEO.openGraph?.images,
    },
    twitter: {
      ...defaultSEO.twitter,
      title,
      description,
      images: config.image ? [config.image] : defaultSEO.twitter?.images,
      card: config.twitter?.card || 'summary_large_image',
    },
    authors: config.author ? [{ name: config.author }] : defaultSEO.authors,
    other: {
      ...defaultSEO.other,
      ...(config.publishedTime && {
        'article:published_time': config.publishedTime,
      }),
      ...(config.modifiedTime && {
        'article:modified_time': config.modifiedTime,
      }),
      ...(config.section && { 'article:section': config.section }),
      ...(config.tags && { 'article:tag': config.tags.join(', ') }),
    } as Record<string, string>,
  };
}

/**
 * Função para gerar metadados específicos de página
 *
 * Permite criar metadados personalizados para páginas específicas,
 * mantendo a consistência com as configurações padrão.
 *
 * @param title - Título da página
 * @param description - Descrição da página (opcional)
 * @param keywords - Palavras-chave específicas (opcional)
 * @param image - Imagem específica da página (opcional)
 * @returns Metadados personalizados para a página
 */
export function generatePageSEO(
  title: string,
  description?: string,
  keywords?: string[],
  image?: string
): Metadata {
  return {
    ...defaultSEO,
    title,
    description: description || SEOConfig.project.description,
    keywords: keywords || SEOConfig.keywords,
    openGraph: {
      ...defaultSEO.openGraph,
      title,
      description: description || SEOConfig.project.description,
      images: image
        ? [{ url: image, width: 1200, height: 630, alt: title }]
        : defaultSEO.openGraph?.images,
    },
    twitter: {
      ...defaultSEO.twitter,
      title,
      description: description || SEOConfig.project.description,
      images: image ? [image] : defaultSEO.twitter?.images,
    },
  };
}

/**
 * Hook para SEO dinâmico em componentes
 *
 * Hook que pode ser usado em componentes para gerar metadados dinâmicos
 * baseados no estado ou props do componente.
 *
 * @param config - Configuração de SEO dinâmico
 * @returns Função para atualizar metadados
 */
export function useDynamicSEO(config: DynamicSEOConfig) {
  // Esta função seria implementada com next/head ou similar
  // Por enquanto, retorna a configuração para uso manual
  return {
    updateSEO: () => config,
    config,
  };
}

/**
 * Configuração para JSON-LD (Structured Data)
 *
 * Dados estruturados que ajudam os motores de busca a entender
 * melhor o conteúdo e contexto da aplicação.
 */
export const jsonLdConfig = {
  // Schema para SoftwareApplication
  softwareApplication: {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: SEOConfig.project.name,
    description: SEOConfig.project.description,
    url: SEOConfig.project.url,
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Web Browser',
    author: {
      '@type': 'Person',
      name: SEOConfig.developer.name,
      url: SEOConfig.developer.website,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Aqua9',
      url: SEOConfig.developer.website,
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'BRL',
    },
    softwareVersion: SEOConfig.project.version,
    dateCreated: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
    keywords: SEOConfig.keywords.join(', '),
  },

  // Schema para Organization
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Aqua9',
    url: SEOConfig.developer.website,
    logo: `${SEOConfig.developer.website}/logo.png`,
    sameAs: [
      `https://twitter.com/${SEOConfig.developer.twitter.replace('@', '')}`,
      'https://github.com/aqua9',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: SEOConfig.developer.email,
    },
  },

  // Schema para Person (Jonathan Simão)
  person: {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SEOConfig.developer.name,
    url: SEOConfig.developer.website,
    jobTitle: 'Full Stack Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'Aqua9',
    },
    sameAs: [
      `https://twitter.com/${SEOConfig.developer.twitter.replace('@', '')}`,
      'https://github.com/jonathansimao',
      'https://linkedin.com/in/jonathansimao',
    ],
  },
};

/**
 * Configuração para sitemap dinâmico
 *
 * Define as páginas que devem ser incluídas no sitemap.xml
 * para ajudar os motores de busca a indexar o conteúdo.
 * Suporta geração dinâmica baseada em dados reais.
 */
export const sitemapConfig = {
  baseUrl: SEOConfig.project.url,

  // Páginas estáticas
  staticPages: [
    {
      url: '/',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: '/about',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/counter',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: '/portfolio',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ],

  // Função para gerar páginas dinâmicas
  generateDynamicPages: async (): Promise<
    Array<{
      url: string;
      lastModified: Date;
      changeFrequency:
        | 'always'
        | 'hourly'
        | 'daily'
        | 'weekly'
        | 'monthly'
        | 'yearly'
        | 'never';
      priority: number;
    }>
  > => {
    // Aqui você pode buscar dados de uma API ou banco de dados
    // para gerar páginas dinâmicas (ex: posts de blog, projetos, etc.)

    // Exemplo: projetos do portfólio
    const projects = [
      { slug: 'projeto-1', lastModified: new Date('2024-01-15') },
      { slug: 'projeto-2', lastModified: new Date('2024-01-20') },
      { slug: 'projeto-3', lastModified: new Date('2024-01-25') },
    ];

    return projects.map(project => ({
      url: `/portfolio/${project.slug}`,
      lastModified: project.lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }));
  },

  // Função para gerar sitemap completo
  generateSitemap: async () => {
    const staticPages = sitemapConfig.staticPages;
    const dynamicPages = await sitemapConfig.generateDynamicPages();

    return [...staticPages, ...dynamicPages];
  },
};

/**
 * Configuração para robots.txt
 *
 * Define as regras para bots de busca sobre quais páginas
 * podem ou não ser indexadas.
 */
export const robotsConfig = {
  userAgent: '*',
  allow: '/',
  disallow: ['/api/', '/_next/', '/admin/'],
  sitemap: `${SEOConfig.project.url}/sitemap.xml`,
  host: SEOConfig.project.url,
};
