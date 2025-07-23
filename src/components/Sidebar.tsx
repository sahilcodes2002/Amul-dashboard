import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  TrendingUp, 
  Factory, 
  Award, 
  Truck, 
  BarChart3, 
  Settings, 
  Leaf,
  Building2
} from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { path: '/', icon: LayoutDashboard, label: 'Dashboard', color: 'text-blue-600' },
    { path: '/financial', icon: TrendingUp, label: 'Financial Performance', color: 'text-green-600' },
    { path: '/production', icon: Factory, label: 'Production Analysis', color: 'text-orange-600' },
    { path: '/market', icon: BarChart3, label: 'Market Analysis', color: 'text-red-600' },
    { path: '/supply-chain', icon: Truck, label: 'Supply Chain', color: 'text-indigo-600' },
    { path: '/quality', icon: Award, label: 'Quality Metrics', color: 'text-purple-600' },
    { path: '/operations', icon: Settings, label: 'Operational Efficiency', color: 'text-gray-600' },
    { path: '/sustainability', icon: Leaf, label: 'Sustainability Reports', color: 'text-emerald-600' },
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg border-r border-gray-200 z-50">
      {/* Logo Section */}
      <div className="p-0 border-b border-gray-100 h-[74px] w-full flex items-center justify-center">
        <img
          src={`${import.meta.env.BASE_URL}image.png`}
          alt="Amul Logo"
          className="h-20 w-auto object-contain"
          style={{ maxHeight: '80px', maxWidth: '95%', objectFit: 'contain', objectPosition: 'center' }}
        />
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'bg-blue-50 text-blue-700 border-r-4 border-blue-700'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
              }`
            }
          >
            <item.icon className={`h-5 w-5 ${item.color}`} />
            <span className="font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
        <div className="text-xs text-gray-500 text-center">
          <p>© 2025 Amul</p>
          <p>Version 2.1.0</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;