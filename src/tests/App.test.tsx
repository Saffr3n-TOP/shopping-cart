import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import {
  MemoryRouter,
  createMemoryRouter,
  RouterProvider
} from 'react-router-dom';
import { routes } from '../router';
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

  it('renders Home page', () => {
    const app = render(<RouterProvider router={createMemoryRouter(routes)} />);

    expect(app.getByRole('heading', { name: 'Home Page' })).toBeDefined();
    expect(app.getAllByText(/lorem/i).length).toBe(2);
  });

  it('navigates correctly', async () => {
    globalThis.fetch = vi
      .fn()
      .mockResolvedValue({ json: vi.fn().mockResolvedValue([]) });

    const user = userEvent.setup();
    const app = render(<RouterProvider router={createMemoryRouter(routes)} />);

    await user.click(app.getByRole('link', { name: 'Shop' }));
    expect(app.getByRole('heading', { name: 'Shop' })).toBeDefined();

    await user.click(app.getByRole('link', { name: 'Cart' }));
    expect(app.getByRole('heading', { name: 'Cart' })).toBeDefined();
  });
});
