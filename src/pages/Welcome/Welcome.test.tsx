import { screen } from '@testing-library/react';
import Welcome from './Welcome';
import { renderWithRouter } from '../../test/route-utils.tsx';

describe('Welcome', () => {
  test('Render page with correct link', () => {
    renderWithRouter({
      element: <Welcome />,
      path: '/order',
    });

    const logo = screen.getByAltText('Yum Burger logo');
    expect(logo).toBeInTheDocument();
    expect(logo.closest('a')).toHaveAttribute('href', '/order');
  });
});
