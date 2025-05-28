import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  { q: 'How do I enroll in a course?', a: 'Just create an account and select your desired course to get started.' },
  { q: 'Are the courses self-paced?', a: 'Yes, you can learn at your own pace with lifetime access to the content.' },
  { q: 'Do you provide certification?', a: 'Absolutely! You get certificates on successful completion of courses.' },
];

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      layout
      className="bg-white rounded-lg shadow p-4 cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <motion.h3 className="font-semibold text-indigo-600">{question}</motion.h3>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden mt-2 text-gray-700"
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => (
  <motion.section
    className="px-4 md:px-16 py-12"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <h2 className="text-3xl font-semibold text-center text-indigo-600 mb-8">Frequently Asked Questions</h2>
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map(({ q, a }) => (
        <FAQItem key={q} question={q} answer={a} />
      ))}
    </div>
  </motion.section>
);

export default FAQ;
