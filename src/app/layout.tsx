/**
 * Layout Principal da Aplicação
 *
 * Este é o layout raiz que envolve todas as páginas da aplicação.
 * Define a estrutura HTML base, metadados SEO, fontes e providers.
 *
 * Funcionalidades:
 * - Configuração de metadados SEO globais
 * - Definição de fontes (Inter)
 * - Providers de contexto
 * - Structured Data (JSON-LD)
 * - Idioma e configurações de acessibilidade
 */

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

// Importações de componentes e utilitários
import { JsonLd } from '@/components/JsonLd';
import StyledComponentsRegistry from '@/lib/registry';
import { defaultSEO } from '@/utils/SEO';
import { Providers } from './providers';

// Configuração da fonte Inter do Google Fonts
// subsets: ['latin'] - Carrega apenas caracteres latinos para otimizar performance
const inter = Inter({ subsets: ['latin'] });

// Metadados SEO padrão importados do arquivo de configuração
export const metadata: Metadata = defaultSEO;

/**
 * Componente RootLayout
 *
 * Layout raiz que define a estrutura HTML base da aplicação.
 *
 * @param children - Componentes filhos que serão renderizados dentro do layout
 * @returns Estrutura HTML completa com providers e configurações
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Configuração do HTML com idioma português brasileiro
    <html lang='pt-BR'>
      <head>
        {/* Structured Data para SEO - Dados estruturados para motores de busca */}
        <JsonLd />
      </head>

      {/* Body com fonte Inter aplicada */}
      <body className={inter.className}>
        {/* Registry do Styled Components para SSR */}
        <StyledComponentsRegistry>
          {/* Providers globais (contextos, temas, etc.) */}
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
