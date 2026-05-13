import React from 'react';
import { Star, MessageSquare } from 'lucide-react';

const feedbacks = [
  {
    id: 1,
    name: "Priya Sharma",
    rating: 5,
    text: "The best sourdough bread I've ever had! It's so fresh and has the perfect crust. Will definitely order again."
  },
  {
    id: 2,
    name: "Rahul Verma",
    rating: 5,
    text: "Ordered a custom chocolate truffle cake for my daughter's birthday. It looked beautiful and tasted amazing!"
  },
  {
    id: 3,
    name: "Anjali Gupta",
    rating: 4,
    text: "Love their croissants and danishes. Perfect for my morning coffee. Great packaging and quick delivery."
  }
];

export default function Feedback() {
  return (
    <section className="bg-amber-50/50 px-5 py-16 sm:px-8 lg:px-16 lg:py-18">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-10" data-aos="fade-down">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Indie Flower", cursive' }}>Customer Feedback</h2>
          <div className="h-1 w-20 mx-auto rounded-full bg-gradient-to-r from-amber-500 to-orange-400 mb-4" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">See what our lovely customers have to say about our baked goods.</p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {feedbacks.map((feedback) => (
            <div key={feedback.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" data-aos="fade-up">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className={i < feedback.rating ? "text-amber-500 fill-amber-500" : "text-gray-300"} />
                ))}
              </div>
              <p className="text-gray-600 italic mb-4 leading-relaxed">"{feedback.text}"</p>
              <h4 className="font-semibold text-gray-800">- {feedback.name}</h4>
            </div>
          ))}
        </div>

        {/* Feedback Form */}
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-amber-100/50 relative overflow-hidden" data-aos="zoom-in">
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
          
          <div className="flex items-center justify-center gap-3 mb-8 relative z-10">
            <div className="bg-amber-100 p-3 rounded-full text-amber-500">
              <MessageSquare size={24} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">Leave Your Feedback</h3>
          </div>
          
          <form className="space-y-5 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all bg-gray-50/50" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all bg-gray-50/50" required />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button type="button" key={star} className="text-gray-300 hover:text-amber-500 transition-colors focus:outline-none cursor-pointer">
                    <Star size={24} />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Experience</label>
              <textarea placeholder="Tell us what you loved..." rows="4" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all bg-gray-50/50 resize-none" required></textarea>
            </div>
            
            <button className="water-wave-btn w-full py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl font-semibold text-lg hover:shadow-lg transition-all transform active:scale-95 cursor-pointer">
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
