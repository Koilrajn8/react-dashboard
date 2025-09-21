import React, { useState, useEffect } from "react";
import { FaStar, FaSun, FaBell, FaMoon } from "react-icons/fa";
import { ReactComponent as Collapse } from "../../icons/collapse.svg";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="flex flex-row justify-between h-24">
      <div className="flex items-center gap-4">
        <Collapse className="text-gray-800" size={18} />

        <div className="text-gray-500">
          <FaStar size={16} />
        </div>

        <div className="flex items-center gap-2 text-lg font-inter">
          <span className="text-gray-500">Dashboards</span>
          <span className="text-gray-300">/</span>
          <span className="text-gray-800 font-semibold">Default</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            🔍
          </span>
          <input
            type="text"
            placeholder="Search"
            className="pl-3 pr-10 py-1 rounded-md border border-blue-200 bg-blue-50 text-gray-500 focus:outline-none"
          />
        </div>

        {/* Shortcut */}
        <span className="text-gray-400">⌘/</span>

        {/* Icons */}
        <div className="flex items-center gap-3">
          <div
            onClick={() => setDarkMode(!darkMode)}
            className="cursor-pointer"
          >
            {darkMode ? (
              <FaSun
                className="text-yellow-400 hover:text-yellow-500 transition"
                size={18}
              />
            ) : (
              <FaMoon
                className="text-gray-600 hover:text-gray-400 transition"
                size={18}
              />
            )}
          </div>
          <FaBell className="text-gray-500" size={18} />
          <Collapse className="text-gray-800" size={18} />
        </div>
      </div>
    </div>
  );
};

export default Header;
