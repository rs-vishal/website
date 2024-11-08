import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/icon-1.png';
import { LuUserCircle } from "react-icons/lu";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication state
  const navigate = useNavigate();

  // UseEffect to check authentication status when the component mounts
  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    setIsAuthenticated(authStatus === 'true'); // Assuming you store 'true' or 'false' as string in localStorage
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
    setDropdownOpen(false);
  };

  const toggleDropdown = (event) => {
    event.stopPropagation();
    setDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const logout = () => {
    localStorage.removeItem('isAuthenticated'); // Clear authentication status
    setIsAuthenticated(false); // Update the local state as well
    navigate('/'); // Redirect to the home page or login page after logout
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 w-full z-50 h-12">
      <div className="flex justify-between items-center h-16 px-6 lg:px-8">
        <Link to="/" className="flex items-center mb-3">
          <img className=" size-10 mr-2 hover:scale-105" src={logo} alt="CryptoCoin Logo" />
          <h2 className="text-primary m-0 text-2xl font-semibold">CryptoCoin</h2>
        </Link>
        
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
        
        <div className="hidden lg:flex items-center space-x-9 mb-3">
          <Link 
            to="/" 
            className="nav-item text-gray-800 font-medium hover:text-primary transition duration-300 transform hover:scale-110"
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="nav-item text-gray-800 font-medium hover:text-primary transition duration-300 transform hover:scale-110"
          >
            About
          </Link>
          <Link 
            to="/techStack" 
            className="nav-item text-gray-800 font-medium hover:text-primary transition duration-300 transform hover:scale-110"
          >
            TechStack
          </Link>
          <Link 
            to="/missionvision" 
            className="nav-item text-gray-800 font-medium hover:text-primary transition duration-300 transform hover:scale-110"
          >
            Mission & Vision
          </Link>

          {/* Conditionally render Register button if authenticated */}
          {isAuthenticated && (
            <a href='/subscribe'>
              <button className="btn bg-gradient-to-r from-black to-cyan-900 text-white px-4 py-2 rounded-md hover:from-black hover:to-cyan-800 transition duration-200">
                Register
              </button>
            </a>
          )}

          {/* Authentication-based Links (Profile, Logout) */}
          {isAuthenticated ? (
            <div className="relative">
              <LuUserCircle
                className="text-gray-800 w-7 h-8 transition duration-300 transform hover:scale-110 hover:text-primary cursor-pointer"
                onClick={toggleDropdown}
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
              />
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-200 rounded-md shadow-lg z-50">
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
          ) : (
            <Link 
              to="/login" 
              className="nav-item text-gray-800 font-medium hover:text-primary transition duration-300 transform hover:scale-110"
            >
              Log In
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${isOpen ? "block" : "hidden"} bg-white shadow-md`}>
        <div className="flex flex-col items-start py-4">
          <Link 
            to="/" 
            className="nav-item text-gray-800 font-medium hover:text-primary transition duration-300 py-2 transform hover:scale-110"
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="nav-item text-gray-800 font-medium hover:text-primary transition duration-300 py-2 transform hover:scale-110"
          >
            About
          </Link>
          <Link 
            to="/techStack" 
            className="nav-item text-gray-800 font-medium hover:text-primary transition duration-300 py-2 transform hover:scale-110"
          >
            TechStack
          </Link>
          <Link 
            to="/missionvision" 
            className="nav-item text-gray-800 font-medium hover:text-primary transition duration-300 py-2 transform hover:scale-110"
          >
            Mission & Vision
          </Link>

          {/* Conditionally render Register button if authenticated */}
          {isAuthenticated && (
            <a href='/subscribe'>
              <button className="btn btn-primary d-block w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 ">
                Register
              </button>
            </a>
          )}

          {/* Authentication-based Links (Profile, Logout) */}
          {isAuthenticated ? (
            <div className="flex flex-col items-start mt-4">
              <Link 
                to="/profile" 
                className="nav-item text-gray-800 font-medium hover:text-primary transition duration-300 py-2 transform hover:scale-110"
              >
                Profile
              </Link>
              <button
                onClick={logout}
                className="nav-item text-gray-800 font-medium hover:text-primary transition duration-300 py-2 transform hover:scale-110"
              >
                Log Out
              </button>
            </div>
          ) : (
            <Link 
              to="/login" 
              className="nav-item text-gray-800 font-medium hover:text-primary transition duration-300 py-2 transform hover:scale-110"
            >
              Log In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
