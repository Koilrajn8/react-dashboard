
import { Menu } from "lucide-react";

export default function Header({ toggleSidebar, theme, toggleTheme }) {
  return (
    <header className="flex justify-between items-center px-4 py-2 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      {/* Mobile Menu */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        <Menu className="h-6 w-6" />
      </button>

      <h1 className="text-lg font-bold text-gray-900 dark:text-gray-100">
        My Dashboard
      </h1>

      {/* Theme Switch */}
      <button
        onClick={toggleTheme}
        className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-sm"
      >
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </header>
  );
}
