import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import store from './configuration/store';

test('Renderiza el contenedor verificando que se encuentre la palabra inicio del NavBar', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const anchorInicio = screen.getByText(/Inicio/i);
  expect(anchorInicio).toBeInTheDocument();
});
