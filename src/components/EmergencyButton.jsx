// components/EmergencyButton.js
import React, { useState } from 'react';

const EmergencyButton = ({ onActivate }) => {
  const [isPressed, setIsPressed] = useState(false);
  
  const handlePress = () => {
    setIsPressed(true);
    
    // Simulate button press with animation
    setTimeout(() => {
      setIsPressed(false);
      
      // Activate the emergency alert
      onActivate({
        location: 'Current Location',
        message: 'Manual emergency alert triggered'
      });
    }, 1000);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-lg font-medium mb-4">Emergency Actions</h2>
      
      <div className="flex flex-col space-y-4">
        <button
          onClick={handlePress}
          disabled={isPressed}
          className={`
            w-full h-24 rounded-lg font-bold text-white text-lg
            ${isPressed 
              ? 'bg-red-700 shadow-inner' 
              : 'bg-red-600 hover:bg-red-700 shadow-lg hover:shadow-xl transition-all duration-300'
            }
            focus:outline-none focus:ring-4 focus:ring-red-300
          `}
        >
          {isPressed ? 'SENDING ALERT...' : 'SEND EMERGENCY ALERT'}
        </button>
        
        <div className="grid grid-cols-2 gap-2">
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md">
            Call Help
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-4 rounded-md">
            Share Location
          </button>
        </div>
      </div>
      
      <div className="mt-4 text-sm text-gray-500">
        <p>Emergency contacts will be notified immediately with your current location and situation.</p>
      </div>
    </div>
  );
};

export default EmergencyButton;