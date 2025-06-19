import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

const socialLinks = [
  { icon: Facebook, name: 'Facebook', color: 'hover:text-blue-600' },
  { icon: Twitter, name: 'Twitter', color: 'hover:text-sky-500' },
  { icon: Instagram, name: 'Instagram', color: 'hover:text-pink-500' },
  { icon: Linkedin, name: 'LinkedIn', color: 'hover:text-blue-700' },
  { icon: Youtube, name: 'YouTube', color: 'hover:text-red-500' },
];

export default function SocialLinks() {
  return (
    <section className="py-12 bg-gradient-to-r from-indigo-400 to-white text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border border-indigo-900 border-sloid   backdrop-blur-lg p-6 sm:p-8 rounded-2xl"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-4">Follow Us</h3>
          <p className="text-indigo-200 mb-6 text-sm sm:text-base">Stay updated on social media</p>
          <div className="flex flex-wrap gap-4">
            {socialLinks.map((social, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.1 }}
                className={`p-3 bg-indigo-700/30 rounded-full ${social.color} transition-all duration-300`}
                title={social.name}
              >
                <social.icon className="w-5 h-5" />
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}