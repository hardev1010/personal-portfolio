// src/components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <div className="flex flex-col items-center text-center py-40 bg-gradient-to-r from-blue-500 to-gray-600 text-white">
      <h2 className="text-5xl font-bold animate__animated animate__fadeInDown">Hi, I'm Hardev</h2>
      <p className="mt-6 text-lg max-w-xl mx-auto animate__animated animate__fadeInUp">
        GATE Qualified | MERN Stack Developer | Passionate about Building Scalable Web Applications
      </p>
      <a href="#contact" className="mt-8 px-6 py-3 bg-white text-blue-600 font-bold rounded-lg shadow-lg hover:bg-gray-200 transition duration-300">
        Get in Touch
      </a>
    </div>
  );
};

export default Hero;
