import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/icon-1.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" bg-white shadow-sm sticky top-0 px-4 lg:px-5 py-2 z-50">
      <div className="flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img className="w-12 mr-2" src={logo} alt="CryptoCoin Logo" />
          <h2 className="text-primary m-0 text-2xl">CryptoCoin</h2>
        </Link>
        <div className="hidden lg:flex flex-row items-center space-x-1">
          <Link to="/" className="nav-item nav-link text-gray-800 font-medium hover:text-primary transition duration-300">
            Home
          </Link>
          <Link to="/about" className="nav-item nav-link text-gray-800 font-medium hover:text-primary transition duration-300">
            About
          </Link>
          <Link to="/techStack" className="nav-item nav-link text-gray-800 font-medium hover:text-primary transition duration-300">
            TechStack
          </Link>
          <Link to="/missionvision" className="nav-item nav-link text-gray-800 font-medium hover:text-primary transition duration-300">
            Mission & Vision
          </Link>
          <Link to="/login" className="nav-item nav-link text-gray-800 font-medium hover:text-primary transition duration-300">
            Log In
          </Link>
        </div>
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden flex flex-col items-center space-y-4 py-4">
          <Link to="/" className="nav-item nav-link text-gray-800 font-medium hover:text-primary transition duration-300">
            Home
          </Link>
          <Link to="/about" className="nav-item nav-link text-gray-800 font-medium hover:text-primary transition duration-300">
            About
          </Link>
          <Link to="/TechStack" className="nav-item nav-link text-gray-800 font-medium hover:text-primary transition duration-300">
            TechStack
          </Link>
          <Link to="/Mission&Vision" className="nav-item nav-link text-gray-800 font-medium hover:text-primary transition duration-300">
            Mission & Vision
          </Link>
          <Link to="/contact" className="nav-item nav-link text-gray-800 font-medium hover:text-primary transition duration-300">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
