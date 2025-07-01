import React from 'react';
import { FaMobileAlt, FaHeadphones, FaShoePrints, FaShoppingBag, FaClipboardList, FaTshirt, FaCoffee, FaChair } from 'react-icons/fa';

const products = [
  { icon: <FaMobileAlt />, name: 'Smartphone', price: '$699.00', stock: 120, date: 'Apr 20, 2024' },
  { icon: <FaHeadphones />, name: 'Wireless Headphones', price: '$199.00', stock: 85, date: 'Apr 19, 2024' },
  { icon: <FaShoePrints />, name: 'Sneakers', price: '$129.00', stock: 200, date: 'Apr 13, 2024' },
  { icon: <FaShoppingBag />, name: 'Backpack', price: '$79.00', stock: 150, date: 'Apr 17, 2024' },
  { icon: <FaClipboardList />, name: 'Smartwatch', price: '$249.00', stock: 75, date: 'Apr 16, 2024' },
  { icon: <FaTshirt />, name: 'T-shirt', price: '$29.00', stock: 300, date: 'Apr 15, 2024' },
  { icon: <FaCoffee />, name: 'Coffee Maker', price: '$99.00', stock: 50, date: 'Apr 14, 2024' },
  { icon: <FaChair />, name: 'Office Chair', price: '$149.00', stock: 40, date: 'Apr 13, 2024' },
  { icon: <FaChair />, name: 'Office Chair', price: '$149.00', stock: 40, date: 'Apr 13, 2024' },
];

const Products = () => {
  return (
    <div className="w-full px-2 sm:px-8 mt-10">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold text-white">Products</h1>
        <button className="bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg px-6 py-2 transition-all duration-200 shadow-md">
          Add Product
        </button>
      </div>
      <div className="bg-[#14171c]/80 rounded-2xl shadow-xl px-2 sm:px-8 py-6 max-w-6xl mx-auto border border-white/5 backdrop-blur-md">
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-400 text-sm">
              <th className="py-3 font-normal">Product</th>
              <th className="py-3 font-normal">Price</th>
              <th className="py-3 font-normal">Stock</th>
              <th className="py-3 font-normal">Date</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p, idx) => (
              <tr key={idx} className="border-b border-[#23272e] last:border-0 hover:bg-white/5 transition">
                <td className="py-4 flex items-center gap-3 font-medium text-white">
                  <span className="text-xl text-gray-300">{p.icon}</span>
                  <span>{p.name}</span>
                </td>
                <td className="py-4 text-white">{p.price}</td>
                <td className="py-4 text-white">{p.stock}</td>
                <td className="py-4 text-white">{p.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
