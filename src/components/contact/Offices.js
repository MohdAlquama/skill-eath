import { motion } from 'framer-motion';

const offices = [
  {
    city: 'New York',
    address: '123 Innovation Street, NY 10001',
    phone: '+1 (555) 123-4567',
    email: 'ny@techacademy.com',
  },
  {
    city: 'San Francisco',
    address: '456 Tech Valley, CA 94105',
    phone: '+1 (555) 987-6543',
    email: 'sf@techacademy.com',
  },
  {
    city: 'London',
    address: '789 Digital Lane, London EC1A 1BB',
    phone: '+44 20 7123 4567',
    email: 'london@techacademy.com',
  },
];

export default function Offices() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-lg p-6 sm:p-8 rounded-2xl shadow-lg"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-indigo-800 mb-6">Our Offices</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offices.map((office, index) => (
              <div key={index} className="border-l-4 border-indigo-500 pl-4">
                <h4 className="font-bold text-base sm:text-lg text-indigo-800">{office.city}</h4>
                <p className="text-gray-600 text-sm mb-1">{office.address}</p>
                <p className="text-gray-600 text-sm mb-1">{office.phone}</p>
                <p className="text-indigo-600 text-sm">{office.email}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}