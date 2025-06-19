// import { useState } from 'react';
// import { Mail, Phone, MapPin, Clock, MessageCircle, Send, User, Building2, Globe, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
// import { m } from 'framer-motion';
// export default function ContactPage() {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         phone: '',
//         subject: '',
//         message: '',
//         inquiryType: ''
//     });

//     const [isSubmitting, setIsSubmitting] = useState(false);

//     const handleFormChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setIsSubmitting(true);

//         // Simulate form submission
//         setTimeout(() => {
//             alert('Thank you for your message! We\'ll get back to you within 24 hours.');
//             setFormData({
//                 name: '',
//                 email: '',
//                 phone: '',
//                 subject: '',
//                 message: '',
//                 inquiryType: ''
//             });
//             setIsSubmitting(false);
//         }, 2000);
//     };

//     const contactInfo = [
//         {
//             icon: Mail,
//             title: 'Email Us',
//             info: 'hello@techacademy.com',
//             description: 'Send us an email anytime',
//             color: 'bg-blue-500'
//         },
//         {
//             icon: Phone,
//             title: 'Call Us',
//             info: '+1 (555) 123-4567',
//             description: 'Mon-Fri from 8am to 6pm',
//             color: 'bg-green-500'
//         },
//         {
//             icon: MapPin,
//             title: 'Visit Us',
//             info: '123 Innovation Street',
//             description: 'Tech District, NY 10001',
//             color: 'bg-purple-500'
//         },
//         {
//             icon: Clock,
//             title: 'Office Hours',
//             info: 'Mon - Fri: 8:00 - 18:00',
//             description: 'Weekend: 10:00 - 16:00',
//             color: 'bg-orange-500'
//         }
//     ];

//     const offices = [
//         {
//             city: 'New York',
//             address: '123 Innovation Street, NY 10001',
//             phone: '+1 (555) 123-4567',
//             email: 'ny@techacademy.com'
//         },
//         {
//             city: 'San Francisco',
//             address: '456 Tech Valley, CA 94105',
//             phone: '+1 (555) 987-6543',
//             email: 'sf@techacademy.com'
//         },
//         {
//             city: 'London',
//             address: '789 Digital Lane, London EC1A 1BB',
//             phone: '+44 20 7123 4567',
//             email: 'london@techacademy.com'
//         }
//     ];

//     const socialLinks = [
//         { icon: Facebook, name: 'Facebook', color: 'hover:text-blue-600' },
//         { icon: Twitter, name: 'Twitter', color: 'hover:text-sky-500' },
//         { icon: Instagram, name: 'Instagram', color: 'hover:text-pink-500' },
//         { icon: Linkedin, name: 'LinkedIn', color: 'hover:text-blue-700' },
//         { icon: Youtube, name: 'YouTube', color: 'hover:text-red-500' }
//     ];

//     return (
//         <div className="min-h-screen bg-gray-50">
//             {/* Header */}
//           <m.header
//   initial={{ opacity: 3 }}
//   whileInView={{ opacity: 1 }}
//   transition={{ duration: 0.6 }}
//   viewport={{ once: true, amount: 0.3 }} // triggers earlier and only once
//   className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-br from-indigo-50 to-blue-50 will-change-transform"
// >
//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//     <h1 className="text-4xl md:text-5xl font-bold text-indigo-600 mb-4">
//       Get In Touch
//     </h1>
//     <p className="text-gray-700 max-w-3xl mx-auto text-lg">
//       We'd love to hear from you. Send us a message and we'll respond as soon as possible.
//     </p>
//   </div>
// </m.header>

//             {/* Contact Info Cards */}
//             <section className="py-16 bg-white ">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//                         {contactInfo.map((item, index) => {
//                             const IconComponent = item.icon;
//                             return (
//                                 <div key={index} className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
//                                     <div className={`${item.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
//                                         <IconComponent className="w-8 h-8 text-white" />
//                                     </div>
//                                     <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
//                                     <p className="text-lg font-semibold text-gray-800 mb-1">{item.info}</p>
//                                     <p className="text-gray-600">{item.description}</p>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </section>

//             {/* Main Contact Section */}
//             <section className="py-16 bg-gray-50">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="grid lg:grid-cols-2 gap-12">
//                         {/* Contact Form */}
//                         <div className="bg-white p-8 rounded-2xl shadow-xl">
//                             <div className="mb-8">
//                                 <h2 className="text-3xl font-bold text-gray-900 mb-4">Send us a Message</h2>
//                                 <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
//                             </div>

