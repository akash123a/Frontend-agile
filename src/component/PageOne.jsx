// import React from "react";

// const PageOne = () => {
//   return (
//     <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-blue-200 to-purple-200 text-gray-900">
//       {/* Logo */}
//       <div className="my-10">
//         <img
//           src="https://pixabay.com/images/id-1296232/"
//           alt="Jira Logo"
//           className="w-44 h-auto rounded-lg shadow-lg"
//         />
//       </div>
      
//       {/* Title & Description */}
//       <h1 className="text-5xl font-bold text-gray-800 mb-3">The New Jira:</h1>
//       <p className="text-xl text-gray-600 max-w-2xl text-center mb-8">
//         From teams to dreams, transform your work with Jira.
//       </p>
      
//       {/* Button */}
//       <button className="bg-blue-600 text-white py-4 px-8 rounded-lg text-lg font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all">
//         Get Started
//       </button>
      
//       {/* Use Cases */}
//       <h2 className="text-4xl font-bold text-gray-800 mt-16">Use Cases</h2>
//       <ul className="flex flex-wrap justify-center mt-6">
//         {useCases.map((useCase, index) => (
//           <li
//             key={index}
//             className="flex items-center bg-white p-4 m-4 rounded-lg shadow-md hover:shadow-lg transition-all"
//           >
//             <img src={useCase.icon} alt={useCase.title} className="w-10 mr-4" />
//             {useCase.title}
//           </li>
//         ))}
//       </ul>
      
//       {/* Use Case Images */}
//       <div className="flex flex-wrap justify-center mt-8 mb-16">
//         {useCases.map((useCase, index) => (
//           <img
//             key={index}
//             className="w-32 m-4 rounded-lg shadow-md hover:shadow-lg transition-all"
//             src={useCase.icon}
//             alt={useCase.title}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// const useCases = [
//   {
//     title: "Software",
//     icon: "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/j9r7crv6mz8g566kwqh9zv5/software.svg",
//   },
//   {
//     title: "Product Management",
//     icon: "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/tvm6cp9vpg8v9t8fkx4fjg7k/prod-management.svg",
//   },
//   {
//     title: "Marketing",
//     icon: "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/sfcpmbjckgrpbwc4qjv6nm7/marketing-hover.svg",
//   },
//   {
//     title: "Project Management",
//     icon: "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/pcj85zfcgbmqmjknc8s753hn/proj-management.svg",
//   },
//   {
//     title: "Design",
//     icon: "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/j9r7crv6mz8g566kwqh9zv5/software.svg",
//   },
//   {
//     title: "IT",
//     icon: "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/tvm6cp9vpg8v9t8fkx4fjg7k/prod-management.svg",
//   },
// ];

// export default PageOne;
 














import React from "react";

const PageOne = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-blue-200 to-purple-200 text-gray-900">
      {/* Logo */}
      <div className="my-10">
        <img
          src="https://pixabay.com/images/id-1296232/"
          alt="Jira Logo"
          className="w-44 h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Title & Description */}
      <h1 className="text-5xl font-bold text-gray-800 mb-3">The New TaskFlow:</h1>
      <p className="text-xl text-gray-600 max-w-2xl text-center mb-8">
        From teams to dreams, transform your work with Jira.
      </p>

      {/* Button */}
      <button className="bg-blue-600 text-white py-4 px-8 rounded-lg text-lg font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all">
        Get Started
      </button>

      {/* Use Cases */}
      <h2 className="text-4xl font-bold text-gray-800 mt-16">Use Cases</h2>
      <ul className="flex flex-wrap justify-center mt-6">
        {useCases.map((useCase, index) => (
          <li
            key={index}
            className="flex items-center bg-white p-4 m-4 rounded-lg shadow-md hover:shadow-lg transition-all"
            style={{
              animationDelay: '0.5s',
              animationName: 'hopup',
              animationDuration: '0.75s',
              animationIterationCount: '1',
            }}
          >
            <img src={useCase.icon} alt={useCase.title} className="w-10 mr-4" />
            {useCase.title}
          </li>
        ))}
      </ul>

      {/* Use Case Images */}
      <div className="flex flex-wrap justify-center mt-8 mb-16">
        {useCases.map((useCase, index) => (
          <img
            key={index}
            className="w-32 m-4 rounded-lg shadow-md hover:shadow-lg transition-all"
            src={useCase.icon}
            alt={useCase.title}
          />
        ))}
      </div>
    </div>
  );
};

const useCases = [
  {
    title: "Software",
    icon: "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/j9r7crv6mz8g566kwqh9zv5/software.svg",
  },
  {
    title: "Product Management",
    icon: "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/tvm6cp9vpg8v9t8fkx4fjg7k/prod-management.svg",
  },
  {
    title: "Marketing",
    icon: "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/sfcpmbjckgrpbwc4qjv6nm7/marketing-hover.svg",
  },
  {
    title: "Project Management",
    icon: "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/pcj85zfcgbmqmjknc8s753hn/proj-management.svg",
  },
  {
    title: "Design",
    icon: "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/j9r7crv6mz8g566kwqh9zv5/software.svg",
  },
  {
    title: "IT",
    icon: "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/tvm6cp9vpg8v9t8fkx4fjg7k/prod-management.svg",
  },
];

export default PageOne;


