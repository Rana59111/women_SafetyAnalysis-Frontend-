/**
 * API service for communicating with the Women Safety Analytics backend
 */

const API_BASE_URL = 'http://localhost:5000/api';

export const detectSafety = async (imageFile, location = null) => {
  try {
    const formData = new FormData();
    formData.append('image', imageFile);
    
    if (location) {
      formData.append('latitude', location.latitude);
      formData.append('longitude', location.longitude);
    }

    const response = await fetch(`${API_BASE_URL}/detect`, {
      method: 'POST',
      body: formData,
      // Note: Don't set Content-Type header when using FormData,
      // the browser will set it automatically with the correct boundary
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error in safety detection:', error);
    throw error;
  }
};

export const getAlerts = async (options = {}) => {
  try {
    const { limit = 20, unsafeOnly = false } = options;
    const queryParams = new URLSearchParams();
    
    if (limit) queryParams.append('limit', limit);
    if (unsafeOnly) queryParams.append('unsafeOnly', true);
    
    const response = await fetch(`${API_BASE_URL}/alerts?${queryParams.toString()}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching alerts:', error);
    throw error;
  }
};

export const sendManualAlert = async (alertData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/send-alert`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(alertData),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error sending manual alert:', error);
    throw error;
  }
};

// Additional utility function for handling image uploads
export const uploadImage = async (file) => {
  try {
    const formData = new FormData();
    formData.append('image', file);
    
    const response = await fetch(`${API_BASE_URL}/detect`, {
      method: 'POST',
      body: formData,
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};