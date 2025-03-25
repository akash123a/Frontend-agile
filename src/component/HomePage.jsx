import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50">
      {/* Navbar */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/5968/5968875.png"
                alt="Logo"
                className="w-10 h-10"
              />
              <span className="ml-3 text-2xl font-bold text-gray-800">
                AgileFlow
              </span>
            </div>
            <div className="flex space-x-4">
              <Link
                to="/organisation-signup"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all"
              >
                Organisation Signup
              </Link>
              <Link
                to="/Employee-Login"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all"
              >
                EmployeeLogin
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Manage Your Projects the Agile Way
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            AgileFlow is a powerful, cloud-based project management tool designed
            to help teams collaborate, plan, and deliver projects efficiently.
          </p>
          <div className="space-x-4">
            <Link
              to="/signup"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all"
            >
              Get Started
            </Link>
            <Link
              to="/features"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold border border-blue-600 hover:bg-blue-50 transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-2"
              >
                <div className="text-blue-600 mb-4">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-12 h-12 mx-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <span className="text-xl font-bold">AgileFlow</span>
              <p className="text-gray-400 mt-2">
                © 2025 AgileFlow. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const features = [
  {
    title: "Multi-Tenant Architecture",
    description: "Each company has its own isolated workspace with secure authentication.",
    icon: "https://cdn-icons-png.flaticon.com/512/1006/1006363.png",
  },
  {
    title: "Agile Board",
    description: "Drag-and-drop task management with Scrum and Kanban support.",
    icon: "https://cdn-icons-png.flaticon.com/512/2906/2906274.png",
  },
  {
    title: "Task Management",
    description: "Create, assign, and track tasks with dependencies and blockers.",
    icon: "https://cdn-icons-png.flaticon.com/512/3652/3652191.png",
  },
  {
    title: "Reporting & Analytics",
    description: "Burndown charts, team performance reports, and custom dashboards.",
    icon: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png",
  },
  {
    title: "Integrations",
    description: "Connect with Slack, GitHub, Jira, and more for seamless workflows.",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968866.png",
  },
  {
    title: "Customization",
    description: "Custom workflows, themes, and branding for your company.",
    icon: "https://cdn-icons-png.flaticon.com/512/1995/1995534.png",
  },
];

export default HomePage;
