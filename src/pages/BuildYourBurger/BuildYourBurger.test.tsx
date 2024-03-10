import { render } from '@testing-library/react';
import BuildYourBurger from './BuildYourBurger.tsx';

describe('BuildYourBurger', () => {
  test('Render page', () => {
    render(<BuildYourBurger />);
  });
});
