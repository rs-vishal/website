import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/icon-1.png';
import { LuUserCircle } from "react-icons/lu";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
    setDropdownOpen(false);
  };

  const toggleDropdown = (event) => {
    event.stopPropagation();
    setDropdownOpen((prev) => {
      const newValue = !prev;
      console.log('Dropdown is now:', newValue ? 'Open' : 'Closed'); // Console log the dropdown state
      return newValue;
    });
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const renderAuthLinks = () => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    
    if (!isAuthenticated) {
      return (
        <Link to="/login" onClick={handleLinkClick} className="nav-item nav-link text-gray-800 font-medium hover:text-primary transition duration-300 hover:scale-105">
          Log In
        </Link>
      );
    } else {
      return (
        <>
          <div className={`lg:hidden ${isOpen ? "block" : "hidden"} bg-white shadow-md`}>
            <div className="flex flex-col items-start">
              <Link to="/missionvision" onClick={handleLinkClick} className="nav-item nav-link text-gray-800 font-medium hover:text-primary transition duration-300">Profile</Link>
            </div>
          </div>
          <div className="hidden lg:flex flex-row items-center space-x-1 relative">
  <LuUserCircle 
    className="text-gray-800 w-7 h-8 transition duration-300 transform hover:scale-110 hover:text-primary cursor-pointer" 
    onClick={toggleDropdown}
    aria-expanded={isDropdownOpen}
    aria-haspopup="true"
  />
  {isDropdownOpen && (
    <div className="dropdown-menu absolute right-0 mt-0 w-48 bg-gray-200 rounded-md shadow-lg z-50"> {/* Changed bg-white to bg-gray-200 */}
      <Link to="/profile" className="dropdown-item text-gray-800 block px-4 py-2 hover:bg-gray-300 transition duration-200">Profile</Link> {/* Changed hover:bg-gray-100 to hover:bg-gray-300 */}
      <Link to="/logout" className="dropdown-item text-gray-800 block px-4 py-2 hover:bg-gray-300 transition duration-200">Log Out</Link> {/* Same as above */}
    </div>
  )}
</div>

        </>
      );
    }
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest('.relative')) {
      closeDropdown();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

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
          <Link to="/" onClick={handleLinkClick} className="nav-item nav-link text-gray-800 font-medium hover:text-primary transition duration-300 hover:scale-105">Home</Link>
          <Link to="/about" onClick={handleLinkClick} className="nav-item nav-link text-gray-800 font-medium hover:text-primary transition duration-300 hover:scale-105">About</Link>
          <Link to="/techStack" onClick={handleLinkClick} className="nav-item nav-link text-gray-800 font-medium hover:text-primary transition duration-300 hover:scale-105">TechStack</Link>
          <Link to="/missionvision" onClick={handleLinkClick} className="nav-item nav-link text-gray-800 font-medium hover:text-primary transition duration-300 hover:scale-105">Mission & Vision</Link>
          {renderAuthLinks()}
        </div>
      </div>
      <div className={`lg:hidden ${isOpen ? "block" : "hidden"} bg-white shadow-md`}>
        <div className="flex flex-col items-start">
          <Link to="/" onClick={handleLinkClick} className="nav-item nav-link text-gray-800 font-medium hover:text-primary transition duration-300">Home</Link>
          <Link to="/about" onClick={handleLinkClick} className="nav-item nav-link text-gray-800 font-medium hover:text-primary transition duration-300">About</Link>
          <Link to="/techStack" onClick={handleLinkClick} className="nav-item nav-link text-gray-800 font-medium hover:text-primary transition duration-300">TechStack</Link>
          <Link to="/missionvision" onClick={handleLinkClick} className="nav-item nav-link text-gray-800 font-medium hover:text-primary transition duration-300">Mission & Vision</Link>
          {renderAuthLinks()}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
