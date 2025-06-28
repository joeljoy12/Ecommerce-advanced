import { FaTachometerAlt, FaBox, FaUsers, FaChartLine, FaCog } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="h-[1200px] bg-[#050a0d] text-white p-4 hidden md:block border border-amber-100/5">
      <h1 className="text-4xl font-bold mb-10">ecommerce</h1>
      <nav className="space-y-4">
        <SidebarItem icon={<FaTachometerAlt />} label="Dashboard" to="/" />
        <SidebarItem icon={<FaBox />} label="Orders" to="/orders" />
        <SidebarItem icon={<FaBox />} label="Products" to="/products" />
        <SidebarItem icon={<FaUsers />} label="Customers" to="/customers" />
        <SidebarItem icon={<FaChartLine />} label="Analytics" to="/analytics" />
        <SidebarItem icon={<FaCog />} label="Settings" to="/settings" />
      </nav>
    </aside>
  )
}

// Add the `to` prop and wrap with Link
const SidebarItem = ({ icon, label, to }) => (
  <Link to={to} className="block">
    <div className="flex items-center space-x-3 p-2 hover:bg-[#1A1A1B] rounded cursor-pointer">
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  </Link>
);

export default Sidebar
