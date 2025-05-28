// import React from 'react';
// import { motion } from 'framer-motion';

// const courses = [
//   {
//     id: 1,
//     title: 'Full Stack Web Development',
//     description: 'Learn front-end and back-end development with React, Node.js, and databases.',
//     image: 'https://source.unsplash.com/400x300/?code,programming',
//   },
//   {
//     id: 2,
//     title: 'Data Science & Machine Learning',
//     description: 'Master Python, data analysis, and machine learning algorithms.',
//     image: 'https://source.unsplash.com/400x300/?data,ai',
//   },
//   {
//     id: 3,
//     title: 'UI/UX Design Fundamentals',
//     description: 'Understand design principles and create user-friendly interfaces.',
//     image: 'https://source.unsplash.com/400x300/?design,ui',
//   },
//   {
//     id: 4,
//     title: 'Digital Marketing',
//     description: 'Explore SEO, social media marketing, and online brand building.',
//     image: 'https://source.unsplash.com/400x300/?marketing,business',
//   },
// ];

// const CourseCard = ({ title, description, image }) => (
//   <motion.div
//     whileHover={{ scale: 1.05 }}
//     transition={{ type: 'spring', stiffness: 300 }}
//     className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
//   >
//     <img src={image} alt={title} className="w-full h-48 object-cover" />
//     <div className="p-4">
//       <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
//       <p className="text-gray-600 mb-4">{description}</p>
//       <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">
//         Enroll Now
//       </button>
//     </div>
//   </motion.div>
// );

// const Courses = () => (
//   <div className="pt-24 bg-gray-50 min-h-screen px-4 md:px-16">
//     <motion.h1
//       className="text-4xl font-bold text-center text-indigo-600 mb-12"
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//     >
//       Our Courses
//     </motion.h1>

//     <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//       {courses.map((course) => (
//         <CourseCard key={course.id} {...course} />
//       ))}
//     </div>
//   </div>
// );

// export default Courses;
// import React from 'react';
// import CourseList from '../components/CourseList';

// const Courses = () => {
//   return (
//   <div className="pt-24 px-4 md:px-16 bg-gradient-to-b from-white to-indigo-50 min-h-screen">
//       {/* Header Section */}
//       <div className="text-center max-w-3xl mx-auto mb-10">
//         <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-4">
//           Explore Our Courses
//         </h1>
//         <p className="text-gray-600 text-lg md:text-xl">
//           Gain real-world skills with our expertly designed curriculum — learn at your own pace, anytime, anywhere.
//         </p>
//       </div>

//       {/* Course List Component */}
//       <div className="max-w-7xl mx-auto">
//         <CourseList />
//       </div>
//     </div>
//   );
// };

// export default Courses;

import React from 'react';
import { motion } from 'framer-motion';
import CourseList from '../components/CourseList';

const Courses = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="pt-24 px-4 md:px-16 bg-gradient-to-b from-white to-green-50 min-h-screen"
    >
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-center max-w-3xl mx-auto mb-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
          Explore  Courses
        </h1>
        <p className="text-gray-700 text-lg md:text-xl">
          Discover courses learn at your own pace, anywhere.
        </p>
      </motion.div>

      {/* Course List Component */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <CourseList />
      </motion.div>
    </motion.div>
  );
};

export default Courses;
