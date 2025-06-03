import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-700 to-purple-800 text-white p-4 shadow-lg rounded-b-lg">
      <nav className="container mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <h1 className="text-3xl font-extrabold tracking-wide">
          <a href="/" className="hover:text-indigo-200 transition duration-300 ease-in-out">
            BusinessPro Solutions
          </a>
        </h1>
        <ul className="flex flex-wrap justify-center space-x-4 sm:space-x-6 text-lg">
          <li>
            <a href="#home" className="hover:text-indigo-200 transition duration-300 ease-in-out">
              Home
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-indigo-200 transition duration-300 ease-in-out">
              Services
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-indigo-200 transition duration-300 ease-in-out">
              About Us
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-indigo-200 transition duration-300 ease-in-out">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
