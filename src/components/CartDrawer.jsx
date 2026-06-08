// src/components/CartDrawer.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CartDrawer = ({ isOpen, onClose, items, removeFromCart }) => {
  // محاسبه قیمت کل
  const totalPrice = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* لایه سیاه پس‌زمینه (Overlay) */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[99]"
          />

          {/* منوی اصلی کشویی */}
          <motion.div 
            initial={{ x: '100%' }} // شروع از خارج صفحه (سمت راست)
            animate={{ x: 0 }}      // ورود به صفحه
            exit={{ x: '100%' }}    // خروج به سمت راست
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full md:w-[400px] bg-white shadow-2xl z-[100] flex flex-col"
          >
            {/* سربرگ سبد خرید */}
            <div className="p-6 border-b flex justify-between items-center bg-emerald-50">
              <h2 className="text-2xl font-bold text-emerald-900">Your Cart</h2>
              <button onClick={onClose} className="text-gray-500 hover:text-black">✕ Close</button>
            </div>

            {/* لیست محصولات - اسکرول‌خور */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.length === 0 ? (
                <div className="text-center py-20 text-gray-400">Your cart is empty 🌿</div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4 bg-gray-50 p-3 rounded-2xl border">
                    <img src={`/assets/Images/${item.img}`} alt={item.name} className="w-20 h-20 object-cover rounded-xl" />
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-800">{item.name}</h4>
                      <p className="text-emerald-600 font-bold">${item.price} x {item.quantity}</p>
                      <button 
                        aria-label={`Remove ${item.name} from cart`}
                        onClick={() => removeFromCart(item.id)}
                        className="text-xs text-red-400 hover:text-red-600 underline mt-2"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* بخش نهایی (Total) */}
            {items.length > 0 && (
              <div className="p-6 border-t space-y-4 shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
                <div className="flex justify-between text-xl font-bold text-gray-900">
                  <span>Total:</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-2xl font-bold transition-all shadow-lg shadow-emerald-200">
                  Proceed to Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;