
import {  Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "../header/header";
import LeftSideBar from "../sidebar/left-sidebar";
import RightSideBar from "../sidebar/right-sidebar";

export default function Layout(){
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-950">
      {/* Left Sidebar */}
      <LeftSideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <Header
          toggleSidebar={toggleSidebar}
          theme={theme}
          toggleTheme={toggleTheme}
        />

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-4">
          <Outlet />
        </main>
      </div>

      {/* Right Sidebar (hidden on mobile) */}
      <RightSideBar />
    </div>
  );
}