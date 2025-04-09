// components/AlertPanel.js
import React, { useState } from 'react';

const AlertPanel = ({ alert, onSendAlert, onClearAlert }) => {
  const [additionalInfo, setAdditionalInfo] = useState('');
  
  const handleSendAlert = () => {
    onSendAlert({
      message: additionalInfo
    });
  };
  
  return (
    <div className={`mt-4 p-4 rounded-lg shadow-md ${alert.sent ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center">
            <div className={`w-4 h-4 rounded-full ${alert.sent ? 'bg-green-500' : 'bg-red-500 animate-pulse'} mr-2`}></div>
            <h3 className={`font-bold ${alert.sent ? 'text-green-700' : 'text-red-700'}`}>
              {alert.sent ? 'Alert Sent' : 'Emergency Detected'}
            </h3>
          </div>
          <p className="mt-2 text-gray-700">{alert.message}</p>
          <p className="text-sm text-gray-500 mt-1">Detected at: {alert.timestamp}</p>
          {alert.sent && (
            <p className="text-sm text-green-600 mt-1">Alert sent at: {alert.sentTimestamp}</p>
          )}
        </div>
        
        <button 
          onClick={onClearAlert}
          className="text-gray-500 hover:text-gray-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      
      {!alert.sent && (
        <div className="mt-3">
          <div className="mb-2">
            <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700">
              Additional Information
            </label>
            <textarea
              id="additionalInfo"
              rows="2"
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Add any details about the emergency..."
              value={additionalInfo}
              onChange={(e) => setAdditionalInfo(e.target.value)}
            ></textarea>
          </div>
          
          <div className="flex space-x-2">
            <button
              onClick={handleSendAlert}
              className="flex-1 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Send Alert
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlertPanel;