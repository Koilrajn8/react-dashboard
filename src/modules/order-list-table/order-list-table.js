import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { FiFilter } from "react-icons/fi";
import { BiSortAlt2 } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";

// helper: format date to "just now, yesterday..."
const formatDate = (date) => {
  const now = new Date();
  const diff = Math.floor((now - date) / 1000); // in seconds
  if (diff < 60) return "just now";
  if (diff < 3600) return `${Math.floor(diff / 60)} minutes ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
  if (diff < 172800) return "yesterday";
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const OrderListTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortAsc, setSortAsc] = useState(true);
  const rowsPerPage = 5;

  const data = [
    { orderId: "1001", user: "Alice", project: "Dashboard", address: "NY, USA", date: new Date(), status: "Completed", avatar: "https://randomuser.me/api/portraits/women/1.jpg" },
    { orderId: "1002", user: "Bob", project: "E-commerce", address: "LA, USA", date: new Date(Date.now() - 3600 * 1000), status: "Pending", avatar: "https://randomuser.me/api/portraits/men/2.jpg" },
    { orderId: "1003", user: "Charlie", project: "Portfolio", address: "Chicago, USA", date: new Date(Date.now() - 86400 * 1000), status: "In Progress", avatar: "https://randomuser.me/api/portraits/men/3.jpg" },
    { orderId: "1004", user: "David", project: "CRM", address: "Miami, USA", date: new Date("2023-02-12"), status: "Cancelled", avatar: "https://randomuser.me/api/portraits/men/4.jpg" },
    { orderId: "1005", user: "Eve", project: "Analytics", address: "Seattle, USA", date: new Date(Date.now() - 60 * 1000), status: "Completed", avatar: "https://randomuser.me/api/portraits/women/5.jpg" },
    { orderId: "1006", user: "Frank", project: "HR Tool", address: "Boston, USA", date: new Date(Date.now() - 2 * 3600 * 1000), status: "Pending", avatar: "https://randomuser.me/api/portraits/men/6.jpg" },
    { orderId: "1007", user: "Grace", project: "Banking App", address: "Dallas, USA", date: new Date(Date.now() - 3 * 86400 * 1000), status: "Completed", avatar: "https://randomuser.me/api/portraits/women/7.jpg" },
    { orderId: "1008", user: "Hannah", project: "HealthCare", address: "Austin, USA", date: new Date(Date.now() - 5 * 86400 * 1000), status: "In Progress", avatar: "https://randomuser.me/api/portraits/women/8.jpg" },
    { orderId: "1009", user: "Ian", project: "ERP", address: "Denver, USA", date: new Date(Date.now() - 10 * 86400 * 1000), status: "Cancelled", avatar: "https://randomuser.me/api/portraits/men/9.jpg" },
    { orderId: "1010", user: "Jack", project: "Fintech", address: "Houston, USA", date: new Date(Date.now() - 30 * 86400 * 1000), status: "Completed", avatar: "https://randomuser.me/api/portraits/men/10.jpg" },
    { orderId: "1011", user: "Karen", project: "E-learning", address: "San Diego, USA", date: new Date(Date.now() - 15 * 60 * 1000), status: "In Progress", avatar: "https://randomuser.me/api/portraits/women/11.jpg" },
    { orderId: "1012", user: "Leo", project: "Travel App", address: "Las Vegas, USA", date: new Date(Date.now() - 25 * 60 * 1000), status: "Pending", avatar: "https://randomuser.me/api/portraits/men/12.jpg" },
    { orderId: "1013", user: "Mona", project: "Food Delivery", address: "Orlando, USA", date: new Date(Date.now() - 7 * 86400 * 1000), status: "Cancelled", avatar: "https://randomuser.me/api/portraits/women/13.jpg" },
    { orderId: "1014", user: "Nate", project: "Logistics", address: "Phoenix, USA", date: new Date(Date.now() - 20 * 60 * 1000), status: "Completed", avatar: "https://randomuser.me/api/portraits/men/14.jpg" },
    { orderId: "1015", user: "Olivia", project: "Chat App", address: "Columbus, USA", date: new Date(Date.now() - 2 * 86400 * 1000), status: "In Progress", avatar: "https://randomuser.me/api/portraits/women/15.jpg" },
    { orderId: "1016", user: "Paul", project: "POS System", address: "Atlanta, USA", date: new Date(Date.now() - 45 * 60 * 1000), status: "Pending", avatar: "https://randomuser.me/api/portraits/men/16.jpg" },
    { orderId: "1017", user: "Queen", project: "LMS", address: "Charlotte, USA", date: new Date(Date.now() - 12 * 3600 * 1000), status: "Completed", avatar: "https://randomuser.me/api/portraits/women/17.jpg" },
    { orderId: "1018", user: "Ryan", project: "Inventory", address: "San Jose, USA", date: new Date(Date.now() - 18 * 3600 * 1000), status: "In Progress", avatar: "https://randomuser.me/api/portraits/men/18.jpg" },
    { orderId: "1019", user: "Sophia", project: "Video Platform", address: "Philadelphia, USA", date: new Date(Date.now() - 4 * 86400 * 1000), status: "Pending", avatar: "https://randomuser.me/api/portraits/women/19.jpg" },
    { orderId: "1020", user: "Tom", project: "Messaging", address: "Detroit, USA", date: new Date(Date.now() - 90 * 86400 * 1000), status: "Cancelled", avatar: "https://randomuser.me/api/portraits/men/20.jpg" },
  ];


  const totalPages = Math.ceil(data.length / rowsPerPage);

  const sortedData = [...data].sort((a, b) =>
    sortAsc ? a.user.localeCompare(b.user) : b.user.localeCompare(a.user)
  );

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = sortedData.slice(indexOfFirstRow, indexOfLastRow);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const statusColor = {
    Completed: "text-green-600",
    Pending: "text-yellow-600",
    "In Progress": "text-blue-600",
    Cancelled: "text-red-600",
  };

  return (
    <div className="p-4">
      {/* Top Left: Filter + Sort */}
      <div className="flex items-center mb-2 space-x-3">
        <button className="flex items-center  px-2 py-1 rounded hover:bg-gray-100">
          <FiFilter className="mr-1" />
        </button>
        <button
          className="flex items-center  px-2 py-1 rounded hover:bg-gray-100"
          onClick={() => setSortAsc(!sortAsc)}
        >
          <BiSortAlt2 className="mr-1" />
        </button>
      </div>

      
      
      {/* Table */}
      <table className="min-w-full border-collapse ">
        <thead className="border-b border-gray-300">
          <tr>
            <th className="  p-2">
              <input type="checkbox" />
            </th>
            <th className="text-black/60 p-2 text-left">Order ID</th>
            <th className="text-black/60  p-2 text-left">User</th>
            <th className="text-black/60  p-2 text-left">Project</th>
            <th className="text-black/60  p-2 text-left">Address</th>
            <th className="text-black/60  p-2 text-left">Date</th>
            <th className="text-black/60  p-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map((row, idx) => (
            <tr
              key={idx}
              className={idx % 2 === 0 ? "bg-white" : "bg-gray-50 hover:bg-gray-200"}
            >
              <td className="  p-2 text-center">
                <input type="checkbox" />
              </td>
              <td className="  p-2">{row.orderId}</td>
              <td className="  p-2 flex items-center">
                <img
                  src={row.avatar}
                  alt={row.user}
                  className="w-6 h-6 rounded-full mr-2"
                />
                <span>{row.user}</span>
              </td>
              <td className="  p-2">{row.project}</td>
              <td className="  p-2">{row.address}</td>
              <td className="  p-2 flex items-center">
                <MdOutlineDateRange className="mr-2 text-gray-500" />
                {formatDate(row.date)}
              </td>
              <td
                className={`  p-2 font-semibold ${
                  statusColor[row.status]
                }`}
              >
                {row.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end mb-2">
        <button
          onClick={() => goToPage(currentPage - 1)}
          className="p-1 border rounded mr-2"
        >
          <AiOutlineLeft />
        </button>
        {[...Array(totalPages)].map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToPage(idx + 1)}
            className={`p-1 border rounded mx-1 ${
              currentPage === idx + 1 ? "bg-blue-500 text-white" : ""
            }`}
          >
            {idx + 1}
          </button>
        ))}
        <button
          onClick={() => goToPage(currentPage + 1)}
          className="p-1 border rounded ml-2"
        >
          <AiOutlineRight />
        </button>
      </div>

    </div>
  );
};

export default OrderListTable;
