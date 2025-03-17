import React from "react";

const PageThree = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200 p-5 text-center">
      <div className="max-w-3xl bg-white p-8 rounded-lg shadow-lg">
        <div className="flex justify-center items-center mb-6">
          <img
            src="https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/7hhmjs66t33f8n3snssrzrr/sparkle-sm.svg"
            alt="Sparkle"
            className="w-10 mr-3"
          />
          <h2 className="text-2xl font-bold text-gray-800">
            Teamwork Solutions for High-Performing Teams
          </h2>
        </div>
        <p className="text-gray-600 mb-6">
          The #1 tool for agile teams is now for all teams. Plan, track, and
          deliver your biggest ideas together.
        </p>
        <div className="relative w-full pb-[56.25%] bg-gray-300 mb-6">
          <video
            autoPlay
            muted
            loop
            className="absolute top-0 left-0 w-full h-full"
          >
            <source
              src="https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/as/s6r8r5b4k7jnqcgp9g8nvfp/CSD-10721_WAC_Jira_LowBR-crf-30-r-30"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="flex justify-center gap-4">
          <a
            href="#"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Get it Free
          </a>
          <a
            href="#"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Explore Jira
          </a>
        </div>
      </div>
    </div>
  );
};

export default PageThree;
