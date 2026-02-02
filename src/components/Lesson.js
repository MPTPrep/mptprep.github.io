import React from 'react';

export default function Lesson({ node, onNext,darkMode,french }) {
  return (
    <div className="quiz-container" style={{backgroundColor: darkMode ? '#3c3c3c' : '#fff'}}>
      <h1 className="lesson-title" style={{color: darkMode ? '#fff' : '#000'}}>{node.title}</h1>
      <div className="lesson-content-body" style={{color: darkMode ? '#fff' : '#000'}}>
        <p>{node.lesson}</p>
      </div>
      <div className="options" style={{ display: 'block' }}>
        <button onClick={onNext} className="option primary-button">
			{!french?'Start Quiz':'Commencer le quiz'}
        </button>
      </div>
    </div>
  );
}