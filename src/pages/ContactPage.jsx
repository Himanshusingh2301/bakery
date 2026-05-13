import React from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="bg-[#fdf8f1] min-h-screen pt-24 md:pt-32">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden text-center">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-16" data-aos="fade-up">
          <span className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-600 font-bold text-sm tracking-widest uppercase mb-4">
            Contact Us
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6" style={{ fontFamily: '"Indie Flower", cursive' }}>
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Have a question about our baked goods or want to discuss a custom order? We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-24 px-5 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side: Contact Info */}
          <div className="space-y-8" data-aos="fade-right">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: '"Indie Flower", cursive' }}>
                Contact Information
              </h2>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                Visit our bakery or reach out to us through any of the following channels. Our team is always here to help you.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:shadow-lg transition-all">
                <div className="bg-amber-100 p-4 rounded-2xl text-amber-500 mb-4 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                  <Phone size={24} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Call Us</h4>
                <p className="text-gray-600 text-sm">+91 98765 43210</p>
                <p className="text-gray-600 text-sm">+91 01234 56789</p>
              </div>

              <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:shadow-lg transition-all">
                <div className="bg-amber-100 p-4 rounded-2xl text-amber-500 mb-4 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                  <Mail size={24} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Email Us</h4>
                <p className="text-gray-600 text-sm">hello@freshbakery.com</p>
                <p className="text-gray-600 text-sm">orders@freshbakery.com</p>
              </div>

              <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:shadow-lg transition-all">
                <div className="bg-amber-100 p-4 rounded-2xl text-amber-500 mb-4 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                  <MapPin size={24} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Location</h4>
                <p className="text-gray-600 text-sm">123 Bakery Lane,</p>
                <p className="text-gray-600 text-sm">Food City, India</p>
              </div>

              <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:shadow-lg transition-all">
                <div className="bg-amber-100 p-4 rounded-2xl text-amber-500 mb-4 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                  <Clock size={24} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Working Hours</h4>
                <p className="text-gray-600 text-sm">Mon-Sat: 8am - 8pm</p>
                <p className="text-gray-600 text-sm">Sun: 10am - 4pm</p>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-bold text-gray-900 mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-400 hover:bg-amber-500 hover:text-white transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-400 hover:bg-amber-500 hover:text-white transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-400 hover:bg-amber-500 hover:text-white transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div data-aos="fade-left">
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl -mr-10 -mt-10"></div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-8" style={{ fontFamily: '"Indie Flower", cursive' }}>
                Send Us a Message
              </h3>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                    <input type="text" placeholder="John" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-amber-500 transition-all" required />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                    <input type="text" placeholder="Doe" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-amber-500 transition-all" required />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-amber-500 transition-all" required />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                  <select className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-amber-500 transition-all appearance-none" required>
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="order">Custom Order</option>
                    <option value="feedback">Feedback</option>
                    <option value="support">Support</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Your Message</label>
                  <textarea rows="5" placeholder="How can we help you?" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-amber-500 transition-all resize-none" required></textarea>
                </div>
                
                <button className="water-wave-btn w-full py-5 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:shadow-lg transition-all transform active:scale-95 shadow-md">
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[350px] md:h-[450px] w-full bg-gray-200 grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.877024840132!2d80.942475975437!3d26.843889176686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be0!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1715588000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Bakery Location"
        ></iframe>
      </section>
    </div>
  );
};

export default ContactPage;
