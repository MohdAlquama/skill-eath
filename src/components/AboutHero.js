import React from 'react';
import { motion } from 'framer-motion';

const AboutHero = () => (
  <motion.section
    className="text-center px-4 md:px-16 py-12 bg-white"
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <h1 className="text-4xl md:text-5xl font-bold text-indigo-600 mb-4">About Skill Earth Academy</h1>
    <p className="text-gray-700 max-w-3xl mx-auto text-lg">
      Empowering learners with skills for tomorrow. We are committed to delivering top-tier education and practical training to prepare students for real-world success.
    </p>
  </motion.section>
);

export default AboutHero;
