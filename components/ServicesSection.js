import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      title: "Digital Marketing",
      description: "Boost your online presence with SEO, social media, and content strategies.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      ),
    },
    {
      title: "Web Development",
      description: "Crafting responsive, high-performance websites tailored to your needs.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 4l-4 4 4 4" />
        </svg>
      ),
    },
    {
      title: "Cloud Solutions",
      description: "Secure and scalable cloud infrastructure for your business operations.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 005-5V7a4 4 0 00-4-4H9a5 5 0 00-5 5v2.5" />
        </svg>
      ),
    },
    {
      title: "IT Consulting",
      description: "Expert advice and strategic planning for your technology roadmap.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.563 23.563 0 0112 15c-1.606 0-3.189-.284-4.707-.81A2.44 2.44 0 005 13.255V6.5a2.44 2.44 0 00-2.293-2.454A23.563 23.563 0 0112 3c1.606 0 3.189.284 4.707.81A2.44 2.44 0 0019 6.5v6.755zM12 15c-1.606 0-3.189-.284-4.707-.81A2.44 2.44 0 005 13.255V6.5a2.44 2.44 0 00-2.293-2.454A23.563 23.563 0 0112 3c1.606 0 3.189.284 4.707.81A2.44 2.44 0 0019 6.5v6.755z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 rounded-xl shadow-md">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-2 border border-gray-200">
              <div className="flex justify-center items-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
