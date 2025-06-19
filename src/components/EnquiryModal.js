
// export default function EnquiryModal() {
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsOpen(true);
//     }, 1000); // open after 1 second

//     return () => clearTimeout(timer);
//   }, []);

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
//       <div className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full relative">
//         <button
//           className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
//           onClick={() => setIsOpen(false)}
//         >
//           ✕
//         </button>
//         <h2 className="text-xl font-bold text-indigo-700 mb-4">Enquiry Form</h2>
//         <form className="space-y-4">
//           <input
//             type="text"
//             placeholder="Your Name"
//             className="w-full border border-gray-300 rounded-md p-2"
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full border border-gray-300 rounded-md p-2"
//           />
//           <textarea
//             placeholder="Your Message"
//             className="w-full border border-gray-300 rounded-md p-2"
//           />
//           <button
//             type="submit"
//             className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }


// import { useEffect, useState } from "react";
// import { Send } from "lucide-react";
// import { motion } from "framer-motion";

// export default function EnquiryModal({ formData, handleFormChange, handleSubmit, isSubmitting }) {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setIsVisible(true), 1000); // show after 1s
//     return () => clearTimeout(timer);
//   }, []);

//   if (!isVisible) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
//       <motion.div
//         initial={{ opacity: 0, y: 60 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.4 }}
//         className="bg-white max-w-4xl w-full rounded-2xl shadow-xl overflow-y-auto max-h-[90vh] relative"
//       >
//         {/* Close Button */}
//         <button
//           onClick={() => setIsVisible(false)}
//           className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl z-10"
//         >
//           &times;
//         </button>

//         {/* Modal Content */}
//         <section className="py-10 px-6 sm:px-10">
//           <div className="text-center mb-6">
//             <h2 className="text-2xl font-bold text-indigo-700">Enquiry Form</h2>
//             <p className="text-gray-600 text-sm mt-1">We usually respond within 24 hours</p>
//           </div>

//           <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={formData.name}
//               onChange={handleFormChange}
//               className="border border-gray-300 p-2 rounded-md"
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleFormChange}
//               className="border border-gray-300 p-2 rounded-md"
//               required
//             />
//             <input
//               type="tel"
//               name="phone"
//               placeholder="Phone"
//               value={formData.phone}
//               onChange={handleFormChange}
//               className="border border-gray-300 p-2 rounded-md"
//             />
//             <input
//               type="text"
//               name="inquiryType"
//               placeholder="Inquiry Type"
//               value={formData.inquiryType}
//               onChange={handleFormChange}
//               className="border border-gray-300 p-2 rounded-md"
//             />
//             <input
//               type="text"
//               name="subject"
//               placeholder="Subject"
//               value={formData.subject}
//               onChange={handleFormChange}
//               className="border border-gray-300 p-2 rounded-md col-span-1 md:col-span-2"
//             />
//             <textarea
//               name="message"
//               placeholder="Your Message"
//               value={formData.message}
//               onChange={handleFormChange}
//               rows="4"
//               className="border border-gray-300 p-2 rounded-md col-span-1 md:col-span-2"
//               required
//             ></textarea>
//             <button
//               type="submit"
//               className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md flex items-center justify-center gap-2 col-span-1 md:col-span-2"
//               disabled={isSubmitting}
//             >
//               <Send size={18} />
//               {isSubmitting ? "Sending..." : "Submit Enquiry"}
//             </button>
//           </form>
//         </section>
//       </motion.div>
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import { Send } from "lucide-react";
// import { motion } from "framer-motion";
// import toast from "react-hot-toast";

// export default function EnquiryModal({
//   formData,
//   handleFormChange,
//   handleSubmit,
//   isSubmitting,
//   setIsVisible
// }) {
//   const [localVisible, setLocalVisible] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setLocalVisible(true), 1000);
//     return () => clearTimeout(timer);
//   }, []);

//   const handleLocalSubmit = async (e) => {
//     e.preventDefault();
//     await handleSubmit(e);

//     toast.success("Your enquiry was submitted successfully!");
//     setTimeout(() => setLocalVisible(false), 500); // smooth close
//     if (setIsVisible) setIsVisible(false); // also update parent if needed
//   };

//   if (!localVisible) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
//       <motion.div
//         initial={{ opacity: 0, y: 60 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.4 }}
//         className="bg-white max-w-4xl w-full rounded-2xl shadow-xl overflow-y-auto max-h-[90vh] relative"
//       >
//         <button
//           onClick={() => setLocalVisible(false)}
//           className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl z-10"
//         >
//           &times;
//         </button>

//         <section className="py-10 px-6 sm:px-10">
//           <div className="text-center mb-6">
//             <h2 className="text-2xl font-bold text-indigo-700">Enquiry Form</h2>
//             <p className="text-gray-600 text-sm mt-1">We usually respond within 24 hours</p>
//           </div>

