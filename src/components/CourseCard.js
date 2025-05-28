import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
      <img src={course.image} alt={course.title} className="rounded w-full h-40 object-cover mb-4" />
      <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
      <p className="text-gray-600 mb-2">{course.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-indigo-600 font-bold">{course.price}</span>
        <Link to={`/courses/${course.id}`} className="text-indigo-500 hover:underline">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
