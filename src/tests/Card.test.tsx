import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Card from '../components/Card';

const item = {
  id: 1,
  title: 'Some Item',
  description: '',
  category: '',
  image: '',
  rating: { count: 1, rate: 1 },
  price: 420,
  quantity: 2
};

describe('Card component', () => {
  it('renders correct cart item', () => {
    const card = render(<Card item={item} setCart={() => {}} cart />, {
      wrapper: MemoryRouter
    });

    expect(card.getByRole('heading', { name: 'Some Item' })).toBeDefined();
    expect(card.getByRole('img').className).toBe('card__image');
    expect(card.getByText('$420 x 2')).toBeDefined();
    expect(card.queryByRole('button')).toBeNull();
  });

  it('renders correct shop item', () => {
    const card = render(<Card item={item} setCart={() => {}} />, {
      wrapper: MemoryRouter
    });

    expect(card.getByRole('heading', { name: 'Some Item' })).toBeDefined();
    expect(card.getByRole('img').className).toBe('card__image');
    expect(card.getByText('$420')).toBeDefined();
    expect(card.getByRole('button', { name: 'Add to cart' })).toBeDefined();
  });

  it('controls quantity properly', async () => {
    const user = userEvent.setup();
    const setCartMock = vi.fn();
    const card = render(<Card item={item} setCart={setCartMock} />, {
      wrapper: MemoryRouter
    });

    const input = card.getByRole('spinbutton') as HTMLInputElement;

    expect(input.value).toBe('0');

    await user.click(card.getByRole('button', { name: '▶' }));
    expect(input.value).toBe('1');

    await user.click(card.getByRole('button', { name: '◀' }));
    expect(input.value).toBe('0');

    await user.click(card.getByRole('button', { name: '◀' }));
    expect(input.value).toBe('0');

    await user.type(input, 'any non-numeric input');
    expect(input.value).toBe('0');

    await user.type(input, '5');
    expect(input.value).toBe('5');

    await user.click(card.getByRole('button', { name: 'Add to cart' }));
    expect(setCartMock).toBeCalled();
    expect(input.value).toBe('0');
  });
});
