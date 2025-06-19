import React from "react";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code, Award, ArrowRight, Menu, X, ChevronDown, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin} from 'lucide-react';
import Courses from "./CoursePage";
import { Users, User } from 'lucide-react';
import courses from "../data/courses";
import { FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

// Hero Section
// const HeroSection = () => {
//   return (
//     <div className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-br from-indigo-50 to-blue-50">
//       <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
//         <motion.div 
//           className="md:w-1/2"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
//             Master New Skills to <span className="text-indigo-600">Advance Your Career</span>
//           </h1>
//           <p className="mt-4 text-lg text-gray-600 md:pr-10">
//             Join our platform to learn cutting-edge technologies from industry experts and transform your future.
//           </p>
//           <div className="mt-8 flex flex-col sm:flex-row gap-4">
//             <motion.button
//               className="bg-indigo-600 text-white font-semibold px-8 py-3 rounded-full flex items-center justify-center"
//               whileHover={{ scale: 1.05, backgroundColor: '#4338ca' }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Explore Courses <ArrowRight className="ml-2 h-4 w-4" />
//             </motion.button>
//             <motion.button
//               className="border-2 border-indigo-600 text-indigo-600 font-semibold px-8 py-3 rounded-full flex items-center justify-center"
//               whileHover={{ scale: 1.05, backgroundColor: '#EEF2FF' }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Class overflow
//             </motion.button>
//           </div>
//           <div className="mt-8 flex items-center text-gray-600">
//             <div className="flex -space-x-2">
//               {[1, 2, 3, 4].map((i) => (
//                 <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-indigo-${i * 100} flex items-center justify-center text-white text-xs`}>
//                   {String.fromCharCode(64 + i)}
//                 </div>
//               ))}
//             </div>
//             <div className="ml-4">
//               <span className="font-semibold">5000+</span> students already enrolled!
//             </div>
//           </div>
//         </motion.div>
//         <motion.div 
//           className="md:w-1/2 mt-10 md:mt-0"
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           <div className="relative">
//             <div className="absolute -top-6 -left-6 w-20 h-20 bg-yellow-300 rounded-full opacity-70"></div>
//             <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-indigo-300 rounded-full opacity-70"></div>
//             <div className="relative bg-white shadow-xl rounded-lg overflow-hidden">
//               <div className="w-full h-64 bg-gradient-to-r from-indigo-600 to-blue-500 flex items-center justify-center">
//                 <img src="/api/placeholder/600/400" alt="Learning Platform" className="h-full w-full object-cover" />
//               </div>
//               <div className="p-6">
//                 <motion.div
//                   className="bg-white shadow-lg rounded-lg p-4 flex items-center"
//                   initial={{ y: 20, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ delay: 0.6 }}
//                 >
//                   <div className="p-2 bg-indigo-100 rounded-lg mr-4">
//                     <BookOpen className="h-6 w-6 text-indigo-600" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold">Learn at your own pace</h3>
//                     <p className="text-sm text-gray-600">Access courses 24/7</p>
//                   </div>
//                 </motion.div>
//                 <motion.div
//                   className="mt-4 bg-white shadow-lg rounded-lg p-4 flex items-center"
//                   initial={{ y: 20, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ delay: 0.8 }}
//                 >
//                   <div className="p-2 bg-indigo-100 rounded-lg mr-4">
//                     <Award className="h-6 w-6 text-indigo-600" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold">Earn certificates</h3>
//                     <p className="text-sm text-gray-600">Showcase your skills</p>
//                   </div>
//                 </motion.div>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };




const HeroSection = () => {
  return (
         <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-l from-white to-indigo-400"> 
         {/* <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black to-gray via-zinc-600">  */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-300 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12 sm:mt-4">   
         {/* <div className="mb-8 animate-fade-in-down">
            <span className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-4 shadow-lg">
              🎓 Shaping Future Leaders Since 2009
            </span>
          </div> */}
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-indigo-600 leading-tight tracking-tight mb-6 animate-fade-in-up">
            Master New Skills At 
            <span className="block text-indigo-900">Skills Earth Academy</span>
          </h1>
          
          <p className="text-lg text-indigo-950 max-w-2xl mx-auto mb-4 animate-fade-in-up animation-delay-200">
            Unlock your potential with cutting-edge courses taught by industry experts. Transform your future today with world-class education.
          </p>
          
          <p className="text-base text-indigo- font-medium max-w-xl mx-auto mb-10 animate-fade-in-up animation-delay-300">
            Join thousands of learners and start your journey to success with Skill Earth Academy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up animation-delay-400">
            <Link to="/courses">
            <button className="group bg-white text-indigo-600 font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2 text-lg">
              <span>Explore Courses</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            </Link>
            <Link to="/contact">
            <button className="group border-2 border-indigo-100 text-indigo-400 font-semibold px-8 py-4 rounded-full hover:bg-indigo-100 hover:text-indigo-600 transition-all duration-300 transform hover:scale-105 text-lg">
              Learn More
            </button>
            </Link>
          </div>

          {/* Student Enrollment Animation */}
          <div className="flex flex-col items-center text-indigo-950 mb-12 animate-fade-in-up animation-delay-500">
            <div className="flex -space-x-3 mb-4">
              {[
                { bg: 'bg-indigo-300', char: 'A' },
                { bg: 'bg-indigo-200', char: 'B' },
                { bg: 'bg-white text-indigo-600', char: 'C' },
                { bg: 'bg-indigo-100 text-indigo-700', char: 'D' }
              ].map((item, i) => (
                <div
                  key={item.char}
                  className={`w-10 h-10 rounded-full border-2 border-b-black ${item.bg} flex items-center justify-center text-sm font-medium shadow-lg hover:scale-110 transition-transform duration-300 animate-bounce`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {item.char}
                </div>
              ))}
            </div>
            <div className="text-base font-semibold mb-4 ">
              <span className="text-2xl font-bold">5000+</span> students already enrolled!
            </div>
            <div className="w-64 h-3 bg-white rounded-full overflow-hidden shadow-inner">
              <div 
                className="h-full bg-indigo-500 rounded-full animate-progress-fill shadow-sm"
                style={{ 
                  width: '75%',
                  animation: 'progress-fill 2s ease-out 1s both'
                }}
              ></div>
            </div>
          </div>

          {/* Animated Stats */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group animate-fade-in-up" style={{ animationDelay: `${0.6 + index * 0.1}s` }}>
                <div className="w-16 h-16 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-opacity-30 transition-all duration-300 shadow-lg">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 animate-counter">{stat.number}</div>
                <div className="text-indigo-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div> */}
        </div>

        <style jsx>{`
          @keyframes fade-in-down {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes progress-fill {
            from {
              width: 0%;
            }
            to {
              width: 75%;
            }
          }
          
          .animate-fade-in-down {
            animation: fade-in-down 0.8s ease-out both;
          }
          
          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out both;
          }
          
          .animation-delay-200 {
            animation-delay: 0.2s;
          }
          
          .animation-delay-300 {
            animation-delay: 0.3s;
          }
          
          .animation-delay-400 {
            animation-delay: 0.4s;
          }
          
          .animation-delay-500 {
            animation-delay: 0.5s;
          }
          
          .animate-progress-fill {
            animation: progress-fill 2s ease-out 1s both;
          }
        `}</style>
      </section>
  );
};






// Features Section
const FeaturesSection = () => {
    const features = [
    {
      icon: <BookOpen className="h-8 w-8 text-indigo-600" />,  // matched with HeroSection color
      title: 'Comprehensive Curriculum',
      description: 'Courses covering fundamentals to advanced projects with real-world applications.',
    },
    {
      icon: <Code className="h-8 w-8 text-indigo-600" />,
      title: 'Industry-Relevant Skills',
      description: 'Gain in-demand tech skills aligned with current industry needs and roles.',
    },
    {
      icon: <Award className="h-8 w-8 text-indigo-600" />,
      title: 'Expert Instructors',
      description: 'Learn from mentors with extensive real-world experience and teaching passion.',
    },
  ];

  const testimonials = [
    "Himanshu Singh",
    "Rupesh Mahto",
    "Rohan Thakur",
    "Himanshu Yadav",
    "Dhananjay Kumar",
    "Nitesh Kumar",
    "Antima Rai",
    "Kuldeep Rawat",
    "Jannat Afreen",
    "Nisha Chattarjee",
    "Aastha Gupta",
    "Pooja Sharma",
    "Amarjeet Kumar"
  ];

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Why Choose <span className="text-indigo-600">Skills Earth Academy</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              A complete learning ecosystem designed to unlock your career success.
            </p>
          </motion.div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group p-6 bg-white rounded-2xl shadow-md border border-indigo-100 hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.03 }}
              >
                <div className="p-4 bg-indigo-100 bg-opacity-30 rounded-full inline-block mb-4 transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
    </>
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
    "Himanshu Singh",
    "Rupesh Mahto",
    "Rohan Thakur",
    "Himanshu Yadav",
    "Dhananjay Kumar",
    "Nitesh Kumar",
    "Antima Rai",
    "Kuldeep Rawat",
  
    "Nisha Chattarjee",
    "Aastha Gupta",
    "Pooja Sharma",
    "Amarjeet Kumar"
  ];

  return (

      <section className="py-20 bg-gradient-to-l from-indigo-400 to-white text-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              What Our Students Say
            </h2>
            <p className="mt-4 text-lg text-black max-w-2xl mx-auto">
              Hear from our community of learners who have transformed their careers through our platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {testimonials.map((name, index) => (
              <motion.div
                key={name}
                className="bg-white text-gray-800 p-6 rounded-xl shadow-lg border border-indigo-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-300 text-white flex items-center justify-center font-bold text-lg mr-4">
                    {name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{name}</h3>
                    <p className="text-sm text-gray-500">Student</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  Skills Earth Academy gave me the confidence and knowledge I needed to grow. I’m thankful for the real-world projects and expert mentorship.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  );
};

// Newsletter Section
// const NewsletterSection = () => {
//   return (
//     <div className="py-16 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <motion.div 
//           className="max-w-3xl mx-auto text-center"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Stay Updated with Our Newsletter</h2>
//           <p className="mt-4 text-lg text-gray-600">
//             Get the latest course updates, industry insights, and special offers directly to your inbox.
//           </p>
//           <div className="mt-8 flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
//             <input 
//               type="email" 
//               placeholder="Enter your email address" 
//               className="flex-grow px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//             />
//             <motion.button
//               className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded-full"
//               whileHover={{ scale: 1.05, backgroundColor: '#4338ca' }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Subscribe
//             </motion.button>
//           </div>
//           <p className="mt-4 text-sm text-gray-500">
//             We respect your privacy. Unsubscribe at any time.
//           </p>
//         </motion.div>
//       </div>
//     </div>
//   );
// };




const NewsletterSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-4 text-indigo-600">
            <FiMail className="w-10 h-10" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Stay Updated with Our Newsletter
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Get the latest course updates, industry insights, and special offers
            directly to your inbox.
          </p>

          <form className="mt-8 flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              required
            />
            <motion.button
              type="submit"
              className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded-full"
              whileHover={{ scale: 1.05, backgroundColor: "#4338ca" }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </form>

          <p className="mt-4 text-sm text-gray-500">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};




function Home() {
 return (
    <div className="min-h-screen flex flex-col">
    
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />

        {/* <PopularCoursesSection /> */}
        <section className="py-20 bg-gradient-to-l from-indigo-400 to-white text-indigo-950">
  <div className="container mx-auto px-6">
    <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
      <div className="mb-8 md:mb-0 text-center md:text-left max-w-xl">
       <h2 className="text-3xl md:text-4xl font-extrabold mb-4 drop-shadow-md">
  Your Journey to <span className="underline decoration-black">Success</span> Starts Here
</h2>
<p className="text-lg md:text-xl text-black leading-relaxed">
  Discover expert-led coaching, personalized support, and the tools you need to thrive. Schedule a <strong>free session</strong> today.
</p>

      </div>
      <div>
  <Link to="/contact">
   <button className="bg-white text-indigo-600 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center space-x-2">
        <span>Get Started Now</span>
        <ArrowRight className="w-5 h-5" />
      </button>
  </Link>

      </div>
    </div>
  </div>
</section>

     <section className="py-20 bg-gradient-to-r from-white to-white text-gray-800">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-indigo-600">
      Amazing Training Programs
    </h2>
    <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
      We are highly recognized in the field of training. At Techpile, we provide exceptional development training programs led by experienced professionals. Join our popular programs and gain industry-relevant skills from expert consultants.
    </p>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => (
        <div
          key={course.id}
          className="bg-indigo-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-indigo-500"
        >
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-48 object-cover rounded-xl mb-4"
          />
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">{course.title}</h3>
          <p className="text-gray-700 text-sm mb-4 line-clamp-3">{course.description}</p>
          <div className="flex items-center justify-between text-sm font-medium text-indigo-600">
            <span>Duration: {course.duration}</span>
            <span>Price: {course.price}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>




        <TestimonialsSection />

   {/* Contact Section */}
     <section className="py-20 bg-gradient-to-r from-white to-white">
  <div className="container mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Contact Info */}
      <div>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-indigo-950">
          Contact Us
        </h2>
        <div className="h-1 w-20 bg-indigo-500 mb-6"></div>
        <p className="text-black mb-10 text-lg leading-relaxed">
          Have questions or ready to start your project? Reach out to our team using any of the methods below.
        </p>

        <div className="space-y-8">
          {/* Address */}
          <div className="flex items-start">
            <div className="text-indigo-500 mr-4 mt-1">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-800">Address</h3>
              <p className="text-black">
                B-8, New Delhi Main Rd, Aggarwal Market, Molarband <br/> Badarpur, New Delhi, Delhi 110044
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start">
            <div className="text-indigo-500 mr-4 mt-1">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-800">Email</h3>
              <p className="text-black">setbizsolutions@gmail.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start">
            <div className="text-indigo-500 mr-4 mt-1">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-800">Phone</h3>
              <p className="text-black">9026226199</p> 
               <p className="text-black">9625042987</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-gray-50 p-8 rounded-xl shadow-xl">
        <h3 className="text-2xl font-bold mb-6 text-gray-800">Send Us a Message</h3>
        <form>
          <div className="mb-5">
            <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">Full Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-3 rounded-md bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 outline-none transition"
              placeholder="John Doe"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">Email Address</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 rounded-md bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 outline-none transition"
              placeholder="you@example.com"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">Your Message</label>
            <textarea
              id="message"
              rows="4"
              className="w-full px-4 py-3 rounded-md bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 outline-none transition"
              placeholder="How can we help you?"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 rounded-md font-bold shadow-md transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
</section>

        {/* <NewsletterSection /> */}
      </main>
      
    </div>
  );
}

export default Home;
