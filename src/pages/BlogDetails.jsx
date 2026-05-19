import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const BlogDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then(res => res.json())
      .then(data => setPost(data));
  }, [id]);

  if (!post) return <div className="pt-40 text-center font-bold">Loading story...</div>;

  return (
    <div
      className="relative min-h-screen pt-32 pb-20 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/assets/Images/slider7.webp')" }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>


      <div className="relative z-10 max-w-3xl mx-auto bg-white/95 px-8 md:px-16 pt-10 md:pt-16 pb-20 md:pb-32 rounded-[40px] shadow-2xl">
        <Link to="/blog" className="text-emerald-700 font-bold hover:text-emerald-500 transition-colors text-xs uppercase tracking-widest mb-8 inline-block">
          ← Back to Stories
        </Link>

        <div className="relative h-40 md:h-52 bg-emerald-50 rounded-3xl mb-8 overflow-hidden flex items-center justify-center border-2 border-emerald-100/50 shadow-inner group">

          {/* یک لایه تزیینی است که حس شیشه‌ای به تصویر می‌دهد */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-emerald-950/20 backdrop-blur-[1px] group-hover:backdrop-blur-none transition-all duration-500"></div>

          <span className="relative z-10 text-emerald-300 font-black text-xl md:text-2xl uppercase tracking-tighter opacity-70">
            Plant Journal Vol. {id}
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-black text-emerald-950 my-6 leading-tight">
          {post.title}
        </h1>

        <p className="text-lg leading-relaxed text-gray-700 first-letter:text-5xl first-letter:font-bold first-letter:text-emerald-900 first-letter:mr-2 first-letter:float-left first-letter:mt-1">
          {post.body}
        </p>


      </div>
    </div>
  );
};

export default BlogDetails;