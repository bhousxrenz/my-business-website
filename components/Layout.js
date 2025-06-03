import React from 'react';
import Header from './Header'; 
import Footer from './Footer'; 

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col font-sans antialiased">
      <Header /> {/* Render the Header component */}
      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
        {children} {/* Render the content passed as children */}
      </main>
      <Footer /> {/* Render the Footer component */}
    </div>
  );
};

export default Layout;
