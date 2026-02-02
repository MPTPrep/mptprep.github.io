import React from 'react';

export default function Dashboard({ streak, level, xpPercent,french }) {
  return (
    <div className="dashboard-container">
      <div className="level-bar-container">
        <div className="level-circle">{level}</div>
        <div className="xp-bar">
          <div className="xp-fill" style={{ width: `${xpPercent}%` }}></div>
        </div>
      </div>
      <p className="streak-display">{!french?`🔥 ${streak} day streak`:`🔥 Série de ${streak} jour`+(streak != 1 ?'s':'')} </p>
    </div>
  );
}
