// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const SubscriberPlan = () => {
//   const [isYearly, setIsYearly] = useState(false);
//   const navigate = useNavigate();

//   const plans = [
//     { name: "Basic", price: 10, features: ["✔ 5 Projects", "✔ Email Support", "✔ Basic Analytics"] },
//     { name: "Pro", price: 20, features: ["✔ 20 Projects", "✔ Priority Support", "✔ AI-powered Insights"], mostPopular: true },
//     { name: "Premium", price: 30, features: ["✔ Unlimited Projects", "✔ 24/7 VIP Support", "✔ Custom AI Reports"] },
//   ];

//   return (
//     <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-6">
//       <h1 className="text-4xl font-bold mb-6">Choose Your Plan</h1>

//       {/* Toggle Button for Monthly/Yearly Plans */}
//       <div className="flex items-center mb-6 space-x-4">
//         <span className="text-lg">Monthly</span>
//         <label className="relative inline-flex items-center cursor-pointer">
//           <input type="checkbox" className="sr-only peer" checked={isYearly} onChange={() => setIsYearly(!isYearly)} />
//           <div className="w-14 h-7 bg-gray-600 rounded-full peer peer-checked:bg-blue-500 relative transition-all">
//             <div className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-all peer-checked:left-8"></div>
//           </div>
//         </label>
//         <span className="text-lg">Yearly <span className="text-sm text-green-400">(Save 20%)</span></span>
//       </div>

//       {/* Subscription Plans */}
//       <div className="grid md:grid-cols-3 gap-6 w-full max-w-5xl">
//         {plans.map((plan, index) => (
//           <div key={index} className={`relative bg-blue-500 p-6 rounded-lg shadow-lg text-center transition-all transform hover:scale-110 hover:shadow-2xl ${plan.mostPopular ? "border-4 border-yellow-400" : ""}`}>
//             {plan.mostPopular && (
//               <div className="absolute top-0 left-0 bg-yellow-400 text-black font-semibold text-xs px-3 py-1 rounded-br-lg">
//                 Most Popular
//               </div>
//             )}

//             <h2 className="text-2xl font-bold">{plan.name}</h2>
//             <p className="text-xl my-4">${isYearly ? (plan.price * 0.8).toFixed(2) : plan.price}/month</p>
            
//             <ul className="text-white mb-6 space-y-2">
//               {plan.features.map((feature, i) => (
//                 <li key={i}>{feature}</li>
//               ))}
//             </ul>

//             <button
//               className="bg-white text-black px-4 py-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-gray-900 hover:text-white hover:scale-105 shadow-md"

//               onClick={() => navigate("/payment", { state: { plan, isYearly } })}
//             >
//               Get Started
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SubscriberPlan;








import React, { useState } from "react";

