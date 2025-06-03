// components/Footer.js
import React from 'react';

/**
 * Footer component for the business website.
 * Displays copyright information and other relevant links.
 */
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 p-8 text-center text-sm rounded-t-lg shadow-inner">
      <div className="container mx-auto">
        <p className="mb-2">
          &copy; {new Date().getFullYear()} BusinessPro Solutions. All rights reserved.
        </p>
        <p className="text-xs">
          123 Business Avenue, Suite 400, Cityville, State 12345 | Phone: (123) 456-7890 | Email: info@businesspro.com
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" className="hover:text-white transition duration-300 ease-in-out">Privacy Policy</a>
          <span className="text-gray-600">|</span>
          <a href="#" className="hover:text-white transition duration-300 ease-in-out">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
