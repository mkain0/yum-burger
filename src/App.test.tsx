import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import App from './App';

describe('App', () => {
  test('Render Yum Burger logo', () => {
    render(<App />);

    const logoElement = screen.getByAltText(/Yum Burger logo/i);
    expect(logoElement).toBeInTheDocument();
  });
});
