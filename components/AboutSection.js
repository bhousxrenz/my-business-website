// components/AboutSection.js
import React from 'react';

/**
 * AboutSection component for the business website.
 * Provides a brief overview of the company's mission and values.
 */
const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white rounded-xl shadow-md">
      <div className="container mx-auto text-center max-w-4xl">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8">About BusinessPro Solutions</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          At BusinessPro Solutions, we are dedicated to transforming businesses through innovative technology and strategic insights. With a team of seasoned experts, we partner with clients to navigate complex challenges and unlock new opportunities for growth.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Our mission is to deliver exceptional value, foster long-term relationships, and empower our clients to achieve sustainable success in a rapidly evolving digital landscape. We believe in integrity, excellence, and client-centric solutions.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
