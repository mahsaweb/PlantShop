import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Shop from './pages/Shop';
import Contact from './pages/ContactUs';

function App() {
  return (
    <Router>
      <main className="w-full min-h-screen">
        {/* هدر بیرون از Routes قرار می‌گیرد چون می‌خواهیم در تمام صفحات ثابت باشد */}
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contactUs" element={<Contact />} />
        </Routes>

        {/* فوتر را هم اینجا اضافه کن */}
        <footer className="w-full bg-emerald-950 py-10 text-center text-white">
          <p>© 2026 PlantShop - All rights reserved</p>
        </footer>
      </main>
    </Router>
  );
}

export default App;
