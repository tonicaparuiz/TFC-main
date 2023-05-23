import { render, screen } from '@testing-library/react';
import App from './App';

/**
 * Mediante Jest, comprobamos que la funcionalidad render sale por pantalla
 */

test('renders app', () => {
  render(<App />);
  const nombreEmpresa = screen.getByText(/Zapillo.IT/i);
  expect(nombreEmpresa).toBeInTheDocument();
});
