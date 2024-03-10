import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { describe, expect, test } from 'vitest';
import Topping from './Topping';

describe('Topping', () => {
  test('Render Topping component', () => {
    render(<Topping />);

    const typeElement = screen.getByText(/Onion/i);
    expect(typeElement).toBeInTheDocument();

    const imageElement = screen.getByRole('img');
    expect(imageElement).toBeInTheDocument();

    // @ts-ignore
    expect(imageElement.alt).toEqual('Onion image');

    const priceElement = screen.getByText('0.5$');
    expect(priceElement).toBeInTheDocument();

    const checkboxElement = screen.getByRole('checkbox');
    expect(checkboxElement).toBeInTheDocument();
    expect(checkboxElement).not.toBeChecked();
  });

  test('Check Topping checkbox', () => {
    const user = userEvent.setup();

    render(<Topping />);

    const checkboxElement = screen.getByRole('checkbox');
    expect(checkboxElement).toBeInTheDocument();
    expect(checkboxElement).not.toBeChecked();

    user.click(checkboxElement);
    expect(checkboxElement).toBeChecked();
  });
});
