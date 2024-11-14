// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 text-center">
      <p>&copy; {new Date().getFullYear()} Hardev's Portfolio. All rights reserved.</p>
      <div className="mt-4">
        <a href="#" className="text-blue-400 hover:underline mx-2">LinkedIn</a>
        <a href="#" className="text-blue-400 hover:underline mx-2">GitHub</a>
        <a href="#" className="text-blue-400 hover:underline mx-2">Twitter</a>
      </div>
    </footer>
  );
};

export default Footer;
