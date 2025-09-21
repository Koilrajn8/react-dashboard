// src/constants/side-bar-menu.js
import { LayoutDashboard, ShoppingCart, FolderKanban, BookOpen, User, Settings, FileText, Users, Briefcase, MessageCircle } from "lucide-react";

export const sideBarMenu = [
  {
    title: "Dashboards",
    items: [
      { name: "Default", path: "/", icon: LayoutDashboard },
      { name: "eCommerce", path: "/order-list", icon: ShoppingCart },
      { name: "Projects", path: "", icon: FolderKanban },
      { name: "Online Courses", path: "", icon: BookOpen },
    ],
  },
  {
    title: "Pages",
    items: [
      {
        name: "User Profile",
        icon: User,
        children: [
          { name: "Overview", path: "/profile/overview" },
          { name: "Projects", path: "/profile/projects" },
          { name: "Campaigns", path: "/profile/campaigns" },
          { name: "Documents", path: "/profile/documents" },
          { name: "Followers", path: "/profile/followers" },
        ],
      },
      { name: "Account", path: "/account", icon: Settings },
      { name: "Corporate", path: "/corporate", icon: Briefcase },
      { name: "Blog", path: "/blog", icon: FileText },
      { name: "Social", path: "/social", icon: MessageCircle },
    ],
  },
];
