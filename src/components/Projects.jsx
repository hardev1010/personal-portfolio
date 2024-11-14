// src/components/Projects.jsx
import React from 'react';

const projects = [
  { title: 'Contact Manager', description: 'A full-stack MERN application for managing contacts.', link: '#' },
  { title: 'VideoTube', description: 'A video playback app similar to YouTube.', link: '#' }
];

const Projects = () => {
  return (
    <div id="projects" className="py-20 bg-white text-center">
      <h3 className="text-4xl font-bold text-gray-800">Projects</h3>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
        {projects.map((project, index) => (
          <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h4 className="text-2xl font-semibold text-blue-600">{project.title}</h4>
            <p className="mt-4 text-gray-700">{project.description}</p>
            <a href={project.link} className="text-blue-500 hover:underline mt-4 inline-block">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
