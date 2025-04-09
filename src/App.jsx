// App.js
import React, { useState, useEffect } from 'react';
import VideoStream from './components/VideoStream';
import AlertPanel from './components/AlertPanel';
import EmergencyButton from './components/EmergencyButton';
import Header from './components/Header';
import StatsPanel from './components/StatsPanel';

function App() {
  const [alert, setAlert] = useState(null);
  const [stats, setStats] = useState({
    activeCases: 0,
    resolvedIncidents: 0,
    responseTime: '0m',
    safetyScore: 95
  });
  
  // Fetch statistics from backend
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/stats');
        const data = await response.json();
        if (data.success) {
          setStats(data.stats);
        }
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };
    
    fetchStats();
    // Refresh stats every 30 seconds
    const interval = setInterval(fetchStats, 30000);
    return () => clearInterval(interval);
  }, []);
  
  // Handle emergency detection from video stream
  const handleEmergencyDetection = (detectionType) => {
    setAlert({
      type: detectionType,
      message: `Emergency ${detectionType} detected!`,
      timestamp: new Date().toLocaleTimeString()
    });
    
    // Play alert sound
    const audio = new Audio('/alert-sound.mp3');
    audio.play();
  };
  
  // Send emergency alert to authorities
  const sendAlert = async (details = {}) => {
    try {
      const response = await fetch('http://localhost:5000/api/alert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          alertType: alert?.type || 'manual',
          location: details.location || 'Current Location',
          timestamp: new Date().toISOString(),
          details: details.message || '',
        }),
      });
      
      const data = await response.json();
      if (data.success) {
        setAlert({
          ...alert,
          sent: true,
          sentTimestamp: new Date().toLocaleTimeString()
        });
      }
    } catch (error) {
      console.error('Error sending alert:', error);
    }
  };
  
  // Clear current alert
  const clearAlert = () => {
    setAlert(null);
  };
  
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main video feed */}
          <div className="md:col-span-2">
            <VideoStream onEmergencyDetection={handleEmergencyDetection} />
            {alert && (
              <AlertPanel 
                alert={alert}
                onSendAlert={sendAlert}
                onClearAlert={clearAlert}
              />
            )}
          </div>
          
          {/* Side panel */}
          <div className="space-y-6">
            <StatsPanel stats={stats} />
            <EmergencyButton onActivate={sendAlert} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;