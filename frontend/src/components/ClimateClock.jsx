import React, { useEffect } from 'react';
import './ClimateClock.css';

const ClimateClock = () => {
  useEffect(() => {
    // Load Climate Clock widget script
    const script = document.createElement('script');
    script.src = 'https://climateclock.world/widget-v2.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="climate-clock-wrapper">
      <climate-clock />
    </div>
  );
};

export default ClimateClock;
