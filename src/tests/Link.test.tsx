import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Link from '../components/Link';

describe('Link component', () => {
  it('renders generic link correctly', () => {
    render(<Link to="path">Link</Link>, { wrapper: MemoryRouter });

    const link = screen.getByRole('link') as HTMLAnchorElement;

    expect(link.pathname).toBe('/path');
    expect(link.className).toBe('link');
    expect(link.textContent).toBe('Link');
  });

  it('renders nav link correctly', () => {
    render(
      <Link to="navpath" nav>
        Nav Link
      </Link>,
      { wrapper: MemoryRouter }
    );

    const link = screen.getByRole('link') as HTMLAnchorElement;

    expect(link.pathname).toBe('/navpath');
    expect(link.className).toBe('link nav__link');
    expect(link.textContent).toBe('Nav Link');
  });
});
