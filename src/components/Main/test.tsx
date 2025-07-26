/**
 * Testes do Componente Main
 *
 * Este arquivo contém os testes unitários para o componente Main.
 * Testa a renderização, props e estilos do componente.
 *
 * Funcionalidades testadas:
 * - Renderização correta do componente
 * - Props padrão funcionando
 * - Props customizadas funcionando
 * - Estilos aplicados corretamente
 */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Main from './index';

/**
 * Teste de renderização do componente Main
 *
 * Verifica se o componente renderiza corretamente
 * com as props padrão.
 */
describe('Main', () => {
  it('should render correctly', () => {
    render(<Main />);
    expect(screen.getByText('Boilerplate Aqua9')).toBeInTheDocument();
  });

  /**
   * Teste de props customizadas
   *
   * Verifica se o componente aceita e renderiza
   * props customizadas corretamente.
   */
  it('should render with custom props', () => {
    render(<Main title='Custom Title' description='Custom Description' />);
    expect(screen.getByText('Custom Title')).toBeInTheDocument();
    expect(screen.getByText('Custom Description')).toBeInTheDocument();
  });

  /**
   * Teste de estilos aplicados
   *
   * Verifica se os estilos são aplicados corretamente
   * ao componente.
   */
  it('should apply correct styles', () => {
    const { container } = render(<Main />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toHaveStyle({ 'background-color': '#0d1b2a' });
  });
});
