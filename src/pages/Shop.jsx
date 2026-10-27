import React from 'react';
import { plants } from '../data/plants'; 

const Shop = ({ addToCart }) => { // دریافت تابع از App.jsx
  return (
    <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-emerald-900 mb-2">Our Collection</h1>
        <p className="text-gray-500 mb-10">Find the perfect green companion for your space</p>

        {/* گرید محصولات */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {plants.map((plant) => (
            <div key={plant.id} className="group bg-white rounded-4xl p-4 shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="overflow-hidden rounded-3xl aspect-square mb-4">
                <img 
                  src={`/assets/Images/${plant.img}`} 
                  alt={plant.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />  
              </div>
              <h3 className="text-lg font-bold text-gray-800 px-2">{plant.name}</h3>
              <div className="relative flex justify-between items-center mt-2 px-2">
                <span className="text-emerald-700 font-bold">${plant.price}</span>
                <button 
                 onClick={() => addToCart(plant)}
                 aria-label={`Add ${plant.name} to cart`}
                  className="absolute text-sm font-bold bottom-2 right-4 bg-emerald-600 text-white p-3 rounded-2xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:bg-emerald-700"
                >
                  Add to Cart +
                </button>               
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;