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
}
// در اینجا، ما از ماژول Pagination استفاده کرده‌ایم و آن را به Swiper اضافه کرده‌ایم. همچنین، تنظیمات pagination را به صورت یک شیء با ویژگی clickable تنظیم کرده‌ایم تا امکان کلیک بر روی نقاط صفحه‌بندی فراهم شود.
export default App;