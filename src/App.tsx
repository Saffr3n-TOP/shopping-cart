import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import './styles/app.sass';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
