import React, { useState } from 'react'; 
import Sidebar from './Sidebar';
import Lesson from './Lesson';
import Quiz from './Quiz';
import LessonResult from './LessonResult';
import PathComplete from './PathComplete';
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
  
  
  const [forceTrophy, setForceTrophy] = useState(false);

  const isPathMastered = nodes.length > 0 && nodes.every(n => n.mastery >= 100);
  const isFocusMode = showLesson || showQuiz || showResult;

  
  const handleTrophyToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Trophy Clicked! Previous State:", forceTrophy);
    setForceTrophy(!forceTrophy);
  };

  return (
    <div style={{ 
      display: 'flex', 
      height: '100vh', 
      width: '100vw', 
      backgroundColor: darkMode ? '#1a1a1a' : '#fff',
      color: darkMode ? '#fff' : '#000',
      overflow: 'hidden',
      position: 'fixed',
      top: 0, left: 0
    }}>
      
      {/* 1. SIDEBAR */}
      <div style={{ 
        width: isSidebarOpen ? '300px' : '0px', 
        flexShrink: 0,
        transition: 'width 0.3s ease',
        borderRight: `1px solid ${darkMode ? '#333' : '#eee'}`,
        zIndex: 100,
        backgroundColor: darkMode ? '#1a1a1a' : '#fff',
        overflow: 'hidden'
      }}>
        <Sidebar 
          nodes={nodes} 
          onSelect={(node) => {
            setForceTrophy(false); 
            handleSelectNode(node);
          }} 
          currentNode={currentNode} 
          xp={xp} 
          streak={streak} 
          darkMode={darkMode}
        />
      </div>

      {/* 2. MAIN WORKSPACE */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, position: 'relative' }}>
        
        {/* HEADER BAR */}
        <header style={{ 
          height: '70px',
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          padding: '0 30px', 
          borderBottom: `1px solid ${darkMode ? '#333' : '#eee'}`,
          backgroundColor: darkMode ? '#1a1a1a' : '#fff',
          zIndex: 1000, 
          position: 'relative',
          pointerEvents: 'auto'
        }}>
          <h2 style={{ margin: 0, fontSize: '1.2rem' }}>MPT Prep</h2>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* THE TROPHY TOGGLE */}
            {isPathMastered && (
              <button 
                type="button"
                onClick={handleTrophyToggle}
                style={{ 
                  fontSize: '2rem', background: 'none', border: 'none', cursor: 'pointer',
                  padding: '5px', borderRadius: '50%',
                  filter: forceTrophy ? 'none' : 'grayscale(1)',
                  transition: 'transform 0.2s',
                  outline: 'none'
                }}
              >
                🏆
              </button>
            )}

            <button onClick={onBackHome} style={headerBtnStyle(darkMode)}>Home</button>
            <button onClick={() => auth.signOut()} style={headerBtnStyle(darkMode)}>Logout</button>
            
            <div style={{ position: 'relative' }}>
              <div style={avatarStyle} onClick={() => setShowAccountMenu(!showAccountMenu)}>
                {user?.email?.charAt(0).toUpperCase()}
              </div>
              {showAccountMenu && (
                <div style={dropdownStyle(darkMode)}>
                  <div style={{ padding: '8px', fontSize: '0.75rem', opacity: 0.5 }}>{user?.email}</div>
                  <div onClick={() => setDarkMode(!darkMode)} style={{ padding: '10px', cursor: 'pointer' }}>
                    {darkMode ? '☀️ Light' : '🌙 Dark'}
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* SIDEBAR TOGGLE BUTTON */}
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          style={{
            position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)',
            zIndex: 1100, width: '25px', height: '50px', backgroundColor: '#1cb0f6',
            color: 'white', border: 'none', borderRadius: '0 8px 8px 0', cursor: 'pointer'
          }}
        >
          {isSidebarOpen ? '‹' : '›'}
        </button>

        {/* MAIN SCROLLABLE CONTENT */}
        <main style={{ flex: 1, overflowY: 'auto', padding: '40px 20px', zIndex: 1 }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            
            {/* VIEW SELECTOR LOGIC */}
            {(() => {
              if (isFocusMode) {
                if (showResult) return <LessonResult success={lastResult.success} lessonXpBefore={lastResult.before} lessonXpAfter={lastResult.after} onReplay={handleReplay} onContinue={handleContinue} />;
                if (showQuiz) return <Quiz node={currentNode} onComplete={handleQuizComplete} addXp={addOverallXp} onWin={handleWin} />;
                return <Lesson node={currentNode} onNext={handleStartQuiz} />;
              }
              
              if (forceTrophy) {
                
                return (
                  <PathComplete 
                    totalXp={xp} 
                    streak={streak} 
                    darkMode={darkMode} 
                    onReview={() => setForceTrophy(false)} 
					user={user}
                  />
                );
              }

              
              return (
                <div style={{ textAlign: 'center', marginTop: '40px' }}>
                  {currentNode ? (
                    <div style={{ 
                      padding: '40px', borderRadius: '24px', 
                      backgroundColor: darkMode ? '#222' : '#fcfcfc',
                      border: `1px solid ${darkMode ? '#333' : '#eee'}`,
                      boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
                    }}>
                      <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{currentNode.title}</h2>
                      <p style={{ color: '#888', marginBottom: '30px' }}>Mastery: {currentNode.mastery}%</p>
                      <button className="option primary-button" style={{ width: '250px' }} onClick={handleStartQuiz}>
                        Review Module
                      </button>
                    </div>
                  ) : (
                    <div style={{ opacity: 0.3, marginTop: '100px' }}>
                      <div style={{ fontSize: '5rem', marginBottom: '20px' }}></div>
                      <h2>Pick a topic from the sidebar to begin</h2>
					  <h3>Your progress is saved automatically</h3>
                    </div>
                  )}
                </div>
              );
            })()}
          </div>
        </main>
      </div>
    </div>
  );
}

const headerBtnStyle = (darkMode) => ({
  padding: '8px 16px', borderRadius: '12px', cursor: 'pointer',
  border: `1px solid ${darkMode ? '#444' : '#ddd'}`,
  backgroundColor: darkMode ? '#2c2c2c' : '#fff', 
  color: darkMode ? '#fff' : '#444', 
  fontWeight: '600', fontSize: '0.85rem'
});

const avatarStyle = {
  width: '38px', height: '38px', borderRadius: '50%', backgroundColor: '#1cb0f6',
  display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', cursor: 'pointer'
};

const dropdownStyle = (darkMode) => ({
  position: 'absolute', top: '50px', right: '0', width: '180px',
  backgroundColor: darkMode ? '#222' : '#fff', border: `1px solid ${darkMode ? '#444' : '#ddd'}`,
  borderRadius: '10px', zIndex: 10001, padding: '5px', boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
});