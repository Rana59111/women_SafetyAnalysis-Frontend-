// components/StatsPanel.js
import React from 'react';

const StatsPanel = ({ stats }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-lg font-medium mb-4">System Status</h2>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-50 p-3 rounded-md">
          <div className="text-sm text-blue-700">Active Cases</div>
          <div className="text-2xl font-bold text-blue-800">{stats.activeCases}</div>
        </div>
        
        <div className="bg-green-50 p-3 rounded-md">
          <div className="text-sm text-green-700">Resolved</div>
          <div className="text-2xl font-bold text-green-800">{stats.resolvedIncidents}</div>
        </div>
        
        <div className="bg-purple-50 p-3 rounded-md">
          <div className="text-sm text-purple-700">Avg. Response</div>
          <div className="text-2xl font-bold text-purple-800">{stats.responseTime}</div>
        </div>
        
        <div className="bg-yellow-50 p-3 rounded-md">
          <div className="text-sm text-yellow-700">Safety Score</div>
          <div className="text-2xl font-bold text-yellow-800">{stats.safetyScore}</div>
        </div>
      </div>
      
      <div className="mt-4">
        <h3 className="text-sm font-medium text-gray-700 mb-2">System Status</h3>
        <div className="flex items-center">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-green-500 h-2 rounded-full" 
              style={{ width: '96%' }}
            ></div>
          </div>
          <span className="ml-2 text-sm text-gray-600">96%</span>
        </div>
        <div className="mt-1 text-xs text-gray-500">All systems operational</div>
      </div>
    </div>
  );
};

export default StatsPanel;