import { Link } from 'react-router-dom';
import '../styles/logo.sass';

export default function Logo() {
  return (
    <Link to="/" className="logo" aria-label="Go to home page">
      Logo
    </Link>
  );
}
