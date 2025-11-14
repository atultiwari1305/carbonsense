import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedState, setSelectedState] = useState('');
  const [states, setStates] = useState([]);
  const [stateData, setStateData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // IMPORTANT: Update this URL when you deploy backend to Render
  // For local development: use '/api/chatbot/states'
  // For production: use 'https://your-backend.onrender.com/api/chatbot/states'
  const API_BASE_URL = process.env.REACT_APP_API_URL || '';

  useEffect(() => {
    fetchStates();
  }, []);

  const fetchStates = async () => {
    try {
      console.log('Fetching states from:', `${API_BASE_URL}/api/chatbot/states`);
      const response = await axios.get(`${API_BASE_URL}/api/chatbot/states`);
      console.log('States response:', response.data);
      
      if (response.data.success && response.data.data) {
        setStates(response.data.data);
        setError(null);
      } else {
        setError('No states data received from server');
      }
    } catch (error) {
      console.error('Error fetching states:', error);
      setError(`Failed to load states: ${error.message}`);
    }
  };

  const handleStateSelect = async (state) => {
    if (!state) return;
    
    setSelectedState(state);
    setLoading(true);
    setError(null);
    
    try {
      console.log('Fetching data for state:', state);
      const response = await axios.get(`${API_BASE_URL}/api/chatbot/state/${encodeURIComponent(state)}`);
      console.log('State data response:', response.data);
      
      if (response.data.success && response.data.data) {
        setStateData(response.data.data);
      } else {
        setError('No data available for this state');
      }
    } catch (error) {
      console.error('Error fetching state data:', error);
      setError(`Failed to load state data: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        className={`chatbot-button ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        title="Carbon Reduction Assistant"
      >
        <span>🤖</span>
      </div>

      <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
        <div className="chatbot-header">
          <h3>Carbon Reduction Assistant</h3>
          <button onClick={() => setIsOpen(false)} aria-label="Close chatbot">×</button>
        </div>

        <div className="chatbot-body">
          {error && (
            <div className="error-message">
              <strong>⚠️ {error}</strong>
              <button onClick={fetchStates} className="retry-btn">Retry</button>
            </div>
          )}
          
          <div className="state-selector">
            <label htmlFor="state-select">Select a State:</label>
            {states.length === 0 && !error ? (
              <div className="loading-text">
                <span className="spinner">⌛</span> Loading states...
              </div>
            ) : (
              <select
                id="state-select"
                value={selectedState}
                onChange={(e) => handleStateSelect(e.target.value)}
                disabled={states.length === 0}
              >
                <option value="">Choose a state...</option>
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            )}
          </div>

          {loading && (
            <div className="loading">
              <span className="spinner">⏳</span> Loading data...
            </div>
          )}

          {stateData && !loading && (
            <div className="state-info">
              <div className="programs-section">
                <h4>📋 Current Programs</h4>
                {stateData.programs && stateData.programs.length > 0 ? (
                  stateData.programs.map((program, index) => (
                    <div key={index} className="program-card">
                      <h5>{program.name}</h5>
                      <p className="org-tag">{program.organization}</p>
                      <p>{program.description}</p>
                    </div>
                  ))
                ) : (
                  <p className="no-data">No programs available</p>
                )}
              </div>

              <div className="suggestions-section">
                <h4>💡 Suggested Actions</h4>
                {stateData.suggestions && stateData.suggestions.length > 0 ? (
                  <ul>
                    {stateData.suggestions.map((suggestion, index) => (
                      <li key={index}>{suggestion}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="no-data">No suggestions available</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Chatbot;
