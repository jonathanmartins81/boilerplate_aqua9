import { Main } from '@/components/Main';
import { generatePageSEO } from '@/utils/SEO';
import { Metadata } from 'next';

export const metadata: Metadata = generatePageSEO(
  'Boilerplate Aqua9 - Next.js Profissional',
  'Template Next.js profissional da Aqua9 com TypeScript, Tailwind CSS e SEO otimizado'
);

export default function Home() {
  return <Main />;
}
