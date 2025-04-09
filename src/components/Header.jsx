// components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="mr-2 w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
                <path d="M10 4a1 1 0 011 1v5a1 1 0 01-1 1H7a1 1 0 110-2h2V5a1 1 0 011-1z" />
              </svg>
            </div>
            <h1 className="text-xl font-bold text-gray-800">Women Safety Analytics</h1>
          </div>
          
          <nav className="hidden md:flex space-x-6 text-gray-600">
            <a href="#" className="font-medium hover:text-blue-600">Dashboard</a>
            <a href="#" className="font-medium hover:text-blue-600">History</a>
            <a href="#" className="font-medium hover:text-blue-600">Settings</a>
            <a href="#" className="font-medium hover:text-blue-600">Help</a>
          </nav>
          
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="hidden md:inline text-gray-700">User</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;