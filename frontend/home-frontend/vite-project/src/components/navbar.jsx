import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

return (
  <nav className="bg-black text-white sticky top-0 z-50 shadow-md">
    <div className="container mx-auto">
      <div className="flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center ml-4">
          <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-black font-bold text-xl">
            St
          </div>
          <span className="ml-2 text-xl font-bold hidden md:block">Sertime</span>
        </div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center">
          {/* Navigation Links */}
          <div className="flex items-center mr-8">
            <Link to="/" className="mx-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/about" className="mx-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 hover:text-white transition-colors">
              About Us
            </Link>
          </div>
          
          {/* Auth Buttons */}
          <div className="flex items-center mr-4">
            <Link to="/login" className="mx-2 py-2 px-4 rounded-md text-sm font-medium bg-gray-800 hover:bg-gray-700 hover:text-white transition-colors">
              Login
            </Link>
            <Link to="/register" className="mx-2 py-2 px-4 rounded-md text-sm font-medium bg-blue-600 hover:bg-blue-700 hover:text-white transition-colors">
              Register
            </Link>
          </div>
        </div>
        {/* Mobile menu button */}
        <div className="md:hidden mr-4">
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center rounded-md text-white hover:bg-gray-800 focus:outline-none"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
    {/* Mobile menu, show/hide based on menu state */}
    {isMenuOpen && (
      <div className="md:hidden">
        <div className="space-y-1 bg-gray-900">
          <Link
            to="/"
            className="block mx-4 my-2 py-2 rounded-md text-base font-medium hover:bg-gray-800 transition-colors"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block mx-4 my-2 py-2 rounded-md text-base font-medium hover:bg-gray-800 transition-colors"
            onClick={toggleMenu}
          >
            About Us
          </Link>
          <div className="flex mx-4 my-3 space-x-2">
            <Link
              to="/login"
              className="flex-1 py-2 text-center rounded-md text-base font-medium bg-gray-800 hover:bg-gray-700 transition-colors"
              onClick={toggleMenu}
            >
              Login
            </Link>
            <Link
              to="/register"
              className="flex-1 py-2 text-center rounded-md text-base font-medium bg-blue-600 hover:bg-blue-700 transition-colors"
              onClick={toggleMenu}
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    )}
  </nav>
);
};

export default Navbar;