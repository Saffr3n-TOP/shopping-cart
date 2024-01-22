import { createBrowserRouter } from 'react-router-dom';
import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <div>HOME</div>
      },
      {
        path: 'shop',
        element: <div>SHOP</div>
      },
      {
        path: 'cart',
        element: <div>CART</div>
      }
    ]
  }
]);

export default router;
