import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/icon-1.png';
import { LuUserCircle } from "react-icons/lu";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // For navigation after logout
  const navigate = useNavigate();

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.relative')) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const isAuthenticated = localStorage.getItem('isAuthenticated');

  // Logout function
  const logout = () => {
    localStorage.removeItem('isAuthenticated');  // Clear the authentication token or flag
    navigate('/');  // Redirect to the home page or login page after logout
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 px-4 lg:px-5 py-2 z-50">
      <div className="flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img className="w-12 mr-2 hover:scale-105" src={logo} alt="CryptoCoin Logo" />
          <h2 className="text-primary m-0 text-2xl">CryptoCoin</h2>
        </Link>
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
        <div className="hidden lg:flex flex-row items-center space-x-1">
          <Link to="/" className="nav-item nav-link text-gray-800 font-medium hover:text-primary transition duration-300 hover:scale-105">Home</Link>
          <Link to="/about" className="nav-item nav-link text-gray-800 font-medium hover:text-primary transition duration-300 hover:scale-105">About</Link>
          <Link to="/techStack" className="nav-item nav-link text-gray-800 font-medium hover:text-primary transition duration-300 hover:scale-105">TechStack</Link>
          <Link to="/missionvision" className="nav-item nav-link text-gray-800 font-medium hover:text-primary transition duration-300 hover:scale-105">Mission & Vision</Link>
          {!isAuthenticated ? (
            <Link to="/login" className="nav-item nav-link text-gray-800 font-medium hover:text-primary transition duration-300 hover:scale-105">
              Log In
            </Link>
          ) : (
            <div className="relative">
              <LuUserCircle
                className="text-gray-800 w-7 h-8 transition duration-300 transform hover:scale-110 hover:text-primary cursor-pointer"
                onClick={() => setDropdownOpen(!isDropdownOpen)}
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
              />
              {isDropdownOpen && (
                <div className="absolute right-0 mt-0 w-48 bg-gray-200 rounded-md shadow-lg z-50">
                  <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-300">Profile</Link>
                  <button
                    onClick={logout}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-300 w-full text-left"
                  >
                    Log Out
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${isOpen ? "block" : "hidden"} bg-white shadow-md`}>
        <div className="flex flex-col items-start">
          <Link to="/" className="nav-item nav-link text-gray-800 font-medium hover:text-primary transition duration-300">Home</Link>
          <Link to="/about" className="nav-item nav-link text-gray-800 font-medium hover:text-primary transition duration-300">About</Link>
          <Link to="/techStack" className="nav-item nav-link text-gray-800 font-medium hover:text-primary transition duration-300">TechStack</Link>
          <Link to="/missionvision" className="nav-item nav-link text-gray-800 font-medium hover:text-primary transition duration-300">Mission & Vision</Link>
          {!isAuthenticated ? (
            <Link to="/login" className="nav-item nav-link text-gray-800 font-medium hover:text-primary transition duration-300">Log In</Link>
          ) : (
            <div className="flex flex-col items-start">
              <Link to="/profile" className="nav-item nav-link text-gray-800 font-medium hover:text-primary transition duration-300">Profile</Link>
              <button
                onClick={logout}
                className="nav-item nav-link text-gray-800 font-medium hover:text-primary transition duration-300"
              >
                Log Out
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
