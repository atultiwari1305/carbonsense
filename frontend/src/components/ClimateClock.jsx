import React, { useEffect, useState } from "react";
import "./ClimateClock.css";

const ClimateClock = () => {
  const [deadline, setDeadline] = useState(null);
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const fetchDeadline = async () => {
      try {
        const response = await fetch("https://api.climateclock.world/v1/clock");
        const data = await response.json();

        // ✅ CORRECT TIMESTAMP
        const timestamp = data.data.modules.carbon_deadline_1.timestamp;
        const targetDate = new Date(timestamp);

        setDeadline(targetDate);
      } catch (err) {
        console.error("Climate Clock API error:", err);
      }
    };

    fetchDeadline();
  }, []);

  useEffect(() => {
    if (!deadline) return;

    const interval = setInterval(() => {
      const now = new Date();
      const diff = deadline - now;

      if (diff <= 0) {
        setTimeLeft("Time's up!");
        clearInterval(interval);
        return;
      }

      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
      const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ years, days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [deadline]);

  if (!timeLeft) {
    return (
      <div className="climate-clock-wrapper">
        <span className="clock-loading">Loading...</span>
      </div>
    );
  }

  return (
    <div className="climate-clock-wrapper">
      <div className="clock-row">Climate Deadline</div>

      <div className="clock-time">
        <div className="clock-block">{timeLeft.years}<span>Y</span></div>
        <div className="clock-block">{timeLeft.days}<span>D</span></div>
        <div className="clock-block">{timeLeft.hours}<span>H</span></div>
        <div className="clock-block">{timeLeft.minutes}<span>M</span></div>
        <div className="clock-block">{timeLeft.seconds}<span>S</span></div>
      </div>
    </div>
  );
};

export default ClimateClock;