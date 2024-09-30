"use client";
import { useState } from "react";
import { FaPencilAlt, FaShoppingCart, FaUpload } from "react-icons/fa";

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-6xl md:text-8xl font-bold mb-8 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 animate-pulse">
            Neon Dreams
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-center max-w-2xl">
          Illuminate your space with custom neon signs that bring your vision to
          life.
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          <button
            className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-opacity-50"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            aria-label="Make your Own Neon Sign"
          >
            <span className="flex items-center">
              <FaPencilAlt className="mr-2" />
              Make your Own Neon Sign
            </span>
          </button>
          <button
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-opacity-50"
            aria-label="Neon Sign Shop"
          >
            <span className="flex items-center">
              <FaShoppingCart className="mr-2" />
              Neon Sign Shop
            </span>
          </button>
          <button
            className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-opacity-50"
            aria-label="Upload Your Own Design"
          >
            <span className="flex items-center">
              <FaUpload className="mr-2" />
              Upload Your Own Design
            </span>
          </button>
        </div>
      </div>
      <div
        className={`absolute inset-0 pointer-events-none ${
          isHovered ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500 ease-in-out`}
      >
        <div className="w-full h-full bg-gradient-to-r from-pink-500 to-purple-500 opacity-20 animate-pulse"></div>
      </div>
    </div>
  );
};

export default HeroSection;
