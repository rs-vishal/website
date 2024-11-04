import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/icon-1.png';
import { LuUserCircle } from "react-icons/lu";

const Navbar = () => {
  // Function to determine if the user is logged in
  const renderAuthLinks = () => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');

    if (!isAuthenticated) {
      return (
        <Link to="/login" className="nav-item nav-link text-gray-800 font-medium hover:text-primary transition duration-300 hover:scale-105" >
          Log In
        </Link>
        
      );
    } else {
      return (
        <div className="flex items-center">
          <LuUserCircle className="text-gray-800 w-7 h-8 transition duration-300 transform hover:scale-110 hover:text-primary cursor-pointer hover:scale-105 "  />
        </div>)
    }
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 px-4 lg:px-5 py-2 z-50">
      <div className="flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img className="w-12 mr-2 hover:scale-105"  src={logo} alt="CryptoCoin Logo" />
          <h2 className="text-primary m-0 text-2xl">CryptoCoin</h2>
        </Link>
        <div className="hidden lg:flex flex-row items-center space-x-1">
          <Link to="/" className="nav-item nav-link text-gray-800 font-medium hover:text-primary transition duration-300 hover:scale-105">
            Home
          </Link>
          <Link to="/about" className="nav-item nav-link text-gray-800 font-medium hover:text-primary transition duration-300 hover:scale-105">
            About
          </Link>
          <Link to="/techStack" className="nav-item nav-link text-gray-800 font-medium hover:text-primary transition duration-300 hover:scale-105">
            TechStack
          </Link>
          <Link to="/missionvision" className="nav-item nav-link text-gray-800 font-medium hover:text-primary transition duration-300 hover:scale-105">
            Mission & Vision
          </Link>
          {renderAuthLinks()}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
