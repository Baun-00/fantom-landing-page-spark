
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Activity, 
  Users, 
  ArrowLeftRight, 
  HandCoins, 
  User, 
  FileText, 
  Settings, 
  Receipt 
} from 'lucide-react';

const navigationItems = [
  { name: 'Dashboard', href: '/dashboard', icon: Activity },
  { name: 'Beneficiaries', href: '/dashboard/beneficiaries', icon: Users },
  { name: 'Transfers', href: '/dashboard/transfers', icon: ArrowLeftRight },
  { name: 'Withdrawal Requests', href: '/dashboard/withdrawals', icon: HandCoins },
  { name: 'Employees', href: '/dashboard/employees', icon: User },
  { name: 'Payroll', href: '/dashboard/payroll', icon: FileText },
  { name: 'Users', href: '/dashboard/users', icon: Settings },
  { name: 'Payslip', href: '/dashboard/payslip', icon: Receipt },
];

export const DashboardSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={`bg-white border-r border-gray-200 transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'}`}>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <h1 className={`font-bold text-xl text-fantom-navy transition-opacity ${isCollapsed ? 'opacity-0' : 'opacity-100'}`}>
            Fantom Capital
          </h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.name}>
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      `flex items-center p-3 rounded-lg transition-colors ${
                        isActive
                          ? 'bg-fantom-green text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`
                    }
                  >
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    {!isCollapsed && <span className="ml-3">{item.name}</span>}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200">
          <p className={`text-xs text-gray-500 transition-opacity ${isCollapsed ? 'opacity-0' : 'opacity-100'}`}>
            © 2025 Fantom Capital
          </p>
        </div>
      </div>
    </div>
  );
};
