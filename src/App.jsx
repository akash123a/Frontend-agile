// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import HomePage from "./component/HomePage";
// import OrganisationSignup from "./component/OrganisationSignup";
// import EmployeeLogin from "./component/EmployeeLogin";
// import Footer from "./component/Footer";
// import SubscriberPlan from "./component/SubscriberPlan";
// import Payment from "./component/Payment";


// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         {/* <Route path="/" element={<Footer/>}  /> */}
//         <Route path="/organisation-signup" element={<OrganisationSignup />} />
//         <Route path="/employee-login" element={<EmployeeLogin />} />
//       </Routes>
//       <Routes>
//         <Route path="/" element={<SubscriberPlan />} />
//         <Route path="/payment" element={<Payment />} />
//       </Routes>
//       {/* <SubscriberPlan/> */}
      
        
//       <Footer/>

//     </BrowserRouter>
//   );
// };

// export default App;



// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import HomePage from "./component/HomePage";
// import OrganisationSignup from "./component/OrganisationSignup";
// import EmployeeLogin from "./component/EmployeeLogin";
// import Footer from "./component/Footer";
// import SubscriberPlan from "./component/SubscriberPlan";
// import Payment from "./component/Payment";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/organisation-signup" element={<OrganisationSignup />} />
//         <Route path="/employee-login" element={<EmployeeLogin />} />
//         <Route path="/subscriber-plan" element={<SubscriberPlan />} />
//         <Route path="/payment" element={<Payment />} />
//       </Routes>
//       <SubscriberPlan/>
//       <Footer />
//     </BrowserRouter>
//   );
// };

// export default App;











// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import HomePage from "./component/HomePage";
// import OrganisationSignup from "./component/OrganisationSignup";
// import EmployeeLogin from "./component/EmployeeLogin";
// import Footer from "./component/Footer";
// import SubscriberPlan from "./component/SubscriberPlan";
// import Payment from "./component/Payment";
// import OTPVerification from "./component/OTPVerification";
// import PageOne from "./component/PageOne";
// import PageTwo from "./component/PageTwo";
// import PageThree from "./component/PageThree";
// import PageFour from "./component/PageFour";
// import PageFive from "./component/PageFive";
// import PageSix from "./component/PageSix";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <div className="app-container">
//         <main className="main-content">
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/organisation-signup" element={<OrganisationSignup />} />
//             <Route path="/payment" element={<Payment />} />


//             {/* <Route path="/employee-login" element={<EmployeeLogin />} /> */}
//             {/* <Route path="/subscriber-plan" element={<SubscriberPlan />} /> */}
//             {/* <Route path="/otp-verification" element={<OTPVerification />} /> */}
//           </Routes>
//         </main>
//         <PageOne/>
//         <SubscriberPlan/>
//         <PageTwo/>
//         <PageThree/>
//         <PageFour/>
//         <PageFive/>
//         <PageSix/>
//         <Footer />
//       </div>
//     </BrowserRouter>
//   );
// };

// export default App;




// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from "./component/HomePage";
// import SubscriberPlan from "./component/SubscriberPlan";
// // import ProjectManagement from "./component/ProjectManagement";
// //import Check from "./component/Check";
// import Footer from "./component/Footer";
// import EmployeeLogin from "./component/EmployeeLogin"; 
// import OTPVerification from "./component/OTPVerification";
// //import AddHotelForm from "./component/AddHotelForm";
// //import OtpComponent from "./component/OtpComponent";
// import OrganisationSignup from "./component/OrganisationSignup";
// import Payment from "./component/Payment";
// import AdminDashboard from "./component/AdminDashboard";





// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         {/* Homepage with multiple components */}
//         <Route
//           path="/"
//           element={
//             <>
        
           
//               <HomePage />
//            <AdminDashboard/>
//               <SubscriberPlan />
//               <OrganisationSignup />
//               <OtpComponent />
//               <ProjectManagement />
//               <Footer />
//               <Payment/>

//             </>
//           }
//         />

//         {/* Subscription Plan and Signup */}
//         <Route path="/organisation-signup" element={<OrganisationSignup />} />
//         <Route path="/payment" element={<Payment />} />
//         <Route path="/otp-verification" element={<OtpComponent />} />
//         <Route path="/homepage" element={<HomePage />} />

        
//       </Routes>
//     </Router>
//   );
// };

// export default App;














import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./component/HomePage";
import SubscriberPlan from "./component/SubscriberPlan";
import Footer from "./component/Footer";
import EmployeeLogin from "./component/EmployeeLogin"; 
import OTPVerification from "./component/OTPVerification";
import OrganisationSignup from "./component/OrganisationSignup";
import OtpComponent from "./component/OtpComponent";
import Payment from "./component/Payment";
import AdminDashboard from "./component/AdminDashboard";
import PageOne from "./component/PageOne";
import PageTwo from "./component/PageTwo";
import PageThree from "./component/PageThree";  
import PageFour from "./component/PageFour";
import PageFive from "./component/PageFive";
import PageSix from "./component/PageSix";
import Check from "./component/Check";
import ProjectModal from "./component/ProjectModal";







const App = () => {
  return (
    <Router>
      <Routes>
        {/* Homepage with multiple components */}
        <Route
          path="/"
          element={
            <>
              {/* <Check /> */}
              <HomePage />
              {/* <AdminDashboard /> */}
                  <PageOne/>
              <SubscriberPlan />
              {/* <OrganisationSignup /> */}
              <PageTwo/>
              <PageThree/>
              <PageFour/>
              <PageFive/>
              <PageSix/>
              <Footer />
              {/* <Payment /> */}
            </>
          }
        />

        {/* Subscription Plan and Signup */}
        <Route path="/organisation-signup" element={<OrganisationSignup />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/otp-verification" element={<OtpComponent />} />
        /* Employee Login */
        <Route path="/employee-login" element={<EmployeeLogin />} />
        {/* OTP Verification */}
          
        <Route path="/dashboard" element={<Check />} />
        <Route path="/homepage" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;