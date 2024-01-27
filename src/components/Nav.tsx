import { useState, useEffect } from 'react';
import Link from './Link';
import type { HeaderProps } from '../types';
import '../styles/nav.sass';

export default function Nav({ cart }: HeaderProps) {
  const [itemsQuantity, setItemsQuantity] = useState(0);

  useEffect(() => {
    setItemsQuantity(0);
    const itemIndices = Object.keys(cart);
    itemIndices.forEach((index) => {
      const item = cart[+index];
      setItemsQuantity((quantity) => quantity + item.quantity);
    });
  }, [cart]);

  return (
    <nav className="nav">
      <ul className="nav__menu">
        <li className="nav__item">
          <Link to="" nav>
            Home
          </Link>
        </li>

        <li className="nav__item">
          <Link to="shop" nav>
            Shop
          </Link>
        </li>

        <li className="nav__item">
          <Link to="cart" nav>
            Cart
            <span
              className="nav__quantity"
              style={{ visibility: itemsQuantity ? 'visible' : 'hidden' }}
            >
              ({itemsQuantity})
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
