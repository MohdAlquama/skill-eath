import React from "react";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code, Award, ArrowRight, Menu, X, ChevronDown, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Courses from "./CoursePage";

// Hero Section
const HeroSection = () => {
  return (
    <div className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-br from-indigo-50 to-blue-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div 
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Master New Skills to <span className="text-indigo-600">Advance Your Career</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 md:pr-10">
            Join our platform to learn cutting-edge technologies from industry experts and transform your future.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <motion.button
              className="bg-indigo-600 text-white font-semibold px-8 py-3 rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.05, backgroundColor: '#4338ca' }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Courses <ArrowRight className="ml-2 h-4 w-4" />
            </motion.button>
            <motion.button
              className="border-2 border-indigo-600 text-indigo-600 font-semibold px-8 py-3 rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.05, backgroundColor: '#EEF2FF' }}
              whileTap={{ scale: 0.95 }}
            >
              Class overflow
            </motion.button>
          </div>
          <div className="mt-8 flex items-center text-gray-600">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-indigo-${i * 100} flex items-center justify-center text-white text-xs`}>
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div className="ml-4">
              <span className="font-semibold">5000+</span> students already enrolled!
            </div>
          </div>
        </motion.div>
        <motion.div 
          className="md:w-1/2 mt-10 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-yellow-300 rounded-full opacity-70"></div>
            <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-indigo-300 rounded-full opacity-70"></div>
            <div className="relative bg-white shadow-xl rounded-lg overflow-hidden">
              <div className="w-full h-64 bg-gradient-to-r from-indigo-600 to-blue-500 flex items-center justify-center">
                <img src="/api/placeholder/600/400" alt="Learning Platform" className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <motion.div
                  className="bg-white shadow-lg rounded-lg p-4 flex items-center"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="p-2 bg-indigo-100 rounded-lg mr-4">
                    <BookOpen className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Learn at your own pace</h3>
                    <p className="text-sm text-gray-600">Access courses 24/7</p>
                  </div>
                </motion.div>
                <motion.div
                  className="mt-4 bg-white shadow-lg rounded-lg p-4 flex items-center"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="p-2 bg-indigo-100 rounded-lg mr-4">
                    <Award className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Earn certificates</h3>
                    <p className="text-sm text-gray-600">Showcase your skills</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Features Section
const FeaturesSection = () => {
  const features = [
    {
      icon: <BookOpen className="h-8 w-8 text-indigo-600" />,
      title: 'Comprehensive Curriculum',
      description: 'Our courses cover everything from basics to advanced topics with hands-on projects.'
    },
    {
      icon: <Code className="h-8 w-8 text-indigo-600" />,
      title: 'Industry-relevant Skills',
      description: 'Learn technologies and tools that are in-demand in the current job market.'
    },
    {
      icon: <Award className="h-8 w-8 text-indigo-600" />,
      title: 'Expert Instructors',
      description: 'Learn from professionals with years of experience in their respective fields.'
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose Skill Earth Academy</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We provide a complete learning experience designed to help you achieve your career goals.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="p-4 bg-indigo-50 rounded-full inline-block">
                {feature.icon}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Popular Courses Section
const PopularCoursesSection = () => {
  const courses = [
    {
      title: 'Web Development Masterclass',
      category: 'Development',
      level: 'Intermediate',
      lessons: 42,
      price: '$89',
      image: '/api/placeholder/300/200'
    },
    {
      title: 'UI/UX Design Fundamentals',
      category: 'Design',
      level: 'Beginner',
      lessons: 36,
      price: '$69',
      image: '/api/placeholder/300/200'
    },
    {
      title: 'Advanced React Patterns',
      category: 'Development',
      level: 'Advanced',
      lessons: 28,
      price: '$99',
      image: '/api/placeholder/300/200'
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Popular Courses</h2>
            <p className="mt-2 text-lg text-gray-600">Explore our highest-rated and most popular courses</p>
          </motion.div>
          <motion.button
            className="hidden md:flex items-center text-indigo-600 font-medium"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ x: 5 }}
          >
            View All Courses <ArrowRight className="ml-2 h-4 w-4" />
          </motion.button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative">
                <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-indigo-600">
                  {course.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
                <div className="mt-2 flex justify-between text-sm text-gray-600">
                  <span>Level: {course.level}</span>
                  <span>{course.lessons} Lessons</span>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-2xl font-bold text-indigo-600">{course.price}</span>
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Enroll Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-10 flex justify-center md:hidden">
          <button className="flex items-center text-indigo-600 font-medium">
            View All Courses <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Testimonials Section
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Frontend Developer",
      image: "/api/placeholder/100/100",
      text: "The courses at Skill Earth Academy transformed my career. The instructors are knowledgeable and the content is always up-to-date with industry standards."
    },
    {
      name: "Michael Chen",
      role: "UX Designer",
      image: "/api/placeholder/100/100",
      text: "I've taken multiple design courses here and each one has helped me improve my skills. The community support is amazing too!"
    },
    {
      name: "Priya Sharma",
      role: "Full Stack Developer",
      image: "/api/placeholder/100/100",
      text: "The project-based learning approach helped me build a portfolio while learning. I landed my dream job right after completing the advanced web development course."
    }
  ];

  return (
    <div className="py-16 bg-indigo-600 text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">What Our Students Say</h2>
          <p className="mt-4 text-lg text-indigo-100 max-w-2xl mx-auto">
            Hear from our community of learners who have transformed their careers through our platform.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-white text-gray-800 p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Newsletter Section
const NewsletterSection = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Stay Updated with Our Newsletter</h2>
          <p className="mt-4 text-lg text-gray-600">
            Get the latest course updates, industry insights, and special offers directly to your inbox.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <motion.button
              className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded-full"
              whileHover={{ scale: 1.05, backgroundColor: '#4338ca' }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </div>
  );
};
function Home() {
 return (
    <div className="min-h-screen flex flex-col">
    
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        {/* <PopularCoursesSection /> */}
        <Courses/>
        <TestimonialsSection />
        <NewsletterSection />
      </main>
      
    </div>
  );
}

export default Home;
