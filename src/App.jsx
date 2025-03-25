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

// const App = () => {
//   return (
//     <BrowserRouter>
//       <div className="app-container">
//         <main className="main-content">
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/organisation-signup" element={<OrganisationSignup />} />
//             <Route path="/employee-login" element={<EmployeeLogin />} />
//             <Route path="/subscriber-plan" element={<SubscriberPlan />} />
//             <Route path="/payment" element={<Payment />} />
//           </Routes>
//         </main>
//         <SubscriberPlan/>
//         <Footer />
//       </div>
//     </BrowserRouter>
//   );
// };

// export default App;




import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./component/HomePage";
import OrganisationSignup from "./component/OrganisationSignup";
import EmployeeLogin from "./component/EmployeeLogin";
import Footer from "./component/Footer";
import SubscriberPlan from "./component/SubscriberPlan";
import Payment from "./component/Payment";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/organisation-signup" element={<OrganisationSignup />} />
            <Route path="/employee-login" element={<EmployeeLogin />} />
            <Route path="/subscriber-plan" element={<SubscriberPlan />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </main>
        <SubscriberPlan/>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
