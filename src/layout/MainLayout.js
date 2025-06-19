// import React from "react";

// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import { Outlet } from "react-router-dom";

// function MainLayout() {
//   return (
//     <div >
//       <Header />
//       <main style={{ flex: "1" }}>
//         <Outlet />
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default MainLayout;
// import React from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import { Outlet } from "react-router-dom";
// import EnquiryModal from "../components/EnquiryModal"; // ✅ import the modal
// import { useState } from 'react';

// function MainLayout() {

//    const [formData, setFormData] = useState({
//       name: '',
//       email: '',
//       phone: '',
//       subject: '',
  
//       message: '',
//       inquiryType: '',
//     });
  
//     const [isSubmitting, setIsSubmitting] = useState(false);
  
//     const handleFormChange = (e) => {
//       setFormData({
//         ...formData,
//         [e.target.name]: e.target.value,
//       });
//     };
  
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       setIsSubmitting(true);
  
//       // Simulate form submission
//       setTimeout(() => {
//         alert('Thank you for your message! We\'ll get back to you within 24 hours.');
//         setFormData({
//           name: '',
//           email: '',
//           phone: '',
//           subject: '',
//           message: '',
//           inquiryType: '',
//         });
//         setIsSubmitting(false);
//       }, 2000);
//     };

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Header />
//       <main className="flex-1">
//         <Outlet />
//       </main>
//       <Footer />
//       <EnquiryModal 
//         formData={formData}
//         handleFormChange={handleFormChange}
//         handleSubmit={handleSubmit}
//         isSubmitting={isSubmitting}
      
//       /> {/* ✅ modal added at the root */}
//     </div>
//   );
// }

// export default MainLayout;



// import { useState } from "react";
// import { Outlet } from "react-router-dom";
// import { Toaster, toast } from "react-hot-toast";


// import EnquiryModal from "../components/EnquiryModal"; // ✅ Make sure the path is correct
// import Header from "../components/Header";
//  import Footer from "../components/Footer";

// function MainLayout() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     subject: '',
//     message: '',
//     inquiryType: '',
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [modalVisible, setModalVisible] = useState(true); // ✅ Controls modal open/close

//   const handleFormChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//  const handleSubmit = async (e) => {
//   e.preventDefault();

//   // Basic validation for required fields
//   const { name, email, phone, subject, message, inquiryType } = formData;

//   if (!name || !email || !phone || !subject || !message || !inquiryType) {
//     toast.error("Please fill in all required fields.");
//     return;
//   }

