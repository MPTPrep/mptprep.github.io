import React from 'react';
import Dashboard from './Dashboard';

export default function Sidebar({ nodes, onSelect, currentNode, xp, streak }) {
  const level = Math.floor(xp / 500) + 1;
  const xpPercent = Math.min(100, (xp % 500) / 500 * 100);

  return (
    <div className="sidebar">
      <h2>Knowledge Map</h2>

      <div className="tree-container">
        {nodes.map(node => (
          <div
            key={node.id}
            className={`tree-node ${node.unlocked ? 'unlocked' : 'locked'} ${currentNode?.id === node.id ? 'current' : ''}`}
            onClick={() => node.unlocked && onSelect(node)}
          >
            <strong>
              {node.title} {!node.unlocked && '🔒'}
            </strong>

            <div className="mastery-bar">
              <div
                className="mastery-bar-fill"
                style={{ width: `${node.mastery}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="sidebar-dashboard">
        <Dashboard
          streak={streak}
          level={level}
          xpPercent={xpPercent}
        />
      </div>
    </div>
  );
}
