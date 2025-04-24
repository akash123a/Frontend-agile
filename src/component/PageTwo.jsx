// import React from "react";

// const PageTwo = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-indigo-900 to-gray-800 flex items-center justify-center p-6 relative overflow-hidden">
//       {/* Subtle Animated Background Gradient */}
//       <div className="absolute inset-0 bg-gradient-to-r from-indigo-950 to-gray-900 animate-gradient-x opacity-50"></div>

//       <div className="max-w-4xl w-full bg-gray-900 bg-opacity-75 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-16 text-gray-100 text-center animate-fadeIn relative z-10">
//         <header className="mb-12">
//           <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
//             Unleash Your Team's Potential with Powerful Collaboration
//           </h2>
//           <p className="mt-4 text-lg md:text-xl text-gray-300 font-light leading-relaxed">
//             Revolutionize how your team works together. Plan, track, and deliver with ease. The ultimate tool for modern Agile teams.
//           </p>
//         </header>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
//           <a
//             href="/jira-free"
//             className="group relative overflow-hidden bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl shadow-lg p-6 md:p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
//             aria-label="Get Jira for Free"
//           >
//             <div className="absolute inset-0 bg-black bg-opacity-10 rounded-xl transition-opacity duration-300 group-hover:opacity-0"></div>
//             <div className="relative z-10">
//             <h3 className="text-xl md:text-2xl font-semibold mb-2">
//   Start Managing Projects Smarter — Free with TaskPilot
// </h3> 
//               <p className="text-sm md:text-base text-gray-200">Start collaborating instantly.</p>
//             </div>
//           </a>

//           <a
//             href="/jira"
//             className="group relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-lg p-6 md:p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
//             aria-label="Explore Jira Features"
//           >
//             <div className="absolute inset-0 bg-black bg-opacity-10 rounded-xl transition-opacity duration-300 group-hover:opacity-0"></div>
//             <div className="relative z-10">
//             <h3 className="text-xl md:text-2xl font-semibold mb-2">
//   Your Agile Journey Begins Here — Try FlowHive for Free
// </h3>

//               <p className="text-sm md:text-base text-gray-200">Discover powerful features.</p>
//             </div>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PageTwo;


import React, { useEffect } from "react";

const PageTwo = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = document.querySelectorAll('.card-3d');
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Animated floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div key={i} 
            className="absolute w-1 h-1 bg-purple-400 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* 3D floating card container */}
      <div className="max-w-4xl w-full relative group">
        {/* Backdrop glow effect */}
        <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 animate-pulse" />

        <div className="relative bg-gray-900 bg-opacity-75 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-16 text-gray-100 overflow-hidden transform perspective-1000">
          {/* Animated border */}
          <div className="absolute inset-0 rounded-3xl border-2 border-purple-500/30 animate-border-rotate" />

          <header className="mb-12 space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight animate-slide-in-up">
              Unleash Your Team's{' '}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Potential
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed opacity-0 animate-fade-in-delayed">
              Revolutionize collaboration with our 3D-enhanced Agile platform.
              <br className="hidden md:block" />
              Visualize workflows like never before.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[{
              title: "Start Managing Projects Smarter",
              subtitle: "Free with TaskPilot",
              bg: "from-purple-600 to-blue-600",
              hover: "hover:shadow-purple-glow"
            }, {
              title: "Your Agile Journey Begins Here",
              subtitle: "Try FlowHive for Free",
              bg: "from-blue-600 to-purple-600",
              hover: "hover:shadow-blue-glow"
            }].map((card, i) => (
              <a
                key={i}
                href={i === 0 ? "/jira-free" : "/jira"}
                className={`card-3d relative overflow-hidden bg-gradient-to-br ${card.bg} rounded-2xl shadow-xl p-8 hover:scale-[1.02] transition-all duration-300 ${card.hover} hover:z-20 group`}
                style={{
                  transformStyle: 'preserve-3d',
                  '--tw-shadow-colored': '0 25px 50px -12px var(--tw-shadow-color)',
                }}
                aria-label={i === 0 ? "Get Jira for Free" : "Explore Jira Features"}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 space-y-4">
                  <div className="w-12 h-12 mb-4 bg-white/10 rounded-xl backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-200 font-medium bg-black/20 px-3 py-1 rounded-full inline-block">
                    {card.subtitle}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Floating decoration */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float-3d" />
        </div>
      </div>

      <style jsx global>{`
        @keyframes border-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-border-rotate {
          animation: border-rotate 6s linear infinite;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          -webkit-mask-composite: xor;
        }

        .card-3d::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(
            800px circle at var(--mouse-x) var(--mouse-y),
            rgba(255,255,255,0.1),
            transparent 40%
          );
          border-radius: inherit;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .card-3d:hover::before {
          opacity: 1;
        }

        .hover\:shadow-purple-glow:hover {
          --tw-shadow-color: rgb(192 132 252 / 0.4);
          --tw-shadow: var(--tw-shadow-colored);
        }
        .hover\:shadow-blue-glow:hover {
          --tw-shadow-color: rgb(96 165 250 / 0.4);
          --tw-shadow: var(--tw-shadow-colored);
        }

        @keyframes slide-in-up {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-in-up {
          animation: slide-in-up 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .animate-fade-in-delayed {
          animation: fade-in 0.6s 0.3s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default PageTwo;