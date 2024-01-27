import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Cart from '../components/Cart';
import type { Cart as CartType } from '../types';

const data: CartType = {
  1: {
    id: 1,
    title: 'Item 1',
    description: '',
    image: '',
    category: '',
    rating: { count: 1, rate: 1 },
    price: 420,
    quantity: 2
  },
  2: {
    id: 2,
    title: 'Item 2',
    description: '',
    image: '',
    category: '',
    rating: { count: 1, rate: 1 },
    price: 228,
    quantity: 1
  }
};

describe('Cart component', () => {
  it('renders correctly', () => {
    vi.mock('react-router-dom', async (importOriginal) => {
      const actual: object = await importOriginal();
      return {
        ...actual,
        useOutletContext: () => [data, () => {}]
      };
    });

    const cart = render(<Cart />, { wrapper: MemoryRouter });

    expect(cart.getByRole('heading', { name: 'Cart' })).toBeDefined();
    expect(cart.getAllByRole('heading', { name: /item/i }).length).toBe(2);
    expect(
      cart.getByRole('heading', {
        name: 'Total: $' + (420 * 2 + 228).toString()
      })
    ).toBeDefined();
  });
});
