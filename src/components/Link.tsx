import { Link as RouterLink } from 'react-router-dom';
import '../styles/link.sass';

type LinkProps = {
  children: React.ReactNode;
  to: string;
  nav?: boolean;
};

export default function Link({ children, to, nav }: LinkProps) {
  return (
    <RouterLink to={to} className={`link${nav ? ' nav__link' : ''}`}>
      {children}
    </RouterLink>
  );
}