//                             <div className="space-y-6">
//                                 <div className="grid md:grid-cols-2 gap-6">
//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
//                                         <input
//                                             type="text"
//                                             name="name"
//                                             value={formData.name}
//                                             onChange={handleFormChange}
//                                             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
//                                             placeholder="John Doe"
//                                             required
//                                         />
//                                     </div>
//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
//                                         <input
//                                             type="email"
//                                             name="email"
//                                             value={formData.email}
//                                             onChange={handleFormChange}
//                                             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
//                                             placeholder="john@example.com"
//                                             required
//                                         />
//                                     </div>
//                                 </div>

//                                 <div className="grid md:grid-cols-2 gap-6">
//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
//                                         <input
//                                             type="tel"
//                                             name="phone"
//                                             value={formData.phone}
//                                             onChange={handleFormChange}
//                                             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
//                                             placeholder="+1 (555) 123-4567"
//                                         />
//                                     </div>
//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700 mb-2">Inquiry Type</label>
//                                         <select
//                                             name="inquiryType"
//                                             value={formData.inquiryType}
//                                             onChange={handleFormChange}
//                                             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
//                                         >
//                                             <option value="">Select type...</option>
//                                             <option value="general">General Inquiry</option>
//                                             <option value="courses">Course Information</option>
//                                             <option value="admission">Admission Process</option>
//                                             <option value="support">Technical Support</option>
//                                             <option value="partnership">Partnership</option>
//                                         </select>
//                                     </div>
//                                 </div>

//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
//                                     <input
//                                         type="text"
//                                         name="subject"
//                                         value={formData.subject}
//                                         onChange={handleFormChange}
//                                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
//                                         placeholder="What can we help you with?"
//                                         required
//                                     />
//                                 </div>

//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
//                                     <textarea
//                                         name="message"
//                                         value={formData.message}
//                                         onChange={handleFormChange}
//                                         rows="6"
//                                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
//                                         placeholder="Tell us more about your inquiry..."
//                                         required
//                                     ></textarea>
//                                 </div>

//                                 <button
//                                     onClick={handleSubmit}
//                                     disabled={isSubmitting}
//                                     className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
//                                 >
//                                     {isSubmitting ? (
//                                         <>
//                                             <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
//                                             <span>Sending...</span>
//                                         </>
//                                     ) : (
//                                         <>
//                                             <Send className="w-5 h-5" />
//                                             <span>Send Message</span>
//                                         </>
//                                     )}
//                                 </button>
//                             </div>
//                         </div>

//                         {/* Additional Contact Info */}
//                         <div className="space-y-8">
//                             {/* Why Contact Us */}
//                             <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
//                                 <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Contact Us?</h3>
//                                 <div className="space-y-4">
//                                     <div className="flex items-start space-x-3">
//                                         <MessageCircle className="w-6 h-6 text-blue-600 mt-1" />
//                                         <div>
//                                             <h4 className="font-semibold text-gray-900">Quick Response</h4>
//                                             <p className="text-gray-600">We respond to all inquiries within 24 hours</p>
//                                         </div>
//                                     </div>
//                                     <div className="flex items-start space-x-3">
//                                         <User className="w-6 h-6 text-green-600 mt-1" />
//                                         <div>
//                                             <h4 className="font-semibold text-gray-900">Personal Consultation</h4>
//                                             <p className="text-gray-600">Get personalized advice from our experts</p>
//                                         </div>
//                                     </div>
//                                     <div className="flex items-start space-x-3">
//                                         <Building2 className="w-6 h-6 text-purple-600 mt-1" />
//                                         <div>
//                                             <h4 className="font-semibold text-gray-900">Campus Visits</h4>
//                                             <p className="text-gray-600">Schedule a visit to our modern facilities</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Our Offices */}
//                             <div className="bg-white p-8 rounded-2xl shadow-lg">
//                                 <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Offices</h3>
//                                 <div className="space-y-6">
//                                     {offices.map((office, index) => (
//                                         <div key={index} className="border-l-4 border-blue-500 pl-4">
//                                             <h4 className="font-bold text-lg text-gray-900">{office.city}</h4>
//                                             <p className="text-gray-600 mb-1">{office.address}</p>
//                                             <p className="text-gray-600 mb-1">{office.phone}</p>
//                                             <p className="text-blue-600">{office.email}</p>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>

