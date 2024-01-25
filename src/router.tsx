import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import Shop from './components/Shop';

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
        element: <div>CART</div>
      }
    ]
  }
]);

export default router;
