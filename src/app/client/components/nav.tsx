"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaBars,
  FaCaretDown,
  FaHandshake,
  FaHome,
  FaInfoCircle,
  FaPencilAlt,
  FaShoppingCart,
  FaTimes,
} from "react-icons/fa";

const CyberNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isNeonShopOpen, setIsNeonShopOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleNeonShop = () => setIsNeonShopOpen(!isNeonShopOpen);

  const navItems = [
    { name: "Home", href: "#home", icon: <FaHome /> },
    { name: "Deals", href: "#deals", icon: <FaHandshake /> },
    { name: "Custom Signs", href: "#custom-signs", icon: <FaPencilAlt /> },
    { name: "About Us", href: "#about", icon: <FaInfoCircle /> },
  ];

  const neonShopItems = [
    { name: "LED Neon Signs", href: "#led-neon-signs" },
    { name: "Neon Accessories", href: "#neon-accessories" },
    { name: "Custom Neon", href: "#custom-neon" },
  ];

  return (
    <nav className="bg-gray-900 p-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold text-pink-400 flex items-center space-x-2">
          {/* <img
            src="https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&q=80"
            alt="Logo"
            className="h-12 w-auto rounded-full border-2 border-pink-400 shadow-lg shadow-pink-400/50"
          /> */}
          <span className="hidden sm:inline-block cyber-glitch-text">
            Neon Dreams
          </span>
        </div>

        {isMobile ? (
          <button
            onClick={toggleMenu}
            className="text-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-400 rounded-md p-2 transition-all duration-300 hover:bg-gray-800"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        ) : (
          <div className="flex space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-pink-500 hover:text-pink-700 transition-colors duration-300 flex items-center space-x-2 group neon-hover px-4 py-2"
                aria-label={item.name}
              >
                <span className="text-pink-400 group-hover:animate-pulse">
                  {item.icon}
                </span>
                <span>{item.name}</span>
              </a>
            ))}
            <div className="relative group">
              <button
                onClick={toggleNeonShop}
                className="text-pink-500 hover:text-pink-700 transition-colors duration-300 flex items-center space-x-2 group neon-hover px-4 py-2"
                aria-label="Neon Shop"
              >
                <span className="text-pink-400 group-hover:animate-pulse">
                  <FaShoppingCart />
                </span>
                <span>Neon Shop</span>
                <FaCaretDown className="ml-1" />
              </button>
              <AnimatePresence>
                {isNeonShopOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 bg-gray-800 py-2 mt-2 rounded-md shadow-lg cyber-border"
                  >
                    {neonShopItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-pink-500 hover:bg-gray-700 hover:text-pink-400 transition-colors duration-200"
                      >
                        {item.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>

      <AnimatePresence>
        {isMobile && isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 bg-gray-800 py-4 px-4 cyber-border"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-pink-500 hover:text-pink-700 py-3 px-4 transition-colors duration-300 flex items-center space-x-2 group neon-hover"
                aria-label={item.name}
                onClick={toggleMenu}
              >
                <span className="text-pink-400 group-hover:animate-pulse">
                  {item.icon}
                </span>
                <span>{item.name}</span>
              </a>
            ))}
            <div className="relative">
              <button
                onClick={toggleNeonShop}
                className="w-full text-left text-pink-500 hover:text-pink-700 py-3 px-4 transition-colors duration-300 flex items-center justify-between group neon-hover"
                aria-label="Neon Shop"
              >
                <div className="flex items-center space-x-2">
                  <span className="text-pink-400 group-hover:animate-pulse">
                    <FaShoppingCart />
                  </span>
                  <span>Neon Shop</span>
                </div>
                <FaCaretDown className="ml-1" />
              </button>
              <AnimatePresence>
                {isNeonShopOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="bg-gray-700 py-2 mt-2 rounded-md shadow-inner"
                  >
                    {neonShopItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-6 py-2 text-sm text-pink-500 hover:bg-gray-600 hover:text-pink-400 transition-colors duration-200"
                        onClick={toggleMenu}
                      >
                        {item.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .cyber-glitch-text {
          position: relative;
          display: inline-block;
          text-shadow: 0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #ff00ff;
        }
        .cyber-border {
          border: 2px solid #ff00ff;
          box-shadow: 0 0 10px #ff00ff, inset 0 0 10px #ff00ff;
        }
        .neon-hover {
          position: relative;
          z-index: 1;
        }
        .neon-hover::before {
          content: "";
          position: absolute;
          z-index: -1;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255, 0, 255, 0.1);
          transform: scaleX(0);
          transform-origin: 0 50%;
          transition: transform 0.3s ease-out;
        }
        .neon-hover:hover::before {
          transform: scaleX(1);
        }
        .neon-hover:hover {
          box-shadow: 0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #ff00ff;
        }
      `}</style>
    </nav>
  );
};

export default CyberNavbar;
