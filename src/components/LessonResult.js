import React, { useEffect, useState } from 'react';

export default function LessonResult({ 
  success, 
  lessonXpBefore, 
  lessonXpAfter, 
  onReplay, 
  onContinue,
  isNextLocked, 
  darkMode
}) {
  const [lessonFill, setLessonFill] = useState(lessonXpBefore);

  useEffect(() => {
  
  setLessonFill(lessonXpBefore); 
  const timer = setTimeout(() => setLessonFill(lessonXpAfter), 100);
  return () => clearTimeout(timer);
}, [lessonXpAfter, lessonXpBefore]); 
  return (
    <div className="quiz-container result-container" style = {{backgroundColor: darkMode?  '#3c3c3c' : '#fff'}}>
      <div className="result-emoji">{success ? '🎉' : '💔'}</div>
      <h2 className="result-title">{success ? 'Lesson Complete!' : 'Out of Hearts'}</h2>
      
      {success && (
        <div className="result-stats">
          <p className="progress-text" style = {{color: darkMode?  '#fff' : '#555'}}>Lesson Mastery: {lessonXpAfter}%</p>
          <div className="lesson-progress large-bar">
            <div 
              className="lesson-progress-bar mastery-fill" 
              style={{ width: `${lessonFill}%` }}
            ></div>
          </div>
          {lessonXpAfter >= 100 && <p className="unlock-msg">🌟 Topic Mastered!</p>}
        </div>
      )}
      
      {!success && <p className="feedback-text">Don't give up! Review the material and try again.</p>}
      
      <div className="result-buttons">
        <button onClick={onReplay} className="option replay-button" style = {{backgroundColor: darkMode?  '#3c3c3c' : '#fff'}}>
          Play Again
        </button>
        
        <button 
          onClick={onContinue} 
          className={`option primary-button ${isNextLocked ? 'button-locked' : ''}`}
          disabled={isNextLocked}
        >
          {isNextLocked ? '🔒 Mastery Needed' : 'Continue to Next'}
        </button>
      </div>
    </div>
  );
}