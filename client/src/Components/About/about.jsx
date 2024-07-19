import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-12 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center text-gray-900 mb-8">
          About Us
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              At Uzhavan, we are committed to providing top-quality agricultural machinery and services to help farmers achieve the best results in their fields. Our mission is to support the agricultural community with the latest technology and reliable service.
            </p>
            <p className="text-lg text-gray-700">
              With years of experience in the industry, we understand the challenges faced by farmers and strive to offer solutions that make a difference. Join us in our journey to revolutionize agriculture.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img
              src="https://via.placeholder.com/400" // Replace with a relevant agriculture image
              alt="About Us"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
