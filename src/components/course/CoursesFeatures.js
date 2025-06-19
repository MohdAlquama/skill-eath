import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, BookOpen, Globe } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Flexible Learning',
    description: 'Learn at your own pace with 24/7 access to course materials.',
    color: 'bg-indigo-500',
  },
  {
    icon: Users,
    title: 'Expert Instructors',
    description: 'Gain insights from industry professionals with real-world experience.',
    color: 'bg-green-500',
  },
  {
    icon: BookOpen,
    title: 'Comprehensive Content',
    description: 'Access in-depth resources, quizzes, and hands-on projects.',
    color: 'bg-purple-500',
  },
  {
    icon: Globe,
    title: 'Global Community',
    description: 'Connect with learners worldwide and share your journey.',
    color: 'bg-indigo-600',
  },
];

export default function CoursesFeatures() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
      className="py-12 bg-white/80 backdrop-blur-lg rounded-2xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-indigo-700 text-center mb-8">
        Why Choose Our Courses?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-100"
          >
            <div className={`${feature.color} w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4`}>
              <feature.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-indigo-800 text-center mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm text-center">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}