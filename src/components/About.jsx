// src/components/About.jsx
import React from 'react';

const About = () => {
  return (
    <div id="about" className="py-20 bg-gray-100 text-center">
      <h3 className="text-4xl font-bold text-gray-800">About Me</h3>
      <p className="mt-6 max-w-3xl mx-auto text-gray-600">
        I'm Hardev, a dedicated MERN Stack Developer with a background in CSE and a GATE qualification. My goal is to design and develop applications that solve real-world problems while enhancing user experiences.
      </p>
      <div className="mt-10 flex flex-col items-center">
        <div className="bg-white shadow-lg rounded-lg p-6 w-80">
          <h4 className="font-semibold text-lg text-blue-600">Skills</h4>
          <p>React, JavaScript, Node.js, MongoDB, Express, HTML, CSS, Tailwind CSS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
