// components/common/Navbar.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/problems', label: 'Problems' },
    { path: '/contests', label: 'Contests' },
    { path: '/leaderboard', label: 'Leaderboard' },
    { path: '/dashboard', label: 'Dashboard' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-cyan-500/30 glow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center glow">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <span className="text-xl font-bold gradient-text neon-glow">
              CODEARENA
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 glow-hover ${
                  location.pathname === item.path
                    ? 'text-cyan-400 bg-gray-800 glow'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <button className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 glow-hover">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;