import React from 'react';

export default function Lesson({ node, onNext }) {
  return (
    <div className="quiz-container">
      <h1 className="lesson-title">{node.title}</h1>
      <div className="lesson-content-body">
        <p>{node.lesson}</p>
      </div>
      <div className="options" style={{ display: 'block' }}>
        <button onClick={onNext} className="option primary-button">
          Start Quiz
        </button>
      </div>
    </div>
  );
}