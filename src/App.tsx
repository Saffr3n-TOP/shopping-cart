import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import type { Cart } from './types';
import './styles/app.sass';

export default function App() {
  const [cart, setCart] = useState<Cart>({});

  return (
    <>
      <Header cart={cart} />
      <Main cart={cart} setCart={setCart} />
    </>
  );
}
