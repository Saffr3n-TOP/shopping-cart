import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
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
]);

export default router;
