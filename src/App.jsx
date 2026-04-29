import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Shop from './pages/Shop';
import ContactUs from './pages/ContactUs';
import BlogDetails from './pages/BlogDetails';
import { useState } from 'react';

function App() {
  const [cartCount, setCartCount]=useState(0);
  const addToCart=()=>{
    setCartCount(cartCount + 1)
  }
  return (
    <Router>
      <main className="w-full min-h-screen">
        
        <Header cartCount={cartCount}/>
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
