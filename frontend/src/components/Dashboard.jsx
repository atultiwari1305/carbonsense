import React, { useEffect } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  useEffect(() => {
    // Load Tableau JavaScript API
    const script = document.createElement('script');
    script.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Carbon Emissions Dashboard</h1>
      <div className="tableau-container">
        <div
          className="tableauPlaceholder"
          id="viz1699264689524"
          style={{ position: 'relative' }}
        >
          <noscript>
            <a href="#">
              <img
                alt="Overview"
                src="https://public.tableau.com/static/images/Ca/CarbonSenseIndia_Dashboard/Overview/1_rss.png"
                style={{ border: 'none' }}
              />
            </a>
          </noscript>
          <object className="tableauViz" style={{ display: 'none' }}>
            <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
            <param name="embed_code_version" value="3" />
            <param name="site_root" value="" />
            <param name="name" value="CarbonSenseIndia_Dashboard/Overview" />
            <param name="tabs" value="no" />
            <param name="toolbar" value="yes" />
            <param name="static_image" value="https://public.tableau.com/static/images/Ca/CarbonSenseIndia_Dashboard/Overview/1.png" />
            <param name="animate_transition" value="yes" />
            <param name="display_static_image" value="yes" />
            <param name="display_spinner" value="yes" />
            <param name="display_overlay" value="yes" />
            <param name="display_count" value="yes" />
            <param name="language" value="en-US" />
            <param name="filter" value="publish=yes" />
          </object>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
