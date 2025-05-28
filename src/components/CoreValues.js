import React from 'react';
import { motion } from 'framer-motion';

const CoreValues = () => {
  const values = [
    {
      title: 'Expert Instructors',
      desc: 'Learn from industry professionals with real-world experience.',
    },
    {
      title: 'Hands-on Learning',
      desc: 'Practice what you learn through projects, assignments, and labs.',
    },
    {
      title: 'Career Support',
      desc: 'Resume building, interview prep, and job assistance to help you succeed.',
    },
    {
      title: 'Flexible Learning',
      desc: 'Learn at your own pace with our online and offline courses.',
    },
  ];

  return (
    <motion.section
      className="px-4 md:px-16 py-12 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-semibold text-center text-indigo-600 mb-8">What Sets Us Apart</h2>
      <div className="grid md:grid-cols-4 gap-6">
        {values.map((item, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default CoreValues;
