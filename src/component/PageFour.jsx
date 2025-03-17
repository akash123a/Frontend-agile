import { useState } from "react";

const tabs = [
  "Software",
  "Product Management",
  "Marketing",
  "Project Management",
  "Design",
  "IT",
];

const tabContent = [
  {
    title: "Supercharge dev productivity",
    description:
      "Plan, track, and release world-class software with the number one software development tool for agile teams",
    cards: [
      {
        title: "Scrum",
        description: "Easily plan, track, and manage work across sprints",
        image: "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/87k7qf43q3mb4f37pm766j9r/software-card-1.webp",
        link: "/software/jira/templates/scrum",
      },
      {
        title: "Bug Tracking",
        description:
          "Seamlessly report, track, and prioritize bugs to address development issues",
        image: "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/6s69f99c8n4b4fvxgpgck99b/software-card-2.webp",
        link: "/software/jira/templates/bug-tracking",
      },
      {
        title: "DevOps",
        description:
          "Develop, deploy, and manage applications with an open tools approach",
        image: "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/m8btbfgbv9k6b8jr3ff9zpk/software-card-3.webp",
        link: "/software/jira/templates/devops",
      },
    ],
  },
];

export default function PageFour() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl text-center text-gray-800 font-bold mb-6">
        Empower everyone, on every team
      </h2>

      <div className="flex justify-center space-x-4 mb-6">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-full transition duration-300 ${
              activeTab === index
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {tabContent[0].title}
        </h3>
        <p className="text-gray-600 mb-6">{tabContent[0].description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tabContent[0].cards.map((card, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="text-lg font-bold text-gray-900 mb-2">{card.title}</h4>
              <p className="text-gray-600 mb-4">{card.description}</p>
              <a
                href={card.link}
                className="text-blue-500 font-semibold hover:underline flex items-center"
              >
                Try it out &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