//   // Optionally validate email format
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailRegex.test(email)) {
//     toast.error("Please enter a valid email address.");
//     return;
//   }

//   // Optionally validate phone number (basic check)
// const phoneRegex = /^\d{10}$/;
// if (!phoneRegex.test(phone)) {
//   toast.error("Phone number must be exactly 10 digits (numbers only).");
//   return;
// }


//   setIsSubmitting(true);

//   // Simulate async form submission
//   setTimeout(() => {
//     toast.success("Thank you! We'll contact you soon.");
//     console.log(formData);

//     setFormData({
//       name: '',
//       email: '',
//       phone: '',
//       subject: '',
//       message: '',
//       inquiryType: '',
//     });

//     setIsSubmitting(false);
//     setModalVisible(false);
//   }, 2000);
// };


//   return (
//     <div className="flex flex-col min-h-screen">
//       <Header />
//       <main className="flex-1">
//         <Outlet />
//       </main>
//       <Footer />

//       {/* Global Toast Notification Handler */}
//       <Toaster position="top-center" toastOptions={{ duration: 3000 }} />

//       {/* Enquiry Modal (only if visible) */}
//       {modalVisible && (
//         <EnquiryModal
//           formData={formData}
//           handleFormChange={handleFormChange}
//           handleSubmit={handleSubmit}
//           isSubmitting={isSubmitting}
//           setIsVisible={setModalVisible} // ✅ Pass control to modal
//         />
//       )}
//     </div>
//   );
// }

// export default MainLayout;



// import { useState } from "react";
// import { Outlet } from "react-router-dom";
// import { Toaster, toast } from "react-hot-toast";

// import EnquiryModal from "../components/EnquiryModal";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

// function MainLayout() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//     inquiryType: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [modalVisible, setModalVisible] = useState(true);

//   const handleFormChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Simulate async form submission
//     try {
//       await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate API call
//       toast.success("Thank you! We'll contact you soon.");
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         subject: "",
//         message: "",
//         inquiryType: "",
//       });
//       setModalVisible(false);
//     } catch (error) {
//       toast.error("Submission failed. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Header />
//       <main className="flex-1">
//         <Outlet />
//       </main>
//       <Footer />

//       <Toaster position="top-center" toastOptions={{ duration: 3000 }} />

//       {modalVisible && (
//         <EnquiryModal
//           formData={formData}
//           handleFormChange={handleFormChange}
//           handleSubmit={handleSubmit}
//           isSubmitting={isSubmitting}
//           setModalVisible={setModalVisible}
//         />
//       )}
//     </div>
//   );
// }

// export default MainLayout;


// import { useState } from "react";
// import { Outlet } from "react-router-dom";
// import { Toaster, toast } from "react-hot-toast";

// import EnquiryModal from "../components/EnquiryModal";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

// function MainLayout() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//     inquiryType: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [modalVisible, setModalVisible] = useState(true);

//   const handleFormChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const validateForm = () => {
//     const errors = [];

//     // Name: Required, 2+ characters, letters and spaces only
//     if (!formData.name.trim()) {
//       errors.push("Name is required.");
//     } else if (formData.name.trim().length < 2) {
//       errors.push("Name must be at least 2 characters long.");
//     } else if (!/^[a-zA-Z\s]+$/.test(formData.name.trim())) {
//       errors.push("Name can only contain letters and spaces.");
//     }

//     // Email: Required, valid email format
//     if (!formData.email.trim()) {
//       errors.push("Email is required.");
//     } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email.trim())) {
//       errors.push("Please enter a valid email address.");
//     }

//     // Phone: Optional, but if provided, validate format (e.g., 10 digits or international)
//     if (formData.phone.trim() && !/^\+?[\d\s-]{7,15}$/.test(formData.phone.trim())) {
//       errors.push("Please enter a valid phone number (7-15 digits, optional + or -).");
//     }

//     // InquiryType: Required, must be a valid option
//     const validInquiryTypes = ["Admin Enquiry", "General Enquiry", "Support Enquiry", "Other"];
//     if (!formData.inquiryType) {
//       errors.push("Please select an enquiry type.");
//     } else if (!validInquiryTypes.includes(formData.inquiryType)) {
//       errors.push("Invalid enquiry type selected.");
//     }

//     // Message: Required, 10+ characters
//     if (!formData.message.trim()) {
//       errors.push("Message is required.");
//     } else if (formData.message.trim().length < 10) {
//       errors.push("Message must be at least 10 characters long.");
//     }

//     // Subject: Optional, no validation needed beyond trimming
//     return errors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Validate form
//     const errors = validateForm();
//     if (errors.length > 0) {
//       // Show each error as a separate toast
//       errors.forEach((error) => toast.error(error));
//       setIsSubmitting(false);
//       return;
//     }

//     // Simulate async form submission
//     try {
//       await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate API call
//       toast.success("Thank you! We'll contact you soon.");
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         subject: "",
//         message: "",
//         inquiryType: "",
//       });
//       setModalVisible(false);
//     } catch (error) {
//       toast.error("Submission failed. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Header />
//       <main className="flex-1">
//         <Outlet />
//       </main>
//       <Footer />

//       <Toaster position="top-center" toastOptions={{ duration: 3000 }} />

//       {modalVisible && (
//         <EnquiryModal
//           formData={formData}
//           handleFormChange={handleFormChange}
//           handleSubmit={handleSubmit}
//           isSubmitting={isSubmitting}
//           setModalVisible={setModalVisible}
//         />
//       )}
//     </div>
//   );
// }

// export default MainLayout;



import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

import EnquiryModal from "../components/EnquiryModal";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MainLayout() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalVisible, setModalVisible] = useState(true);

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, phone, subject, message, inquiryType } = formData;

    // Validate all fields are filled
    if (!name || !email || !phone || !subject || !message || !inquiryType) {
      toast.error("Please fill in all required fields.");
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    // Validate phone number is exactly 10 digits
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      toast.error("Phone number must be exactly 10 digits.");
      return;
    }

    setIsSubmitting(true);

    // Simulate async submission
    setTimeout(() => {
      toast.success("Thank you! We'll contact you soon.");
      console.log(formData);

      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        inquiryType: '',
      });

      setIsSubmitting(false);
      setModalVisible(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />

      <Toaster position="top-center" toastOptions={{ duration: 3000 }} />

      {modalVisible && (
        <EnquiryModal
          formData={formData}
          handleFormChange={handleFormChange}
          handleSubmit={handleSubmit}
          isSubmitting={isSubmitting}
          setModalVisible={setModalVisible}
        />
      )}
    </div>
  );
}

export default MainLayout;
