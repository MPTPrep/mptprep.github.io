import React from 'react';

export default function Dashboard({ streak, level, xpPercent }) {
  return (
    <div className="dashboard-container">
      <div className="level-bar-container">
        <div className="level-circle">{level}</div>
        <div className="xp-bar">
          <div className="xp-fill" style={{ width: `${xpPercent}%` }}></div>
        </div>
      </div>
      <p className="streak-display">🔥 Streak: {streak} day{streak !== 1 ? 's' : ''}</p>
    </div>
  );
}
