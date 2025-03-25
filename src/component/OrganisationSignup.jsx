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













import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OrganisationSignup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    companyName: "",
    subscription: "Basic",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:8080/api/payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        // Backend se payment success ka response mila
        if (result.paymentSuccess) {
          navigate("/success"); // Success page pe redirect
        } else {
          setError(result.message || "Payment failed. Try again.");
        }
      } else {
        setError("Payment failed. Try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Something went wrong. Try again.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 p-6">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Company Signup</h2>
          <p className="text-gray-600">Register your company to get started with our services.</p>
        </div>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-lg" />
          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-lg" />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-lg" />
          <input type="text" name="companyName" placeholder="Company Name" value={formData.companyName} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-lg" />

          <select name="subscription" value={formData.subscription} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg">
            <option value="Basic">Basic - $10/month</option>
            <option value="Pro">Pro - $20/month</option>
            <option value="Premium">Premium - $30/month</option>
          </select>

          <button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-lg font-semibold">
            {loading ? "Processing..." : "Register & Pay"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrganisationSignup;
