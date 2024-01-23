import Logo from './Logo';
import Nav from './Nav';
import '../styles/header.sass';

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <Nav />
    </header>
  );
}
