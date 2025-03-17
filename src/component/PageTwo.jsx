import React from "react";

const PageTwo = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-700 to-blue-500 p-5 text-white text-center">
      <div className="max-w-3xl p-12 bg-white bg-opacity-10 backdrop-blur-md rounded-2xl shadow-lg transition-transform transform hover:-translate-y-2 animate-fadeIn">
        <header className="mb-8">
          <h2 className="text-4xl font-bold text-white drop-shadow-lg">
            🚀 Teamwork Solutions for High-Performing Teams
          </h2>
        </header>
        <p className="text-lg text-gray-200 mb-8 font-light leading-relaxed">
          Plan, track, and deliver your biggest ideas together. The #1 tool for
          Agile teams is now for everyone!
        </p>
        <div className="flex justify-center gap-5">
          <a
            href="/jira-free"
            className="px-8 py-4 text-lg font-medium bg-pink-400 rounded-lg shadow-md transition-transform transform hover:bg-pink-500 hover:scale-105"
          >
            Get it Free
          </a>
          <a
            href="/jira"
            className="px-8 py-4 text-lg font-medium bg-teal-400 rounded-lg shadow-md transition-transform transform hover:bg-teal-500 hover:scale-105"
          >
            Explore Jira
          </a>
        </div>
      </div>
    </div>
  );
};

export default PageTwo;
