import React, { useState, useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';
import './GlobalView.css';

const GlobalView = () => {
  const [countries, setCountries] = useState({ features: [] });
  const [ozoneData, setOzoneData] = useState([]);
  const globeEl = useRef();

  useEffect(() => {
    // Fetch countries geojson
    fetch('https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson')
      .then((res) => res.json())
      .then(setCountries)
      .catch(err => console.error('Error fetching countries:', err));

    // Generate sample ozone layer data
    generateOzoneData();
  }, []);

  const generateOzoneData = () => {
    const data = [];
    // Generate points around the globe
    for (let lat = -90; lat <= 90; lat += 10) {
      for (let lng = -180; lng <= 180; lng += 10) {
        const ozoneLevel = 220 + Math.random() * 100; // Dobson Units
        data.push({
          lat,
          lng,
          level: ozoneLevel,
          color: getColorForOzoneLevel(ozoneLevel),
        });
      }
    }
    setOzoneData(data);
  };

  const getColorForOzoneLevel = (level) => {
    // Color gradient based on ozone levels
    if (level < 220) return '#FF0000'; // Critical (red)
    if (level < 260) return '#FFA500'; // Low (orange)
    if (level < 300) return '#FFFF00'; // Moderate (yellow)
    return '#00FF00'; // Good (green)
  };

  return (
    <div className="global-view-container">
      <h1 className="global-title">Global Ozone Layer Visualization</h1>
      
      <div className="globe-info">
        <div className="legend">
          <h3>Ozone Levels (Dobson Units)</h3>
          <div className="legend-grid">
            <div className="legend-item">
              <span className="color-box" style={{ background: '#00FF00' }}></span>
              <span>Good (&gt;300)</span>
            </div>
            <div className="legend-item">
              <span className="color-box" style={{ background: '#FFFF00' }}></span>
              <span>Moderate (260-300)</span>
            </div>
            <div className="legend-item">
              <span className="color-box" style={{ background: '#FFA500' }}></span>
              <span>Low (220-260)</span>
            </div>
            <div className="legend-item">
              <span className="color-box" style={{ background: '#FF0000' }}></span>
              <span>Critical (&lt;220)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="globe-wrapper">
        <Globe
          ref={globeEl}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
          
          /* FIX 1 — Center the globe */
          onGlobeReady={() => {
            const controls = globeEl.current.controls();
            controls.enableZoom = true;
            controls.autoRotate = true;
            controls.autoRotateSpeed = 0.8;

            // FIX 2 — Adjust camera distance to prevent cropping
            globeEl.current.camera().position.z = 350;
          }}

          /* FIX 3 — DYNAMIC SIZE */
          width={window.innerWidth * 0.75}
          height={window.innerHeight * 0.55}

          /* your existing props... */
          polygonsData={countries.features}
          polygonCapColor={() => 'rgba(200,200,200,0.3)'}
          polygonSideColor={() => 'rgba(100,100,100,0.1)'}
          polygonStrokeColor={() => '#111'}
          pointsData={ozoneData}
          pointLat="lat"
          pointLng="lng"
          pointColor="color"
          pointAltitude={0.01}
          pointRadius={0.5}
          atmosphereColor="lightskyblue"
          atmosphereAltitude={0.15}
        />

      </div>
    </div>
  );
};

export default GlobalView;
