import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Logo from '../components/Logo';

describe('Logo component', () => {
  it('renders correctly', () => {
    render(<Logo />, { wrapper: MemoryRouter });

    const logo = screen.getByRole('link') as HTMLAnchorElement;

    expect(logo.pathname).toBe('/');
    expect(logo.className).toBe('logo');
    expect(logo.textContent).toBe('Logo');
    expect(logo.ariaLabel).toBe('Go to home page');
  });
});
