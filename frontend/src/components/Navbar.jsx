import React from "react";

const Navbar = () => {
  return (
    <div className="w-full bg-gray-800 shadow">
      {/* First horizontal section */}
      <div className="flex justify-between items-center px-20 py-13">
        {/* Left: Company Name */}
        <div className="text-3xl font-bold text-gray-100">F<span className="text-red-600">oo</span>dy Z<span className="text-red-600">o</span>ne</div>

        {/* Right: Search */}
        <div className="flex items-center border border-red-500 rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="Search food..."
            className="px-3 py-2 focus:outline-none placeholder-white"
          />
          {/* Search icon (simple SVG) */}
          <button className="bg-gray-200 px-3 flex items-center justify-center">
          </button>
        </div>
      </div>

      {/* Second horizontal section with buttons */}
      <div className="flex justify-center gap-6 py-3 pb-8">
        {["All", "BreakFast", "Lunch", "Dinner"].map((btnText) => (
          <button
            key={btnText}
            className="bg-red-500 text-white px-6 py-2 rounded-md flex items-center justify-center"
          >
            {btnText}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
