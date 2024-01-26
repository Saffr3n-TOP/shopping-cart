import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('App component', () => {
  it('renders Header', () => {
    const app = render(<App />, { wrapper: MemoryRouter });
    expect(app.getByRole('banner')).toBeDefined();
  });

  it('renders Main', () => {
    const app = render(<App />, { wrapper: MemoryRouter });
    expect(app.getByRole('main')).toBeDefined();
  });
});
