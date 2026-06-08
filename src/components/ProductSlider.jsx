import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { plants } from "../data/plants"; // ایمپورت دیتای مشترک

const ProductSlider = ({ addToCart }) => {
  

  return (
    <section className="w-full bg-gray-50">
       <div className="max-w-7xl mx-auto px-6 py-20">
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className="mySwiper !pb-12"
        >
          {plants.map((product) => (
            <SwiperSlide key={product.id} className="p-4">
              <figure className="group bg-white relative rounded-[2.5rem] p-5 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <img 
                  src={`/assets/Images/${product.img}`} 
                  alt={product.name} 
                  className="w-full object-cover aspect-square group-hover:scale-110 transition-transform duration-500" 
                />
                <figcaption className="mt-5 text-center">
                  <h3 className="font-bold text-slate-800 text-lg">{product.name}</h3>
                  <p className="text-slate-500 text-sm italic">{product.tag}</p>
                  <div className="flex justify-between items-center mt-4 px-2">
                    <span className="text-xl font-bold text-emerald-700">${product.price}</span>
                    <button aria-label={`Add ${product.name} to cart`} onClick={() => addToCart(product)} className="bg-red-600 text-white p-3 rounded-xl opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 active:scale-90" >
                      <svg width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M239.82,90.27l-21.22,74.29A24,24,0,0,1,195.39,182H80.61a24,24,0,0,1-23.21-17.44L33.19,78.29,25.49,42.27A8,8,0,0,0,17.72,36H8a8,8,0,0,1,0-16h9.72a24,24,0,0,1-23.3,18.73L48.81,76h176a8,8,0,0,1,7.82,9.73ZM104,212a12,12,0,1,0-12,12A12,12,0,0,0,104,212Zm104,0a12,12,0,1,0-12,12A12,12,0,0,0,208,212Z"></path>
                      </svg>
                    </button>
                  </div>
                </figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProductSlider;