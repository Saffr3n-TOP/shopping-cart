import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import Card, { CardWrapper } from './Card';
import type { OutletContext, Item } from '../types';

export default function Shop() {
  const [items, setItems] = useState<Item[]>([]);
  const [, setCart] = useOutletContext<OutletContext>();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch('https://fakestoreapi.com/products', { signal })
      .then((response) => response.json())
      .then((data: Item[]) => setItems(data));

    return () => controller.abort();
  }, []);

  return (
    <>
      <h1 className="heading">Shop</h1>

      <CardWrapper>
        {!!items.length &&
          items.map((item) => (
            <Card item={item} setCart={setCart} key={item.id} />
          ))}
      </CardWrapper>
    </>
  );
}
