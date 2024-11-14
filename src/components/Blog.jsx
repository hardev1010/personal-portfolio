// src/components/Blog.jsx
import React from 'react';

const posts = [
  { id: 1, title: 'Getting Started with MERN Stack', excerpt: 'A guide to building apps with MongoDB, Express, React, and Node.' },
  { id: 2, title: 'My Journey with GATE', excerpt: 'How I prepared and qualified for GATE in CSE.' }
];

const Blog = () => {
  return (
    <div id="blog" className="py-20 bg-gray-100 text-center">
      <h3 className="text-4xl font-bold text-gray-800">Blog</h3>
      <div className="mt-10 space-y-8 px-6 max-w-3xl mx-auto">
        {posts.map((post) => (
          <div key={post.id} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
            <h4 className="text-2xl font-semibold text-blue-600">{post.title}</h4>
            <p className="mt-4 text-gray-600">{post.excerpt}</p>
            <a href={`/blog/${post.id}`} className="text-blue-500 hover:underline mt-4 inline-block">Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
