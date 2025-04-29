import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiUser, FiLock, FiArrowRight } from "react-icons/fi";

const EmployeeLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:8094/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const contentType = response.headers.get("content-type");
      const data = contentType?.includes("application/json")
        ? await response.json()
        : null;

      if (!response.ok) {
        throw new Error(data?.message || "Invalid email or password");
      }

      // Handling the response
      const role = data.role;
      localStorage.setItem("role", role); // Store the role in localStorage
      localStorage.setItem("email", email); // Optionally store the email or token
      
      if (role === "ADMIN") {
        localStorage.setItem("role", role); // Save role in localStorage
  localStorage.setItem("email", email); // Optional, you can also store email or other info
  navigate("/dashboard"); // Redirect to dashboard
      } else if (role === "MEMBER") {
        navigate("/employee-dashboard"); // Redirect member to employee dashboard
      } else {
        throw new Error("Invalid role received.");
      }
    } catch (error) {
      setError(error.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-pink-50 p-4">
      <div className="relative bg-white rounded-2xl p-8 w-full max-w-md shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <div className="text-center mb-8">
          <div className="mb-4 flex justify-center">
            <div className="p-3 bg-indigo-100 rounded-2xl">
              <FiUser className="text-3xl text-indigo-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome Back! 👋
          </h1>
          <p className="text-gray-500">Sign in to access your workspace</p>
        </div>

        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-lg transition-colors flex items-center justify-center disabled:opacity-50"
          >
            {loading ? (
              <span className="flex items-center">
                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" fill="none" strokeWidth="4" className="opacity-25 stroke-current" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Signing In...
              </span>
            ) : (
              <>
                Sign In
                <FiArrowRight className="ml-2" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmployeeLogin;



//====================================================================================================
      
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FiUser, FiLock, FiArrowRight } from "react-icons/fi";

// const EmployeeLogin = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Basic client-side check (not secure for real applications)
//     if (email && password) {
//       navigate("/dashboard"); // Redirect to Check.jsx
//     } else {
//       alert("Please enter both email and password.");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-pink-50 p-4">
//       <div className="relative bg-white rounded-2xl p-8 w-full max-w-md shadow-xl hover:shadow-2xl transition-shadow duration-300">
        
//         <div className="text-center mb-8">
//           <div className="mb-4 flex justify-center">
//             <div className="p-3 bg-indigo-100 rounded-2xl">
//               <FiUser className="text-3xl text-indigo-600" />
//             </div>
//           </div>
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">
//             Welcome Back! 👋
//           </h1>
//           <p className="text-gray-500">Sign in to access your workspace.</p>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full border p-3 rounded" />
//           <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full border p-3 rounded" />

//           <button type="submit" className="w-full bg-indigo-500 text-white py-3 rounded">
//             Sign In
//             <FiArrowRight className="ml-2" />
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EmployeeLogin;



