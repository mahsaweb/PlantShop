import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// 🛠️ تغییر اول: اضافه کردن onCartClick به ورودی‌های کامپوننت
const Header = ({ cartCount, onCartClick }) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const menuItems = ['home', 'blog', 'contact us', 'shop'];

  return (
    <header className="fixed top-0 left-0 w-full h-20 backdrop-blur-md bg-emerald-950/40 border-b border-white/10 z-[999]">
      <div className="flex items-center w-full h-full px-8">
        
        {/* بخش لوگو */}
        <Link to="/" className="flex items-center gap-3 w-auto md:w-1/5">
          <span className="relative inline-flex items-center justify-center w-12 h-12 rounded-3xl bg-emerald-600/15 border border-emerald-300 shadow-sm">
            <svg className="w-6 h-6 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 21s-4-4.5-4-8.5 1.79-7.5 4-7.5 4 3.83 4 7.5-4 8.5-4 8.5z" />
              <path d="M8 12c1.2-.7 2.8-1.3 4-1.3s2.8.6 4 1.3" />
            </svg>
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-white text-lg font-semibold tracking-[0.08em]">PlantShop</span>
            <span className="text-xs uppercase text-emerald-300 tracking-[0.2em]">Green living</span>
          </div>
        </Link>

        {/* بخش منوی ناوبری */}
        <nav className="hidden md:flex md:w-[60%] justify-center" aria-label="Main navigation">
          <ul className="flex gap-x-8 justify-center items-center text-white font-medium">
            {menuItems.map((item) => (
              <li key={item} className="group py-4 relative">
                <Link
                  className="tracking-widest uppercase"
                  to={`/${item === 'home' ? '' : item.replace(/\s+/g, '-')}`}>
                  {item}
                </Link>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:hidden ml-auto">
          <button
            onClick={() => setMobileNavOpen((prev) => !prev)}
            aria-label={mobileNavOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileNavOpen}
            className="inline-flex items-center justify-center p-2 rounded-2xl border border-white/10 text-white hover:bg-white/10 transition-all"
          >
            {mobileNavOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* بخش سمت راست (سبد خرید) */}
        <div className="w-[20%] flex justify-end items-center">
          
          {/* 🛠️ تغییر دوم: متصل کردن تابع کلیک به دکمه سبد خرید */}
          <button
            type="button"
            onClick={onCartClick}
            aria-label="Open cart drawer"
            className="relative inline-flex items-center justify-center group p-2"
          >
            {/* آیکون سبد خرید */}
            <svg className="w-8 h-8 text-white group-hover:text-emerald-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>

            {/* نشانگر عدد (Badge) */}
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 bg-red-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-emerald-950 animate-bounce">
                {cartCount}
              </span>
            )}
          </button>

        </div>
      </div>

      {mobileNavOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-emerald-950/95 backdrop-blur-xl border-t border-white/10 z-[998]">
          <ul className="flex flex-col gap-4 p-4 text-white">
            {menuItems.map((item) => (
              <li key={item}>
                <Link
                  onClick={() => setMobileNavOpen(false)}
                  className="block tracking-widest uppercase py-3 px-4 rounded-2xl hover:bg-emerald-900 transition-all"
                  to={`/${item === 'home' ? '' : item.replace(/\s+/g, '-')}`}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;