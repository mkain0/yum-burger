import { fireEvent, render, screen } from '@testing-library/react';
import Topping from './Topping';

describe('Topping', () => {
  test('Render Topping component', () => {
    render(<Topping name='Onion' price={0.5} image='onion.jpg' />);

    const typeElement = screen.getByText(/Onion/i);
    expect(typeElement).toBeInTheDocument();

    const imageElement = screen.getByRole('img');
    expect(imageElement).toBeInTheDocument();

    // @ts-expect-error alt is not a valid property of HTMLElement
    expect(imageElement.alt).toEqual('Onion image');

    const priceElement = screen.getByText(/0.5/i);
    expect(priceElement).toBeInTheDocument();

    const checkboxElement = screen.getByRole('checkbox');
    expect(checkboxElement).toBeInTheDocument();
    expect(checkboxElement).not.toBeChecked();
  });

  test('Check Topping checkbox', () => {
    render(<Topping name='Onion' price={0.5} image='onion.jpg' />);

    const checkboxElement = screen.getByRole('checkbox');
    expect(checkboxElement).toBeInTheDocument();
    expect(checkboxElement).not.toBeChecked();

    fireEvent.click(checkboxElement);
    expect(checkboxElement).toBeChecked();
  });
});
