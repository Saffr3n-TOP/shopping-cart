import { Link as RouterLink } from 'react-router-dom';
import type { LinkProps } from '../types';
import '../styles/link.sass';

export default function Link({ children, to, nav }: LinkProps) {
  return (
    <RouterLink to={to} className={`link${nav ? ' nav__link' : ''}`}>
      {children}
    </RouterLink>
  );
}
