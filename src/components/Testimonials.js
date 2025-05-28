import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  { name: 'Sara Lee', feedback: 'Best learning platform ever! The courses are so practical.' },
  { name: 'Mark Twain', feedback: 'Amazing instructors and support throughout my learning journey.' },
  { name: 'Anna Kim', feedback: 'The career services helped me land my dream job!' },
];

const Testimonials = () => (
  <motion.section
    className="px-4 md:px-16 py-12 bg-indigo-50"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <h2 className="text-3xl font-semibold text-center text-indigo-600 mb-8">What Our Students Say</h2>
    <div className="max-w-4xl mx-auto space-y-6">
      {testimonials.map(({ name, feedback }) => (
        <motion.div
          key={name}
          className="bg-white p-6 rounded-xl shadow"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <p className="italic text-gray-700">"{feedback}"</p>
          <p className="mt-4 font-semibold text-indigo-600">- {name}</p>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default Testimonials;
