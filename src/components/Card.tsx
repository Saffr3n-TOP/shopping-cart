import { useState } from 'react';
import type {
  CardProps,
  CardControlsProps,
  CardWrapperProps,
  QuantitySetterProps
} from '../types';
import '../styles/card.sass';

export default function Card({ item, setCart }: CardProps) {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="card">
      <h2 className="card__heading">{item.title}</h2>
      <img src={item.image} alt="" className="card__image" />
      <span className="card__price">{'$' + item.price}</span>

      <CardControls
        item={item}
        setCart={setCart}
        quantity={quantity}
        setQuantity={setQuantity}
      />
    </div>
  );
}

export function CardWrapper({ children }: CardWrapperProps) {
  return <div className="card__wrapper">{children}</div>;
}

function CardControls({
  item,
  setCart,
  quantity,
  setQuantity
}: CardControlsProps) {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (quantity < 1) return;

    setCart((cart) => {
      const cartItem =
        cart[item.id] || Object.assign({}, item, { quantity: 0 });
      cartItem.quantity += quantity;
      return { ...cart, [item.id]: cartItem };
    });

    setQuantity(0);
  };

  return (
    <form noValidate className="card__controls" onSubmit={onSubmit}>
      <div className="card__quantity">
        <DecrementBtn setQuantity={setQuantity} />
        <QuantityInput quantity={quantity} setQuantity={setQuantity} />
        <IncrementBtn setQuantity={setQuantity} />
      </div>

      <button type="submit" className="button card__submit">
        Add to cart
      </button>
    </form>
  );
}

function DecrementBtn({ setQuantity }: QuantitySetterProps) {
  const onDecrement = () => {
    setQuantity((quantity) => {
      if (quantity <= 1) return 0;
      return quantity - 1;
    });
  };

  return (
    <button
      type="button"
      className="button card__cart-decrement"
      onClick={onDecrement}
    >
      ◀
    </button>
  );
}

function IncrementBtn({ setQuantity }: QuantitySetterProps) {
  const onIncrement = () => {
    setQuantity((quantity) => quantity + 1);
  };

  return (
    <button
      type="button"
      className="button card__cart-increment"
      onClick={onIncrement}
    >
      ▶
    </button>
  );
}

function QuantityInput({ quantity, setQuantity }: QuantitySetterProps) {
  const onChange = (e: React.ChangeEvent) => {
    const input = e.target as HTMLInputElement;
    let value = Math.floor(+input!.value);

    if (value < 0) {
      value = 0;
    }

    setQuantity(value);
  };

  return (
    <input
      type="number"
      name="quantity"
      className="input card__cart-quantity"
      value={quantity}
      onChange={onChange}
    />
  );
}
