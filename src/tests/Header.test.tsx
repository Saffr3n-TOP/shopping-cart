import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../components/Header';

describe('Header component', () => {
  it('renders Logo', () => {
    const header = render(<Header cart={{}} />, { wrapper: MemoryRouter });
    expect(header.getByRole('link', { name: 'Go to home page' })).toBeDefined();
  });

  it('renders Nav', () => {
    const header = render(<Header cart={{}} />, { wrapper: MemoryRouter });
    expect(header.getByRole('navigation')).toBeDefined();
  });
});
