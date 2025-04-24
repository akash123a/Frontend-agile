// import React, { useState, useEffect } from "react";

// const Payment = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     plan: "",
//   });
//   const [errors, setErrors] = useState({
//     name: "",
//     email: "",
//     plan: "",
//   });
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     // Dynamically load the Razorpay script if it's not already present
//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.async = true;
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script); // Clean up the script on unmount
//     };
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     setErrors({ ...errors, [name]: "" }); // Clear error on input change
//   };

//   const validateForm = () => {
//     let isValid = true;
//     const newErrors = { name: "", email: "", plan: "" };

//     if (!formData.name.trim()) {
//       newErrors.name = "Please enter your full name";
//       isValid = false;
//     }

//     if (!formData.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
//       newErrors.email = "Please enter a valid email address";
//       isValid = false;
//     }

//     if (!formData.plan) {
//       newErrors.plan = "Please select a plan";
//       isValid = false;
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   const createOrder = async (amount) => {
//     try {
//       const response = await fetch("http://localhost:8095/createOrder", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           name: formData.name.trim(),
//           email: formData.email.trim(),
//           amount: amount,
//         }),
//       });
//       return await response.json();
//     } catch (error) {
//       console.error("Error creating order:", error);
//       throw error;
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       return;
//     }

//     setLoading(true);

//     try {
//       const amount = formData.plan;
//       const order = await createOrder(amount);

//       const options = {
//         key: "rzp_test_d6BspzoJNG7dXq", // Replace with your actual key
//         amount: order.amount * 100,
//         currency: "INR",
//         name: "Your Business Name",
//         description: "Subscription Payment",
//         order_id: order.razorpayOrderId,
//         callback_url: "http://localhost:8095/paymentCallback",
//         prefill: {
//           name: formData.name,
//           email: formData.email,
//         },
//         theme: { color: "#6366f1" },
//         handler: function (response) {
//           window.location.href = `/success?order_id=${order.razorpayOrderId}&amount=${order.amount}`;
//         },
//       };

//       const razorpay = new window.Razorpay(options);
//       razorpay.open();
//     } catch (error) {
//       alert("Payment failed. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 p-6">
//       <div className="payment-container bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
//         <div className="payment-header text-center mb-8">
//           <h1 className="text-2xl font-bold text-gray-900 mb-2">
//             Secure Checkout
//           </h1>
//           <p className="text-gray-600">Choose your plan and complete payment</p>
//         </div>

//         <form id="paymentForm" onSubmit={handleSubmit} className="space-y-6">
//           <div className="form-group relative">
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
//               Full Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               placeholder="John Doe"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//             />
//             <i className="fas fa-user absolute right-4 bottom-3 text-gray-400"></i>
//             {errors.name && (
//               <div className="error-message text-red-500 text-xs mt-1">{errors.name}</div>
//             )}
//           </div>

//           <div className="form-group relative">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="john@example.com"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//             />
//             <i className="fas fa-envelope absolute right-4 bottom-3 text-gray-400"></i>
//             {errors.email && (
//               <div className="error-message text-red-500 text-xs mt-1">{errors.email}</div>
//             )}
//           </div>

//           <div className="form-group relative">
//             <label htmlFor="plan" className="block text-sm font-medium text-gray-700 mb-2">
//               Select Plan
//             </label>
//             <select
//               id="plan"
//               name="plan"
//               value={formData.plan}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all plan-selector"
//             >
//               <option value="">Choose a plan...</option>
//               <option value="199">BASIC - ₹199/month</option>
//               <option value="499">PRO - ₹499/month</option>
//               <option value="999">PREMIUM - ₹999/month</option>
//             </select>
//             {errors.plan && (
//               <div className="error-message text-red-500 text-xs mt-1">{errors.plan}</div>
//             )}
//           </div>

//           <button
//             type="submit"
//             id="rzp-button1"
//             className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
//             disabled={loading}
//           >
//             {loading ? (
//               <span className="loading w-4 h-4 border-2 border-white rounded-full border-t-blue-500 animate-spin"></span>
//             ) : (
//               <>
//                 <span className="button-text">Proceed to Secure Payment</span>
//                 <i className="fas fa-lock"></i>
//               </>
//             )}
//           </button>

//           <div className="secure-note text-center mt-4 p-3 bg-gray-100 rounded-md flex items-center justify-center gap-2">
//             <i className="fas fa-shield-check text-green-500"></i>
//             <span>256-bit SSL secured payment</span>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Payment;











// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const Payment = () => {
//   const navigate = useNavigate(); // Hook for navigation

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     plan: "",
//   });
//   const [errors, setErrors] = useState({
//     name: "",
//     email: "",
//     plan: "",
//   });
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.async = true;
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     setErrors({ ...errors, [name]: "" });
//   };

//   const validateForm = () => {
//     let isValid = true;
//     const newErrors = { name: "", email: "", plan: "" };

//     if (!formData.name.trim()) {
//       newErrors.name = "Please enter your full name";
//       isValid = false;
//     }

//     if (!formData.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
//       newErrors.email = "Please enter a valid email address";
//       isValid = false;
//     }

//     if (!formData.plan) {
//       newErrors.plan = "Please select a plan";
//       isValid = false;
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   const createOrder = async (amount) => {
//     try {
//       const response = await fetch("http://localhost:8095/createOrder", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           name: formData.name.trim(),
//           email: formData.email.trim(),
//           amount: amount,
//         }),
//       });
//       return await response.json();
//     } catch (error) {
//       console.error("Error creating order:", error);
//       throw error;
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       return;
//     }

//     setLoading(true);

//     try {
//       const amount = formData.plan;
//       const order = await createOrder(amount);

//       const options = {
//         key: "rzp_test_d6BspzoJNG7dXq",
//         amount: order.amount * 100,
//         currency: "INR",
//         name: "Your Business Name",
//         description: "Subscription Payment",
//         order_id: order.razorpayOrderId,
//         callback_url: "http://localhost:8095/paymentCallback",
//         prefill: {
//           name: formData.name,
//           email: formData.email,
//         },
//         theme: { color: "#6366f1" },
//         handler: function (response) {
//           alert("Payment Successful!");
//           navigate("/organisation-signup"); // Redirect to OrganisationSignup
//         },
//       };

//       const razorpay = new window.Razorpay(options);
//       razorpay.open();
//     } catch (error) {
//       alert("Payment failed. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 p-6">
//       <div className="payment-container bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
//         <div className="payment-header text-center mb-8">
//           <h1 className="text-2xl font-bold text-gray-900 mb-2">Secure Checkout</h1>
//           <p className="text-gray-600">Choose your plan and complete payment</p>
//         </div>

//         <form id="paymentForm" onSubmit={handleSubmit} className="space-y-6">
//           <div className="form-group relative">
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
//               Full Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               placeholder="John Doe"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
//             />
//             {errors.name && <div className="text-red-500 text-xs mt-1">{errors.name}</div>}
//           </div>

//           <div className="form-group relative">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="john@example.com"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
//             />
//             {errors.email && <div className="text-red-500 text-xs mt-1">{errors.email}</div>}
//           </div>

//           <div className="form-group relative">
//             <label htmlFor="plan" className="block text-sm font-medium text-gray-700 mb-2">
//               Select Plan
//             </label>
//             <select
//               id="plan"
//               name="plan"
//               value={formData.plan}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
//             >
//               <option value="">Choose a plan...</option>
//               <option value="199">BASIC - ₹199/month</option>
//               <option value="499">PRO - ₹499/month</option>
//               <option value="999">PREMIUM - ₹999/month</option>
//             </select>
//             {errors.plan && <div className="text-red-500 text-xs mt-1">{errors.plan}</div>}
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
//             disabled={loading}
//           >
//             {loading ? (
//               <span className="loading w-4 h-4 border-2 border-white rounded-full border-t-blue-500 animate-spin"></span>
//             ) : (
//               <>
//                 <span>Proceed to Secure Payment</span>
//                 <i className="fas fa-lock"></i>
//               </>
//             )}
//           </button>

//           <div className="secure-note text-center mt-4 p-3 bg-gray-100 rounded-md flex items-center justify-center gap-2">
//             <i className="fas fa-shield-check text-green-500"></i>
//             <span>256-bit SSL secured payment</span>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Payment;
































import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", plan: "" });
  const [errors, setErrors] = useState({ name: "", email: "", plan: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", plan: "" };
    if (!formData.name.trim()) { newErrors.name = "Please enter your full name"; isValid = false; }
    if (!formData.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) { newErrors.email = "Please enter a valid email address"; isValid = false; }
    if (!formData.plan) { newErrors.plan = "Please select a plan"; isValid = false; }
    setErrors(newErrors);
    return isValid;
  };

  const createOrder = async (amount) => {
    try {
      const response = await fetch("http://localhost:8095/createOrder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: formData.name.trim(), email: formData.email.trim(), amount }),
      });
      return await response.json();
    } catch (error) {
      console.error("Error creating order:", error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);

    try {
      const amount = formData.plan;
      const order = await createOrder(amount);
      const options = {
        key: "rzp_test_d6BspzoJNG7dXq",
        amount: order.amount * 100,
        currency: "INR",
        name: "Your Business Name",
        description: "Subscription Payment",
        order_id: order.razorpayOrderId,
        prefill: { name: formData.name, email: formData.email },
        theme: { color: "#6366f1" },
        handler: function (response) {
          navigate(`/otp-verification?email=${formData.email}`);
        },
      };
      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      alert("Payment failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-xl font-bold text-center mb-4">Secure Checkout</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="w-full p-3 border rounded" />
          {errors.name && <div className="text-red-500 text-sm">{errors.name}</div>}
          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="w-full p-3 border rounded" />
          {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}
          <select name="plan" value={formData.plan} onChange={handleChange} className="w-full p-3 border rounded">
            <option value="">Choose a plan...</option>
            <option value="199">BASIC - ₹199/month</option>
            <option value="499">PRO - ₹499/month</option>
            <option value="999">PREMIUM - ₹999/month</option>
          </select>
          {errors.plan && <div className="text-red-500 text-sm">{errors.plan}</div>}
          <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition">
            {loading ? "Processing..." : "Proceed to Secure Payment"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
