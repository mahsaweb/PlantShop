
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CartDrawer = ({ isOpen, onClose, items, onIncrease, onDecrease, removeFromCart }) => {
  // محاسبه قیمت کل
  const totalPrice = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* لایه سیاه پس‌زمینه */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-999"
          />

          {/* منوی اصلی کشویی  */}
          <motion.div 
            initial={{ x: '100%' }} 
            animate={{ x: 0 }}      
            exit={{ x: '100%' }}    
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full md:w-100 bg-white shadow-2xl z-1000 flex flex-col"
          >
            {/* سربرگ سبد خرید و دکمه ضربدر */}
            <div className="p-6 border-b flex justify-between items-center bg-emerald-50 shadow-sm">
              <h2 className="text-2xl font-bold text-emerald-900">Your Cart 🛒</h2>
              
              <button 
                onClick={onClose} 
                className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-gray-700 hover:bg-emerald-600 hover:text-white transition-all shadow-md border border-emerald-200 font-bold text-lg"
                aria-label="Close cart"
              >
                ✕
              </button>
            </div>

            {/*لیست محصولات - بااسکرول  */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.length === 0 ? (
                <div className="text-center py-20 text-gray-400">Your cart is empty 🌿</div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4 bg-gray-50 p-3 rounded-2xl border items-center">
                    <img src={`/assets/Images/${item.img}`} alt={item.name} className="w-20 h-20 object-cover rounded-xl" />
                    
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-800">{item.name}</h4>
                      <p className="text-emerald-600 font-bold">${item.price} each</p>
                      
                      {/* بخش کنترل تعداد (+ و -) و دکمه حذف */}
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-2 bg-white border rounded-xl px-2 py-1 shadow-sm">
                          {/* دکمه کاهش تعداد */}
                          <button 
                            onClick={() => onDecrease(item.id)}
                            className="w-6 h-6 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-lg font-bold"
                          >
                            -
                          </button>
                          
                          <span className="text-sm font-bold w-6 text-center">{item.quantity}</span>
                          
                          {/* دکمه افزایش تعداد */}
                          <button 
                            onClick={() => onIncrease(item)}
                            className="w-6 h-6 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-lg font-bold"
                          >
                            +
                          </button>
                        </div>

                        {/* دکمه حذف کامل */}
                        <button 
                          aria-label={`Remove ${item.name} from cart`}
                          onClick={() => removeFromCart(item.id)}
                          className="text-xs text-red-400 hover:text-red-600 underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* بخش نهایی (Total) */}
            {items.length > 0 && (
              <div className="p-6 border-t space-y-4 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] bg-white">
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