import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import ResearchPaper from './components/ResearchPaper';
import GlobalView from './components/GlobalView';
import Chatbot from './components/Chatbot';
import ClimateClock from './components/ClimateClock';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <ClimateClock />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/research" element={<ResearchPaper />} />
            <Route path="/global" element={<GlobalView />} />
          </Routes>
        </div>
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;