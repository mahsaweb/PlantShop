import React from 'react';
import { plants } from '../data/plants'; // ایمپورت دیتای مشترک

const Shop = ({ addToCart }) => { // دریافت تابع از App.jsx
  return (
    <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-emerald-900 mb-2">Our Collection</h1>
        <p className="text-gray-500 mb-10">Find the perfect green companion for your space</p>

        {/* گرید محصولات */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {plants.map((plant) => (
            <div key={plant.id} className="group bg-white rounded-[2rem] p-4 shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="relative overflow-hidden rounded-[1.5rem] aspect-square mb-4">
                <img 
                  src={`/assets/Images/${plant.img}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* دکمه افزودن سریع که با هاور ظاهر می‌شود */}
                <button 
                  onClick={addToCart}
                  className="absolute bottom-4 right-4 bg-emerald-600 text-white p-3 rounded-2xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:bg-emerald-700"
                >
                  Add to Cart +
                </button>
              </div>
              <h3 className="text-lg font-bold text-gray-800 px-2">{plant.name}</h3>
              <div className="flex justify-between items-center mt-2 px-2">
                <span className="text-emerald-700 font-bold">${plant.price}</span>
                <span className="text-xs bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full uppercase font-semibold">
                  {plant.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;