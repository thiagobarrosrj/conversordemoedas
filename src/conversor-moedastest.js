import React from 'react';
import { render } from '@testing-library/react';
import ConversorMoedas from './conversor-moedas';

it('renderizar componente sem erros', () => {
  const { getByText } = render(<ConversorMoedas />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
