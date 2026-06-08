import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Shop from './pages/Shop';
import ContactUs from './pages/ContactUs';
import BlogDetails from './pages/BlogDetails';
import CartDrawer from './components/CartDrawer'; //   منوی کشویی سبد خرید
import { useState } from 'react';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false); //  استیت برای باز یا بسته بودن منو

  // تابع اضافه کردن به سبد خرید
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const isExist = prevItems.find(item => item.id === product.id);
      
      if (isExist) {
        return prevItems.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });

    // ۳. وقتی کاربر دکمه خرید را زد، منو خودکار باز شود
    setIsCartOpen(true);
  };

  // ۴. تابع حذف محصول از داخل منوی کشویی
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // محاسبه تعداد کل آیتم‌ها
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Router>
       <main aria-label="Main content" className="w-full min-h-screen relative"> {/* اضافه کردن relative برای پوزیشن منو */}
        
        {/* ۵. به هدر می‌گوییم وقتی روی آیکون کلیک شد، منو را باز کند */}
        <Header 
          cartCount={totalItems} 
          onCartClick={() => setIsCartOpen(true)} 
        />

        {/* ۶. قرار دادن کامپوننت سبد خرید کشویی در صفحه */}
        <CartDrawer 
          isOpen={isCartOpen} 
          onClose={() => setIsCartOpen(false)} 
          items={cartItems}
          removeFromCart={removeFromCart}
        />
        
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart}/>} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/shop" element={<Shop addToCart={addToCart}/>} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
        </Routes>
        
        <footer className="w-full bg-emerald-950 py-10 text-center text-white">
          <p>© 2026 PlantShop - All rights reserved</p>
        </footer>
      </main>
    </Router>
  );
}

export default App;