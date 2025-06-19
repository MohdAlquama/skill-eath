import { motion } from 'framer-motion';

export default function ContactHeader() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
      className="pt-20 pb-12 md:pt-28 md:pb-16 overflow-hidden bg-gradient-to-l from-white to-indigo-400"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-indigo-900 mb-4">
          Connect With Us
        </h1>
        <p className="text-indigo-950 max-w-2xl mx-auto text-base sm:text-lg">
          We're here to help. Reach out with any questions, and we'll respond promptly.
        </p>
      </div>
    </motion.header>
  );
}