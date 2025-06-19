import { motion } from 'framer-motion';

export default function MapSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-indigo-800 mb-4">Find Us</h2>
          <p className="text-gray-600 text-sm sm:text-base">Visit our campus in the tech district</p>
        </motion.div>
        <div className="rounded-2xl overflow-hidden h-80 sm:h-96 w-full shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.311921548286!2d77.31008707549596!3d28.50026167573724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce73672f2599b%3A0x649e526d7737cf5f!2sDelhi%20Skill%20Development%20Center%7C%20Government%20Computer%20Course%7CWeb%20Designing%7CDigital%20Marketing%7CGraphic%7CCoding%7CEthical%20Hacking%7C!5e0!3m2!1sen!2sin!4v1748078331054!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="DSDC Location Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
}