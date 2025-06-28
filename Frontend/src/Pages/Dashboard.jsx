import React from 'react';
import { FiSearch } from 'react-icons/fi';
import SalesChart from '../Components/Chart';

const Dashboard = () => {
  return (
    <div className="bg-[#070A0E] min-h-screen px-2 sm:px-4 md:px-8 py-4 relative">
      {/* Search Bar */}
      <div className="flex items-center w-full max-w-xl bg-[#101418] rounded-lg px-3 sm:px-4 py-2 mb-5 mt-2 shadow-sm">
        <FiSearch className="text-gray-400 text-xl mr-2" />
        <input
          type="text" 
          placeholder="Search"
          className="bg-transparent outline-none border-none text-white w-full placeholder-gray-500"
        />
      </div>

      {/* Dashboard Title */}
      <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Dashboard</h1>
     
      {/* Cards Row */}
      <div className="flex flex-wrap gap-4 sm:gap-6 mt-4 ">
        <div className="w-full sm:w-40 md:w-48 h-24 bg-[#0b0f14] rounded-lg p-4 text-white flex flex-col justify-center border border-transparent hover:border-blue-500 ">
          <span className="text-base sm:text-lg font-semibold">$958,120</span>
          <span className="text-xs text-gray-400 mt-1">Total Sales</span>
        </div>
        <div className="w-full sm:w-36 md:w-40 h-24 bg-[#0b0f14] rounded-lg p-4 text-white flex flex-col justify-center border border-transparent hover:border-blue-500">
          <span className="text-base sm:text-lg font-semibold">8,250</span>
          <span className="text-xs text-gray-400 mt-1">Orders</span>
        </div>
        <div className="w-full sm:w-56 md:w-64 h-24 bg-[#0b0f14] rounded-lg p-4 text-white flex flex-col justify-center border border-transparent hover:border-blue-500">
          <span className="text-base sm:text-lg font-semibold">1,210</span>
          <span className="text-xs text-gray-400 mt-1">Customers</span>
        </div>
        <div className="w-full sm:w-56 md:w-64 h-24 bg-[#0b0f14] rounded-lg p-4 text-white flex flex-col justify-center border border-transparent hover:border-blue-500">
          <span className="text-base sm:text-lg font-semibold">35,600</span>
          <span className="text-xs text-gray-400 mt-1">Visitors</span>
        </div>
      </div>

      {/* Main Content: Sales Overview & Recent Orders */}
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 mt-6">
        {/* Sales Overview Card */}
        <div className="w-full lg:w-[55%] bg-[#0b0f14] p-4 sm:p-6 rounded-lg shadow-md text-white flex flex-col">
          <h2 className="text-lg sm:text-xl font-semibold mb-4">Sales Overview</h2>
          <div className="h-44 sm:h-64 rounded flex items-center justify-center text-gray-500">
            <SalesChart />
          </div>
          <div className="flex justify-end items-center gap-3 sm:gap-6 mt-4 flex-wrap">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 -mt-2">
              <span className="w-3 h-3 rounded-full bg-blue-500"></span>2023
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 -mt-2">
              <span className="w-3 h-3 rounded-full bg-blue-300"></span>2024
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 -mt-2">
              <span className="w-3 h-3 rounded-full bg-yellow-500"></span>2025
            </div>
          </div>
        </div>

        {/* Recent Orders Card */}
        <div className="w-full lg:w-[45%] bg-[#0b0f14] p-4 sm:p-6 rounded-lg shadow-md text-white flex flex-col mt-4 lg:mt-0">
          <h2 className="text-lg sm:text-xl font-semibold mb-4">Recent Orders</h2>
          <div className="overflow-x-auto flex-1">
            <table className="w-full text-left gap-6">
              <thead>
                <tr className="text-gray-400 text-xs sm:text-sm">
                  <th className="py-2">Name</th>
                  <th className="py-2">Status</th>
                  <th className="py-2 text-right">Amount</th>
                </tr>
              </thead>
              <tbody className="text-xs sm:text-sm">
                <tr>
                  <td className="py-2">John Doe</td>
                  <td className="py-2">
                    <span className="px-2 py-1 rounded bg-green-900 text-green-400">Completed</span>
                  </td>
                  <td className="py-2 text-right">$39.99</td>
                </tr>
                <tr>
                  <td className="py-2">Jane Smith</td>
                  <td className="py-2">
                    <span className="px-2 py-1 rounded bg-yellow-900 text-yellow-400">Pending</span>
                  </td>
                  <td className="py-2 text-right">$28.99</td>
                </tr>
                <tr>
                  <td className="py-2">David Brown</td>
                  <td className="py-2">
                    <span className="px-2 py-1 rounded bg-red-900 text-red-400">Canceled</span>
                  </td>
                  <td className="py-2 text-right">$19.59</td>
                </tr>
                <tr>
                  <td className="py-2">Emily White</td>
                  <td className="py-2">
                    <span className="px-2 py-1 rounded bg-yellow-900 text-yellow-400">Pending</span>
                  </td>
                  <td className="py-2 text-right">$19.99</td>
                </tr>
                <tr>
                  <td className="py-2">Michael Green</td>
                  <td className="py-2">
                    <span className="px-2 py-1 rounded bg-green-900 text-green-400">Completed</span>
                  </td>
                  <td className="py-2 text-right">$129.99</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* UNDERNEATH: Top Products Card */}
      <div className="mt-6 w-full bg-[#0b0f14] p-4 sm:p-6 rounded-lg shadow-md text-white max-w-6xl mx-auto">
        <h2 className="text-lg sm:text-xl font-semibold mb-4">Top Products</h2>
        <div className="flex flex-wrap gap-4 sm:gap-8">
          <div className="w-[45%] sm:w-40 md:w-48 h-36 sm:h-56 flex flex-col items-center bg-[#11151b] p-4 rounded-lg">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[#181d24] rounded-lg mb-3"></div>
            <div className="mt-4 text-xs sm:text-sm font-medium">Smartphone</div>
            <div className="text-xs text-gray-400">$799</div>
          </div>
          <div className="w-[45%] sm:w-40 md:w-48 h-36 sm:h-56 flex flex-col items-center bg-[#11151b] p-4 rounded-lg">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[#181d24] rounded-lg mb-3"></div>
            <div className="mt-4 text-xs sm:text-sm font-medium">Wireless Headphones</div>
            <div className="text-xs text-gray-400">$169</div>
          </div>
          <div className="w-[45%] sm:w-40 md:w-48 h-36 sm:h-56 flex flex-col items-center bg-[#11151b] p-4 rounded-lg">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[#181d24] rounded-lg mb-3"></div>
            <div className="mt-4 text-xs sm:text-sm font-medium">Smartwatch</div>
            <div className="text-xs text-gray-400">$199</div>
          </div>
          <div className="w-[45%] sm:w-40 md:w-48 h-36 sm:h-56 flex flex-col items-center bg-[#11151b] p-4 rounded-lg">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[#181d24] rounded-lg mb-3"></div>
            <div className="mt-4 text-xs sm:text-sm font-medium">Laptop</div>
            <div className="text-xs text-gray-400">$1,239</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

