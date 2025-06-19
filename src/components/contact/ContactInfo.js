import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    info: 'hello@techacademy.com',
    description: 'Send us an email anytime',
    color: 'bg-indigo-500',
  },
  {
    icon: Phone,
    title: 'Call Us',
    info: '+1 (555) 123-4567',
    description: 'Mon-Fri from 8am to 6pm',
    color: 'bg-blue-500',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    info: '123 Innovation Street',
    description: 'Tech District, NY 10001',
    color: 'bg-purple-500',
  },
  {
    icon: Clock,
    title: 'Office Hours',
    info: 'Mon - Fri: 8:00 - 18:00',
    description: 'Weekend: 10:00 - 16:00',
    color: 'bg-indigo-600',
  },
];

export default function ContactInfo() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white/70 backdrop-blur-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-100"
            >
              <div className={`${item.color} w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-indigo-800 mb-2 text-center">{item.title}</h3>
              <p className="text-base font-semibold text-gray-700 mb-1 text-center">{item.info}</p>
              <p className="text-gray-500 text-sm text-center">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}