import React from 'react';
import courses from '../data/courses';
import CourseCard from './CourseCard';

const CourseList = () => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CourseList;
