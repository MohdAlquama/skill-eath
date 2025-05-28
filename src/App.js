import React from "react"; // ✅ Required
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/CoursePage";
import CourseDetail from './pages/CourseDetail'; // optional for detail page
import ContactPage from "./pages/contact";
import PrivacyPolicy from "./components/PrivacyPolicy";
import StudentSports from "./components/StudentSports";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/support" element={<StudentSports />} />


        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
