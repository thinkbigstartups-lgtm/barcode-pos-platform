import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.js';

function DarkModeToggle() {
  const [dark, setDark] = useState(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);
  return (
    <button
      onClick={() => setDark((d) => !d)}
      className="ml-4 px-2 py-1 rounded border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100"
      aria-label="Toggle dark mode"
    >
      {dark ? '🌙' : '☀️'}
    </button>
  );
}

export default function Navbar() {
  const { user, token, logout } = useAuth();
  return (
    <nav className="bg-white dark:bg-gray-900 shadow p-4 flex justify-between items-center">
      <div className="font-bold text-xl">
        <Link to="/">Barcode POS</Link>
      </div>
      <div className="space-x-4 flex items-center">
        {token && (
          <>
            <Link to="/dashboard" className="hover:underline">Dashboard</Link>
            {(user?.role === 'admin' || user?.role === 'cashier' || user?.role === 'staff') && (
              <Link to="/pos" className="hover:underline">POS</Link>
            )}
            {(user?.role === 'admin' || user?.role === 'staff') && (
              <Link to="/inventory" className="hover:underline">Inventory</Link>
            )}
            {(user?.role === 'admin' || user?.role === 'staff') && (
              <Link to="/customers" className="hover:underline">Customers</Link>
            )}
            {user?.role === 'admin' && (
              <Link to="/analytics" className="hover:underline">Analytics</Link>
            )}
            <button onClick={logout} className="ml-2 px-2 py-1 rounded border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100">Logout</button>
          </>
        )}
        {!token && <Link to="/login" className="hover:underline">Login</Link>}
        <DarkModeToggle />
      </div>
    </nav>
  );
}
