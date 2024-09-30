"use client";
import { useState } from "react";
import { FaFont, FaMagic, FaPalette, FaShippingFast } from "react-icons/fa";

const NeonSignFeatures = () => {
  const [customText, setCustomText] = useState("Your Custom Text");
  const [selectedColor, setSelectedColor] = useState("#ff00ff");
  const [selectedFont, setSelectedFont] = useState("Arial");
  const [textBackgroundImage, setTextBackgroundImage] = useState("");

  const fonts = ["Arial", "Helvetica", "Times New Roman", "Courier", "Verdana"];

  const handleTextBackgroundChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTextBackgroundImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen p-8 bg-gradient-to-r from-purple-900 to-indigo-900">
      <div className="bg-gray-900 bg-opacity-90 text-white p-8 rounded-lg shadow-2xl">
        <h1
          className="text-5xl font-bold text-center mb-12 animate-pulse"
          style={{
            textShadow: `0 0 10px ${selectedColor}, 0 0 20px ${selectedColor}, 0 0 30px ${selectedColor}`,
          }}
        >
          Custom Neon Sign Creator
        </h1>
        <div
          className="mt-8 p-8 bg-gray-700 rounded-lg h-64 flex items-center justify-center overflow-hidden "
          style={{
            backgroundImage: `url(${textBackgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <p
            className="text-center text-5xl font-bold"
            style={{
              color: selectedColor,
              fontFamily: selectedFont,
              textShadow: `0 0 10px ${selectedColor}, 0 0 20px ${selectedColor}, 0 0 30px ${selectedColor}`,
            }}
          >
            {customText}
          </p>
        </div>
        <div className="mb-8">
          <label htmlFor="customText" className="block mb-2 text-lg">
            Your Text:
          </label>
          <input
            type="text"
            id="customText"
            value={customText}
            onChange={(e) => setCustomText(e.target.value)}
            className="w-full bg-gray-700 text-white p-3 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <section
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mt-8"
              aria-label="Free Shipping Section"
            >
              <h2 className="text-3xl font-semibold mb-4 text-purple-400">
                Free Shipping
              </h2>
              <div className="flex items-center space-x-4 mb-4">
                <FaShippingFast className="text-purple-400 text-5xl animate-bounce" />
                <p className="text-lg">
                  Enjoy free shipping on all orders within the continental US
                </p>
              </div>
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 transform hover:scale-105">
                Order Now with Free Shipping
              </button>
            </section>

            <section
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mt-8"
              aria-label="Features Section"
            >
              <h2 className="text-3xl font-semibold mb-4 text-purple-400">
                Amazing Features
              </h2>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <FaPalette className="text-purple-400 text-2xl" />
                  <span>Choose from a wide range of colors</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaFont className="text-purple-400 text-2xl" />
                  <span>Multiple font options available</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaMagic className="text-purple-400 text-2xl" />
                  <span>Customizable text background</span>
                </li>
              </ul>
            </section>
          </div>

          <section
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            aria-label="Custom Design Section"
          >
            <h2 className="text-3xl font-semibold mb-6 text-purple-400">
              Design Your Sign
            </h2>
            <div className="space-y-6">
              <div>
                <label htmlFor="colorPicker" className="block mb-2 text-lg">
                  Choose Color:
                </label>
                <input
                  type="color"
                  id="colorPicker"
                  value={selectedColor}
                  onChange={(e) => setSelectedColor(e.target.value)}
                  className="w-full h-12 rounded-lg cursor-pointer"
                />
              </div>
              <div>
                <label htmlFor="fontSelect" className="block mb-2 text-lg">
                  Select Font:
                </label>
                <select
                  id="fontSelect"
                  value={selectedFont}
                  onChange={(e) => setSelectedFont(e.target.value)}
                  className="w-full bg-gray-700 text-white p-3 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
                >
                  {fonts.map((font) => (
                    <option key={font} value={font}>
                      {font}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="textBackgroundImage"
                  className="block mb-2 text-lg"
                >
                  Change Text Background Image:
                </label>
                <input
                  type="file"
                  id="textBackgroundImage"
                  accept="image/*"
                  onChange={handleTextBackgroundChange}
                  className="w-full bg-gray-700 text-white p-3 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default NeonSignFeatures;
