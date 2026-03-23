import react  from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function App() {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      // بقیه تنظیمات...
    >
      <SwiperSlide>محصول ۱</SwiperSlide>
      <SwiperSlide>محصول ۲</SwiperSlide>
    </Swiper>
  );
}ذئدال
export default App;