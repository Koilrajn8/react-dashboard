export const sidebarMenu = [
  {
    type: "favorites",
    items: [
      { label: "Overview", path: "/overview" },
      { label: "Projects", path: "/projects" }
    ]
  },
  {
    type: "section",
    label: "Dashboards",
    items: [
      { label: "Default", icon: "🏠", path: "/" },
      { label: "eCommerce", icon: "💼", path: "/ecommerce" },
      { label: "Projects", icon: "📁", path: "/dashboard-projects" },
      { label: "Online Courses", icon: "📚", path: "/courses" }
    ]
  },
  {
    type: "section",
    label: "Pages",
    items: [
      {
        label: "User Profile",
        icon: "🗂️",
        children: [
          { label: "Overview", path: "/profile/overview" },
          { label: "Projects", path: "/profile/projects" },
          { label: "Campaigns", path: "/profile/campaigns" },
          { label: "Documents", path: "/profile/documents" },
          { label: "Followers", path: "/profile/followers" }
        ]
      },
      { label: "Account", icon: "🧾", path: "/account" },
      { label: "Corporate", icon: "🏢", path: "/corporate" },
      { label: "Blog", icon: "📰", path: "/blog" },
      { label: "Social", icon: "💬", path: "/social" }
    ]
  }
];
