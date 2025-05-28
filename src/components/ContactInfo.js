import React from 'react';
import { motion } from 'framer-motion';

const ContactInfo = () => (
  <motion.section
    className="px-4 md:px-16 py-12 bg-white"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <h2 className="text-3xl font-semibold text-center text-indigo-600 mb-8">Get in Touch</h2>
    <div className="max-w-2xl mx-auto text-center text-gray-700 space-y-4">
      <p>Email: <a href="mailto:contact@skillEarthacademy.com" className="text-indigo-600">contact@skillEarthacademy.com</a></p>
      <p>Phone: <a href="tel:+1234567890" className="text-indigo-600">+1 (234) 567-890</a></p>
      <p>Address: 123 Skill Earth Street, Knowledge City, Country</p>
    </div>
  </motion.section>
);

export default ContactInfo;
