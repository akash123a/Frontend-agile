// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const OrganisationSignup = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     organisationName: "",
//     email: "",
//     password: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log("Form submitted:", formData);
//   };

//   const handleNext = () => {
//     // You can add form validation here before navigating
//     navigate("/subscriber-plan");
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6">
//       <div className="w-full max-w-md bg-gray-800 rounded-lg p-8 shadow-xl">
//         <h1 className="text-3xl font-bold mb-6 text-center">Organisation Signup</h1>
        
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label className="block text-sm font-medium mb-2">Organisation Name</label>
//             <input
//               type="text"
//               className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               value={formData.organisationName}
//               onChange={(e) => setFormData({ ...formData, organisationName: e.target.value })}
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium mb-2">Email</label>
//             <input
//               type="email"
//               className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               value={formData.email}
//               onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium mb-2">Password</label>
//             <input
//               type="password"
//               className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               value={formData.password}
//               onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//               required
//             />
//           </div>

//           <div className="flex justify-between space-x-4">
//             <button
//               type="button"
//               onClick={handleNext}
//               className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300"
//             >
//               Next
//             </button>
//             <button
//               type="submit"
//               className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-300"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default OrganisationSignup;













// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const OrganisationSignup = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     companyName: "",
//     subscription: "Basic",
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       const response = await fetch("http://localhost:8080/api/payment", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const result = await response.json();
//       if (response.ok) {
//         // Backend se payment success ka response mila
//         if (result.paymentSuccess) {
//           navigate("/success"); // Success page pe redirect
//         } else {
//           setError(result.message || "Payment failed. Try again.");
//         }
//       } else {
//         setError("Payment failed. Try again.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setError("Something went wrong. Try again.");
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 p-6">
//       <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
//         <div className="text-center mb-8">
//           <h2 className="text-3xl font-bold text-gray-900 mb-2">Company Signup</h2>
//           <p className="text-gray-600">Register your company to get started with our services.</p>
//         </div>

//         {error && <p className="text-red-500 text-center">{error}</p>}

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-lg" />
//           <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-lg" />
//           <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-lg" />
//           <input type="text" name="companyName" placeholder="Company Name" value={formData.companyName} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-lg" />

//           <select name="subscription" value={formData.subscription} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg">
//             <option value="Basic">Basic - $10/month</option>
//             <option value="Pro">Pro - $20/month</option>
//             <option value="Premium">Premium - $30/month</option>
//           </select>

//           <button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-lg font-semibold">
//             {loading ? "Processing..." : "Register & Pay"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default OrganisationSignup;
























import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { FiUser, FiMail, FiLock, FiBriefcase } from "react-icons/fi";

const OrganisationSignup = () => {
  const navigate = useNavigate(); // Initialize navigate
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    companyName: "",
    subscription: "Basic",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch("http://localhost:8094/api/payment/before-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.text();

      if (response.ok) {
        setMessage({ type: "success", text: "Registration successful! Redirecting...", icon: "✅" });

        // Redirect to Payment.jsx after 2 seconds
        setTimeout(() => {
          navigate("/payment"); // Redirect to Payment page
        }, 2000);
      } else {
        setMessage({ type: "error", text: result, icon: "❌" });
      }
    } catch (error) {
      setMessage({ type: "error", text: "Something went wrong. Please try again.", icon: "⚠️" });
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-8 transition-all duration-300 hover:shadow-2xl">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-2">Company Registration</h1>
          <p className="text-center text-gray-500">Start your 14-day free trial. No credit card required.</p>
        </header>

        {message && (
          <div className={`mb-6 p-4 rounded-lg flex items-center space-x-3 
            ${message.type === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
            <span className="text-xl">{message.icon}</span>
            <p className="font-medium">{message.text}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-4">
            <div className="relative">
              <FiUser className="absolute top-4 left-4 text-gray-400" />
              <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required
                className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
            </div>

            <div className="relative">
              <FiMail className="absolute top-4 left-4 text-gray-400" />
              <input type="email" name="email" placeholder="Work Email" value={formData.email} onChange={handleChange} required
                className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
            </div>

            <div className="relative">
              <FiLock className="absolute top-4 left-4 text-gray-400" />
              <input type="password" name="password" placeholder="Create Password" value={formData.password} onChange={handleChange} required
                className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
            </div>

            <div className="relative">
              <FiBriefcase className="absolute top-4 left-4 text-gray-400" />
              <input type="text" name="companyName" placeholder="Company Name" value={formData.companyName} onChange={handleChange} required
                className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
            </div>

            <div className="grid grid-cols-3 gap-4">
              {["Basic", "Pro", "Premium"].map((plan) => (
                <label key={plan} className={`relative p-4 rounded-lg border-2 cursor-pointer transition-all
                  ${formData.subscription === plan ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-blue-300"}`}>
                  <input type="radio" name="subscription" value={plan} checked={formData.subscription === plan} onChange={handleChange} className="absolute opacity-0" />
                  <div className="text-center">
                    <h3 className="font-semibold text-gray-800">{plan}</h3>
                    <p className="text-sm text-gray-600 mt-1">${plan === "Basic" ? 10 : plan === "Pro" ? 20 : 30}/mo</p>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <button type="submit" disabled={loading} className="w-full bg-blue-900 text-black py-3.5 rounded-lg font-semibold hover:bg-orange-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center">
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </>
            ) : (
              "Start Free Trial & Register"
            )}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          By clicking register, you agree to our
          <a href="#" className="text-blue-600 hover:underline ml-1">terms of service</a>
        </p>
      </div>
    </div>
  );
};

export default OrganisationSignup;

