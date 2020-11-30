import { render, screen } from '@testing-library/react';
import App from './App';

test('Renderiza el contenedor verificando que se encuentre la palabra inicio del NavBar', () => {
  render(<App />);
  const anchorInicio = screen.getByText(/Inicio/i);
  expect(anchorInicio).toBeInTheDocument();
});
