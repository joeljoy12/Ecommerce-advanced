import { FaTachometerAlt, FaBox, FaUsers, FaChartLine, FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="h-[1200px] w-64 bg-[#050a0d] text-white p-4 hidden md:block border border-amber-100/5">
      <h1
        className="font-inter text-4xl font-extrabold mb-12 mt-6 bg-gradient-to-r from-violet-500 via-violet-400 to-violet-300 bg-clip-text text-transparent drop-shadow-xl tracking-tight select-none"
      >
        LuxMart
      </h1>
      <nav className="space-y-4">
        <SidebarItem icon={<FaTachometerAlt />} label="Dashboard" to="/" />
        <SidebarItem icon={<FaBox />} label="Orders" to="/orders" />
        <SidebarItem icon={<FaBox />} label="Products" to="/products" />
        <SidebarItem icon={<FaUsers />} label="Customers" to="/customers" />
        <SidebarItem icon={<FaChartLine />} label="Analytics" to="/analytics" />
        <SidebarItem icon={<FaCog />} label="Settings" to="/settings" />
      </nav>
    </aside>
  );
};

const SidebarItem = ({ icon, label, to }) => (
  <Link to={to} className="block">
    <div className="flex items-center space-x-3 p-2 hover:bg-[#1A1A1B] rounded cursor-pointer transition">
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  </Link>
);

export default Sidebar;
