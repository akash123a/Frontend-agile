// import React, { useState, useEffect, useRef } from "react";

// const OTPVerification = () => {
//   const [otp, setOtp] = useState(new Array(6).fill(""));
//   const [error, setError] = useState("");
//   const [timer, setTimer] = useState(30);
//   const [resendDisabled, setResendDisabled] = useState(true);
//   const correctOTP = "123456"; // Replace with actual OTP logic
//   const inputRefs = useRef([]);

//   useEffect(() => {
//     if (timer > 0) {
//       const interval = setInterval(() => {
//         setTimer((prevTimer) => prevTimer - 1);
//       }, 1000);
//       return () => clearInterval(interval);
//     } else {
//       setResendDisabled(false);
//     }
//   }, [timer]);

//   const handleChange = (index, e) => {
//     const value = e.target.value;
//     if (/^[0-9]?$/.test(value)) {
//       const newOtp = [...otp];
//       newOtp[index] = value;
//       setOtp(newOtp);
//       setError("");

//       if (value && index < otp.length - 1) {
//         inputRefs.current[index + 1].focus();
//       }
//     }
//   };

//   const handleKeyDown = (index, e) => {
//     if (e.key === "Backspace" && !otp[index] && index > 0) {
//       inputRefs.current[index - 1].focus();
//     }
//   };

//   const verifyOTP = () => {
//     if (otp.join("") === correctOTP) {
//       alert("OTP Verified Successfully!");
//     } else {
//       setError("Incorrect OTP. Please try again.");
//       setOtp(new Array(6).fill(""));
//       inputRefs.current[0].focus();
//     }
//   };

//   const resendOTP = () => {
//     alert("New OTP sent!"); // Replace with API call
//     setOtp(new Array(6).fill(""));
//     setTimer(30);
//     setResendDisabled(true);
//     inputRefs.current[0].focus();
//   };

//   return (
//     <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg max-w-md mx-auto">
//       <h2 className="text-xl font-bold text-gray-800">Verify Your OTP</h2>
//       <p className="text-gray-500 text-sm mb-4">We have sent a verification code to your mobile number.</p>

//       <div className="flex space-x-2 mb-4">
//         {otp.map((value, index) => (
//           <input
//             key={index}
//             type="text"
//             maxLength="1"
//             className="w-10 h-10 text-lg text-center border rounded-md focus:border-blue-500 focus:outline-none"
//             value={value}
//             onChange={(e) => handleChange(index, e)}
//             onKeyDown={(e) => handleKeyDown(index, e)}
//             ref={(el) => (inputRefs.current[index] = el)}
//           />
//         ))}
//       </div>
//       {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
      
//       <button
//         className="w-full py-2 text-white bg-blue-600 rounded-full disabled:opacity-50"
//         disabled={otp.includes("")}
//         onClick={verifyOTP}
//       >
//         Confirm OTP
//       </button>
      
//       <button
//         className="w-full py-2 mt-2 text-white bg-orange-500 rounded-full disabled:bg-gray-400"
//         disabled={resendDisabled}
//         onClick={resendOTP}
//       >
//         {resendDisabled ? `Resend OTP (${timer}s)` : "Resend OTP"}
//       </button>
//     </div>
//   );
// };

// export default OTPVerification;



import React, { useState, useEffect, useRef } from "react";

const OTPVerification = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [error, setError] = useState("");
  const [timer, setTimer] = useState(30);
  const [resendDisabled, setResendDisabled] = useState(true);
  const correctOTP = "123456"; // Replace with actual OTP logic
  const inputRefs = useRef(new Array(6).fill(null));

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setResendDisabled(false);
    }
  }, [timer]);

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      setError("");

      if (value && index < otp.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const verifyOTP = () => {
    if (otp.join("") === correctOTP) {
      alert("OTP Verified Successfully!");
    } else {
      setError("Incorrect OTP. Please try again.");
      setOtp(new Array(6).fill(""));
      inputRefs.current[0].focus();
    }
  };

  const resendOTP = () => {
    alert("New OTP sent!"); // Replace with API call
    setResendDisabled(true); // Make sure button gets disabled immediately
    setOtp(new Array(6).fill(""));
    setTimer(30);
    inputRefs.current[0].focus();
  };

  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg max-w-md mx-auto">
      <h2 className="text-xl font-bold text-gray-800">Verify Your OTP</h2>
      <p className="text-gray-500 text-sm mb-4">We have sent a verification code to your mobile number.</p>

      <div className="flex space-x-2 mb-4">
        {otp.map((value, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            className="w-10 h-10 text-lg text-center border rounded-md focus:border-blue-500 focus:outline-none"
            value={value}
            onChange={(e) => handleChange(index, e)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            ref={(el) => (inputRefs.current[index] = el)}
          />
        ))}
      </div>
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
      
      <button
        className="w-full py-2 text-white bg-blue-600 rounded-full disabled:opacity-50"
        disabled={otp.some((val) => val === "")}
        onClick={verifyOTP}
      >
        Confirm OTP
      </button>
      
      <button
        className="w-full py-2 mt-2 text-white bg-orange-500 rounded-full disabled:bg-gray-400"
        disabled={resendDisabled}
        onClick={resendOTP}
      >
        {resendDisabled ? `Resend OTP (${timer}s)` : "Resend OTP"}
      </button>
    </div>
  );
};

export default OTPVerification;
