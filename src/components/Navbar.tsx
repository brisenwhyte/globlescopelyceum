import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 fade-in ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-12">
            <a href="/" className="w-12 h-12">
              <img src="/logo.png" alt="" />
            </a>
            <div className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-gray-900 hover:text-blue-600 transition-colors duration-300 font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                Politics
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                Culture
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                Podcast
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                About
              </a>
            </div>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-300">
            <Search className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
