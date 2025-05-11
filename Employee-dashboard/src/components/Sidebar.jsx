import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { navItems } from "../nav-items";

const Sidebar = () => {
  return (
    <motion.aside
      initial={{ x: -250 }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="bg-primary text-white w-64 min-h-screen p-4 fixed left-0 top-0 z-50 overflow-y-auto"
    >
      <div className="flex items-center mb-8">
        <img src="/gna-logo.png" alt="GNA Logo" className="h-12 w-auto mr-3" />
        <span className="text-xl font-semibold tracking-tight">GNA Portal</span>
      </div>
      <nav>
        <ul className="space-y-2">
          {navItems.map((item) => (
            <motion.li key={item.to} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center p-2 rounded-lg transition-colors ${
                    isActive ? 'bg-white text-primary' : 'hover:bg-primary-dark'
                  }`
                }
              >
                {item.icon}
                <span className="ml-3">{item.title}</span>
              </NavLink>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.aside>
  );
};

export default Sidebar;
