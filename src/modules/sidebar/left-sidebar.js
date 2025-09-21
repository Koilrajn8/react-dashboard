// src/components/Sidebar.jsx
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronRight, ChevronDown, Menu, X } from "lucide-react";
import { sideBarMenu } from "../../constants/side-bar-menu";
import {ReactComponent as ByeWindIcon} from '../../icons/ByeWind.svg'

const favorites = [
  { name: "Starred Report", path: "/favorites/report" },
  { name: "Quick Access", path: "/favorites/quick" },
];

const recent = [
  { name: "Recent File 1", path: "/recent/1" },
  { name: "Recent File 2", path: "/recent/2" },
];

export default function Sidebar() {
  const [openMenus, setOpenMenus] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (name) => {
    setOpenMenus((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const renderItem = (item, sectionTitle) => {
    const isOpenMenu = openMenus[item.name] || false;
    const hasChildren = Array.isArray(item.children) && item.children.length > 0;
    const Icon = item.icon;

    return (
      <div key={item.name}>
        <div
          onClick={() => hasChildren && toggleMenu(item.name)}
          className="flex items-center cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 border-l-4 border-transparent hover:border-black-500 transition-colors"
        >
          {/* Arrow (always for Dashboards, only if children for Pages) */}
          <span className="mr-2 w-4 flex justify-center">
            {sectionTitle === "Dashboards" || sectionTitle === "Pages" || hasChildren ? (
              isOpenMenu ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )
            ) : null}
          </span>

          {/* Icon */}
          {Icon && <Icon className="w-4 h-4 mr-2" />}

          {/* NavLink */}
          <NavLink
            to={item.path || "#"}
            className={({ isActive }) =>
              `flex-1 ${
                isActive
                  ? "bg-gray-100 dark:bg-gray-800 "
                  : ""
              }`
            }
          >
            {item.name}
          </NavLink>
        </div>

        {/* Children (for Pages only) */}
        {hasChildren && isOpenMenu && (
          <div className="ml-8">
            {item.children.map((child) => (
              <NavLink
                key={child.name}
                to={child.path}
                className={({ isActive }) =>
                  `block px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 rounded ${
                    isActive
                      ? "bg-gray-100 dark:bg-gray-800 border-l-4 border-indigo-500"
                      : ""
                  }`
                }
              >
                {child.name}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {/* Header (mobile hamburger) */}
      <div className="sm:hidden flex items-center justify-between p-4 border-b dark:border-gray-700">
        <button onClick={() => setIsOpen(true)} className="p-2">
          <Menu className="w-6 h-6" />
        </button>
        <span className="font-bold">ByeWind</span>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 sm:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed sm:static top-0 left-0 h-full w-[212px] bg-white dark:bg-gray-900 shadow-md z-40 transform transition-transform sm:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="p-4 font-bold text-lg border-b dark:border-gray-700 flex gap-4 items-center">
         <ByeWindIcon />
          ByeWind
          <button
            className="sm:hidden p-2"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="border-t dark:border-gray-700 mt-auto">
         <div className="flex flex-row"> <div className="p-3 font-semibold text-sm text-gray-500">Favorites</div>
          <div className="p-3 font-semibold text-sm text-gray-500">Recently</div></div>
          {favorites.map((fav) => (
            <NavLink
              key={fav.name}
              to={fav.path}
              className={({ isActive }) =>
                `block px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 ${
                  isActive
                    ? "bg-gray-100 dark:bg-gray-800 border-l-4 border-indigo-500"
                    : ""
                }`
              }
            >
              {fav.name}
            </NavLink>
          ))}

         
        </div>

        {/* Dynamic Menus */}
        <div className="flex-1 overflow-y-auto">
          {sideBarMenu.map((section) => (
            <div key={section.title} className="mb-4">
              <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase">
                {section.title}
              </div>
              {section.items.map((item) => renderItem(item, section.title))}
            </div>
          ))}
        </div>

        
      </div>
    </>
  );
}
