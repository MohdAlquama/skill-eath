const courses = [
  {
    id: "react-101",
    title: "Complete React Developer Course",
    description: "Learn how to build scalable React applications from scratch with hands-on projects and become a professional React developer.",
    price: "₹10,000",
    image: "home/integral/sep24BACKUP/DCIM/Screenshots/Screenshot_2022-10-17-13-31-53-02.jpg",
    lastUpdated: "May 10, 2025",
    duration: "40 hours of content",
    videoContent: "35",
    exercises: "42",
    assignments: "10",
    
    // What you'll learn section
    learn: [
      "Build 5 real-world React applications from scratch",
      "Master React Hooks and understand functional components",
      "Implement Context API and Redux for state management",
      "Create REST APIs with Node.js and Express to integrate with React",
      "Build responsive layouts with Tailwind CSS and styled-components",
      "Implement authentication using JWT and Firebase",
      "Deploy React applications to production environments",
      "Write tests for React components using Jest and React Testing Library",
      "Optimize React applications for performance",
      "Work with React Router for client-side routing",
      "Handle form validation and submission in React",
      "Create custom hooks to reuse logic across components",
    ],
    
    // Detailed syllabus for the accordion sections
    detailedSyllabus: [
      {
        title: "Introduction to React",
        duration: "4 hours",
        lessons: [
          { title: "Course Overview and Requirements", duration: "10 min", preview: true },
          { title: "Setting Up the Development Environment", duration: "25 min", preview: true },
          { title: "Understanding React's Core Concepts", duration: "45 min" },
          { title: "Creating Your First React App", duration: "1 hr" },
          { title: "Understanding JSX Syntax", duration: "40 min" },
          { title: "Module Project: Personal Portfolio Page", duration: "1 hr" },
        ]
      },
      {
        title: "Components and Props",
        duration: "6 hours",
        lessons: [
          { title: "Functional vs Class Components", duration: "30 min" },
          { title: "Creating Reusable Components", duration: "45 min" },
          { title: "Understanding Props", duration: "40 min" },
          { title: "Props Validation with PropTypes", duration: "35 min" },
          { title: "Component Composition Patterns", duration: "1 hr" },
          { title: "Styling React Components", duration: "50 min" },
          { title: "Module Project: UI Component Library", duration: "2 hr" },
        ]
      },
      {
        title: "State Management and Hooks",
        duration: "8 hours",
        lessons: [
          { title: "Introduction to React Hooks", duration: "45 min" },
          { title: "useState Hook in Depth", duration: "1 hr" },
          { title: "useEffect Hook for Side Effects", duration: "1 hr" },
          { title: "Custom Hooks - Creating Your Own", duration: "1 hr" },
          { title: "useContext for Global State", duration: "50 min" },
          { title: "useReducer for Complex State Logic", duration: "1 hr" },
          { title: "Other Built-in Hooks", duration: "45 min" },
          { title: "Module Project: Task Management App", duration: "1.5 hr" },
        ]
      },
      {
        title: "React Router and Navigation",
        duration: "5 hours",
        lessons: [
          { title: "Setting up React Router", duration: "30 min" },
          { title: "Basic Routing Concepts", duration: "45 min" },
          { title: "Route Parameters and Query Strings", duration: "50 min" },
          { title: "Nested Routes", duration: "40 min" },
          { title: "Protected Routes and Authentication", duration: "1 hr" },
          { title: "Navigation Guards", duration: "40 min" },
          { title: "Module Project: Multi-page Application", duration: "1 hr" },
        ]
      },
      {
        title: "State Management with Redux",
        duration: "7 hours",
        lessons: [
          { title: "Introduction to Redux", duration: "45 min" },
          { title: "Redux Store, Actions, and Reducers", duration: "1 hr" },
          { title: "Connecting Redux with React", duration: "50 min" },
          { title: "Asynchronous Actions with Redux Thunk", duration: "1 hr" },
          { title: "Modern Redux with Redux Toolkit", duration: "1 hr" },
          { title: "State Normalization Techniques", duration: "45 min" },
          { title: "Module Project: E-commerce Store", duration: "1.5 hr" },
        ]
      },
      {
        title: "Working with APIs",
        duration: "6 hours",
        lessons: [
          { title: "Making API Calls in React", duration: "45 min" },
          { title: "Using Fetch API", duration: "40 min" },
          { title: "Axios for API Requests", duration: "45 min" },
          { title: "Error Handling in API Calls", duration: "50 min" },
          { title: "Managing Loading States", duration: "40 min" },
          { title: "Building a Backend API with Express", duration: "1 hr" },
          { title: "Module Project: Weather Dashboard", duration: "1.5 hr" },
        ]
      },
      {
        title: "Final Projects",
        duration: "4 hours",
        lessons: [
          { title: "Project Planning and Setup", duration: "45 min" },
          { title: "Building the Frontend Interface", duration: "1 hr" },
          { title: "Implementing Core Functionality", duration: "1 hr" },
          { title: "Debugging and Testing", duration: "45 min" },
          { title: "Deployment to Production", duration: "30 min" },
        ]
      }
    ],
    
    // Requirements section
    requirements: [
      "Basic knowledge of HTML, CSS, and JavaScript",
      "Understanding of ES6+ features (arrow functions, destructuring, etc.)",
      "Node.js and npm installed on your computer",
      "A code editor (VS Code recommended)",
      "No prior React knowledge required - we'll start from the basics",
    ],
    
    // Instructor information
    instructor: {
      name: "Mohd Alquama",
      image: "/images/instructor.jpg",
      title: "Senior React Developer & Lead Instructor",
      bio: "Full Stack Developer with 5+ years of experience building scalable applications using React and Node.js. I've worked with leading tech companies and have taught over 15,000 students online and offline. My teaching approach focuses on practical, hands-on learning with real-world projects that prepare you for professional development work.",
    },
    
    // Student feedback and reviews would be fetched from an API in a real application
  },
  
  // Additional course example
  {
    id: "advanced-javascript",
    title: "Advanced JavaScript Mastery",
    description: "Dive deep into JavaScript's advanced concepts, patterns, and modern ES6+ features to write clean, efficient code.",
    price: "₹8,500",
    image: "/images/javascript-course.jpg",
    lastUpdated: "April 25, 2025",
    duration: "35 hours of content",
    videoContent: "30",
    exercises: "38",
    assignments: "8",
    
    learn: [
      "Master advanced JavaScript concepts like closures, prototypes, and the event loop",
      "Implement modern ES6+ features in your applications",
      "Build robust asynchronous programs with Promises and async/await",
      "Apply design patterns to solve common programming challenges",
      "Write clean, maintainable, and efficient JavaScript code",
      "Debug and optimize JavaScript applications",
      "Understand functional programming concepts in JavaScript",
      "Create your own library using JavaScript modules",
    ],
    
    detailedSyllabus: [
      {
        title: "JavaScript Fundamentals Review",
        duration: "4 hours",
        lessons: [
          { title: "Course Overview", duration: "15 min", preview: true },
          { title: "Execution Context and Call Stack", duration: "45 min" },
          { title: "Scope and Closures", duration: "1 hr" },
          { title: "this Keyword and Binding", duration: "1 hr" },
          { title: "Prototypal Inheritance", duration: "1 hr" },
        ]
      },
      {
        title: "Modern JavaScript (ES6+)",
        duration: "6 hours",
        lessons: [
          { title: "Arrow Functions and Lexical Scope", duration: "45 min" },
          { title: "Destructuring and Spread Syntax", duration: "50 min" },
          { title: "Template Literals and Tagged Templates", duration: "40 min" },
          { title: "Modules (import/export)", duration: "45 min" },
          { title: "Classes and Object-Oriented JS", duration: "1 hr" },
          { title: "Symbols, Iterators, and Generators", duration: "1 hr" },
          { title: "Advanced Array Methods", duration: "1 hr" },
        ]
      },
      // More syllabus modules would be included here
    ],
    
    requirements: [
      "Intermediate knowledge of JavaScript",
      "Understanding of basic programming concepts",
      "Familiarity with HTML and CSS",
      "A computer with a modern web browser",
    ],
    
    instructor: {
      name: "Priya Sharma",
      image: "/images/instructor-2.jpg",
      title: "JavaScript Engineer & Technical Instructor",
      bio: "JavaScript specialist with 8+ years of experience developing enterprise applications. I've worked as a tech lead at several startups and have been teaching programming for the last 4 years. My goal is to help you truly understand JavaScript's inner workings, not just memorize syntax.",
    },
  },{
    id: "react-105",
    title: "Complete React Developer Course",
    description: "Learn how to build scalable React applications from scratch with hands-on projects and become a professional React developer.",
    price: "₹10,000",
    image: "home/integral/sep24BACKUP/DCIM/Screenshots/Screenshot_2022-10-17-13-31-53-02.jpg",
    lastUpdated: "May 10, 2025",
    duration: "40 hours of content",
    videoContent: "35",
    exercises: "42",
    assignments: "10",
    
    // What you'll learn section
    learn: [
      "Build 5 real-world React applications from scratch",
      "Master React Hooks and understand functional components",
      "Implement Context API and Redux for state management",
      "Create REST APIs with Node.js and Express to integrate with React",
      "Build responsive layouts with Tailwind CSS and styled-components",
      "Implement authentication using JWT and Firebase",
      "Deploy React applications to production environments",
      "Write tests for React components using Jest and React Testing Library",
      "Optimize React applications for performance",
      "Work with React Router for client-side routing",
      "Handle form validation and submission in React",
      "Create custom hooks to reuse logic across components",
    ],
    
    // Detailed syllabus for the accordion sections
    detailedSyllabus: [
      {
        title: "Introduction to React",
        duration: "4 hours",
        lessons: [
          { title: "Course Overview and Requirements", duration: "10 min", preview: true },
          { title: "Setting Up the Development Environment", duration: "25 min", preview: true },
          { title: "Understanding React's Core Concepts", duration: "45 min" },
          { title: "Creating Your First React App", duration: "1 hr" },
          { title: "Understanding JSX Syntax", duration: "40 min" },
          { title: "Module Project: Personal Portfolio Page", duration: "1 hr" },
        ]
      },
      {
        title: "Components and Props",
        duration: "6 hours",
        lessons: [
          { title: "Functional vs Class Components", duration: "30 min" },
          { title: "Creating Reusable Components", duration: "45 min" },
          { title: "Understanding Props", duration: "40 min" },
          { title: "Props Validation with PropTypes", duration: "35 min" },
          { title: "Component Composition Patterns", duration: "1 hr" },
          { title: "Styling React Components", duration: "50 min" },
          { title: "Module Project: UI Component Library", duration: "2 hr" },
        ]
      },
      {
        title: "State Management and Hooks",
        duration: "8 hours",
        lessons: [
          { title: "Introduction to React Hooks", duration: "45 min" },
          { title: "useState Hook in Depth", duration: "1 hr" },
          { title: "useEffect Hook for Side Effects", duration: "1 hr" },
          { title: "Custom Hooks - Creating Your Own", duration: "1 hr" },
          { title: "useContext for Global State", duration: "50 min" },
          { title: "useReducer for Complex State Logic", duration: "1 hr" },
          { title: "Other Built-in Hooks", duration: "45 min" },
          { title: "Module Project: Task Management App", duration: "1.5 hr" },
        ]
      },
      {
        title: "React Router and Navigation",
        duration: "5 hours",
        lessons: [
          { title: "Setting up React Router", duration: "30 min" },
          { title: "Basic Routing Concepts", duration: "45 min" },
          { title: "Route Parameters and Query Strings", duration: "50 min" },
          { title: "Nested Routes", duration: "40 min" },
          { title: "Protected Routes and Authentication", duration: "1 hr" },
          { title: "Navigation Guards", duration: "40 min" },
          { title: "Module Project: Multi-page Application", duration: "1 hr" },
        ]
      },
      {
        title: "State Management with Redux",
        duration: "7 hours",
        lessons: [
          { title: "Introduction to Redux", duration: "45 min" },
          { title: "Redux Store, Actions, and Reducers", duration: "1 hr" },
          { title: "Connecting Redux with React", duration: "50 min" },
          { title: "Asynchronous Actions with Redux Thunk", duration: "1 hr" },
          { title: "Modern Redux with Redux Toolkit", duration: "1 hr" },
          { title: "State Normalization Techniques", duration: "45 min" },
          { title: "Module Project: E-commerce Store", duration: "1.5 hr" },
        ]
      },
      {
        title: "Working with APIs",
        duration: "6 hours",
        lessons: [
          { title: "Making API Calls in React", duration: "45 min" },
          { title: "Using Fetch API", duration: "40 min" },
          { title: "Axios for API Requests", duration: "45 min" },
          { title: "Error Handling in API Calls", duration: "50 min" },
          { title: "Managing Loading States", duration: "40 min" },
          { title: "Building a Backend API with Express", duration: "1 hr" },
          { title: "Module Project: Weather Dashboard", duration: "1.5 hr" },
        ]
      },
      {
        title: "Final Projects",
        duration: "4 hours",
        lessons: [
          { title: "Project Planning and Setup", duration: "45 min" },
          { title: "Building the Frontend Interface", duration: "1 hr" },
          { title: "Implementing Core Functionality", duration: "1 hr" },
          { title: "Debugging and Testing", duration: "45 min" },
          { title: "Deployment to Production", duration: "30 min" },
        ]
      }
    ],
    
    // Requirements section
    requirements: [
      "Basic knowledge of HTML, CSS, and JavaScript",
      "Understanding of ES6+ features (arrow functions, destructuring, etc.)",
      "Node.js and npm installed on your computer",
      "A code editor (VS Code recommended)",
      "No prior React knowledge required - we'll start from the basics",
    ],
    
    // Instructor information
    instructor: {
      name: "Mohd Alquama",
      image: "/images/instructor.jpg",
      title: "Senior React Developer & Lead Instructor",
      bio: "Full Stack Developer with 5+ years of experience building scalable applications using React and Node.js. I've worked with leading tech companies and have taught over 15,000 students online and offline. My teaching approach focuses on practical, hands-on learning with real-world projects that prepare you for professional development work.",
    },
    
    // Student feedback and reviews would be fetched from an API in a real application
  },
  
  // Additional course example
  {
    id: "advanced-javascript",
    title: "Advanced JavaScript Mastery",
    description: "Dive deep into JavaScript's advanced concepts, patterns, and modern ES6+ features to write clean, efficient code.",
    price: "₹8,500",
    image: "/images/javascript-course.jpg",
    lastUpdated: "April 25, 2025",
    duration: "35 hours of content",
    videoContent: "30",
    exercises: "38",
    assignments: "8",
    
    learn: [
      "Master advanced JavaScript concepts like closures, prototypes, and the event loop",
      "Implement modern ES6+ features in your applications",
      "Build robust asynchronous programs with Promises and async/await",
      "Apply design patterns to solve common programming challenges",
      "Write clean, maintainable, and efficient JavaScript code",
      "Debug and optimize JavaScript applications",
      "Understand functional programming concepts in JavaScript",
      "Create your own library using JavaScript modules",
    ],
    
    detailedSyllabus: [
      {
        title: "JavaScript Fundamentals Review",
        duration: "4 hours",
        lessons: [
          { title: "Course Overview", duration: "15 min", preview: true },
          { title: "Execution Context and Call Stack", duration: "45 min" },
          { title: "Scope and Closures", duration: "1 hr" },
          { title: "this Keyword and Binding", duration: "1 hr" },
          { title: "Prototypal Inheritance", duration: "1 hr" },
        ]
      },
      {
        title: "Modern JavaScript (ES6+)",
        duration: "6 hours",
        lessons: [
          { title: "Arrow Functions and Lexical Scope", duration: "45 min" },
          { title: "Destructuring and Spread Syntax", duration: "50 min" },
          { title: "Template Literals and Tagged Templates", duration: "40 min" },
          { title: "Modules (import/export)", duration: "45 min" },
          { title: "Classes and Object-Oriented JS", duration: "1 hr" },
          { title: "Symbols, Iterators, and Generators", duration: "1 hr" },
          { title: "Advanced Array Methods", duration: "1 hr" },
        ]
      },
      // More syllabus modules would be included here
    ],
    
    requirements: [
      "Intermediate knowledge of JavaScript",
      "Understanding of basic programming concepts",
      "Familiarity with HTML and CSS",
      "A computer with a modern web browser",
    ],
    
    instructor: {
      name: "Priya Sharma",
      image: "/images/instructor-2.jpg",
      title: "JavaScript Engineer & Technical Instructor",
      bio: "JavaScript specialist with 8+ years of experience developing enterprise applications. I've worked as a tech lead at several startups and have been teaching programming for the last 4 years. My goal is to help you truly understand JavaScript's inner workings, not just memorize syntax.",
    },
  }
];

export default courses;