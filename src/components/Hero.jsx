import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section aria-label="Homepage hero section" className="relative w-full h-screen bg-[url('/assets/Images/hero-bg.webp')] bg-cover object-cover">
      <div className="w-full h-full pt-20 flex items-center px-6 md:px-20 bg-linear-to-r from-emerald-950/90 via-emerald-950/70 to-transparent">
        <div className="max-w-7xl mx-auto w-full">
          <h1 className="text-white font-extrabold leading-tight text-4xl md:text-6xl lg:text-7xl">
            Green Living, <span className="text-emerald-400 italic font-medium">Simplified</span>
          </h1>
          <h2 className="text-gray-100 text-lg md:text-xl lg:text-2xl max-w-xl mt-6 font-light">
            Bring Nature's Refreshment Into Your Home
          </h2>
          <Link to="/shop" className="inline-flex items-center justify-center w-fit font-semibold uppercase tracking-wider mt-10 px-8 py-3.5 rounded-lg bg-emerald-500 text-emerald-50 hover:bg-emerald-600 transition-all duration-300 active:scale-95">
            View Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;