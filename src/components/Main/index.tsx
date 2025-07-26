/**
 * Componente Main - Página Inicial
 *
 * Este é o componente principal que renderiza toda a interface da página inicial.
 * Contém o logo, título, descrição e ilustração da Aqua9.
 *
 * Funcionalidades:
 * - Exibe o logo da Aqua9
 * - Mostra o título "Boilerplate Aqua9"
 * - Apresenta descrição das tecnologias
 * - Renderiza ilustração decorativa
 * - Interface responsiva e acessível
 */

import * as S from './styles';

/**
 * Interface para as props do componente Main
 */
interface MainProps {
  /** Título principal da página (padrão: "Boilerplate Aqua9") */
  title?: string;
  /** Descrição das tecnologias utilizadas */
  description?: string;
}

/**
 * Componente Main
 *
 * Renderiza a interface principal da página inicial com logo, título e descrição.
 *
 * @param title - Título da página (opcional, tem valor padrão)
 * @param description - Descrição das tecnologias (opcional, tem valor padrão)
 * @returns Interface completa da página inicial
 */
const Main = ({
  title = 'Boilerplate Aqua9',
  description = 'TypeScript, ReactJS, NextJS e Styled Components',
}: MainProps) => (
  <S.Wrapper>
    {/* Logo da Aqua9 */}
    <S.Logo
      src='/img/logo.svg'
      alt='Logo da Aqua9 - Imagem de um átomo e React Avançado escrito ao lado.'
    />

    {/* Título principal da página */}
    <S.Title>{title}</S.Title>

    {/* Descrição das tecnologias utilizadas */}
    <S.Description>{description}</S.Description>

    {/* Ilustração decorativa */}
    <S.Illustration
      src='/img/hero-illustration.svg'
      alt='Um desenvolvedor de frente para uma tela com código.'
    />
  </S.Wrapper>
);

export default Main;
