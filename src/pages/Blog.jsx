import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {

    fetch('https://dummyjson.com/posts?limit=6')
      .then(res => res.json())
      .then(data => {
        setPosts(data.posts);
      })
      .catch(err => console.error("API Error:", err));
  }, []);

  return (
    <div className="pt-32 p-10 min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold mb-12 italic text-emerald-900">Latest Stories</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map(post => (
          <div key={post.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-allhover:-translate-y-2 transition-all duration-300">
            <div className="h-44 bg-emerald-50 rounded-xl mb-5 flex items-center justify-center text-emerald-200 font-bold uppercase tracking-tighter">
              Plant Journal
            </div>

            <h2 className="text-xl font-bold mb-3 text-gray-800 line-clamp-1">
              {post.title}
            </h2>

            <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
              {post.body}
            </p>

            <Link to={`/blog/${post.id}`} className="mt-6 text-emerald-600 font-extrabold text-sm hover:text-emerald-400">
              READ MORE →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;






