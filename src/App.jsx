import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Shop from './pages/Shop';
import ContactUs from './pages/ContactUs';
import BlogDetails from './pages/BlogDetails';
import CartDrawer from './components/CartDrawer'; 
import { useState, useEffect } from 'react';
import PlantFinder from './components/PlantFinder';

function App() {
  // ۱. خواندن سبد خرید از حافظه مرورگر موقع لود شدن
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('plantCart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  // ۲. ذخیره خودکار در localStorage هر بار که سبد خرید تغییر می‌کند
  useEffect(() => {
    localStorage.setItem('plantCart', JSON.stringify(cartItems));
  }, [cartItems]);

  // تابع اضافه کردن به سبد خرید (یا افزایش تعداد)
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

    setIsCartOpen(true);
  };

  // ۳. تعریف تابع کاهش تعداد (این همان تابعی بود که ارور می‌داد و کم بود!)
  const decreaseQuantity = (id) => {
    setCartItems((prevItems) => {
      return prevItems.map(item => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      }).filter(item => item.quantity > 0); // اگر تعداد صفر شد، حذفش کن
    });
  };

  // ۴. تابع حذف کامل محصول
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Router>
      <main aria-label="Main content" className="w-full min-h-screen relative">
        
        <Header 
          cartCount={totalItems} 
          onCartClick={() => setIsCartOpen(true)} 
        />

        {/* پاس دادن درست توابع به CartDrawer */}
        <CartDrawer 
          isOpen={isCartOpen} 
          onClose={() => setIsCartOpen(false)} 
          items={cartItems}
          onIncrease={addToCart}           
          onDecrease={decreaseQuantity}    
          removeFromCart={removeFromCart}  
        />
        
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart}/>} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/shop" element={<Shop addToCart={addToCart}/>} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/finder" element={<PlantFinder addToCart={addToCart} />} />
        </Routes>
        
        <footer className="w-full bg-emerald-950 py-10 text-center text-white">
          <p>© 2026 PlantShop - All rights reserved</p>
        </footer>
      </main>
    </Router>
  );
}

export default App;