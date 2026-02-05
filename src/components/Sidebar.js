import React, { useState } from 'react';
import Dashboard from './Dashboard';

export default function Sidebar({ nodes, onSelect, currentNode, xp, streak, darkMode, french, setFrench, isStreakActiveToday }) {
  
  const [activeTab, setActiveTab] = useState('math');

  const level = Math.floor(xp / 500) + 1;
  const xpPercent = Math.min(100, (xp % 500) / 500 * 100);
  const filteredNodes = nodes.filter(node => node.category === activeTab);

  return (
    <div className="sidebar">
      <h2 style={{ color: darkMode ? '#fff' : '#3c3c3c' }}>{!french?'Knowledge Map':'Carte de connaisances'}</h2>

      {/* Tab Toggle Buttons */}
      <div style={{ 
        display: 'flex', 
        padding: '0 16px', 
        gap: '8px', 
        marginBottom: '16px' 
      }}>
        {/* MATH BUTTON */}
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
            // DYNAMIC COLORS BASED ON DARK MODE
            backgroundColor: activeTab === 'math' 
              ? '#1cb0f6' 
              : (darkMode ? '#3d3d3d' : '#f1f1f1'),
            color: activeTab === 'math' 
              ? 'white' 
              : (darkMode ? '#888' : '#afafaf'),
            transition: 'all 0.2s'
          }}
        >
		{!french?'Math':'Maths'}
        </button>

        {/* PEDAGOGY BUTTON */}
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
            // DYNAMIC COLORS BASED ON DARK MODE
            backgroundColor: activeTab === 'pedagogy' 
              ? '#1cb0f6' 
              : (darkMode ? '#3d3d3d' : '#f1f1f1'),
            color: activeTab === 'pedagogy' 
              ? 'white' 
              : (darkMode ? '#888' : '#afafaf'),
            transition: 'all 0.2s'
          }}
        >
          {!french?'Pedagogy':'Pédagogie'}
        </button>
      </div>

      <div className="tree-container">
        {filteredNodes.map(node => (
          <div
            key={node.id}
            className={`tree-node ${node.unlocked ? 'unlocked' : 'locked'} ${node.mastery >= 100 ? 'mastered' : ''} ${currentNode?.id === node.id ? 'current' : ''}`}
            onClick={() => node.unlocked && onSelect(node)}
			style = {{backgroundColor: (darkMode ? '#3d3d3d' : '#fff' )}}
          >
            <strong style={{ color: 'inherit' }}>
              {node.title} {node.mastery >= 100 ? '🌟' : (!node.unlocked && '🔒')}
			  
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
		  isStreakActiveToday={isStreakActiveToday}
          level={level}
          xpPercent={xpPercent}
          darkMode={darkMode}
		  french = {french}		  
        />
      </div>
    </div>
  );
}