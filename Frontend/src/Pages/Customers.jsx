import React from "react";
import { FiUsers, FiCheckCircle, FiPlusCircle, FiTrendingUp, FiSearch } from "react-icons/fi";

// Dummy customer data
const customers = [
  {
    name: "Eleanor Pena",
    email: "eleanor.pena@example.com",
    location: "New York, USA",
    orders: 34,
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Cody Fisher",
    email: "cody.fisher@example.com",
    location: "Los Angeles, USA",
    orders: 29,
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Jerome Bell",
    email: "jerome.bell@example.com",
    location: "Des Moines, USA",
    orders: 27,
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Kristin Watson",
    email: "kristin.watson@example.com",
    location: "Chicago, USA",
    orders: 25,
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    name: "Darlene Robertson",
    email: "darlene@example.com",
    location: "Brentwood, USA",
    orders: 22,
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    name: "Esther Howard",
    email: "esther@example.com",
    location: "Austin, USA",
    orders: 19,
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    name: "Devon Lane",
    email: "devon@example.com",
    location: "Seattle, USA",
    orders: 18,
    avatar: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    name: "Kathryn Murphy",
    email: "kathryn.murphy@example.com",
    location: "Denver, USA",
    orders: 12,
    avatar: "https://randomuser.me/api/portraits/women/8.jpg",
  },
];

const stats = [
  {
    icon: <FiUsers className="text-2xl text-blue-400" />,
    label: "Total Customers",
    value: "18,732",
  },
  {
    icon: <FiCheckCircle className="text-2xl text-indigo-400" />,
    label: "Active Customers",
    value: "5,412",
  },
  {
    icon: <FiPlusCircle className="text-2xl text-sky-400" />,
    label: "New Customers",
    value: "1,282",
  },
  {
    icon: <FiTrendingUp className="text-2xl text-green-400" />,
    label: "+930",
    value: "Net Budget",
  },
];

const Customers = () => (
  <div className="min-h-screen bg-[#0a0e11] py-8 px-2 sm:px-6">
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-7 text-white">Customers</h1>
      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mb-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 bg-[#14171c]/80 rounded-xl shadow-lg px-6 py-4"
          >
            {stat.icon}
            <div>
              <div className="text-xs text-gray-400">
                {stat.label === "+930" ? stat.value : stat.label}
              </div>
              <div className="text-xl font-semibold text-white">
                {stat.label === "+930" ? stat.label : stat.value}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Customers Table Card */}
      <div className="bg-[#14171c]/80 rounded-xl shadow-lg px-4 py-5 border border-white/5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
          <div className="font-semibold text-lg text-white mb-2 sm:mb-0">Customers</div>
          <div className="relative max-w-xs">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <FiSearch />
            </span>
            <input
              type="text"
              className="bg-[#181c22] rounded-lg pl-10 pr-4 py-2 outline-none border border-[#23272e] focus:border-blue-400 text-sm text-white placeholder-gray-400"
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-gray-400 border-b border-[#23272e]">
                <th className="py-3 font-normal text-left"> </th>
                <th className="py-3 font-normal text-left">Name</th>
                <th className="py-3 font-normal text-left">Email</th>
                <th className="py-3 font-normal text-left">Location</th>
                <th className="py-3 font-normal text-left">Orders</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((c, idx) => (
                <tr key={idx} className="border-b border-[#23272e] last:border-0 hover:bg-[#181c22]/60 transition">
                  <td className="py-3 text-gray-400">{idx + 1}</td>
                  <td className="py-3 flex items-center gap-3 font-medium text-white">
                    <img
                      src={c.avatar}
                      alt={c.name}
                      className="w-8 h-8 rounded-full object-cover border border-[#23272e]"
                    />
                    {c.name}
                  </td>
                  <td className="py-3 text-gray-300">{c.email}</td>
                  <td className="py-3 text-gray-300">{c.location}</td>
                  <td className="py-3 text-white">{c.orders}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);

export default Customers;
