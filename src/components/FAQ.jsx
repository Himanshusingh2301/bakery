import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Do you offer gluten-free or vegan options?",
    answer: "Yes! We have a dedicated selection of gluten-free breads and vegan pastries baked fresh every morning."
  },
  {
    question: "Can I order a custom cake for a special occasion?",
    answer: "Absolutely! We specialize in custom cakes for birthdays, weddings, and anniversaries. Please place your order at least 48 hours in advance."
  },
  {
    question: "What are your delivery hours and charges?",
    answer: "We deliver from 8:00 AM to 8:00 PM within a 10km radius. Delivery is free for orders above ₹500."
  },
  {
    question: "How long do your artisan breads stay fresh?",
    answer: "Our sourdough and artisan breads are best enjoyed within 2-3 days. You can also slice and freeze them for up to a month!"
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-16 lg:py-18">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-10" data-aos="fade-down">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Indie Flower", cursive' }}>Frequently Asked Questions</h2>
          <div className="h-1 w-20 mx-auto rounded-full bg-gradient-to-r from-amber-500 to-orange-400 mb-4" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <button
                className="w-full px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-amber-50 transition-colors cursor-pointer"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-800 text-left">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-amber-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="text-gray-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-white text-gray-600 border-t border-gray-100">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