//           <form onSubmit={handleLocalSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={formData.name}
//               onChange={handleFormChange}
//               className="border border-gray-300 p-2 rounded-md"
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleFormChange}
//               className="border border-gray-300 p-2 rounded-md"
//               required
//             />
//             <input
//               type="tel"
//               name="phone"
//               placeholder="Phone"
//               value={formData.phone}
//               onChange={handleFormChange}
//               className="border border-gray-300 p-2 rounded-md"
//             />
//             <input
//               type="text"
//               name="inquiryType"
//               placeholder="Inquiry Type"
//               value={formData.inquiryType}
//               onChange={handleFormChange}
//               className="border border-gray-300 p-2 rounded-md"
//             />
//             <input
//               type="text"
//               name="subject"
//               placeholder="Subject"
//               value={formData.subject}
//               onChange={handleFormChange}
//               className="border border-gray-300 p-2 rounded-md col-span-1 md:col-span-2"
//             />
//             <textarea
//               name="message"
//               placeholder="Your Message"
//               value={formData.message}
//               onChange={handleFormChange}
//               rows="4"
//               className="border border-gray-300 p-2 rounded-md col-span-1 md:col-span-2"
//               required
//             ></textarea>
//             <button
//               type="submit"
//               className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md flex items-center justify-center gap-2 col-span-1 md:col-span-2"
//               disabled={isSubmitting}
//             >
//               <Send size={18} />
//               {isSubmitting ? "Sending..." : "Submit Enquiry"}
//             </button>
//           </form>
//         </section>
//       </motion.div>
//     </div>
//   );
// }


// import { useEffect, useState } from "react";
// import { Send } from "lucide-react";
// import { motion } from "framer-motion";

// export default function EnquiryModal({
//   formData,
//   handleFormChange,
//   handleSubmit,
//   isSubmitting,
//   setModalVisible,
// }) {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setIsVisible(true), 1000);
//     return () => clearTimeout(timer);
//   }, []);

//   const handleClose = () => {
//     setIsVisible(false);
//     setTimeout(() => setModalVisible(false), 400); // Delay to allow animation
//   };

//   if (!isVisible) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
//       <motion.div
//         initial={{ opacity: 0, y: 60 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: 60 }}
//         transition={{ duration: 0.4 }}
//         className="bg-white max-w-4xl w-full rounded-2xl shadow-xl overflow-y-auto max-h-[90vh] relative"
//       >
//         <button
//           onClick={handleClose}
//           className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl z-10"
//         >
//           ×
//         </button>

//         <section className="py-10 px-6 sm:px-10">
//           <div className="text-center mb-6">
//             <h2 className="text-2xl font-bold text-indigo-700">Enquiry Form</h2>
//             <p className="text-gray-600 text-sm mt-1">We usually respond within 24 hours</p>
//           </div>

//           <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={formData.name}
//               onChange={handleFormChange}
//               className="border border-gray-300 p-2 rounded-md"
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleFormChange}
//               className="border border-gray-300 p-2 rounded-md"
//               required
//             />
//             <input
//               type="tel"
//               name="phone"
//               placeholder="Phone"
//               value={formData.phone}
//               onChange={handleFormChange}
//               className="border border-gray-300 p-2 rounded-md"
//             />
//             <input
//               type="text"
//               name="inquiryType"
//               placeholder="Inquiry Type"
//               value={formData.inquiryType}
//               onChange={handleFormChange}
//               className="border border-gray-300 p-2 rounded-md"
//             />
//             <input
//               type="text"
//               name="subject"
//               placeholder="Subject"
//               value={formData.subject}
//               onChange={handleFormChange}
//               className="border border-gray-300 p-2 rounded-md col-span-1 md:col-span-2"
//             />
//             <textarea
//               name="message"
//               placeholder="Your Message"
//               value={formData.message}
//               onChange={handleFormChange}
//               rows="4"
//               className="border border-gray-300 p-2 rounded-md col-span-1 md:col-span-2"
//               required
//             ></textarea>
//             <button
//               type="submit"
//               className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md flex items-center justify-center gap-2 col-span-1 md:col-span-2"
//               disabled={isSubmitting}
//             >
//               <Send size={18} />
//               {isSubmitting ? "Sending..." : "Submit Enquiry"}
//             </button>
//           </form>
//         </section>
//       </motion.div>
//     </div>
//   );
// }


// import { useEffect, useState } from "react";
// import { Send } from "lucide-react";
// import { motion } from "framer-motion";

// export default function EnquiryModal({
//   formData,
//   handleFormChange,
//   handleSubmit,
//   isSubmitting,
//   setModalVisible,
// }) {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setIsVisible(true), 1000);
//     return () => clearTimeout(timer);
//   }, []);

