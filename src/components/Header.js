import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'Courses', 'About', 'Contact'];

  const getPath = (item) => (item === 'Home' ? '/' : `/${item.toLowerCase()}`);

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <span className="text-2xl font-bold text-indigo-600">Skill Earth</span>
          <span className="text-2xl font-bold text-gray-800 ml-1">Academy</span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={getPath(item)}
                className={`font-medium ${
                  isScrolled ? 'text-gray-800 hover:text-indigo-600' : 'text-gray-800 hover:text-indigo-600'
                }`}
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <motion.button
          className="hidden md:flex items-center bg-indigo-600 text-white px-6 py-2 rounded-full font-medium"
          whileHover={{ scale: 1.05, backgroundColor: '#4338ca' }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started <ArrowRight className="ml-2 h-4 w-4" />
        </motion.button>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-white shadow-xl"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-2 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item}
                to={getPath(item)}
                className="block py-2 px-4 text-gray-800 hover:bg-indigo-50 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <button className="w-full mt-4 bg-indigo-600 text-white px-4 py-2 rounded-full font-medium flex items-center justify-center">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;


































// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Menu, X, ArrowRight } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navItems = ['Home', 'Courses', 'About', 'Contact'];

//   const getPath = (item) => (item === 'Home' ? '/' : `/${item.toLowerCase()}`);

//   return (
//     <motion.header
//       className={`fixed w-full z-50 transition-all duration-300 ${
//         isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
//       }`}
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           className="flex items-center"
//         >
//           <img src='/assests/logo.png' alt="Skill Earth Academy Logo" className="h-10 w-10" />
//           <span className="text-2xl font-bold text-indigo-600">Skill Earth</span>
//           <span className="text-2xl font-bold text-gray-800 ml-1">Academy</span>
//         </motion.div>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex space-x-8">
//           {navItems.map((item) => (
//             <motion.div
//               key={item}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <Link
//                 to={getPath(item)}
//                 className={`font-medium ${
//                   isScrolled ? 'text-gray-800 hover:text-indigo-600' : 'text-gray-800 hover:text-indigo-600'
//                 }`}
//               >
//                 {item}
//               </Link>
//             </motion.div>
//           ))}
//         </nav>

//         {/* Desktop CTA Button */}
//         <motion.button
//           className="hidden md:flex items-center bg-indigo-600 text-white px-6 py-2 rounded-full font-medium"
//           whileHover={{ scale: 1.05, backgroundColor: '#4338ca' }}
//           whileTap={{ scale: 0.95 }}
//         >
//           Get Started <ArrowRight className="ml-2 h-4 w-4" />
//         </motion.button>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
//             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <motion.div
//           className="md:hidden bg-white shadow-xl"
//           initial={{ opacity: 0, height: 0 }}
//           animate={{ opacity: 1, height: 'auto' }}
//           transition={{ duration: 0.3 }}
//         >
//           <div className="px-4 py-2 space-y-2">
//             {navItems.map((item) => (
//               <Link
//                 key={item}
//                 to={getPath(item)}
//                 className="block py-2 px-4 text-gray-800 hover:bg-indigo-50 rounded"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 {item}
//               </Link>
//             ))}
//             <button className="w-full mt-4 bg-indigo-600 text-white px-4 py-2 rounded-full font-medium flex items-center justify-center">
//               Get Started <ArrowRight className="ml-2 h-4 w-4" />
//             </button>
//           </div>
//         </motion.div>
//       )}
//     </motion.header>
//   );
// };

// export default Header;
