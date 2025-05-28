import React from "react";

const sportsData = [
  {
    name: "Cricket",
    description: "Our cricket team participates in inter-college tournaments and has a strong track record.",
    image: "/images/sports/cricket.jpg",
  },
  {
    name: "Football",
    description: "A fast-growing team with regular matches and weekly practice sessions.",
    image: "/images/sports/football.jpg",
  },
  {
    name: "Badminton",
    description: "Indoor badminton with individual and doubles categories. Tournaments are held quarterly.",
    image: "/images/sports/badminton.jpg",
  },
  {
    name: "Athletics",
    description: "Track & field events with professional coaching and inter-school events.",
    image: "/images/sports/athletics.jpg",
  },
];

const StudentSports = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-20 px-4 sm:px-8 lg:px-20">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Student Sports & Activities</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Encouraging physical development, team spirit, and sportsmanship through various activities.
        </p>
      </div>

      {/* Sports List */}
      <div className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">Available Sports</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sportsData.map((sport, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={sport.image}
                alt={sport.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">{sport.name}</h3>
                <p className="text-gray-700 text-sm">{sport.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <div className="bg-white py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-blue-700 mb-6">Recent Achievements</h2>
          <p className="text-gray-600 mb-4">
            🏆 Football team won the 2024 Intercollege Championship <br />
            🥇 3 medals at the 2024 State Athletics Meet <br />
            🏸 Badminton doubles finalists at the Regional Tournament
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-blue-100 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Get Involved</h2>
          <p className="text-gray-700 mb-4">Want to join a sports team or need more info?</p>
          <a
            href="mailto:sports@skilleEarth.com"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700"
          >
            Contact Sports Department
          </a>
        </div>
      </div>
    </div>
  );
};

export default StudentSports;
