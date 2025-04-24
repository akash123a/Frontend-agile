import React from "react";

const PageSix = () => {
  return (
    <div className="bg-gray-100 font-sans p-8">
      {/* Main Container */}
      <div
        id="panel:tabs:1:0"
        aria-labelledby="tab:tabs:1:0"
        aria-hidden="false"
        role="tabpanel"
        className="tab-panel active-panel"
      >
        {/* Content Section */}
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Supercharge Dev Productivity
              </h3>
              <p className="text-gray-600">
                Plan, track, and release world-class software with the number one
                software development tool for agile teams.
              </p>
              <a
                href="/teams/software-development"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              >
                <span>Learn more about Software</span>
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
            <div>
              <img
                src="https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/h4mh7krtmbcwgnqsmxp9cpr/software-main.webp"
                alt="Software Development"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Templates Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Get started with a template
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Scrum Template */}
              <TemplateCard
                imageUrl="https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/87k7qf43q3mb4f37pm766j9r/software-card-1.webp"
                title="Scrum"
                description="Easily plan, track, and manage work across sprints."
                link="/software/jira/templates/scrum"
              />

              {/* Bug Tracking Template */}
              <TemplateCard
                imageUrl="https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/6s69f99c8n4b4fvxgpgck99b/software-card-2.webp"
                title="Bug Tracking"
                description="Seamlessly report, track, and prioritize bugs to address development issues."
                link="/software/jira/templates/bug-tracking"
              />

              {/* DevOps Template */}
              <TemplateCard
                imageUrl="https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/m8btbfgbv9k6b8jr3ff9zpk/software-card-3.webp"
                title="DevOps"
                description="Develop, deploy, and manage applications with an open tools approach."
                link="/software/jira/templates/devops"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable TemplateCard Component
const TemplateCard = ({ imageUrl, title, description, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a
          href={link}
          className="text-blue-600 hover:text-blue-800 transition-colors"
        >
          Try it out
        </a>
      </div>
    </div>
  );
};

export default PageSix;