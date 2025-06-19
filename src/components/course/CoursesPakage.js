import React from 'react';
import { motion } from 'framer-motion';
import CoursesFeatures from './CoursesFeatures';
import CourseList from '../CourseList';
import CoursesTestimonials from './CoursesTestimonials';


const CoursesPakage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="pt-16 px-4 sm:px-6 lg:px-16 bg-gradient-to-b from-indigo-50 to-green-50 min-h-screen"
    >
      {/* <CoursesHeader /> */}
      <CoursesFeatures />
      <CourseList />
       <CoursesTestimonials />
      {/* <CoursesFAQ />
      <CoursesCTA />  */}
    </motion.div>
  );
};

export default CoursesPakage;