import React from 'react';
import './ResearchPaper.css';

const ResearchPaper = () => {
  return (
    <div className="research-container">
      <h1 className="research-title">Research & Publications</h1>
      <div className="research-content">
        <section className="research-section">
          <h2>Overview</h2>
          <p>
            CarbonSense India is a comprehensive study of carbon emissions across
            different sectors in India, with a focus on transportation,
            manufacturing, and energy production.
          </p>
        </section>

        <section className="research-section">
          <h2>Key Findings</h2>
          <ul>
            <li>Transportation sector accounts for major carbon emissions</li>
            <li>State-wise variations in emission patterns</li>
            <li>Impact of renewable energy initiatives</li>
            <li>Effectiveness of government policies</li>
          </ul>
        </section>

        <section className="research-section">
          <h2>Methodology</h2>
          <p>
            Our research combines data from multiple sources including government
            reports, satellite imagery, and ground-level monitoring stations.
            Advanced analytics and visualization techniques help identify trends
            and patterns.
          </p>
        </section>

        <section className="research-section">
          <h2>Publications</h2>
          <div className="publication-list">
            <div className="publication-item">
              <h3>Carbon Emissions in Indian Transport Sector (2024)</h3>
              <p>A comprehensive analysis of emissions from road and rail transport</p>
              <button className="download-btn">Download PDF</button>
            </div>
            <div className="publication-item">
              <h3>State-wise Climate Action Plans (2025)</h3>
              <p>Evaluation of state-level climate initiatives and their impact</p>
              <button className="download-btn">Download PDF</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ResearchPaper;
