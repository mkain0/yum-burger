import { render } from '@testing-library/react';
import { isValidElement, ReactNode } from 'react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

export function renderWithRouter(
  children: { element?: ReactNode; path: string },
  routes = [],
) {
  const options = isValidElement(children)
    ? { element: children, path: '/' }
    : children;

  const router = createMemoryRouter([{ ...options }, ...routes], {
    initialEntries: [options.path],
    initialIndex: 1,
  });

  return render(<RouterProvider router={router} />);
}
