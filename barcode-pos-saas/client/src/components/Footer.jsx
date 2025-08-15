import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 text-center p-4 mt-8 shadow-inner">
      <span className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Barcode POS Platform</span>
    </footer>
  );
}
