import { FaGlassCheers, FaHeart, FaHome, FaUtensils } from "react-icons/fa";

const HeroSection = () => {
  const exploreCategories = [
    {
      name: "Home Decor",
      icon: FaHome,
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      name: "Restaurants and Cafe",
      icon: FaUtensils,
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    },
    {
      name: "Wedding Signs",
      icon: FaHeart,
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      name: "Bar Signs",
      icon: FaGlassCheers,
      image:
        "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      <div className="relative z-10 text-center mb-16">
        <h1 className="text-7xl font-bold mb-8 text-white animate-pulse mt-10">
          <span className="text-pink-500">Neon</span> Sign Creator
        </h1>
      </div>
      <div className="relative z-10 w-full max-w-6xl px-4">
        <h2 className="text-5xl font-bold mb-12 text-white text-center">
          Explore Neon Design
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {exploreCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-900 bg-opacity-50 rounded-2xl p-8 text-center transition duration-300 ease-in-out transform hover:scale-105 hover:bg-opacity-70 overflow-hidden shadow-lg hover:shadow-2xl"
            >
              <div className="relative h-64 mb-6">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-xl">
                  <category.icon className="text-6xl text-pink-500" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">
                {category.name}
              </h3>
              <p className="text-gray-300">
                Discover amazing neon designs for {category.name.toLowerCase()}
              </p>
              <button className="mt-4 bg-pink-500 text-white py-2 px-6 rounded-full hover:bg-pink-600 transition duration-300">
                Explore
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
