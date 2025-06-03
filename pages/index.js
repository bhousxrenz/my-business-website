// pages/index.js
import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import ContactForm from '../components/ContactForm';

/**
 * The main homepage for the BusinessPro Solutions website.
 * This page integrates various sections to create a comprehensive landing experience.
 */
const HomePage = () => {
  return (
    <Layout>
      <div className="space-y-16 py-8"> {/* Add vertical spacing between sections */}
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ContactForm />
      </div>
    </Layout>
  );
};

export default HomePage;
