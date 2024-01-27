import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from '../components/Home';

describe('Home component', () => {
  it('renders correctly', () => {
    const home = render(<Home />, { wrapper: MemoryRouter });

    expect(home.getByRole('heading', { name: 'Home Page' })).toBeDefined();
    expect(home.getAllByText(/lorem/i).length).toBe(2);
  });
});
