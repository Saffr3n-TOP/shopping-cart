import Link from './Link';
import '../styles/nav.sass';

export default function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__menu">
        <li className="nav__item">
          <Link to="/" nav>
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
          </Link>
        </li>
      </ul>
    </nav>
  );
}
