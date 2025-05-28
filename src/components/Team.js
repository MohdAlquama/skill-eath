import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  { name: 'John Doe', role: 'CEO', img: '/team/john.jpg' },
  { name: 'Jane Smith', role: 'Lead Instructor', img: '/team/jane.jpg' },
  { name: 'Alex Johnson', role: 'Developer', img: '/team/alex.jpg' },
];

const Team = () => (
  <motion.section
    className="px-4 md:px-16 py-12"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <h2 className="text-3xl font-semibold text-center text-indigo-600 mb-8">Meet Our Team</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {teamMembers.map(({ name, role, img }) => (
        <motion.div
          key={name}
          className="bg-white p-6 rounded-xl shadow text-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img src={img} alt={name} className="w-32 h-32 mx-auto rounded-full object-cover mb-4" />
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-indigo-600">{role}</p>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default Team;
