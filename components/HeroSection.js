import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-[500px] rounded-xl shadow-lg">
      <div className="text-center max-w-4xl">
        <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-down">
          Empowering Your Business with Innovative Solutions
        </h2>
        <p className="text-xl md:text-2xl mb-10 opacity-90 animate-fade-in-up">
          We provide cutting-edge strategies and technologies to drive your growth and achieve your goals.
        </p>
        <button className="bg-white text-blue-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-100 hover:scale-105 transition duration-300 ease-in-out transform">
          Get Started Today
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
