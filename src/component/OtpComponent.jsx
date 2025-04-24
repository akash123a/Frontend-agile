
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const OtpComponent = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [cooldown, setCooldown] = useState(0);
  const [isEmailValid, setIsEmailValid] = useState(false);
  
  const navigate = useNavigate(); // ✅ Initialize navigate
  const baseUrl = "http://localhost:8080/api/v1/mail/user";
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  useEffect(() => {
    setIsEmailValid(emailRegex.test(email));
  }, [email]);

  useEffect(() => {
    let interval;
    if (cooldown > 0) {
      interval = setInterval(() => {
        setCooldown((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [cooldown]);

  // ✅ Handle sending OTP
  const handleSendOtp = async (e) => {
    e.preventDefault();
    if (!isEmailValid) {
      toast.error("Please enter a valid email address");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`${baseUrl}/send-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.text();

      if (response.ok) {
        toast.success("OTP sent to your email");
        setOtpSent(true);
        setCooldown(30);
      } else {
        toast.error(data || "Failed to send OTP");
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Handle OTP verification
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    if (!otp.match(/^\d{6}$/)) {
      toast.error("Please enter a valid 6-digit OTP");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `${baseUrl}/verify-otp?email=${email}&otp=${otp}`,
        { method: "POST" }
      );
      const data = await response.text();

      if (response.ok && data.includes("OTP Verified Successfully")) {
        toast.success("✅ Verification successful!");
        setTimeout(() => {
          navigate("/homepage"); // ✅ Redirect to HomePage.jsx
        }, 2000); // ✅ Wait 2 seconds before redirecting
      } else {
        toast.error("❌ Invalid OTP. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <ToastContainer position="top-center" autoClose={3000} />
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-900">
          Secure OTP Verification
        </h2>

        {/* ✅ Email Input and Send OTP */}
        <form onSubmit={handleSendOtp} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="john@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              disabled={otpSent}
            />
          </div>

          <button
            type="submit"
            disabled={loading || !isEmailValid || cooldown > 0}
            className="w-full bg-blue-600 text-white px-4 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? "Sending..." : cooldown > 0 ? `Resend OTP in ${cooldown}s` : otpSent ? "Resend OTP" : "Send OTP"}
          </button>
        </form>

        {/* ✅ OTP Input and Verify Button */}
        {otpSent && (
          <form onSubmit={handleVerifyOtp} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Verification Code
              </label>
              <input
                type="number"
                inputMode="numeric"
                pattern="\d{6}"
                placeholder="123456"
                value={otp}
                onChange={(e) => setOtp(e.target.value.slice(0, 6))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 text-black px-4 py-2.5 rounded-lg font-semibold hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? "Verifying..." : "Verify Code"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default OtpComponent;
