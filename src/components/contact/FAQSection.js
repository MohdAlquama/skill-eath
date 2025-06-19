import { motion } from 'framer-motion';

const faqs = [
  {
    question: 'What are your office hours?',
    answer: 'Monday to Friday from 8:00 AM to 6:00 PM, and weekends from 10:00 AM to 4:00 PM.',
  },
  {
    question: 'How quickly do you respond to inquiries?',
    answer: 'We aim to respond within 24 hours during business days.',
  },
  {
    question: 'Can I schedule a campus visit?',
    answer: 'Yes! Contact us to arrange a personalized campus tour.',
  },
  {
    question: 'Do you offer virtual consultations?',
    answer: 'Yes, virtual consultations are available via video call.',
  },
];

export default function FAQSection() {
  return (
    <section className="py-12 bg-gradient-to-l from-indigo-400 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-indigo-800 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 text-sm sm:text-base">Quick answers to common questions</p>
        </motion.div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-lg p-4 sm:p-6 rounded-lg shadow-sm"
            >
              <h3 className="font-semibold text-indigo-800 mb-2 text-sm sm:text-base">{faq.question}</h3>
              <p className="text-gray-600 text-sm">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}