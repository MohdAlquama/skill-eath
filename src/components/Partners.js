import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  { name: 'WTF', logo: '/partners/companyA.png' },

];

const Partners = () => (
  <motion.section
    className="px-4 md:px-16 py-12 bg-indigo-50"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <h2 className="text-3xl font-semibold text-center text-indigo-600 mb-8">Our Associat Partner</h2>
    <div className="flex justify-center items-center space-x-8">
      {partners.map(({ name, logo }) => (
        <motion.img
          key={name}
          src={logo}
          alt={name}
          className="h-16 object-contain"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
      ))}
    </div>
  </motion.section>
);

export default Partners;
