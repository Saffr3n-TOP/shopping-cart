import { Outlet } from 'react-router-dom';
import type { MainProps } from '../types';
import '../styles/main.sass';

export default function Main({ cart, setCart }: MainProps) {
  return (
    <main className="main">
      <Outlet context={[cart, setCart]} />
    </main>
  );
}
