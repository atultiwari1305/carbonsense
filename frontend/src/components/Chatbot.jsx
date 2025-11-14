import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedState, setSelectedState] = useState('');
  const [states, setStates] = useState([]);
  const [stateData, setStateData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchStates();
  }, []);

  const fetchStates = async () => {
    try {
      const response = await axios.get('/api/chatbot/states');
      setStates(response.data.data);
    } catch (error) {
      console.error('Error fetching states:', error);
    }
  };

  const handleStateSelect = async (state) => {
    setSelectedState(state);
    setLoading(true);
    try {
      const response = await axios.get(`/api/chatbot/state/${state}`);
      setStateData(response.data.data);
    } catch (error) {
      console.error('Error fetching state data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        className={`chatbot-button ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>🤖</span>
      </div>

      <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
        <div className="chatbot-header">
          <h3>Carbon Reduction Assistant</h3>
          <button onClick={() => setIsOpen(false)}>×</button>
        </div>

        <div className="chatbot-body">
          <div className="state-selector">
            <label>Select a State:</label>
            <select
              value={selectedState}
              onChange={(e) => handleStateSelect(e.target.value)}
            >
              <option value="">Choose a state...</option>
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>

          {loading && <div className="loading">Loading...</div>}

          {stateData && !loading && (
            <div className="state-info">
              <div className="programs-section">
                <h4>Current Programs</h4>
                {stateData.programs.map((program, index) => (
                  <div key={index} className="program-card">
                    <h5>{program.name}</h5>
                    <p className="org-tag">{program.organization}</p>
                    <p>{program.description}</p>
                  </div>
                ))}
              </div>

              <div className="suggestions-section">
                <h4>Suggested Actions</h4>
                <ul>
                  {stateData.suggestions.map((suggestion, index) => (
                    <li key={index}>{suggestion}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Chatbot;
