import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import ContactForm from '../components/ContactForm';

const HomePage = () => {
  return (
    <Layout>
      <div className="space-y-16 py-8">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ContactForm />
      </div>
    </Layout>
  );
};

export default HomePage;
