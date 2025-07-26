/**
 * Testes das Funções Utilitárias SEO
 *
 * Este arquivo contém os testes unitários para as funções utilitárias
 * de SEO do projeto.
 *
 * Funcionalidades testadas:
 * - Configuração SEO padrão
 * - Geração de SEO dinâmico
 * - Geração de SEO de página
 * - Hook useDynamicSEO
 * - Configurações de rota
 */

import {
  SEOConfig,
  generateDynamicSEO,
  generatePageSEO,
  jsonLdConfig,
  routeSEOConfig,
  sitemapConfig,
  useDynamicSEO,
} from './SEO';

/**
 * Teste das configurações SEO
 */
describe('SEOConfig', () => {
  it('should have correct developer information', () => {
    expect(SEOConfig.developer.name).toBe('Jonathan Simão');
    expect(SEOConfig.developer.email).toBe('contato@aqua9.com.br');
    expect(SEOConfig.developer.website).toBe('https://aqua9.com.br');
    expect(SEOConfig.developer.twitter).toBe('@aqua9dev');
  });

  it('should have correct project information', () => {
    expect(SEOConfig.project.name).toBe('Boilerplate Aqua9');
    expect(SEOConfig.project.description).toContain('Boilerplate Next.js profissional');
    expect(SEOConfig.project.version).toBe('1.0.0');
    expect(SEOConfig.project.url).toBe('https://aqua9.com.br');
  });

  it('should have SEO keywords', () => {
    expect(SEOConfig.keywords).toContain('boilerplate');
    expect(SEOConfig.keywords).toContain('nextjs');
    expect(SEOConfig.keywords).toContain('typescript');
    expect(SEOConfig.keywords).toContain('aqua9');
  });

  it('should have theme colors', () => {
    expect(SEOConfig.theme.primary).toBe('#1e3a8a');
    expect(SEOConfig.theme.secondary).toBe('#3b82f6');
    expect(SEOConfig.theme.accent).toBe('#60a5fa');
  });
});

/**
 * Teste da função generateDynamicSEO
 */
describe('generateDynamicSEO', () => {
  it('should generate SEO for home page', () => {
    const metadata = generateDynamicSEO('/');

    expect(metadata.title).toBe('Boilerplate Aqua9 - Next.js Profissional');
    expect(metadata.description).toContain('Boilerplate Next.js profissional');
    expect(metadata.keywords).toEqual(['boilerplate', 'nextjs', 'react', 'typescript', 'aqua9']);
  });

  it('should generate SEO for about page', () => {
    const metadata = generateDynamicSEO('/about');

    expect(metadata.title).toBe('Sobre - Boilerplate Aqua9');
    expect(metadata.description).toContain('Conheça mais sobre o Boilerplate Aqua9');
    expect(metadata.alternates?.canonical).toBe('https://aqua9.com.br/about');
  });

  it('should generate SEO for portfolio page', () => {
    const metadata = generateDynamicSEO('/portfolio');

    expect(metadata.title).toBe('Portfólio - Boilerplate Aqua9');
    expect(metadata.description).toContain('Portfólio de projetos');
    expect(metadata.alternates?.canonical).toBe('https://aqua9.com.br/portfolio');
  });

  it('should fallback to default SEO for unknown routes', () => {
    const metadata = generateDynamicSEO('/unknown-route');

    expect(metadata.title).toBe('Boilerplate Aqua9 - Next.js Profissional');
    expect(metadata.description).toContain('Boilerplate Next.js profissional');
  });

  it('should include Open Graph data', () => {
    const metadata = generateDynamicSEO('/');

    expect(metadata.openGraph).toBeDefined();
    expect(metadata.openGraph?.title).toBe('Boilerplate Aqua9 - Next.js Profissional');
    expect(metadata.openGraph?.description).toContain('Boilerplate Next.js profissional');
    expect(metadata.openGraph?.url).toBe('https://aqua9.com.br');
  });

  it('should include Twitter Card data', () => {
    const metadata = generateDynamicSEO('/');

    expect(metadata.twitter).toBeDefined();
    expect(metadata.twitter?.title).toBe('Boilerplate Aqua9 - Next.js Profissional');
    expect(metadata.twitter?.description).toContain('Boilerplate Next.js profissional');
  });
});

/**
 * Teste da função generatePageSEO
 */
describe('generatePageSEO', () => {
  it('should generate basic page SEO', () => {
    const metadata = generatePageSEO('Test Page');

    expect(metadata.title).toBe('Test Page');
    expect(metadata.description).toBe(SEOConfig.project.description);
    expect(metadata.keywords).toEqual(SEOConfig.keywords);
  });

  it('should generate page SEO with custom description', () => {
    const customDescription = 'Custom page description';
    const metadata = generatePageSEO('Test Page', customDescription);

    expect(metadata.title).toBe('Test Page');
    expect(metadata.description).toBe(customDescription);
  });

  it('should generate page SEO with custom keywords', () => {
    const customKeywords = ['custom', 'keywords'];
    const metadata = generatePageSEO('Test Page', undefined, customKeywords);

    expect(metadata.title).toBe('Test Page');
    expect(metadata.keywords).toEqual(customKeywords);
  });

  it('should generate page SEO with custom image', () => {
    const customImage = '/custom-image.jpg';
    const metadata = generatePageSEO('Test Page', undefined, undefined, customImage);

    expect(metadata.title).toBe('Test Page');
    expect(metadata.openGraph?.images).toEqual([
      { url: customImage, width: 1200, height: 630, alt: 'Test Page' },
    ]);
    expect(metadata.twitter?.images).toEqual([customImage]);
  });

  it('should include Open Graph data in page SEO', () => {
    const metadata = generatePageSEO('Test Page');

    expect(metadata.openGraph).toBeDefined();
    expect(metadata.openGraph?.title).toBe('Test Page');
    expect(metadata.openGraph?.description).toBe(SEOConfig.project.description);
  });

  it('should include Twitter Card data in page SEO', () => {
    const metadata = generatePageSEO('Test Page');

    expect(metadata.twitter).toBeDefined();
    expect(metadata.twitter?.title).toBe('Test Page');
    expect(metadata.twitter?.description).toBe(SEOConfig.project.description);
  });
});

