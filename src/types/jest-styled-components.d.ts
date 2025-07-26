/**
 * Tipos para jest-styled-components
 *
 * Este arquivo define tipos para testes com styled-components
 */

declare module 'jest-styled-components' {
  import { render, RenderOptions } from '@testing-library/react';
  import { ReactElement } from 'react';

  interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
    wrapper?: React.ComponentType<{ children: React.ReactNode }>;
  }

  function customRender(
    ui: ReactElement,
    options?: CustomRenderOptions
  ): ReturnType<typeof render>;

  export * from '@testing-library/react';
  export { customRender as render };
}
