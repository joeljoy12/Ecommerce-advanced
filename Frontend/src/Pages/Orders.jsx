import React from 'react'

const Orders = () => {
  return (
    <div className="relative overflow-x-auto mt-20">
      <h1 className="text-2xl font-bold mb-6 text-white">Orders</h1>
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-200 uppercase bg-[#161c23]">
          <tr>
            <th scope="col" className="px-6 py-3">Order</th>
            <th scope="col" className="px-6 py-3">Product name</th>
            <th scope="col" className="px-6 py-3">Customer</th>
            <th scope="col" className="px-6 py-3">Date</th>
            <th scope="col" className="px-6 py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-700">
            <td className="px-6 py-4 font-medium text-white">#2341</td>
            <td className="px-6 py-4">Apple MacBook Pro 17"</td>
            <td className="px-6 py-4">John Doe</td>
            <td className="px-6 py-4">2024-06-12</td>
            <td className="px-6 py-4">
              <span className="px-2 py-1 rounded bg-green-900 text-green-400 text-xs">Completed</span>
            </td>
          </tr>
          <tr className="border-b border-gray-700">
            <td className="px-6 py-4 font-medium text-white">#2342</td>
            <td className="px-6 py-4">Microsoft Surface Pro</td>
            <td className="px-6 py-4">Jane Smith</td>
            <td className="px-6 py-4">2024-06-10</td>
            <td className="px-6 py-4">
              <span className="px-2 py-1 rounded bg-yellow-900 text-yellow-400 text-xs">Pending</span>
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 font-medium text-white">#2343</td>
            <td className="px-6 py-4">Magic Mouse 2</td>
            <td className="px-6 py-4">David Brown</td>
            <td className="px-6 py-4">2024-06-07</td>
            <td className="px-6 py-4">
              <span className="px-2 py-1 rounded bg-red-900 text-red-400 text-xs">Canceled</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Orders
