import { Outlet } from 'react-router-dom';
import '../styles/main.sass';

export default function Main() {
  return (
    <main className="main">
      <Outlet />
    </main>
  );
}
