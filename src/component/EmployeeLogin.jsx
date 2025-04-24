import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiUser, FiLock, FiArrowRight } from "react-icons/fi";

const EmployeeLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic client-side check (not secure for real applications)
    if (email && password) {
      navigate("/dashboard"); // Redirect to Check.jsx
    } else {
      alert("Please enter both email and password.");
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
          <p className="text-gray-500">Sign in to access your workspace.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full border p-3 rounded" />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full border p-3 rounded" />

          <button type="submit" className="w-full bg-indigo-500 text-white py-3 rounded">
            Sign In
            <FiArrowRight className="ml-2" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmployeeLogin;











//--------------------------------------------------------------------------------------------------

//   ye code voo jo sabse  pehle likha gaya hai, ye code employee login ka hai, ye code

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FiUser, FiLock, FiArrowRight } from "react-icons/fi";

// const EmployeeLogin = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       const response = await fetch("http://localhost:8094/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });


//       if (response.ok) {
//         alert("Login successful!");
//         localStorage.setItem("token", response);
//         navigate("/dashboard");
//       } else {
//         setError(data.message || "Login failed. Please try again.");
//       }
//     } catch (error) {
//       setError("Something went wrong. Please check your connection.");
//     }

//     setLoading(false);
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

//         {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full border p-3 rounded" />
//           <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full border p-3 rounded" />

//           <button type="submit" className="w-full bg-indigo-500 text-white py-3 rounded">
//             {loading ? "Signing In..." : "Sign In"}
//             <FiArrowRight className="ml-2" />
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EmployeeLogin;
















//====================================================================================================
      




    
//This is Check backend will verify then he hits the login button and then it will redirect to the dashboard page
    

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FiUser, FiLock, FiArrowRight } from "react-icons/fi";

// const EmployeeLogin = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       const response = await fetch("http://localhost:8094/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json(); // Parse the response body as JSON

//       if (response.ok) {
//         alert("Login successful!");
//         localStorage.setItem("token", data.token); // Store the token from the response
//         navigate("/dashboard");
//       } else {
//         setError(data.message || "Login failed. Please try again.");
//       }
//     } catch (error) {
//       setError("Something went wrong. Please check your connection.");
//     }

//     setLoading(false);
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

//         {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full border p-3 rounded" />
//           <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full border p-3 rounded" />

//           <button type="submit" className="w-full bg-indigo-500 text-white py-3 rounded">
//             {loading ? "Signing In..." : "Sign In"}
//             <FiArrowRight className="ml-2" />
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EmployeeLogin;