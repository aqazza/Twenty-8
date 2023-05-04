import React from "react";
// import reactDom from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
// import components
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
};

export default App;

// <div className="container mx-auto px-6">
//   <div className="md:flex md:items-center">
//     <div className="w-full h-64 md:w-1/2 lg:h-96">
//       <img
//         className="h-full w-full rounded-md object-cover max-w-lg mx-auto"
//         src="https://images.unsplash.com/photo-1612837017391-4b6b7b0b0b0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXR5JTIwY2FyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
//         alt="Nike Air"
//       />
//     </div>
//     <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
//       <h3 className="text-gray-700 uppercase text-lg">Nike Air</h3>
//       <span className="text-gray-500 mt-3">$125</span>
//       <hr className="my-3" />
//       <div className="mt-2">
//         <label className="text-gray-700 text-sm" htmlFor="count">
//           Count:
//         </label>
//         <div className="flex items-center mt-1">
//           <button className="text-gray-500 focus:outline-none focus:text-gray-600">
//             <svg
//               className="h-5 w-5"
//               fill="none"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path d="M20 12H4"></path>
//             </svg>
//           </button>
//           <span className="text-gray-700 text-lg mx-2">20</span>
//           <button className="text-gray-500 focus:outline-none focus:text-gray-600">
//             <svg
//               className="h-5 w-5"
//               fill="none"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path d="M20 12H4"></path>
//               <path d="M12 20L12 4"></path>
//             </svg>
//           </button>
//         </div>
//       </div>
//       <div className="mt-3">
//         <label className="text-gray-700 text-sm" htmlFor="count">
//           Color:
//         </label>
//         <div className="flex items-center mt-1">
//           <button className="h-5 w-5 rounded-full bg-blue-600 border-2 border-blue-200 mr-2 focus:outline-none"></button>
//           <button className="h-5 w-5 rounded-full bg-teal-600 mr-2 focus:outline-none"></button>
//           <button className="h-5 w-5 rounded-full bg-pink-600 mr-2 focus:outline-none"></button>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>;
