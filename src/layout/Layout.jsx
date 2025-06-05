import Footer from './foooter/Footer';
import Navbar from './navbar/Navbar';

import Logo from "../../assets/home/logo.png";

const Layout = ({ children, setPage }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar setPage={setPage} />
      <main className='m-0 p-0'>
        {children}
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;
