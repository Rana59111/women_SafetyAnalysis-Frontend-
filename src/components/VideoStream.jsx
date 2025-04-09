// components/VideoStream.js
import React, { useRef, useEffect, useState } from 'react';

const VideoStream = ({ onEmergencyDetection }) => {
  const videoRef = useRef(null);
  const [isStreaming, setIsStreaming] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  // Initialize webcam stream when component mounts
  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ 
          video: { facingMode: 'user' }, 
          audio: true 
        });
        
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setIsStreaming(true);
          
          // Mock emergency detection (in a real app, this would be done with ML models)
          setupMockDetection();
        }
      } catch (err) {
        console.error('Error accessing camera:', err);
        setErrorMessage('Could not access camera. Please allow camera permissions.');
        setIsStreaming(false);
      }
    };
    
    const setupMockDetection = () => {
      // This simulates detection events that would come from actual ML processing
      // In a real implementation, you would process video frames and analyze audio
      
      // Example: detect emergency gesture after 15 seconds
      setTimeout(() => {
        onEmergencyDetection('gesture');
      }, 15000);
    };
    
    startCamera();
    
    // Cleanup function to stop all streams when component unmounts
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, [onEmergencyDetection]);
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 bg-blue-600 text-white font-medium">
        <div className="flex justify-between items-center">
          <h2 className="text-lg">Live Video Feed</h2>
          {isStreaming && (
            <div className="flex items-center">
              <span className="inline-block w-3 h-3 bg-red-500 rounded-full animate-pulse mr-2"></span>
              <span>LIVE</span>
            </div>
          )}
        </div>
      </div>
      
      <div className="relative bg-black aspect-video">
        {errorMessage ? (
          <div className="absolute inset-0 flex items-center justify-center text-white p-4">
            <p>{errorMessage}</p>
          </div>
        ) : (
          <video 
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="w-full h-full object-cover"
          />
        )}
        
        {/* Analytics overlay */}
        <div className="absolute bottom-4 left-4 right-4 flex justify-between text-xs text-white bg-black bg-opacity-50 p-2 rounded">
          <span>Monitoring: Active</span>
          <span>Processing: Real-time</span>
          <span>AI Status: Running</span>
        </div>
      </div>
    </div>
  );
};

export default VideoStream;