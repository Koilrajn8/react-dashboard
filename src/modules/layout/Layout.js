
import {  Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import Header from "../header/header";
import LeftSideBar from "../sidebar/left-sidebar";
import RightSideBar from "../sidebar/right-sidebar";

export default function Layout(){
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const location = useLocation();

  // hide sidebar on /order-list
  const showSidebar = location.pathname !== "/order-list";


  return (
    <div className="flex h-screen w-screen">
      {/* Left Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-[240px] hidden lg:block">
      <LeftSideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </aside>
       {/* Main content wrapper */}
       <div
        className="flex-1 flex flex-col ml-0 lg:ml-[240px] mr-0 lg:mr-[280px] overflow-hidden"
      >
        {/* Header */}
        <header className="h-[68px] md:h-[68px] lg:h-[80px] px-4 shadow-sm">
          <Header />
        </header>

        {/* Dashboard content */}
        <main className="flex-1 overflow-auto p-4">
          <Outlet />
        </main>
      </div>
      {/* Right Sidebar (hidden on mobile) */}
     {
      showSidebar &&  <aside className="fixed right-0 top-0 h-full w-[280px] hidden lg:block">
      <RightSideBar />
      </aside>
      
     }
    </div>
  );
}