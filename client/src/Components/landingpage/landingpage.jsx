// import React from 'react';
// import backgroundImage from '../../assets/final.jpg'; // Add the path to your background image

// const HomePage = () => {
//   return (
//     <div 
//       className="h-screen w-full bg-cover bg-center flex items-center justify-center"
//       style={{ backgroundImage: `url(${backgroundImage})` }}
//     >
//       <div className="bg-white bg-opacity-75 p-10 rounded-lg shadow-lg text-center max-w-lg mx-auto">
//         <h1 className="text-4xl font-bold mb-4">Welcome to Our Agriculture Services</h1>
//         <p className="text-lg mb-4">
//           We offer a wide range of agricultural machinery and services to help you get the best out of your farm. Our mission is to provide the best quality equipment and support to ensure your success.
//         </p>
//         <button className="mt-4 px-6 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700">
//           Learn More
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HomePage;
import React, { useEffect, useState } from 'react';
import backgroundImage from '../../assets/final.jpg'; // Add the path to your background image
import './landingpage.css'
import AboutPage from '../About/about';

const HomePage = () => {
  const [visible, setVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setVisible(true);

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <div
      className="h-screen w-full bg-cover bg-center flex items-center justify-center bgphoto"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div
        className={`bg-white bg-opacity-75 p-10 rounded-lg shadow-lg text-center max-w-2xl mx-auto transition-transform duration-500 ease-in-out ${
          visible ? 'fade-in-up' : ''
        } ${scrolled ? 'transform -translate-y-20' : ''}`}
      >
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Agriculture Services</h1>
        <p className="text-lg mb-4">
          We offer a wide range of agricultural machinery and services to help you get the best out of your farm. Our mission is to provide the best quality equipment and support to ensure your success.
        </p>
        <button className="mt-4 px-6 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700">
          Learn More
        </button>
      </div>
    </div>
<AboutPage/>
    </>
    
  );

};

export default HomePage;
