import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `transition-colors duration-300 font-medium ${
      isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 fade-in ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-12">
            <NavLink to="/" className="w-12 h-12">
              <img src="/logo.png" alt="" />
            </NavLink>
            <div className="flex space-x-8">
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>
              <NavLink to="/bookpicks" className={navLinkClass}>
                Bookpicks
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
