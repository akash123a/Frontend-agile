import React, { useState } from "react";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("login");
  const [notificationCount, setNotificationCount] = useState(3); // Dynamic notification count

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-800">Agile Tool</h1>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="relative text-gray-600 hover:text-blue-800">
            {notificationCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
                {notificationCount}
              </span>
            )}
            🔔
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold px-5 py-2 rounded-xl shadow-md transition-all duration-300 transform hover:scale-105 hover:from-pink-500 hover:to-purple-500"
          >
            Login / Signup
          </button>
        </div>
      </header>

      {/* Sidebar & Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <nav className="w-64 bg-blue-800 text-white p-6">
          <h2 className="text-xl font-bold mb-6">Navigation</h2>
          <ul className="space-y-3">
            {["Dashboard", "Projects", "Tasks", "Sprints", "Reports"].map((item) => (
              <li key={item} className="hover:bg-blue-700 p-2 rounded-lg cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </nav>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Active Projects: 5", "Tasks in Progress: 12", "Upcoming Deadlines: 3"].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold">{stat}</h3>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          onClick={() => setIsModalOpen(false)} // Close modal when clicking outside
        >
          <div 
            className="bg-white rounded-lg shadow-lg w-96 p-6 relative transform transition-all duration-300 scale-100"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
            >
              ✖
            </button>
            
            {/* Tabs */}
            <div className="flex border-b mb-4">
              {["login", "signup"].map((tab) => (
                <button
                  key={tab}
                  className={`flex-1 p-4 text-center font-semibold ${
                    activeTab === tab ? "text-blue-800 border-b-2 border-blue-800" : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Forms */}
            {activeTab === "login" ? (
              <form>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 border rounded-lg mb-4"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-2 border rounded-lg mb-6"
                />
                <button className="w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                  Login
                </button>
              </form>
            ) : (
              <form>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-2 border rounded-lg mb-4"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 border rounded-lg mb-4"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-2 border rounded-lg mb-6"
                />
                <button className="w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                  Signup
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
