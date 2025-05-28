import React from 'react';
import { motion } from 'framer-motion';

const MissionVision = () => (
  <section className="px-4 md:px-16 py-12 grid md:grid-cols-2 gap-10 items-center">
    <motion.div
      className="space-y-4"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-semibold text-gray-800">Our Mission</h2>
      <p className="text-gray-600">
        To provide high-quality, accessible, and affordable education that transforms individuals into industry-ready professionals.
      </p>
    </motion.div>

    <motion.div
      className="space-y-4"
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-semibold text-gray-800">Our Vision</h2>
      <p className="text-gray-600">
        To become a leading digital learning platform that shapes the future of education and career development.
      </p>
    </motion.div>
  </section>
);

export default MissionVision;
