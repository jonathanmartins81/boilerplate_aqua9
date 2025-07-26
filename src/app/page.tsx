/**
 * Página Principal da Aplicação
 *
 * Esta é a página inicial (homepage) do Boilerplate Aqua9.
 * Renderiza o componente Main que contém toda a interface da página inicial.
 *
 * Funcionalidades:
 * - Página estática otimizada para SEO
 * - Renderização do componente Main
 * - Metadados específicos da página
 */

import Main from '@/components/Main';
import type { Metadata } from 'next';

// Metadados específicos para a página inicial
export const metadata: Metadata = {
  title: 'Boilerplate Aqua9 - Next.js Profissional',
  description:
    'Boilerplate Next.js profissional da Aqua9 para projetos internos. Template moderno com TypeScript, Tailwind CSS e SEO otimizado.',
};

/**
 * Componente Page (Página Principal)
 *
 * Renderiza a página inicial da aplicação.
 *
 * @returns Componente Main que contém toda a interface da homepage
 */
export default function Page() {
  return <Main />;
}
