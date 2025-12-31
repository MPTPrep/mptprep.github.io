import React, { useState } from 'react'; 
import Sidebar from './Sidebar';
import Lesson from './Lesson';
import Quiz from './Quiz';
import LessonResult from './LessonResult';
import { auth } from '../firebase'; 

export default function LearningPath({ 
  nodes, 
  currentNode, 
  handleSelectNode, 
  showLesson, 
  showQuiz, 
  showResult, 
  lastResult,
  handleStartQuiz,
  handleQuizComplete,
  handleReplay,
  handleContinue,
  addOverallXp,
  handleWin,
  xp,
  lessonXp,
  streak,
  darkMode,
  setDarkMode,
  user,
  showAccountMenu,
  setShowAccountMenu,
  onBackHome
}) {
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  
  const isFocusMode = showLesson || showQuiz || showResult;

  return (
    <div className={`app-container ${isSidebarOpen ? 'sidebar-expanded' : 'sidebar-collapsed'}`} 
         style={{ display: 'flex', minHeight: '100vh', width: '100vw', backgroundColor: darkMode ? '#1a1a1a' : '#fff', position: 'relative' }}>
      
      {/* --- Toggle Button --- */}
      <button 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="sidebar-toggle"
        style={{
          position: 'fixed',
          left: isSidebarOpen ? '300px' : '0px', 
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 2000,
          width: '30px',
          height: '60px',
          backgroundColor: '#1cb0f6',
          color: 'white',
          border: 'none',
          borderRadius: '0 8px 8px 0',
          cursor: 'pointer',
          transition: 'left 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.2rem',
          boxShadow: '2px 0 5px rgba(0,0,0,0.1)'
        }}
      >
        {isSidebarOpen ? '‹' : '›'}
      </button>

      {/* 1. Sidebar Container */}
      <div className="sidebar-wrapper" style={{ 
        width: '300px', 
        flexShrink: 0,
        transition: 'margin-left 0.3s ease',
        marginLeft: isSidebarOpen ? '0' : '-300px' 
      }}>
        <Sidebar 
          nodes={nodes} 
          onSelect={handleSelectNode} 
          currentNode={currentNode} 
          xp={xp} 
          streak={streak} 
          lessonXp={lessonXp} 
        />
      </div>

      {/* 2. Main Content Area */}
      <div style={{ 
        flex: 1, 
        height: '100vh', 
        overflowY: 'auto', 
        padding: '40px 60px',
        transition: 'padding 0.3s ease'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}> 
          
          {/* Header Bar */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            marginBottom: '40px' 
          }}>
            <h1 style={{ 
              fontSize: '1.8rem', 
              margin: 0, 
              fontFamily: 'Montserrat', 
              color: darkMode ? '#fff' : '#3c3c3c' 
            }}>
              MPT Prep
            </h1>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <button onClick={onBackHome} style={headerButtonStyle(darkMode)}>Home</button>
              <button onClick={() => auth.signOut()} style={headerButtonStyle(darkMode)}>Logout</button>

              {/* Account Menu Logic remains exactly the same... */}
              <div style={{ position: 'relative' }}>
                <div onClick={(e) => { e.stopPropagation(); setShowAccountMenu(!showAccountMenu); }} style={{ cursor: 'pointer' }}>
                  <div style={avatarStyle}>{user?.email?.charAt(0).toUpperCase()}</div>
                </div>
                {showAccountMenu && (
                  <div className="account-dropdown" style={dropdownStyle(darkMode)}>
                    <div style={{ padding: '10px', fontSize: '0.8rem', color: '#888', borderBottom: '1px solid #eee' }}>{user?.email}</div>
                    <div onClick={() => setDarkMode(!darkMode)} style={dropdownItemStyle}>
                      <span>Dark Mode</span> <span>{darkMode ? '🌙' : '☀️'}</span>
                    </div>
                    <div onClick={() => auth.signOut()} style={{ ...dropdownItemStyle, color: '#ff4b4b', fontWeight: '600', borderTop: '1px solid #eee' }}>Logout</div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Content area logic remains same... */}
          {showResult ? (
            <LessonResult 
              success={lastResult.success}
              lessonXpBefore={lastResult.before}
              lessonXpAfter={lastResult.after}
              isNextLocked={lastResult.after < 100}
              onReplay={handleReplay}
              onContinue={handleContinue}
            />
          ) : (
            <div className="content-area">
              {currentNode && showQuiz ? (
                <Quiz node={currentNode} onComplete={handleQuizComplete} addXp={addOverallXp} onWin={handleWin} />
              ) : currentNode && showLesson ? (
                <Lesson node={currentNode} onNext={handleStartQuiz} />
              ) : (
                <div style={{ marginTop: '100px', color: '#afafaf', textAlign: 'center' }}>
                  <h3>Select a module to begin</h3>
                  <p>Your progress is saved automatically.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Helper Styles to keep the JSX clean
const headerButtonStyle = (darkMode) => ({
  padding: '8px 16px', borderRadius: '12px', border: '1px solid #e5e5e5',
  backgroundColor: darkMode ? '#2c2c2c' : '#fff', cursor: 'pointer',
  fontFamily: 'Montserrat', fontWeight: '600', fontSize: '0.85rem',
  color: darkMode ? '#fff' : '#777'
});

const avatarStyle = {
  width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#1cb0f6',
  display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white',
  fontWeight: 'bold', fontFamily: 'Montserrat', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
};

const dropdownStyle = (darkMode) => ({
  position: 'absolute', top: '50px', right: '0', width: '220px',
  backgroundColor: darkMode ? '#2c2c2c' : '#fff', border: '1px solid #e5e5e5',
  borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', zIndex: 1000,
  padding: '10px', color: darkMode ? '#fff' : '#000'
});

const dropdownItemStyle = { padding: '12px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem' };