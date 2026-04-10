import React from 'react';
import { Link } from 'react-router-dom';
// فعلاً از تگ a استفاده می‌کنیم، بعداً که React Router نصب کردی به Link تغییرش می‌دیم
const Header = () => {
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
                <Link className="tracking-widest uppercase " to={`/${item === 'home' ? '' : item}`}>
                  {item}
                </Link>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </nav>

        <div className="w-[20%] text-white border border-white/20 rounded-lg py-2 text-center text-xs uppercase tracking-tighter">
          /// icon ///
        </div>
      </div>
    
    </header>
  );
};

export default Header;