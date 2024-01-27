import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';

export const routes = [
  {
    path: 'shopping-cart',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'shop',
        element: <Shop />
      },
      {
        path: 'cart',
        element: <Cart />
      }
    ]
  }
];

const router = createBrowserRouter(routes);
export default router;
