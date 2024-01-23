import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './components/Home';

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
