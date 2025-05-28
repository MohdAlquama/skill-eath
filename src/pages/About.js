// import React from 'react';
// import { motion } from 'framer-motion';

// const About = () => {
//   return (
//     <div className="pt-24 bg-gray-50 min-h-screen">
//       {/* Hero Section */}
//       <motion.section
//         className="text-center px-4 md:px-16 py-12 bg-white"
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <h1 className="text-4xl md:text-5xl font-bold text-indigo-600 mb-4">About Skill Earth Academy</h1>
//         <p className="text-gray-700 max-w-3xl mx-auto text-lg">
//           Empowering learners with skills for tomorrow. We are committed to delivering top-tier education and practical training to prepare students for real-world success.
//         </p>
//       </motion.section>

//       {/* Mission and Vision */}
//       <section className="px-4 md:px-16 py-12 grid md:grid-cols-2 gap-10 items-center">
//         <motion.div
//           className="space-y-4"
//           initial={{ opacity: 0, x: -30 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-3xl font-semibold text-gray-800">Our Mission</h2>
//           <p className="text-gray-600">
//             To provide high-quality, accessible, and affordable education that transforms individuals into industry-ready professionals.
//           </p>
//         </motion.div>

//         <motion.div
//           className="space-y-4"
//           initial={{ opacity: 0, x: 30 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-3xl font-semibold text-gray-800">Our Vision</h2>
//           <p className="text-gray-600">
//             To become a leading digital learning platform that shapes the future of education and career development.
//           </p>
//         </motion.div>
//       </section>

//       {/* Core Values */}
//       <motion.section
//         className="px-4 md:px-16 py-12 bg-white"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//       >
//         <h2 className="text-3xl font-semibold text-center text-indigo-600 mb-8">What Sets Us Apart</h2>
//         <div className="grid md:grid-cols-3 gap-6">
//           {[
//             {
//               title: 'Expert Instructors',
//               desc: 'Learn from industry professionals with real-world experience.',
//             },
//             {
//               title: 'Hands-on Learning',
//               desc: 'Practice what you learn through projects, assignments, and labs.',
//             },
//             {
//               title: 'Career Support',
//               desc: 'Resume building, interview prep, and job assistance to help you succeed.',
//             },
//           ].map((item, index) => (
//             <motion.div
//               key={index}
//               className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-lg transition-shadow"
//               whileHover={{ scale: 1.03 }}
//               transition={{ duration: 0.3 }}
//             >
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
//               <p className="text-gray-600">{item.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>
//     </div>
//   );
// };

// export default About;

// import React from 'react';
// import AboutHero from '../components/AboutHero';
// import MissionVision from '../components/MissionVision';
// import CoreValues from '../components/CoreValues';

// const About = () => {
//   return (
//     <div className="pt-24 bg-gray-50 min-h-screen">
//       <AboutHero />
//       <MissionVision />
//       <CoreValues />
//     </div>
//   );
// };

// export default About;

import React from 'react';
import AboutHero from '../components/AboutHero';
import MissionVision from '../components/MissionVision';
import CoreValues from '../components/CoreValues';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Partners from '../components/Partners';
import ContactInfo from '../components/ContactInfo';

const About = () => (
  <div 
    className="pt-24 min-h-screen bg-gradient-to-b from-indigo-100 via-white to-indigo-100"
    style={{ color: '#1e3a8a' }} // dark indigo text color for consistency
  >
    <AboutHero />
    <MissionVision />
    <CoreValues />
    <Team />
    <Testimonials />
    <FAQ />
    {/* <Partners /> */}
    <ContactInfo />
  </div>
);

export default About;

