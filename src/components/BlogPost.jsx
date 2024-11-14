// src/components/BlogPost.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();

  return (
    <div className="py-20 bg-white text-center max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold text-blue-600">Blog Post Title {id}</h2>
      <p className="mt-8 text-gray-700">
        This is the full blog post content. Customize it based on the post ID to fetch or display specific blog post details.
      </p>
    </div>
  );
};

export default BlogPost;
