// import React from 'react';
// import { useParams, Link } from 'react-router-dom';
// import courses from '../data/courses';

// const CourseDetail = () => {
//   const { id } = useParams();
//   const course = courses.find((c) => c.id === id);

//   if (!course) {
//     return (
//       <div className="pt-24 px-4 text-center">
//         <h2 className="text-2xl font-semibold text-red-600">Course not found</h2>
//         <Link to="/courses" className="text-indigo-500 underline mt-4 block">Go back to courses</Link>
//       </div>
//     );
//   }

//   return (
//     <div className="pt-24 px-4 md:px-16 bg-gray-50 min-h-screen space-y-12">
//       {/* Hero Section */}
//       <div className="max-w-5xl mx-auto bg-white rounded-lg shadow overflow-hidden">
//         <img src={course.image} alt={course.title} className="w-full h-64 object-cover" />
//         <div className="p-6">
//           <h1 className="text-4xl font-bold text-indigo-700 mb-4">{course.title}</h1>
//           <p className="text-lg text-gray-700 mb-4">{course.description}</p>
//           <div className="flex justify-between items-center">
//             <span className="text-2xl font-bold text-indigo-500">{course.price}</span>
//             <button className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition">
//               Enroll Now
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* What You'll Learn */}
//       <section className="max-w-5xl mx-auto">
//         <h2 className="text-2xl font-semibold text-indigo-600 mb-4">What You'll Learn</h2>
//         <ul className="list-disc pl-6 space-y-2 text-gray-700">
//           {course.learn?.map((point, i) => (
//             <li key={i}>{point}</li>
//           ))}
//         </ul>
//       </section>

//       {/* Syllabus */}
//       <section className="max-w-5xl mx-auto">
//         <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Course Syllabus</h2>
//         <ul className="list-decimal pl-6 space-y-2 text-gray-700">
//           {course.syllabus?.map((item, i) => (
//             <li key={i}>{item}</li>
//           ))}
//         </ul>
//       </section>

//       {/* Requirements */}
//       <section className="max-w-5xl mx-auto">
//         <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Requirements</h2>
//         <ul className="list-disc pl-6 space-y-2 text-gray-700">
//           {course.requirements?.map((req, i) => (
//             <li key={i}>{req}</li>
//           ))}
//         </ul>
//       </section>

//       {/* Instructor Section */}
//       <section className="max-w-5xl mx-auto flex gap-6 items-center">
//         <img src={course.instructor?.image} alt={course.instructor?.name} className="w-24 h-24 rounded-full object-cover" />
//         <div>
//           <h3 className="text-xl font-semibold text-indigo-700">{course.instructor?.name}</h3>
//           <p className="text-gray-600">{course.instructor?.bio}</p>
//         </div>
//       </section>

//       {/* Back Button */}
//       <div className="text-center">
//         <Link to="/courses" className="inline-block mt-8 text-indigo-600 underline hover:text-indigo-800">
//           ← Back to Courses
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default CourseDetail;
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Calendar, Clock, Award, CheckCircle, BookOpen, ArrowLeft, Users, MessageCircle } from 'lucide-react';
import courses from '../data/courses';

