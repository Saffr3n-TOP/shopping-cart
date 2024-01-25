import { useOutletContext } from 'react-router-dom';
import Card, { CardWrapper } from './Card';
import type { OutletContext } from '../types';

export default function Cart() {
  const [cart, setCart] = useOutletContext<OutletContext>();

  return (
    <>
      <h1 className="heading">Cart</h1>

      <CardWrapper>
        {Object.keys(cart).map((itemIndex) => {
          const item = cart[+itemIndex];
          return <Card item={item} setCart={setCart} key={item.id} cart />;
        })}
      </CardWrapper>

      <h3>
        Total: $
        {Object.keys(cart).reduce((total, itemIndex) => {
          const item = cart[+itemIndex];
          return +(total + item.price * item.quantity).toFixed(2);
        }, 0)}
      </h3>
    </>
  );
}
