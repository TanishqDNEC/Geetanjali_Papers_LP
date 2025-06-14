import { Outlet } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

export default function Layout() {
  return (
    <>
      <Header />
        <Outlet /> {/* To load the current page from main */ }
      <Footer />
    </>
  );
}
