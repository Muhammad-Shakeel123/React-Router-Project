import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg py-4 z-50">
      <nav className="flex items-center justify-between max-w-6xl mx-auto px-6">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <NavLink to="/">
            <img
              src="https://img.freepik.com/free-vector/branding-identity-corporate-logo-vector-design-template_460848-13992.jpg?size=626&ext=jpg&ga=GA1.1.1824573526.1723610953&semt=ais_hybrid" // Replace with your logo URL
              alt="Logo"
              className="h-10 object-contain transition-transform duration-500 transform hover:scale-105"
            />
          </NavLink>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-8 text-white font-semibold text-lg">
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `transition-transform duration-300 transform ${
                  isActive
                    ? 'text-yellow-300 scale-110'
                    : 'text-yellow-200 hover:text-yellow-300'
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `transition-transform duration-300 transform ${
                  isActive
                    ? 'text-yellow-300 scale-110'
                    : 'text-yellow-200 hover:text-yellow-300'
                }`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contactus"
              className={({ isActive }) =>
                `transition-transform duration-300 transform ${
                  isActive
                    ? 'text-yellow-300 scale-110'
                    : 'text-yellow-200 hover:text-yellow-300'
                }`
              }
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/github"
              className={({ isActive }) =>
                `transition-transform duration-300 transform ${
                  isActive
                    ? 'text-yellow-300 scale-110'
                    : 'text-yellow-200 hover:text-yellow-300'
                }`
              }
            >
              GitHub
            </NavLink>
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex space-x-4">
          <NavLink to="/login">
            <button className="bg-teal-500 text-white px-4 py-2 rounded-lg font-bold transition-transform duration-300 transform hover:scale-105 hover:bg-teal-600">
              Login
            </button>
          </NavLink>
          <NavLink to="/signup">
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg font-bold transition-transform duration-300 transform hover:scale-105 hover:bg-yellow-600">
              Get Started
            </button>
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