const CourseDetail = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);
  const [activeTab, setActiveTab] = useState('syllabus');
  
  // Payment plan state
  const [selectedPlan, setSelectedPlan] = useState('onetime');

  if (!course) {
    return (
      <div className="pt-24 px-4 text-center">
        <h2 className="text-2xl font-semibold text-red-600">Course not found</h2>
        <Link to="/courses" className="text-indigo-500 underline mt-4 block">Go back to courses</Link>
      </div>
    );
  }

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Sticky navigation */}
      <div className="sticky top-0 z-10 bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/courses" className="flex items-center text-indigo-600 hover:text-indigo-800">
            <ArrowLeft size={20} className="mr-2" />
            <span>Back to Courses</span>
          </Link>
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition shadow-md">
            Enroll Now
          </button>
        </div>
      </div>

      {/* Hero Section with enhanced design */}
      <div className="bg-gradient-to-r from-indigo-800 to-indigo-600 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-7/12 space-y-6">
              <div className="flex items-center space-x-2">
                <span className="bg-yellow-400 text-indigo-900 py-1 px-3 rounded-full text-sm font-bold">BESTSELLER</span>
                <div className="flex items-center">
                  <Star className="fill-yellow-400 text-yellow-400 w-4 h-4" />
                  <Star className="fill-yellow-400 text-yellow-400 w-4 h-4" />
                  <Star className="fill-yellow-400 text-yellow-400 w-4 h-4" />
                  <Star className="fill-yellow-400 text-yellow-400 w-4 h-4" />
                  <Star className="fill-yellow-400 text-yellow-400 w-4 h-4" />
                  <span className="ml-2 text-sm">(120 reviews)</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">{course.title}</h1>
              <p className="text-lg md:text-xl">{course.description}</p>
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center">
                  <Users size={16} className="mr-1" />
                  <span>1,245 students enrolled</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-1" />
                  <span>Last updated {course.lastUpdated}</span>
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="mr-1" />
                  <span>{course.duration}</span>
                </div>
              </div>
              <div className="flex items-center">
                <img src={course.instructor.image} alt={course.instructor.name} className="w-10 h-10 rounded-full mr-3" />
                <span>Created by <span className="font-medium">{course.instructor.name}</span></span>
              </div>
            </div>
            <div className="w-full md:w-5/12">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden text-gray-800">
                <img src={course.image} alt={course.title} className="w-full h-64 object-cover" />
                <div className="p-6 space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-3xl font-bold text-indigo-600">{course.price}</span>
                    <span className="text-lg line-through text-gray-500">₹12,999</span>
                  </div>
                  
                  <div className="space-y-3">
                    <p className="text-red-600 font-medium flex items-center">
                      <Clock size={18} className="mr-2" />
                      <span>Offer ends in 2 days!</span>
                    </p>
                    
                    <button className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition font-medium text-lg shadow-md">
                      Enroll Now
                    </button>
                    
                    <button className="w-full border border-indigo-600 text-indigo-600 py-3 px-4 rounded-lg hover:bg-indigo-50 transition font-medium">
                      Try Free Preview
                    </button>
                  </div>
                  
                  <div className="space-y-3 pt-2">
                    <p className="font-medium">This course includes:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-indigo-600 mr-2 mt-0.5" />
                        <span>{course.videoContent} hours on-demand video</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-indigo-600 mr-2 mt-0.5" />
                        <span>{course.exercises}+ coding exercises</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-indigo-600 mr-2 mt-0.5" />
                        <span>{course.assignments} practical assignments</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-indigo-600 mr-2 mt-0.5" />
                        <span>Full lifetime access</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-indigo-600 mr-2 mt-0.5" />
                        <span>Certificate of completion</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content tabs navigation */}
      <div className="sticky top-16 bg-white shadow-sm z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex overflow-x-auto">
            <button 
              onClick={() => setActiveTab('syllabus')}
              className={`px-6 py-4 font-medium whitespace-nowrap ${activeTab === 'syllabus' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-600 hover:text-indigo-600'}`}
            >
              Syllabus
            </button>
            <button 
              onClick={() => setActiveTab('learn')}
              className={`px-6 py-4 font-medium whitespace-nowrap ${activeTab === 'learn' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-600 hover:text-indigo-600'}`}
            >
              What You'll Learn
            </button>
            <button 
              onClick={() => setActiveTab('instructor')}
              className={`px-6 py-4 font-medium whitespace-nowrap ${activeTab === 'instructor' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-600 hover:text-indigo-600'}`}
            >
              Instructor
            </button>
            <button 
              onClick={() => setActiveTab('reviews')}
              className={`px-6 py-4 font-medium whitespace-nowrap ${activeTab === 'reviews' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-600 hover:text-indigo-600'}`}
            >
              Reviews
            </button>
            <button 
              onClick={() => setActiveTab('enrollment')}
              className={`px-6 py-4 font-medium whitespace-nowrap ${activeTab === 'enrollment' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-600 hover:text-indigo-600'}`}
            >
              Enrollment Options
            </button>
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {activeTab === 'syllabus' && (
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-center space-x-2 mb-8">
              <BookOpen size={24} className="text-indigo-600" />
              <h2 className="text-2xl font-bold text-gray-800">Course Syllabus</h2>
            </div>
            
            <div className="space-y-6">
              {course.detailedSyllabus?.map((module, i) => (
                <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 p-4 flex justify-between items-center">
                    <h3 className="font-semibold text-lg">Module {i+1}: {module.title}</h3>
                    <span className="text-sm text-gray-500">{module.duration}</span>
                  </div>
                  <div className="p-4 space-y-3">
                    {module.lessons.map((lesson, j) => (
                      <div key={j} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                        <div className="flex items-center">
                          <span className="mr-3 text-gray-400">{j+1}.</span>
                          <span>{lesson.title}</span>
                          {lesson.preview && (
                            <span className="ml-2 px-2 py-0.5 bg-indigo-100 text-indigo-700 text-xs rounded">Preview</span>
                          )}
                        </div>
                        <span className="text-sm text-gray-500">{lesson.duration}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {activeTab === 'learn' && (
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-center space-x-2 mb-8">
              <Award size={24} className="text-indigo-600" />
              <h2 className="text-2xl font-bold text-gray-800">What You'll Learn</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {course.learn?.map((point, i) => (
                <div key={i} className="flex">
                  <CheckCircle size={24} className="text-indigo-600 mr-4 flex-shrink-0" />
                  <p>{point}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-4">Why Learn React?</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h4 className="font-medium text-lg mb-2">High Industry Demand</h4>
                  <p className="text-gray-700">React developers are highly sought after with competitive salaries in the industry.</p>
                </div>
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h4 className="font-medium text-lg mb-2">Build Modern UIs</h4>
                  <p className="text-gray-700">Create interactive, responsive user interfaces for web applications with ease.</p>
                </div>
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h4 className="font-medium text-lg mb-2">Strong Community</h4>
                  <p className="text-gray-700">Benefit from a large ecosystem of libraries, tools, and community support.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-4">Requirements</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                {course.requirements?.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
        
        {activeTab === 'instructor' && (
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-center space-x-2 mb-8">
              <Users size={24} className="text-indigo-600" />
              <h2 className="text-2xl font-bold text-gray-800">Meet Your Instructor</h2>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <img src={course.instructor?.image} alt={course.instructor?.name} className="w-full h-auto rounded-lg shadow-lg" />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold text-indigo-700 mb-2">{course.instructor?.name}</h3>
                <p className="text-gray-500 mb-4">{course.instructor?.title || "Full Stack Developer"}</p>
                
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center">
                    <Star className="fill-yellow-400 text-yellow-400 w-5 h-5" />
                    <span className="ml-1 font-medium">4.8 Instructor Rating</span>
                  </div>
                  <div className="flex items-center">
                    <MessageCircle size={20} className="mr-1 text-gray-600" />
                    <span>243 Reviews</span>
                  </div>
                  <div className="flex items-center">
                    <Users size={20} className="mr-1 text-gray-600" />
                    <span>5,240 Students</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-700">{course.instructor?.bio}</p>
                  
                  <div className="border-t border-gray-200 pt-4 mt-6">
                    <h4 className="font-semibold mb-2">Experience</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>5+ years of experience building scalable applications</li>
                      <li>Worked with leading tech companies</li>
                      <li>Mentored over 1000+ students</li>
                    </ul>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4 mt-6">
                    <h4 className="font-semibold mb-2">Connect with {course.instructor?.name}</h4>
                    <div className="flex space-x-3">
                      <a href="#" className="text-indigo-600 hover:text-indigo-800">LinkedIn</a>
                      <a href="#" className="text-indigo-600 hover:text-indigo-800">GitHub</a>
                      <a href="#" className="text-indigo-600 hover:text-indigo-800">Website</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'reviews' && (
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-center space-x-2 mb-8">
              <MessageCircle size={24} className="text-indigo-600" />
              <h2 className="text-2xl font-bold text-gray-800">Student Feedback</h2>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 bg-indigo-50 p-6 rounded-lg text-center">
                <div className="text-5xl font-bold text-indigo-700 mb-2">4.8</div>
                <div className="flex justify-center mb-2">
                  <Star className="fill-yellow-400 text-yellow-400 w-5 h-5" />
                  <Star className="fill-yellow-400 text-yellow-400 w-5 h-5" />
                  <Star className="fill-yellow-400 text-yellow-400 w-5 h-5" />
                  <Star className="fill-yellow-400 text-yellow-400 w-5 h-5" />
                  <Star className="fill-yellow-400 text-yellow-400 w-5 h-5" />
                </div>
                <p className="text-gray-600">Course Rating</p>
                <p className="mt-4 text-sm text-gray-500">Based on 120 reviews</p>
              </div>
              
              <div className="md:w-2/3">
                <div className="space-y-6">
                  {[
                    {
                      name: "Rajesh K.",
                      rating: 5,
                      comment: "This course exceeded my expectations. The projects are practical and the explanations are clear. Highly recommended for anyone wanting to master React!",
                      date: "April 15, 2025"
                    },
                    {
                      name: "Priya S.",
                      rating: 5,
                      comment: "The instructor's teaching style is excellent. Complex concepts are broken down into easy-to-understand parts. I'm now confident in building React applications on my own.",
                      date: "March 28, 2025"
                    },
                    {
                      name: "Vikram M.",
                      rating: 4,
                      comment: "Great course content and structure. I knocked off one star because some sections could use more practice exercises, but overall it's excellent.",
                      date: "February 12, 2025"
                    }
                  ].map((review, i) => (
                    <div key={i} className="border-b border-gray-200 pb-6 last:border-0">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold">{review.name}</h4>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                      <div className="flex mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
                        ))}
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'enrollment' && (
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-center space-x-2 mb-8">
              <Award size={24} className="text-indigo-600" />
              <h2 className="text-2xl font-bold text-gray-800">Enrollment Options</h2>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Choose Your Preferred Payment Plan</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div 
                  className={`border-2 rounded-lg p-6 cursor-pointer transition ${selectedPlan === 'onetime' ? 'border-indigo-600 bg-indigo-50' : 'border-gray-200 hover:border-indigo-300'}`}
                  onClick={() => handlePlanSelect('onetime')}
                >
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-semibold text-lg">One-time Payment</h4>
                    {selectedPlan === 'onetime' && (
                      <div className="bg-indigo-600 text-white rounded-full p-1">
                        <CheckCircle size={16} />
                      </div>
                    )}
                  </div>
                  <div className="text-3xl font-bold text-indigo-700 mb-2">₹10,000</div>
                  <p className="text-gray-500 mb-4">Full access forever</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-indigo-600 mr-2 mt-0.5" />
                      <span>Best value option</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-indigo-600 mr-2 mt-0.5" />
                      <span>One-time payment, no recurring fees</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-indigo-600 mr-2 mt-0.5" />
                      <span>Lifetime access to all content</span>
                    </li>
                  </ul>
                </div>
                
                <div 
                  className={`border-2 rounded-lg p-6 cursor-pointer transition ${selectedPlan === 'monthly' ? 'border-indigo-600 bg-indigo-50' : 'border-gray-200 hover:border-indigo-300'}`}
                  onClick={() => handlePlanSelect('monthly')}
                >
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-semibold text-lg">Monthly Plan</h4>
                    {selectedPlan === 'monthly' && (
                      <div className="bg-indigo-600 text-white rounded-full p-1">
                        <CheckCircle size={16} />
                      </div>
                    )}
                  </div>
                  <div className="text-3xl font-bold text-indigo-700 mb-2">₹1,500</div>
                  <p className="text-gray-500 mb-4">per month for 8 months</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-indigo-600 mr-2 mt-0.5" />
                      <span>Spread payments over time</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-indigo-600 mr-2 mt-0.5" />
                      <span>Same content access as one-time</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-indigo-600 mr-2 mt-0.5" />
                      <span>Cancel anytime</span>
                    </li>
                  </ul>
                </div>
                
                <div 
                  className={`border-2 rounded-lg p-6 cursor-pointer transition ${selectedPlan === 'installment' ? 'border-indigo-600 bg-indigo-50' : 'border-gray-200 hover:border-indigo-300'}`}
                  onClick={() => handlePlanSelect('installment')}
                >
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-semibold text-lg">EMI Option</h4>
                    {selectedPlan === 'installment' && (
                      <div className="bg-indigo-600 text-white rounded-full p-1">
                        <CheckCircle size={16} />
                      </div>
                    )}
                  </div>
                  <div className="text-3xl font-bold text-indigo-700 mb-2">₹1,800</div>
                  <p className="text-gray-500 mb-4">per month for 6 months</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-indigo-600 mr-2 mt-0.5" />
                      <span>No interest EMI plans</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-indigo-600 mr-2 mt-0.5" />
                      <span>Available with major credit cards</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-indigo-600 mr-2 mt-0.5" />
                      <span>Process managed by payment partner</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-indigo-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">Course Details</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Duration</h4>
                  <div className="flex items-center text-gray-700">
                    <Clock size={18} className="mr-2 text-indigo-600" />
                    <span>{course.duration} (~4 months with recommended pace)</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Access</h4>
                  <div className="flex items-center text-gray-700">
                    <CheckCircle size={18} className="mr-2 text-indigo-600" />
                    <span>Lifetime access to course materials</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Start Date</h4>
                  <div className="flex items-center text-gray-700">
                    <Calendar size={18} className="mr-2 text-indigo-600" />
                    <span>Start immediately (self-paced learning)</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Certificate</h4>
                  <div className="flex items-center text-gray-700">
                    <Award size={18} className="mr-2 text-indigo-600" />
                    <span>Certificate of completion included</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Frequently Asked Questions</h3>
              
              <div className="border-b border-gray-200 pb-4">
                <h4 className="font-medium mb-2">How long do I have access to the course?</h4>
                <p className="text-gray-700">You get lifetime access to all course materials. Once enrolled, you can revisit the content anytime in the future.</p>
              </div>
              
              <div className="border-b border-gray-200 pb-4">
                <h4 className="font-medium mb-2">Can I get a refund if I'm not satisfied?</h4>
                <p className="text-gray-700">Yes, we offer a 7-day money-back guarantee. If you're not satisfied with the course, you can request a refund within 7 days of enrollment.</p>
              </div>
              
              <div className="border-b border-gray-200 pb-4">
                <h4 className="font-medium mb-2">Do I get a certificate after completing the course?</h4>
                <p className="text-gray-700">Yes, you will receive a certificate of completion that you can share on your LinkedIn profile or with potential employers.</p>
              </div>
              
              <div className="border-b border-gray-200 pb-4">
                <h4 className="font-medium mb-2">What if I need help during the course?</h4>
                <p className="text-gray-700">You'll have access to a dedicated Q&A section where the instructor and community members can assist with your questions.</p>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Call to action */}
      <div className="bg-indigo-700 text-white">
        <div className="max-w-6xl mx-auto px-4 py-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your React Journey?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Join over 1,200+ students who have transformed their careers with this comprehensive React course.</p>
          <button className="bg-white text-indigo-700 px-8 py-3 rounded-lg hover:bg-indigo-50 transition font-medium text-lg shadow-lg">
            Enroll Now and Get Started Today
          </button>
          <p className="mt-4 text-indigo-200">7-day money-back guarantee, no questions asked!</p>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About the Course</h3>
              <p className="text-gray-300">Complete React Developer Course is designed to take you from beginner to professional. Learn by building real-world projects with expert guidance.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Course Curriculum</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Instructor Profile</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Student Testimonials</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p className="text-gray-300 mb-2">Have questions about the course?</p>
              <a href="mailto:support@reactcourses.com" className="text-indigo-400 hover:text-indigo-300">support@reactcourses.com</a>
              <div className="mt-4 flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; 2025 React Course Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CourseDetail;