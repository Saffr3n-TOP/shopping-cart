import Logo from './Logo';
import Nav from './Nav';
import { HeaderProps } from '../types';
import '../styles/header.sass';

export default function Header({ cart }: HeaderProps) {
  return (
    <header className="header">
      <Logo />
      <Nav cart={cart} />
    </header>
  );
}
