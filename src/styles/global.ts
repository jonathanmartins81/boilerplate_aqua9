/**
 * Estilos Globais da Aplicação
 *
 * Este arquivo define os estilos CSS globais que são aplicados em toda a aplicação.
 * Configura reset CSS, fontes, cores de fundo e comportamentos base.
 *
 * Funcionalidades:
 * - Reset CSS para consistência entre navegadores
 * - Configuração de fonte base (Inter)
 * - Cores de fundo e texto padrão
 * - Configurações de altura e layout
 * - Otimizações de performance
 */

'use client';

import { createGlobalStyle } from 'styled-components';

/**
 * Estilos globais aplicados em toda a aplicação
 *
 * Características:
 * - Reset CSS para todos os elementos
 * - Configuração de fonte base
 * - Cores de fundo e texto
 * - Layout de altura completa
 * - Otimizações de performance
 */
const GlobalStyles = createGlobalStyle`
  /* Reset CSS - Remove margens e paddings padrão */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Configuração de fonte base - 1rem = 10px para facilitar cálculos */
  html {
    font-size: 62.5%; // 1rem = 10px == 10/16px = 62.5% (1.4rem = 14px)
  }

  /* Configuração de altura completa para layout */
  html, body, #__next {
    height: 100%;
  }

  /* Configuração de fonte e cores base */
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #001d3d; /* Cor de fundo azul escuro da Aqua9 */
    color: #ffffff; /* Texto branco para contraste */
  }
`;

export default GlobalStyles;
