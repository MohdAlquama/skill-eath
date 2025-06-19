import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Web Developer',
    quote: 'The courses here transformed my career. The hands-on projects were invaluable!',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Data Analyst',
    quote: 'Flexible learning allowed me to balance work and study. Highly recommend!',
    rating: 4,
  },
  {
    name: 'Emma Davis',
    role: 'UX Designer',
    quote: 'The instructors are top-notch, and the community support is amazing.',
    rating: 5,
  },
];

export default function CoursesTestimonials() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
      className="py-12 bg-indigo-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-indigo-700 text-center mb-8">
        What Our Students Say
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-white/80 backdrop-blur-lg shadow-lg border border-indigo-100"
          >
            <div className="flex mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-600 text-sm mb-4 italic">"{testimonial.quote}"</p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-indigo-200 rounded-full mr-3"></div>
              <div>
                <h4 className="font-semibold text-indigo-800 text-sm">{testimonial.name}</h4>
                <p className="text-gray-500 text-xs">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}