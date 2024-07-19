// import React, { useState } from "react";
// import "./navbar.css";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-white shadow-lg">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex-shrink-0 flex items-center">
//             <a href="#" className="text-black text-2xl font-bold">
//               Uzhavan
//             </a>
//           </div>
//           <div className="hidden md:flex space-x-8 items-center">
//             <a href="#" className="text-black text-xl hover:text-green-600 font-bold">
//               Home
//             </a>
//             <a href="#" className="text-black text-xl hover:text-green-700 font-bold">
//               About
//             </a>
//             <a href="#" className="text-black text-xl hover:text-green-700 font-bold">
//               Services
//             </a>
//             <a href="#" className="text-black text-xl hover:text-green-700 font-bold">
//               Contact
//             </a>
//           </div>
//           <div className="flex items-center">
//             <a
//               href="#"
//               className="text-black hover:text-green-700 px-4 py-2 border border-black rounded"
//             >
//               Login
//             </a>
//           </div>
//           <div className="-mr-2 flex md:hidden">
//             <button
//               type="button"
//               className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-700 focus:outline-none"
//               aria-controls="mobile-menu"
//               aria-expanded={isOpen ? "true" : "false"}
//               onClick={toggleMenu}
//             >
//               <svg
//                 className="h-6 w-6"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16m-7 6h7"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className={`${isOpen ? "" : "hidden"} md:hidden`} id="mobile-menu">
//         <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//           <a
//             href="#"
//             className="text-black hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium"
//           >
//             Home
//           </a>
//           <a
//             href="#"
//             className="text-black hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium"
//           >
//             About
//           </a>
//           <a
//             href="#"
//             className="text-black hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium"
//           >
//             Services
//           </a>
//           <a
//             href="#"
//             className="text-black hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium"
//           >
//             Contact
//           </a>
//           <a
//             href="#"
//             className="text-black hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium"
//           >
//             Login
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="text-black text-2xl font-bold">
              Uzhavan
            </a>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#" className="text-black text-xl hover:text-green-600 font-bold">
              Home
            </a>
            <a href="#" className="text-black text-xl hover:text-green-700 font-bold">
              About
            </a>
            <a href="#" className="text-black text-xl hover:text-green-700 font-bold">
              Services
            </a>
            <a href="#" className="text-black text-xl hover:text-green-700 font-bold">
              Contact
            </a>
          </div>
          <div className="flex items-center">
            <a
              href="#"
              className="text-black hover:text-green-700 px-4 py-2 border border-black rounded"
            >
              Login
            </a>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-700 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? "true" : "false"}
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "" : "hidden"} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#"
            className="text-black hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </a>
          <a
            href="#"
            className="text-black hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </a>
          <a
            href="#"
            className="text-black hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium"
          >
            Services
          </a>
          <a
            href="#"
            className="text-black hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </a>
          <a
            href="#"
            className="text-black hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium"
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
