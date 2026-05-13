import React from 'react';
import { Heart, Award, Users, Target, Clock, Sparkles } from 'lucide-react';
import maleBaker from '../assets/male-baker.png';
import femaleBaker from '../assets/female-baker.png';

const About = () => {
  return (
    <div className="bg-[#fdf8f1] min-h-screen pt-24 md:pt-32">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=1500&q=80')" }}
        ></div>
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="relative z-20 text-center px-5 max-w-4xl mx-auto" data-aos="fade-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6" style={{ fontFamily: '"Indie Flower", cursive' }}>
            Our Sweet Story
          </h1>
          <p className="text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto">
            From a small kitchen to a beloved community bakery, our journey has been fueled by passion, flour, and a whole lot of love.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 px-5 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1" data-aos="fade-right">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: '"Indie Flower", cursive' }}>
              Baking Traditions Since 1995
            </h2>
            <div className="h-1 w-20 rounded-full bg-gradient-to-r from-amber-500 to-orange-400 mb-8" />
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              It all started in a tiny apartment kitchen where the smell of freshly baked bread was a constant companion. What began as a hobby soon turned into a mission: to provide our neighborhood with the most authentic, high-quality artisanal breads and pastries possible.
            </p>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Today, Fresh Bakery is a place where community meets. We use the same traditional methods and starter cultures we began with nearly three decades ago, ensuring every bite takes you back to simpler times.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="bg-amber-100 p-2 rounded-full text-amber-500">
                  <Heart size={20} />
                </div>
                <span className="font-semibold text-gray-800">Baked with Love</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-amber-100 p-2 rounded-full text-amber-500">
                  <Sparkles size={20} />
                </div>
                <span className="font-semibold text-gray-800">Natural Ingredients</span>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative" data-aos="fade-left">
            <div className="absolute -inset-4 bg-amber-500/10 rounded-2xl -rotate-3 z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80" 
              alt="Bakery Story" 
              className="relative z-10 w-full h-[400px] object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Stats/Values Section */}
      <section className="py-16 bg-white px-5 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-8 rounded-2xl bg-amber-50 border border-amber-100 transition-all hover:shadow-lg" data-aos="fade-up" data-aos-delay="0">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-amber-500">
                <Award size={32} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">28+</h3>
              <p className="text-gray-600 font-medium uppercase tracking-wider text-sm">Years of Excellence</p>
            </div>
            <div className="p-8 rounded-2xl bg-amber-50 border border-amber-100 transition-all hover:shadow-lg" data-aos="fade-up" data-aos-delay="100">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-amber-500">
                <Users size={32} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">50k+</h3>
              <p className="text-gray-600 font-medium uppercase tracking-wider text-sm">Happy Customers</p>
            </div>
            <div className="p-8 rounded-2xl bg-amber-50 border border-amber-100 transition-all hover:shadow-lg" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-amber-500">
                <Target size={32} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">100%</h3>
              <p className="text-gray-600 font-medium uppercase tracking-wider text-sm">Natural Ingredients</p>
            </div>
            <div className="p-8 rounded-2xl bg-amber-50 border border-amber-100 transition-all hover:shadow-lg" data-aos="fade-up" data-aos-delay="300">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-amber-500">
                <Clock size={32} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Daily</h3>
              <p className="text-gray-600 font-medium uppercase tracking-wider text-sm">Freshly Baked</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24 px-5 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-3xl shadow-md border border-gray-100" data-aos="fade-right">
              <h3 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: '"Indie Flower", cursive' }}>Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                To enrich our community's lives by providing the highest quality, most nutritious, and delicious baked goods, crafted with integrity and served with a smile. We believe that good food is the foundation of a happy home.
              </p>
              <div className="h-1.5 w-12 bg-amber-500 rounded-full"></div>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-md border border-gray-100" data-aos="fade-left">
              <h3 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: '"Indie Flower", cursive' }}>Our Vision</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                To be the most respected and beloved bakery in the region, recognized for our commitment to traditional techniques, sustainable sourcing, and for fostering a culture of warmth and inclusivity for our employees and guests.
              </p>
              <div className="h-1.5 w-12 bg-amber-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-amber-500/10 via-transparent to-orange-500/10 px-5 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Indie Flower", cursive' }}>
            Meet Our Head Bakers
          </h2>
          <div className="h-1 w-20 mx-auto rounded-full bg-gradient-to-r from-amber-500 to-orange-400 mb-8" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            The hands behind the dough and the hearts behind the recipes.
          </p>
        </div>
        <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="group" data-aos="fade-up" data-aos-delay="0">
            <div className="relative overflow-hidden rounded-3xl mb-6 shadow-lg transition-transform group-hover:-translate-y-2">
              <img 
                src={maleBaker} 
                alt="Head Baker 1" 
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-1">Chef Vikram Singh</h4>
            <p className="text-amber-600 font-semibold mb-3">Master Sourdough Specialist</p>
            <p className="text-gray-600">Vikram has spent 15 years perfecting the art of long-fermentation breads.</p>
          </div>
          <div className="group" data-aos="fade-up" data-aos-delay="200">
            <div className="relative overflow-hidden rounded-3xl mb-6 shadow-lg transition-transform group-hover:-translate-y-2">
              <img 
                src={femaleBaker} 
                alt="Head Baker 2" 
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-1">Chef Anita Verma</h4>
            <p className="text-amber-600 font-semibold mb-3">Executive Pastry Chef</p>
            <p className="text-gray-600">Anita brings a delicate touch and artistic flair to every croissant and cake.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
