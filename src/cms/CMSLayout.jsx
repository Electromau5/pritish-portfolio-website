import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { 
  LayoutDashboard, 
  FileText, 
  Plus, 
  Settings, 
  LogOut,
  ArrowLeft
} from 'lucide-react';

const CMSLayout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/cms');
  };

  const navItems = [
    { path: '/cms/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/cms/case-studies', icon: FileText, label: 'Case Studies' },
    { path: '/cms/case-studies/new', icon: Plus, label: 'New Case Study' },
    { path: '/cms/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <Link to="/cms/dashboard" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded"></div>
            <span className="text-xl font-light text-gray-900 dark:text-white">CMS</span>
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-black text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <Link
            to="/home"
            className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors mb-2"
          >
            <ArrowLeft size={20} />
            <span>Back to Site</span>
          </Link>
          <button
            onClick={handleLogout}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-8">
        {children}
      </main>
    </div>
  );
};

export default CMSLayout;

