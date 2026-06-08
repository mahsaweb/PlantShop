import React from 'react';
import { motion } from 'framer-motion'; //  کتابخانه انیمیشن

const ContactUs = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="pt-32 pb-20 min-h-screen bg-emerald-950 relative overflow-hidden font-sans">

      {/* المان‌های تزیینی پس‌زمینه (دایره‌های محو) */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
          variants={fadeIn}
          className="text-center mb-16"  >
          <h1 className="text-5xl font-bold text-white mb-4 italic">Get in Touch</h1>
          <p className="text-emerald-200/70 text-lg">We'd love to hear from you. Our team is always here to help.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 text-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-lg p-8 rounded-[2.5rem] border border-white/10 shadow-2xl"
          >
            <form className="space-y-5">
              <div>
                <label htmlFor="contact-name" className="text-emerald-100 text-sm mb-2 block font-semibold">Full Name</label>
                <input
                  id="contact-name"
                  type="text"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all placeholder:text-white/20"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="text-emerald-100 text-sm mb-2 block font-semibold">Email Address</label>
                <input
                  id="contact-email"
                  type="email"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all placeholder:text-white/20"
                  placeholder="hello@example.com"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="text-emerald-100 text-sm mb-2 block font-semibold">Message</label>
                <textarea
                  id="contact-message"
                  rows="4"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all placeholder:text-white/20"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              {/* دکمه ارسال با افکت کلیک و هوور */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold py-4 rounded-2xl shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all uppercase tracking-wider"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* بخش اطلاعات تماس - انیمیشن ورود از سمت راست */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col justify-center space-y-8"
          >
            {/* کارت ایمیل */}
            <div className="bg-white/5 p-6 rounded-3xl border border-white/5 hover:bg-white/10 transition-all group">
              <h3 className="text-emerald-400 font-bold text-xl mb-1">Email Us</h3>
              <p className="text-emerald-100/70 group-hover:text-white transition-colors">support@plantshop.com</p>
            </div>

            {/* کارت تلفن */}
            <div className="bg-white/5 p-6 rounded-3xl border border-white/5 hover:bg-white/10 transition-all group">
              <h3 className="text-emerald-400 font-bold text-xl mb-1">Call Us</h3>
              <p className="text-emerald-100/70 group-hover:text-white transition-colors">+98 (21) 12345678</p>
            </div>

            {/* کارت آدرس */}
            <div className="bg-white/5 p-6 rounded-3xl border border-white/5 hover:bg-white/10 transition-all group">
              <h3 className="text-emerald-400 font-bold text-xl mb-1">Visit Our Studio</h3>
              <p className="text-emerald-100/70 group-hover:text-white transition-colors">
                123 Green Avenue, Garden District<br />New York, NY 10001
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default ContactUs;