export type HeaderProps = {
  cart: Cart;
};

export type MainProps = {
  cart: Cart;
  setCart: React.Dispatch<React.SetStateAction<Cart>>;
};

export type LinkProps = {
  children: React.ReactNode;
  to: string;
  nav?: boolean;
};

export type CardProps = {
  item: Item | CartItem;
  setCart: React.Dispatch<React.SetStateAction<Cart>>;
  cart?: boolean;
};

export type CardWrapperProps = {
  children: React.ReactNode;
};

export type CardControlsProps = CardProps & {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
};

export type QuantitySetterProps = {
  quantity?: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
};

export type OutletContext = [
  cart: Cart,
  setCart: React.Dispatch<React.SetStateAction<Cart>>
];

export type Item = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  image: string;
  rating: {
    count: number;
    rate: number;
  };
};

export type CartItem = Item & { quantity: number };

export type Cart = {
  [id: number]: CartItem;
};
