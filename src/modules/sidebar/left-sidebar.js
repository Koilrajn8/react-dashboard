import { NavLink } from "react-router-dom";
import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { sidebarMenu } from "../../constants/side-bar-menu";

export default function Sidebar({ }) {
 
 function SidebarSection({ section }) {
  const [open, setOpen] = useState({});
  const location = useLocation();

  return (
    <div className="mb-4">
      {section.label &&
        <div className="px-6 py-1 text-xs font-bold uppercase text-gray-400 tracking-wide">{section.label}</div>
      }
      <ul className="space-y-1">
        {section.items.map((item, idx) => {
          if (item.children) {
            return (
              <li key={idx}>
                <button
                  onClick={() => setOpen((v) => ({...v, [item.label]: !v[item.label]}))}
                  className="w-full flex items-center justify-between px-6 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition"
                >
                  <span className="inline-flex items-center">
                    <span className="mr-2">{item.icon}</span>
                    {item.label}
                  </span>
                  <span className="ml-auto">{open[item.label] ? "▼" : "▶"}</span>
                </button>
                {open[item.label] && (
                  <ul className="ml-8 mt-1 text-sm">
                    {item.children.map((child, childIdx) => (
                      <li key={childIdx}>
                        <Link
                          to={child.path}
                          className={`block px-4 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 ${
                            location.pathname === child.path ? "font-bold bg-gray-200 dark:bg-gray-700" : ""
                          }`}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          }
          return (
            <li key={idx}>
              <Link
                to={item.path}
                className={`flex items-center px-6 py-2 rounded transition hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  location.pathname === item.path ? "font-bold bg-gray-200 dark:bg-gray-700" : ""
                }`}
              >
                <span className="mr-2">{item.icon}</span> {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

  return (
     <aside className="w-64 min-h-screen flex flex-col bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800">
      {/* Menu */}
      <nav className="flex-1">
        {sidebarMenu.map((section, idx) =>
          section.type === "favorites" ? (
            <div className="px-6 mb-2" key={idx}>
              <div className="flex space-x-4 text-xs">
                <span className="font-bold text-gray-500">Favorites</span>
                <span className="text-gray-300">Recently</span>
              </div>
              <ul className="ml-2 mt-1 text-xs space-y-1">
                {section.items.map((fav, fidx) => (
                  <li key={fidx}>
                    <Link to={fav.path} className="hover:underline">{fav.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <SidebarSection section={section} key={idx} />
          )
        )}
      </nav>
    </aside>
  );
}