const SubscriberPlan = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    { name: "Basic", price: 10, features: ["✔ 5 Projects", "✔ Email Support", "✔ Basic Analytics"] },
    { name: "Pro", price: 20, features: ["✔ 20 Projects", "✔ Priority Support", "✔ AI-powered Insights"], mostPopular: true },
    { name: "Premium", price: 30, features: ["✔ Unlimited Projects", "✔ 24/7 VIP Support", "✔ Custom AI Reports"] },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-6">Choose Your Plan</h1>

      {/* Toggle Button for Monthly/Yearly Plans */}
      <div className="flex items-center mb-6 space-x-4">
        <span className="text-lg">Monthly</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" checked={isYearly} onChange={() => setIsYearly(!isYearly)} />
          <div className="w-14 h-7 bg-gray-600 rounded-full peer peer-checked:bg-blue-500 relative transition-all">
            <div className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-all peer-checked:left-8"></div>
          </div>
        </label>
        <span className="text-lg">Yearly <span className="text-sm text-green-400">(Save 20%)</span></span>
      </div>

      {/* Subscription Plans */}
      <div className="grid md:grid-cols-3 gap-6 w-full max-w-5xl">
        {plans.map((plan, index) => (
          <div key={index} className={`relative bg-blue-500 p-6 rounded-lg shadow-lg text-center transition-all transform hover:scale-110 hover:shadow-2xl ${plan.mostPopular ? "border-4 border-yellow-400" : ""}`}>
            {plan.mostPopular && (
              <div className="absolute top-0 left-0 bg-yellow-400 text-black font-semibold text-xs px-3 py-1 rounded-br-lg">
                Most Popular
              </div>
            )}

            <h2 className="text-2xl font-bold">{plan.name}</h2>
            <p className="text-xl my-4">${isYearly ? (plan.price * 0.8).toFixed(2) : plan.price}/month</p>
            
            <ul className="text-white mb-6 space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

            <button
              onClick={() => {
                const paymentUrl = `/payment?plan=${encodeURIComponent(plan.name)}&price=${isYearly ? (plan.price * 0.8).toFixed(2) : plan.price}&isYearly=${isYearly}`;
                window.open(paymentUrl, "_blank"); // Opens in a new tab
              }}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all"
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriberPlan;

























// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const SubscriberPlan = () => {
//   const [isYearly, setIsYearly] = useState(false);
//   const navigate = useNavigate();

//   const plans = [
//     { name: "Basic", price: 10, features: ["✔ 5 Projects", "✔ Email Support", "✔ Basic Analytics"] },
//     { name: "Pro", price: 20, features: ["✔ 20 Projects", "✔ Priority Support", "✔ AI-powered Insights"], mostPopular: true },
//     { name: "Premium", price: 30, features: ["✔ Unlimited Projects", "✔ 24/7 VIP Support", "✔ Custom AI Reports"] },
//   ];

//   // Function to send selected plan data to Spring Boot API
//   const handlePayment = async (plan) => {
//     const paymentData = {
//       planName: plan.name,
//       price: isYearly ? (plan.price * 0.8).toFixed(2) : plan.price, // Apply 20% discount if yearly
//       isYearly: isYearly,
//     };

//     try {
//       const response = await fetch("http://localhost:8080/api/payment/process", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(paymentData),
//       });

//       const result = await response.json();
//       if (response.ok && result.paymentSuccess) {
//         navigate("/success"); // Redirect on successful payment
//       } else {
//         alert("Payment failed: " + result.message);
//       }
//     } catch (error) {
//       console.error("Payment Error:", error);
//       alert("Something went wrong. Try again.");
//     }
//   };

//   return (
//     <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-6">
//       <h1 className="text-4xl font-bold mb-6">Choose Your Plan</h1>

//       {/* Toggle Button for Monthly/Yearly Plans */}
//       <div className="flex items-center mb-6 space-x-4">
//         <span className="text-lg">Monthly</span>
//         <label className="relative inline-flex items-center cursor-pointer">
//           <input type="checkbox" className="sr-only peer" checked={isYearly} onChange={() => setIsYearly(!isYearly)} />
//           <div className="w-14 h-7 bg-gray-600 rounded-full peer peer-checked:bg-blue-500 relative transition-all">
//             <div className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-all peer-checked:left-8"></div>
//           </div>
//         </label>
//         <span className="text-lg">Yearly <span className="text-sm text-green-400">(Save 20%)</span></span>
//       </div>

//       {/* Subscription Plans */}
//       <div className="grid md:grid-cols-3 gap-6 w-full max-w-5xl">
//         {plans.map((plan, index) => (
//           <div key={index} className={`relative bg-blue-500 p-6 rounded-lg shadow-lg text-center transition-all transform hover:scale-110 hover:shadow-2xl ${plan.mostPopular ? "border-4 border-yellow-400" : ""}`}>
//             {plan.mostPopular && (
//               <div className="absolute top-0 left-0 bg-yellow-400 text-black font-semibold text-xs px-3 py-1 rounded-br-lg">
//                 Most Popular
//               </div>
//             )}

//             <h2 className="text-2xl font-bold">{plan.name}</h2>
//             <p className="text-xl my-4">${isYearly ? (plan.price * 0.8).toFixed(2) : plan.price}/month</p>
            
//             <ul className="text-white mb-6 space-y-2">
//               {plan.features.map((feature, i) => (
//                 <li key={i}>{feature}</li>
//               ))}
//             </ul>

//             <button
//               className="bg-gray-900 hover:bg-gray-800 px-4 py-2 rounded text-white transition-all transform hover:scale-105"
//               onClick={() => handlePayment(plan)}
//             >
//               Get Started
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SubscriberPlan;
