// src/components/RightSidebar.jsx
import React from "react";
import { Bell, CheckCircle, MessageCircle, AlertCircle, UserCircle } from "lucide-react";

// Sample Notifications
const notifications = [
  { icon: <Bell size={20} />, title: "Order Received", time: "1 hour ago" },
  { icon: <CheckCircle size={20} />, title: "Payment Done", time: "Just now" },
  { icon: <MessageCircle size={20} />, title: "New Message", time: "Yesterday" },
  { icon: <AlertCircle size={20} />, title: "Server Alert", time: "2 hours ago" },
];

// Function to generate random avatar
const getRandomAvatar = () =>
  `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`;

// Sample Activities (randomly generated)
const activities = Array.from({ length: 5 }, (_, i) => ({
  avatar: getRandomAvatar(),
  description: `User ${i + 1} completed an activity`,
}));

// Sample Contacts (randomly generated)
const contacts = Array.from({ length: 5 }, (_, i) => ({
  avatar: getRandomAvatar(),
  name: `Contact ${i + 1}`,
}));

const RightSidebar = () => {
  return (
    <div className="fixed h-screen flex flex-col gap-6 p-4 overflow-y-auto">
      {/* Notifications */}
      <div>
        <h2 className="text-xl font-semibold mb-3">Notifications</h2>
        <div className="flex flex-col gap-3">
          {notifications.map((note, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-gray-600">
                {note.icon}
              </div>
              <div className="flex flex-col">
                <div className="font-medium">{note.title}</div>
                <div className="text-sm text-gray-500">{note.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Activities Section */}
      <div>
        <h2 className="text-xl font-semibold mb-3">Activities</h2>
        <div className="flex flex-col gap-4">
          {activities.map((act, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <img
                src={act.avatar}
                alt="avatar"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="text-sm">{act.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Contacts Section */}
      <div>
        <h2 className="text-xl font-semibold mb-3">Contacts</h2>
        <div className="flex flex-col gap-3">
          {contacts.map((c, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <img
                src={c.avatar}
                alt={c.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="text-sm">{c.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
