import { render, screen } from '@testing-library/react';
import App from './App';
import { expect, test } from 'vitest';

test('renders Yum Burger logo', () => {
  render(<App />);

  const linkElement = screen.getByAltText(/Yum Burger logo/i);
  expect(linkElement).toBeInTheDocument();
});
