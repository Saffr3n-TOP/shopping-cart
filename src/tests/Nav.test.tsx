import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Nav from '../components/Nav';

describe('Nav component', () => {
  it('renders correctly with empty cart', () => {
    const nav = render(<Nav cart={{}} />, { wrapper: MemoryRouter });

    expect(nav.getByRole('list')).toBeDefined();
    expect(nav.getAllByRole('listitem').length).toBe(3);
    expect(nav.getByRole('link', { name: 'Home' })).toBeDefined();
    expect(nav.getByRole('link', { name: 'Shop' })).toBeDefined();
    expect(nav.getByRole('link', { name: 'Cart' })).toBeDefined();
  });

  it('renders correctly with non-empty cart', () => {
    const nav = render(
      <Nav
        cart={{
          1: {
            id: 1,
            title: '',
            description: '',
            image: '',
            category: '',
            price: 1,
            rating: { count: 1, rate: 1 },
            quantity: 2
          }
        }}
      />,
      { wrapper: MemoryRouter }
    );

    expect(nav.getByRole('link', { name: 'Cart (2)' })).toBeDefined();
  });
});
