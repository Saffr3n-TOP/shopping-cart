import { describe, it, expect, vi } from 'vitest';
import { render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Shop from '../components/Shop';
import type { Item } from '../types';

const data: Item[] = [
  {
    id: 1,
    title: 'Item 1',
    description: '',
    image: '',
    category: '',
    rating: { count: 1, rate: 1 },
    price: 420
  },
  {
    id: 2,
    title: 'Item 2',
    description: '',
    image: '',
    category: '',
    rating: { count: 1, rate: 1 },
    price: 228
  }
];

describe('Shop component', () => {
  it('renders correctly', () => {
    vi.mock('react-router-dom', async (importOriginal) => {
      const actual: object = await importOriginal();
      return {
        ...actual,
        useOutletContext: () => [0, 0]
      };
    });

    globalThis.fetch = vi
      .fn()
      .mockResolvedValue({ json: vi.fn().mockResolvedValue(data) });

    const shop = render(<Shop />, { wrapper: MemoryRouter });

    expect(shop.getByRole('heading', { name: 'Shop' })).toBeDefined();

    waitFor(() => {
      expect(shop.getAllByRole('heading', { name: /item/i }).length).toBe(2);
    });
  });
});
