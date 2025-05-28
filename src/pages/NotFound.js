import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6 py-12">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-blue-600 tracking-widest">404</h1>
        <p className="text-xl md:text-2xl mt-4 text-gray-700 font-semibold">
          Oops! Page Not Found
        </p>
        <p className="text-gray-500 mt-2">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        <div className="mt-6">
          <Link
            to="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-sm font-medium transition duration-300"
          >
            Back to Home
          </Link>
        </div>

        <img
          src="/images/404-illustration.svg"
          alt="404 Illustration"
          className="w-64 mx-auto mt-8"
        />
      </div>
    </div>
  );
};

export default NotFound;
// This component displays a 404 Not Found page with a message and a link to return to the home page.
// It includes a large "404" text, a brief message, and an illustration to enhance the user experience.
// The design is responsive and uses Tailwind CSS for styling.
// The illustration is assumed to be stored in the public/images directory as "404-illustration.svg".
// The component is structured to be easily integrated into a React application using React Router for navigation.
// The NotFound component can be used in the main App component to handle unmatched routes, ensuring users have a friendly experience even when they navigate to a non-existent page.
// The component is styled to be visually appealing and user-friendly, with a focus on clarity and ease of navigation.                     