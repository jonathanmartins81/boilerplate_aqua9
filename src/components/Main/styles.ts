/**
 * Estilos do Componente Main
 *
 * Este arquivo contém todos os estilos styled-components para o componente Main.
 * Define a aparência visual da página inicial com layout responsivo e tema escuro.
 *
 * Tecnologias utilizadas:
 * - Styled Components para CSS-in-JS
 * - Design system com cores da Aqua9
 * - Layout flexbox para centralização
 * - Responsividade para diferentes telas
 */

'use client';

import styled from 'styled-components';

/**
 * Container principal da página inicial
 *
 * Características:
 * - Fundo azul escuro (#001d3d)
 * - Layout flexbox centralizado
 * - Altura e largura completas
 * - Padding responsivo
 * - Texto centralizado
 */
export const Wrapper = styled.main`
  background-color: #0d1b2a;
  color: #fff;
  width: 100%;
  height: 100%;
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

/**
 * Estilo para o logo da Aqua9
 *
 * Características:
 * - Largura fixa de 25rem
 * - Margem inferior para espaçamento
 * - Mantém proporções originais
 */
export const Logo = styled.img`
  width: 25rem;
  margin-bottom: 2rem;
`;

/**
 * Estilo para o título principal
 *
 * Características:
 * - Fonte grande (2.5rem)
 * - Peso da fonte normal
 * - Cor branca para contraste
 */
export const Title = styled.h1`
  font-size: 2.5rem;
`;

/**
 * Estilo para a descrição das tecnologias
 *
 * Características:
 * - Fonte média (2rem)
 * - Peso da fonte normal (400)
 * - Cor branca para contraste
 */
export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`;

/**
 * Estilo para a ilustração decorativa
 *
 * Características:
 * - Largura responsiva (máximo 30rem)
 * - Margem superior para espaçamento
 * - Adapta-se ao tamanho da tela
 */
export const Illustration = styled.img`
  margin-top: 3rem;
  width: min(30rem, 100%);
`;
