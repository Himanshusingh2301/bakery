import React, { useState } from 'react';
import Products from '../components/Products';
import { ShoppingBag, Star, Zap, ShieldCheck } from 'lucide-react';

const ProductsPage = ({ addToCart }) => {
  return (
    <div className="bg-[#fdf8f1] min-h-screen pt-24 md:pt-32">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-500/5 rounded-l-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-orange-500/5 rounded-r-full blur-3xl -z-10"></div>
        
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-16">
          <div className="text-center" data-aos="fade-up">
            <span className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-600 font-bold text-sm tracking-widest uppercase mb-4">
              Our Online Store
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6" style={{ fontFamily: '"Indie Flower", cursive' }}>
              Freshly Baked For You
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
              Browse our complete collection of artisanal breads, pastries, cakes, and donuts. Baked fresh every single morning using premium ingredients.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Strip */}
      <section className="bg-white border-y border-gray-100 py-10 mb-10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-center gap-4 justify-center md:justify-start" data-aos="fade-up" data-aos-delay="0">
              <div className="bg-amber-100 p-3 rounded-2xl text-amber-500">
                <ShoppingBag size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Easy Ordering</h4>
                <p className="text-xs text-gray-500">Click and collect</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-start" data-aos="fade-up" data-aos-delay="100">
              <div className="bg-amber-100 p-3 rounded-2xl text-amber-500">
                <Zap size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Same Day</h4>
                <p className="text-xs text-gray-500">Fast delivery</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-start" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-amber-100 p-3 rounded-2xl text-amber-500">
                <Star size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Premium Quality</h4>
                <p className="text-xs text-gray-500">Best ingredients</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-start" data-aos="fade-up" data-aos-delay="300">
              <div className="bg-amber-100 p-3 rounded-2xl text-amber-500">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">100% Secure</h4>
                <p className="text-xs text-gray-500">Payment protection</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Products Component */}
      <div className="pb-20">
        <Products addToCart={addToCart} />
      </div>

      {/* Featured Banner */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-16 mb-20">
        <div className="relative rounded-[2rem] overflow-hidden bg-[#2D1A11] p-10 md:p-16 text-center text-white shadow-2xl" data-aos="zoom-in">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/p6.png')]"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: '"Indie Flower", cursive' }}>
              Want a Custom Cake?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Planning a special event? Our master bakers can create the perfect cake tailored to your unique requirements and style.
            </p>
            <button className="water-wave-btn px-10 py-4 bg-amber-500 text-white rounded-full font-bold text-lg hover:bg-amber-600 transition-all transform hover:scale-105 active:scale-95 shadow-xl">
              Order Custom Cake
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
