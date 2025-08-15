import React from 'react';

export default function Dashboard() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="font-semibold mb-2">Sales Overview</h2>
          {/* TODO: Add sales chart */}
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="font-semibold mb-2">Inventory Alerts</h2>
          {/* TODO: Add inventory alerts */}
        </div>
      </div>
    </div>
  );
}
