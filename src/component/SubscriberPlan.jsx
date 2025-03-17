import React, { useState } from "react";

const SubscriberPlan = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-6">Choose Your Plan</h1>
      
      <div className="flex items-center mb-6">
        <span className="text-lg">Monthly</span>
        <label className="relative inline-flex items-center mx-4 cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={isYearly}
            onChange={() => setIsYearly(!isYearly)}
          />
          <div className="w-14 h-7 bg-gray-600 rounded-full peer peer-checked:bg-blue-500 relative">
            <div className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-all peer-checked:left-8"></div>
          </div>
        </label>
        <span className="text-lg">Yearly <span className="text-sm text-green-400">(Save 20%)</span></span>
      </div>

      <div className="grid md:grid-cols-3 gap-6 w-full max-w-5xl">
        {[{ name: "Basic", price: 10 }, { name: "Pro", price: 20 }, { name: "Premium", price: 30 }].map((plan, index) => (
          <div
            key={index}
            className="bg-blue-500 p-6 rounded-lg shadow-lg text-center transition-transform transform hover:rotate-[360deg] hover:scale-105"
          >
            <h2 className="text-2xl font-bold">{plan.name}</h2>
            <p className="text-xl my-4">${isYearly ? plan.price * 0.8 : plan.price}/month</p>
            <ul className="text-white mb-6">
              <li>✔ Unlimited Projects</li>
              <li>✔ 24/7 Support</li>
              <li>✔ AI-powered Insights</li>
            </ul>
            <button className="bg-gray-900 hover:bg-gray-800 px-4 py-2 rounded text-black">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriberPlan;
