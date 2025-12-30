import React from 'react';
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
  onBackHome // <--- Added this prop for navigation
}) {
	
  
  return (
    <div className="app-container" style={{ display: 'flex', minHeight: '100vh', width: '100vw', backgroundColor: darkMode ? '#1a1a1a' : '#fff' }}>
      
      {/* 1. Sidebar */}
      <div style={{ width: '300px', flexShrink: 0 }}>
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
        padding: '40px 60px' 
      }}>
        <div style={{ maxWidth: '900px' }}> 
          
          {/* Header Bar: Title on Left, Controls on Right */}
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
              MPT Prep Duolingo
            </h1>

         
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              
              {/* --- NEW HOME BUTTON (Same style as Logout) --- */}
              <button 
                onClick={onBackHome}
                style={{ 
                  padding: '8px 16px',
                  borderRadius: '12px',
                  border: '1px solid #e5e5e5',
                  backgroundColor: darkMode ? '#2c2c2c' : '#fff',
                  cursor: 'pointer',
                  fontFamily: 'Montserrat',
                  fontWeight: '600',
                  fontSize: '0.85rem',
                  color: darkMode ? '#fff' : '#777',
                  transition: '0.2s'
                }}
              >
                Home
              </button>

              <button 
                onClick={() => auth.signOut()} 
                style={{ 
                  padding: '8px 16px',
                  borderRadius: '12px',
                  border: '1px solid #e5e5e5',
                  backgroundColor: darkMode ? '#2c2c2c' : '#fff',
                  cursor: 'pointer',
                  fontFamily: 'Montserrat',
                  fontWeight: '600',
                  fontSize: '0.85rem',
                  color: darkMode ? '#fff' : '#777',
                  transition: '0.2s'
                }}
              >
                Logout
              </button>

              <div style={{ position: 'relative' }}>
                <div 
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowAccountMenu(!showAccountMenu);
                  }}
                  style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
                >
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '50%',
                    backgroundColor: '#1cb0f6', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', color: 'white', fontWeight: 'bold',
                    fontFamily: 'Montserrat', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}>
                    {user?.email?.charAt(0).toUpperCase()}
                  </div>
                </div>

                {/* Dropdown Menu */}
                {showAccountMenu && (
                  <div style={{
                    position: 'absolute', top: '50px', right: '0', width: '220px',
                    backgroundColor: darkMode ? '#2c2c2c' : '#fff',
                    border: '1px solid #e5e5e5', borderRadius: '12px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)', zIndex: 1000,
                    padding: '10px', fontFamily: 'Montserrat',
                    color: darkMode ? '#fff' : '#000'
                  }}>
                    <div style={{ padding: '10px', fontSize: '0.8rem', color: '#888', borderBottom: '1px solid #eee' }}>
                      {user?.email}
                    </div>
                    
                    <div 
                      onClick={() => setDarkMode(!darkMode)}
                      style={{ padding: '12px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem' }}
                    >
                      <span>Dark Mode</span>
                      <span>{darkMode ? '🌙' : '☀️'}</span>
                    </div>

                    <div style={{ padding: '12px', opacity: 0.6, fontSize: '0.9rem', display: 'flex', justifyContent: 'space-between' }}>
                      <span>Language</span>
                      <span style={{ fontSize: '0.7rem', backgroundColor: '#eee', padding: '2px 6px', borderRadius: '4px', color: '#000' }}>EN (FR soon)</span>
                    </div>

                    <div 
                      onClick={() => auth.signOut()}
                      style={{ padding: '12px', cursor: 'pointer', color: '#ff4b4b', fontWeight: '600', borderTop: '1px solid #eee', marginTop: '5px', fontSize: '0.9rem' }}
                    >
                      Logout
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* App Content (Result, Quiz, or Lesson) */}
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
                <Quiz 
                  node={currentNode} 
                  onComplete={handleQuizComplete} 
                  addXp={addOverallXp} 
                  onWin={handleWin}
                />
              ) : currentNode && showLesson ? (
                <Lesson node={currentNode} onNext={handleStartQuiz} />
              ) : (
                <div style={{ marginTop: '100px', color: '#afafaf' }}>
                  <h3>Select a module to begin</h3>
                  <p>Your progress is automatically saved to your account.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}