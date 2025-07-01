import React from "react";
import {
  LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip,
  BarChart, Bar, ResponsiveContainer,
} from "recharts";
import { FiDollarSign, FiTrendingUp, FiUsers, FiPercent } from "react-icons/fi";

const stats = [
  {
    icon: <FiDollarSign className="text-2xl text-blue-400" />,
    label: "Total Revenue",
    value: "$214,978",
  },
  {
    icon: <FiTrendingUp className="text-2xl text-indigo-400" />,
    label: "Sales",
    value: "12,430",
  },
  {
    icon: <FiUsers className="text-2xl text-sky-400" />,
    label: "Visitors",
    value: "31,120",
  },
  {
    icon: <FiPercent className="text-2xl text-green-400" />,
    label: "Conversion Rate",
    value: "3.8%",
  },
];

// Dummy data for charts
const salesData = [
  { name: "Jan", value: 8000 },
  { name: "Feb", value: 10000 },
  { name: "Mar", value: 13500 },
  { name: "Apr", value: 14000 },
  { name: "May", value: 12000 },
  { name: "Jun", value: 14500 },
  { name: "Jul", value: 15000 },
  { name: "Aug", value: 13200 },
  { name: "Sep", value: 14000 },
  { name: "Oct", value: 15300 },
  { name: "Nov", value: 16300 },
  { name: "Dec", value: 18000 },
];
const revenueData = [
  { name: "Jan", value: 5 }, { name: "Feb", value: 8 },
  { name: "Mar", value: 10 }, { name: "Apr", value: 13 },
  { name: "May", value: 15 }, { name: "Jun", value: 18 },
];
const customersData = [
  { name: "Jan", value: 2 }, { name: "Feb", value: 4 },
  { name: "Mar", value: 6 }, { name: "Apr", value: 8 },
  { name: "May", value: 10 }, { name: "Jun", value: 14 },
];
const avgOrderData = [
  { name: "Jan", value: 3 }, { name: "Feb", value: 5 },
  { name: "Mar", value: 7 }, { name: "Apr", value: 8 },
  { name: "May", value: 9 }, { name: "Jun", value: 11 },
];

const Analytics = () => {
  return (
    <div className="min-h-screen bg-[#0a0e11] py-8 px-1 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-7 text-white">Analytics</h1>
        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mb-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 bg-[#14171c]/80 rounded-xl shadow-lg px-6 py-4"
            >
              {stat.icon}
              <div>
                <div className="text-xs text-gray-400">{stat.label}</div>
                <div className="text-xl font-semibold text-white">
                  {stat.value}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Chart Area */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Sales Performance Line Chart */}
          <div className="md:col-span-2 bg-[#14171c]/80 rounded-xl p-6 shadow-lg">
            <div className="font-semibold text-lg mb-3 text-white">
              Sales Performance
            </div>
            <ResponsiveContainer width="100%" height={230}>
              <LineChart data={salesData}>
                <CartesianGrid stroke="#23272e" vertical={false} />
                <XAxis dataKey="name" tick={{ fill: "#b1b5c3", fontSize: 12 }} />
                <YAxis
                  tick={{ fill: "#b1b5c3", fontSize: 12 }}
                  domain={[8000, 20000]}
                  tickFormatter={(v) => `$${v / 1000}k`}
                  axisLine={false}
                />
                <Tooltip contentStyle={{ borderRadius: 8, fontSize: 14, background: "#23272e", color: "#fff" }} />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  dot={{ r: 5, stroke: "#3b82f6", strokeWidth: 2, fill: "#181c22" }}
                  activeDot={{ r: 7, fill: "#2563eb" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          {/* Overview Bar Charts */}
          <div className="space-y-6">
            <div className="bg-[#181c22]/80 rounded-xl p-4 shadow-md">
              <div className="font-semibold mb-1 text-white">Overview</div>
              <div>
                <div className="text-xs mb-1 text-gray-400">Revenue</div>
                <ResponsiveContainer width="100%" height={44}>
                  <BarChart data={revenueData}>
                    <Bar dataKey="value" fill="#3b82f6" radius={4} barSize={18} />
                    <XAxis dataKey="name" hide />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div>
                <div className="text-xs mb-1 mt-2 text-gray-400">Customers</div>
                <ResponsiveContainer width="100%" height={44}>
                  <BarChart data={customersData}>
                    <Bar dataKey="value" fill="#3b82f6" radius={4} barSize={18} />
                    <XAxis dataKey="name" hide />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div>
                <div className="text-xs mb-1 mt-2 text-gray-400">Avg. Order Value</div>
                <ResponsiveContainer width="100%" height={44}>
                  <BarChart data={avgOrderData}>
                    <Bar dataKey="value" fill="#3b82f6" radius={4} barSize={18} />
                    <XAxis dataKey="name" hide />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Overview Bar Chart */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#181c22]/80 rounded-xl p-6 shadow-md">
            <div className="font-semibold text-lg mb-3 text-white">Overview</div>
            <ResponsiveContainer width="100%" height={110}>
              <BarChart data={salesData.slice(0, 8)}>
                <CartesianGrid stroke="#23272e" vertical={false} />
                <XAxis dataKey="name" tick={{ fill: "#b1b5c3", fontSize: 12 }} />
                <YAxis hide />
                <Tooltip contentStyle={{ borderRadius: 8, fontSize: 14, background: "#23272e", color: "#fff" }} />
                <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={28} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