//                             {/* Social Media */}
//                             <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl text-white">
//                                 <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
//                                 <p className="text-gray-300 mb-6">Stay connected with us on social media for updates and news</p>
//                                 <div className="flex space-x-4">
//                                     {socialLinks.map((social, index) => {
//                                         const IconComponent = social.icon;
//                                         return (
//                                             <button
//                                                 key={index}
//                                                 className={`p-3 bg-white/10 rounded-full text-white ${social.color} transition-all duration-300 hover:bg-white/20 transform hover:scale-110`}
//                                                 title={social.name}
//                                             >
//                                                 <IconComponent className="w-6 h-6" />
//                                             </button>
//                                         );
//                                     })}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Map Section */}
//             <section className="py-16 bg-white">
//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//     <div className="text-center mb-12">
//       <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
//       <p className="text-gray-600">Visit our main campus in the heart of the tech district</p>
//     </div>
//     <div className="rounded-2xl overflow-hidden h-96 w-full shadow-md">
//       <iframe
//         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.311921548286!2d77.31008707549596!3d28.50026167573724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce73672f2599b%3A0x649e526d7737cf5f!2sDelhi%20Skill%20Development%20Center%7C%20Government%20Computer%20Course%7CWeb%20Designing%7CDigital%20Marketing%7CGraphic%7CCoding%7CEthical%20Hacking%7C!5e0!3m2!1sen!2sin!4v1748078331054!5m2!1sen!2sin"
//         width="100%"
//         height="100%"
//         style={{ border: 0 }}
//         allowFullScreen=""
//         loading="lazy"
//         referrerPolicy="no-referrer-when-downgrade"
//         title="DSDC Location Map"
//       ></iframe>
//     </div>
//   </div>
// </section>

//             {/* <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
//             <p className="text-gray-600">Visit our main campus in the heart of the tech district</p>
//           </div>
//           <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
//             <div className="text-center">
//               <Globe className="w-16 h-16 text-gray-400 mx-auto mb-4" />
//               <p className="text-gray-600">Interactive Map</p>
//               <p className="text-sm text-gray-500">123 Innovation Street, Tech District, NY 10001</p>
//             </div>
//           </div>
//         </div>
//       </section> */}

//             {/* FAQ Section */}
//             <section className="py-16 bg-gray-50">
//                 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="text-center mb-12">
//                         <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
//                         <p className="text-gray-600">Quick answers to common questions</p>
//                     </div>
//                     <div className="space-y-6">
//                         {[
//                             {
//                                 question: "What are your office hours?",
//                                 answer: "We're open Monday to Friday from 8:00 AM to 6:00 PM, and weekends from 10:00 AM to 4:00 PM."
//                             },
//                             {
//                                 question: "How quickly do you respond to inquiries?",
//                                 answer: "We aim to respond to all inquiries within 24 hours during business days."
//                             },
//                             {
//                                 question: "Can I schedule a campus visit?",
//                                 answer: "Absolutely! Contact us to schedule a personalized campus tour and meet with our admissions team."
//                             },
//                             {
//                                 question: "Do you offer virtual consultations?",
//                                 answer: "Yes, we offer virtual consultations via video call for your convenience."
//                             }
//                         ].map((faq, index) => (
//                             <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
//                                 <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
//                                 <p className="text-gray-600">{faq.answer}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }



import { useState } from 'react';
import ContactHeader from '../components/contact/ContactHeader';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';
import Offices from '../components/contact/Offices';
import SocialLinks from '../components/contact/SocialLinks';
import MapSection from '../components/contact/MapSection';
import FAQSection from '../components/contact/FAQSection';
import { motion } from 'framer-motion';
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',

    message: '',
    inquiryType: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! We\'ll get back to you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        inquiryType: '',
      });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-indigo-400 pt-16">
      <ContactHeader />
       <ContactInfo />
       <ContactForm
        formData={formData}
        handleFormChange={handleFormChange}
        handleSubmit={handleSubmit}
        isSubmitting={isSubmitting}
      />
      <Offices />
   
      <MapSection/>
      <FAQSection /> 
    </div>
  );
}