/**
 * Teste da função useDynamicSEO
 */
describe('useDynamicSEO', () => {
  it('should return configuration object', () => {
    const config = {
      title: 'Test Title',
      description: 'Test Description',
    };

    const result = useDynamicSEO(config);

    expect(result.config).toEqual(config);
    expect(typeof result.updateSEO).toBe('function');
  });

  it('should handle empty configuration', () => {
    const config = {
      title: 'Test Title',
    };

    const result = useDynamicSEO(config);

    expect(result.config).toEqual(config);
  });

  it('should handle full configuration', () => {
    const config = {
      title: 'Test Title',
      description: 'Test Description',
      keywords: ['test', 'keywords'],
      image: '/test-image.jpg',
      canonical: 'https://test.com',
      type: 'article' as const,
      author: 'Test Author',
      publishedTime: '2023-01-01',
      modifiedTime: '2023-01-02',
      section: 'Technology',
      tags: ['react', 'nextjs'],
      openGraph: {
        title: 'OG Title',
        description: 'OG Description',
        image: '/og-image.jpg',
        type: 'article' as const,
      },
      twitter: {
        title: 'Twitter Title',
        description: 'Twitter Description',
        image: '/twitter-image.jpg',
        card: 'summary' as const,
      },
    };

    const result = useDynamicSEO(config);

    expect(result.config).toEqual(config);
  });
});

/**
 * Teste das configurações de rota
 */
describe('routeSEOConfig', () => {
  it('should have home page configuration', () => {
    expect(routeSEOConfig['/']).toBeDefined();
    expect(routeSEOConfig['/'].title).toBe('Boilerplate Aqua9 - Next.js Profissional');
  });

  it('should have about page configuration', () => {
    expect(routeSEOConfig['/about']).toBeDefined();
    expect(routeSEOConfig['/about'].title).toBe('Sobre - Boilerplate Aqua9');
  });

  it('should have portfolio page configuration', () => {
    expect(routeSEOConfig['/portfolio']).toBeDefined();
    expect(routeSEOConfig['/portfolio'].title).toBe('Portfólio - Boilerplate Aqua9');
  });

  it('should have dynamic portfolio configuration', () => {
    expect(routeSEOConfig['/portfolio/[slug]']).toBeDefined();
    expect(routeSEOConfig['/portfolio/[slug]'].title).toBe('Projeto {slug} - Boilerplate Aqua9');
  });

  it('should have canonical URLs for all routes', () => {
    Object.values(routeSEOConfig).forEach((config) => {
      expect(config.canonical).toContain('https://aqua9.com.br');
    });
  });
});

/**
 * Teste das configurações JSON-LD
 */
describe('jsonLdConfig', () => {
  it('should have software application schema', () => {
    expect(jsonLdConfig.softwareApplication['@type']).toBe('SoftwareApplication');
    expect(jsonLdConfig.softwareApplication.name).toBe('Boilerplate Aqua9');
    expect(jsonLdConfig.softwareApplication.description).toContain('Boilerplate Next.js profissional');
  });

  it('should have organization schema', () => {
    expect(jsonLdConfig.organization['@type']).toBe('Organization');
    expect(jsonLdConfig.organization.name).toBe('Aqua9');
    expect(jsonLdConfig.organization.url).toBe('https://aqua9.com.br');
  });

  it('should have person schema', () => {
    expect(jsonLdConfig.person['@type']).toBe('Person');
    expect(jsonLdConfig.person.name).toBe('Jonathan Simão');
    expect(jsonLdConfig.person.jobTitle).toBe('Full Stack Developer');
  });

  it('should have valid JSON-LD structure', () => {
    expect(jsonLdConfig.softwareApplication['@context']).toBe('https://schema.org');
    expect(jsonLdConfig.organization['@context']).toBe('https://schema.org');
    expect(jsonLdConfig.person['@context']).toBe('https://schema.org');
  });
});

/**
 * Teste das configurações de sitemap
 */
describe('sitemapConfig', () => {
  it('should have base URL', () => {
    expect(sitemapConfig.baseUrl).toBe('https://aqua9.com.br');
  });

  it('should have static pages', () => {
    expect(sitemapConfig.staticPages).toBeDefined();
    expect(Array.isArray(sitemapConfig.staticPages)).toBe(true);
  });

  it('should have home page in static pages', () => {
    const homePage = sitemapConfig.staticPages.find(page => page.url === '/');
    expect(homePage).toBeDefined();
    expect(homePage?.changeFrequency).toBe('weekly');
    expect(homePage?.priority).toBe(1.0);
  });

  it('should have about page in static pages', () => {
    const aboutPage = sitemapConfig.staticPages.find(page => page.url === '/about');
    expect(aboutPage).toBeDefined();
    expect(aboutPage?.changeFrequency).toBe('monthly');
    expect(aboutPage?.priority).toBe(0.8);
  });
});
