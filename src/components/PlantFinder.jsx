import React, { useState } from 'react';
import { plants } from '../data/plants';
import { motion, AnimatePresence } from 'framer-motion';


const PlantFinder = ({ addToCart }) => {
    const [step, setStep] = useState(1);

    const [answers, setAnswers] = useState({
        light: '',
        water: '',
        petSafe: null
    });

    const [result, setResult] = useState(null);

    const handleSelect = (key, value) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
    if (step < 3) {
      setStep(prev => prev + 1);
    } else {
      calculateResult({ ...answers, [key]: value });
    }
  };

  const calculateResult = (finalAnswers) => {
    const filtered = plants.filter(plant => {
      const matchLight = finalAnswers.light ? plant.light === finalAnswers.light : true;
      const matchWater = finalAnswers.water ? plant.water === finalAnswers.water : true;
      const matchPet = finalAnswers.petSafe !== null ? plant.petSafe === finalAnswers.petSafe : true;

      return matchLight && matchWater && matchPet;
    });

    setResult(filtered);
    setStep(4); // مرحله نمایش نتایج
  };

  const handleReset = () => {
    setStep(1);
    setAnswers({ light: '', water: '', petSafe: null });
    setResult(null);
  };

    return (
    <div className="pt-32 pb-20 min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="max-w-xl w-full bg-white rounded-[2.5rem] p-8 shadow-xl border border-gray-100">
        
        {/* هدر پرسشنامه */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-emerald-950">Plant Finder Wizard</h2>
          <p className="text-gray-500 text-sm mt-2">Let's find the perfect green match for your space!</p>
          {step <= 3 && (
            <div className="flex justify-center gap-2 mt-4">
              {[1, 2, 3].map(i => (
                <div key={i} className={`h-2 rounded-full transition-all duration-300 ${step === i ? 'w-8 bg-emerald-600' : 'w-2 bg-gray-200'}`} />
              ))}
            </div>
          )}
        </div>

        <AnimatePresence mode="wait">
          {/* مرحله اول: میزان نور */}
          {step === 1 && (
            <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800 text-center mb-6">How much light does your room get? ☀️</h3>
              <button onClick={() => handleSelect('light', 'low')} className="w-full p-4 rounded-2xl border-2 border-gray-100 hover:border-emerald-600 hover:bg-emerald-50 font-semibold text-gray-700 transition-all">Low Light (Shaded / Indirect)</button>
              <button onClick={() => handleSelect('light', 'medium')} className="w-full p-4 rounded-2xl border-2 border-gray-100 hover:border-emerald-600 hover:bg-emerald-50 font-semibold text-gray-700 transition-all">Medium Light (Partial Sun)</button>
              <button onClick={() => handleSelect('light', 'bright')} className="w-full p-4 rounded-2xl border-2 border-gray-100 hover:border-emerald-600 hover:bg-emerald-50 font-semibold text-gray-700 transition-all">Bright Light (Direct Sunlight)</button>
            </motion.div>
          )}

          {/* مرحله دوم: میزان آبیاری */}
          {step === 2 && (
            <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800 text-center mb-6">How often can you water your plant? 💧</h3>
              <button onClick={() => handleSelect('water', 'low')} className="w-full p-4 rounded-2xl border-2 border-gray-100 hover:border-emerald-600 hover:bg-emerald-50 font-semibold text-gray-700 transition-all">Rarely (I tend to forget)</button>
              <button onClick={() => handleSelect('water', 'medium')} className="w-full p-4 rounded-2xl border-2 border-gray-100 hover:border-emerald-600 hover:bg-emerald-50 font-semibold text-gray-700 transition-all">Moderately (Once a week)</button>
              <button onClick={() => handleSelect('water', 'high')} className="w-full p-4 rounded-2xl border-2 border-gray-100 hover:border-emerald-600 hover:bg-emerald-50 font-semibold text-gray-700 transition-all">Frequently (Regular care)</button>
            </motion.div>
          )}

          {/* مرحله سوم: حیوان خانگی */}
          {step === 3 && (
            <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800 text-center mb-6">Do you have pets at home? 🐱🐶</h3>
              <button onClick={() => handleSelect('petSafe', true)} className="w-full p-4 rounded-2xl border-2 border-gray-100 hover:border-emerald-600 hover:bg-emerald-50 font-semibold text-gray-700 transition-all">Yes, I have pets (Pet-friendly only)</button>
              <button onClick={() => handleSelect('petSafe', false)} className="w-full p-4 rounded-2xl border-2 border-gray-100 hover:border-emerald-600 hover:bg-emerald-50 font-semibold text-gray-700 transition-all">No pets / Not a concern</button>
            </motion.div>
          )}

          {/* مرحله چهارم: نمایش نتایج */}
          {step === 4 && (
            <motion.div key="result" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="space-y-6">
              <h3 className="text-2xl font-bold text-emerald-900 text-center">Your Perfect Matches 🌿</h3>
              
              {result.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <p>No exact match found with these criteria!</p>
                  <button onClick={handleReset} className="mt-4 px-6 py-2 bg-emerald-600 text-white rounded-xl font-bold">Try Again</button>
                </div>
              ) : (
                <div className="space-y-4 max-h-87.5 overflow-y-auto pr-2">
                  {result.map(plant => (
                    <div key={plant.id} className="flex items-center justify-between bg-gray-50 p-4 rounded-2xl border">
                      <div className="flex items-center gap-4">
                        <img src={`/assets/Images/${plant.img}`} alt={plant.name} className="w-16 h-16 object-cover rounded-xl" />
                        <div>
                          <h4 className="font-bold text-gray-800">{plant.name}</h4>
                          <span className="text-emerald-700 font-bold">${plant.price}</span>
                        </div>
                      </div>
                      <button 
                        onClick={() => addToCart(plant)}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-md transition-all"
                      >
                        Add +
                      </button>
                    </div>
                  ))}
                  <button onClick={handleReset} className="w-full mt-4 text-center text-sm text-gray-500 hover:text-emerald-700 underline font-semibold">
                    Retake Quiz
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default PlantFinder;

