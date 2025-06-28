import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './Pages/Sidebar'
import Dashboard from './Pages/Dashboard'
import Orders from './Pages/Orders'
import Products from './Pages/Products'
import Customers from './Pages/Customers'
import Analytics from './Pages/Analytics'
import Settings from './Pages/Settings'
import './index.css'

const App = () => {
  return (
    <Router>
      <div className="flex w-full bg-[#0a0e11] min-h-screen">
        {/* Sidebar on the left */}
        <Sidebar />

        {/* Main content area with routing */}
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/products" element={<Products />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
