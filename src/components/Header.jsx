import React from 'react';
import { Link } from 'react-router-dom';
const Header = ({ cartCount }) => {
  const menuItems = ['home', 'blog', 'contact us', 'shop'];

  return (
    <header className="fixed top-0 left-0 w-full h-20 backdrop-blur-md bg-emerald-950/40 border-b border-white/10  z-[999]">
      <div className="flex items-center w-full h-full px-8">
        <figure className="w-auto md:w-1/5 flex items-center">
          {/* حتماً مسیر لوگو رو چک کن که مثل عکس‌های قبلی ارور نده */}
          <img src="/assets/Images/logo.png" alt="Logo" className="h-10" />
        </figure>

        <nav className="hidden md:flex md:w-[60%] justify-center">
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

        <div className="w-[20%] flex justify-end items-center">
          <div className="relative inline-block cursor-pointer group">

            {/* ۱. آیکون سبد خریدا */}
            <svg className="w-8 h-8 text-white group-hover:text-emerald-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>

            {/* ۲. نشانگر عدد (Badage) که حالا دقیقاً به گوشه آیکون می‌چسبد */}
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-emerald-950 animate-bounce">
                {cartCount}
              </span>
            )}

          </div>

        </div>
      </div>

    </header>
  );
};

export default Header;