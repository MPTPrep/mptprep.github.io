import React, { useState } from 'react';
import Dashboard from './Dashboard';

export default function Sidebar({ nodes, onSelect, currentNode, xp, streak }) {
  // 1. Add state to track which tab is active
  const [activeTab, setActiveTab] = useState('math');

  const level = Math.floor(xp / 500) + 1;
  const xpPercent = Math.min(100, (xp % 500) / 500 * 100);

  // 2. Filter nodes based on the active tab
  // (Make sure your nodes in nodes.js have category: 'math' or category: 'pedagogy')
  const filteredNodes = nodes.filter(node => node.category === activeTab);

  return (
    <div className="sidebar">
      <h2>Knowledge Map</h2>

      {/* 3. The Tab Toggle Buttons */}
      <div style={{ 
        display: 'flex', 
        padding: '0 16px', 
        gap: '8px', 
        marginBottom: '16px' 
      }}>
        <button 
          onClick={() => setActiveTab('math')}
          style={{
            flex: 1,
            padding: '10px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'Montserrat',
            fontWeight: 'bold',
            backgroundColor: activeTab === 'math' ? '#1cb0f6' : '#f1f1f1',
            color: activeTab === 'math' ? 'white' : '#afafaf',
            transition: 'all 0.2s'
          }}
        >
          Math
        </button>
        <button 
          onClick={() => setActiveTab('pedagogy')}
          style={{
            flex: 1,
            padding: '10px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'Montserrat',
            fontWeight: 'bold',
            backgroundColor: activeTab === 'pedagogy' ? '#1cb0f6' : '#f1f1f1',
            color: activeTab === 'pedagogy' ? 'white' : '#afafaf',
            transition: 'all 0.2s'
          }}
        >
          Pedagogy
        </button>
      </div>

      <div className="tree-container">
        {filteredNodes.map(node => (
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