//   const handleClose = () => {
//     setIsVisible(false);
//     setTimeout(() => setModalVisible(false), 400); // Delay to allow animation
//   };

//   if (!isVisible) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
//       <motion.div
//         initial={{ opacity: 0, y: 60 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: 60 }}
//         transition={{ duration: 0.4 }}
//         className="bg-white max-w-4xl w-full rounded-2xl shadow-xl overflow-y-auto max-h-[90vh] relative"
//       >
//         <button
//           onClick={handleClose}
//           className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl z-10"
//         >
//           ×
//         </button>

//         <section className="py-10 px-6 sm:px-10">
//           <div className="text-center mb-6">
//             <h2 className="text-2xl font-bold text-indigo-700">Enquiry Form</h2>
//             <p className="text-gray-600 text-sm mt-1">We usually respond within 24 hours</p>
//           </div>

//           <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={formData.name}
//               onChange={handleFormChange}
//               className="border border-gray-300 p-2 rounded-md"
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleFormChange}
//               className="border border-gray-300 p-2 rounded-md"
//               required
//             />
//             <input
//               type="tel"
//               name="phone"
//               value={formData.phone}
//               onChange={(e) => {
//                 // Only allow numbers
//                 const onlyNums = e.target.value.replace(/\D/g, "");
//                 setFormData({ ...formData, phone: onlyNums });
//               }}
//               maxLength="10"
//               required
//             />
//             <select
//               name="inquiryType"
//               value={formData.inquiryType}
//               onChange={handleFormChange}
//               className="border border-gray-300 p-2 rounded-md"
//             >
//               <option value="">Select Enquiry Type</option>
//               <option value="Admin Enquiry">Admin Enquiry</option>
//               <option value="General Enquiry">General Enquiry</option>
//               <option value="Support Enquiry">Support Enquiry</option>
//               <option value="Other">Other</option>
//             </select>
//             <input
//               type="text"
//               name="subject"
//               placeholder="Subject"
//               value={formData.subject}
//               onChange={handleFormChange}
//               className="border border-gray-300 p-2 rounded-md col-span-1 md:col-span-2"
//             />
//             <textarea
//               name="message"
//               placeholder="Your Message"
//               value={formData.message}
//               onChange={handleFormChange}
//               rows="4"
//               className="border border-gray-300 p-2 rounded-md col-span-1 md:col-span-2"
//               required
//             ></textarea>
//             <button
//               type="submit"
//               className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md flex items-center justify-center gap-2 col-span-1 md:col-span-2"
//               disabled={isSubmitting}
//             >
//               <Send size={18} />
//               {isSubmitting ? "Sending..." : "Submit Enquiry"}
//             </button>
//           </form>
//         </section>
//       </motion.div>
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import { Send } from "lucide-react";
import { motion } from "framer-motion";

export default function EnquiryModal({
  formData,
  handleFormChange,
  handleSubmit,
  isSubmitting,
  setModalVisible,
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => setModalVisible(false), 400);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 60 }}
        transition={{ duration: 0.4 }}
        className="bg-white max-w-4xl w-full rounded-2xl shadow-xl overflow-y-auto max-h-[90vh] relative"
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl z-10"
        >
          ×
        </button>

        <section className="py-10 px-6 sm:px-10">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-indigo-700">Enquiry Form</h2>
            <p className="text-gray-600 text-sm mt-1">We usually respond within 24 hours</p>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleFormChange}
              className="border border-gray-300 p-2 rounded-md"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleFormChange}
              className="border border-gray-300 p-2 rounded-md"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone (10 digits)"
              value={formData.phone}
              onChange={(e) => {
                const onlyNums = e.target.value.replace(/\D/g, "");
                if (onlyNums.length <= 10) {
                  handleFormChange({ target: { name: "phone", value: onlyNums } });
                }
              }}
              className="border border-gray-300 p-2 rounded-md"
              maxLength="10"
              required
            />
            <select
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleFormChange}
              className="border border-gray-300 p-2 rounded-md"
              required
            >
              <option value="">Select Enquiry Type</option>
              <option value="Admin Enquiry">Admin Enquiry</option>
              <option value="General Enquiry">General Enquiry</option>
              <option value="Support Enquiry">Support Enquiry</option>
              <option value="Other">Other</option>
            </select>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleFormChange}
              className="border border-gray-300 p-2 rounded-md col-span-1 md:col-span-2"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleFormChange}
              rows="4"
              className="border border-gray-300 p-2 rounded-md col-span-1 md:col-span-2"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md flex items-center justify-center gap-2 col-span-1 md:col-span-2"
              disabled={isSubmitting}
            >
              <Send size={18} />
              {isSubmitting ? "Sending..." : "Submit Enquiry"}
            </button>
          </form>
        </section>
      </motion.div>
    </div>
  );
}
