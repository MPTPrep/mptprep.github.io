import React, { useState, useEffect } from 'react';

import 'katex/dist/katex.min.css';

import Latex from 'react-latex-next';

const shuffleArray = (arr) =>
  [...arr]
    .map(v => ({ v, r: Math.random() }))
    .sort((a, b) => a.r - b.r)
    .map(o => o.v);

const audio = {
  correct: new Audio('/audio/correct_chime.mp3'),
  wrong: new Audio('/audio/incorrect_chime.mp3'),
  win: new Audio('/audio/level_success.mp3'),
  lose: new Audio('/audio/level_failure.mp3')
};

Object.values(audio).forEach(s => {
  s.load(); 
  s.volume = 0.5; 
});


export default function Quiz({ node, onComplete, addXp, addLessonXp, onWin }) {
  useEffect(() => {
  const renderMath = () => {
    if (window.renderMathInElement) {
      window.renderMathInElement(document.body, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false },
          { left: '\\(', right: '\\)', display: false },
          { left: '\\[', right: '\\]', display: true }
        ],
        throwOnError: false,
      });
    }
  };

  
  renderMath();
  
  
  const timer = setTimeout(renderMath, 100);
  return () => clearTimeout(timer);
}, [node]);
	
  // 1. Shuffle and pick only 5 questions at the start
  const [remaining, setRemaining] = useState(() => {
    const shuffled = shuffleArray(node.questions);
    return shuffled.slice(0, 5); 
  });
  
  const handleFirstInteraction = () => {
  const context = new (window.AudioContext || window.webkitAudioContext)();
  if (context.state === 'suspended') {
    context.resume();
  }
  
  
  Object.values(audio).forEach(s => {
    s.muted = true;
    s.play().then(() => {
      s.pause();
      s.currentTime = 0;
      s.muted = false; 
    });
  });
};

  const playSound = (type) => {
    const s = audio[type];
    if (s) {
      s.currentTime = 0; 
      s.play().catch(() => {
      });
    }
  };
  
  const totalQuestions = 5; 
  const [current, setCurrent] = useState(remaining[0]);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [hearts, setHearts] = useState(3);
  

  useEffect(() => {
    if (current) {
      setShuffledOptions(shuffleArray(current.options));
    }
  }, [current]);

  const handleAnswer = (option) => {
    if (selected) return;
    setSelected(option);
    const isCorrect = option === current.answer;

    if (isCorrect) {
      setFeedback('correct');
	  playSound("correct");
      addXp(5);

      const newRemaining = remaining.filter(q => q !== current);
      setTimeout(() => {
        if (newRemaining.length === 0) {
          // Mastery logic: 33% base, reduced by 5% for every lost heart
          const penalty = (3 - hearts) * 5;
          const earnedMastery = Math.max(0, 34 - penalty);
          
          onComplete(earnedMastery, totalQuestions, true);
		  onWin();
		  playSound("win");
          return;
        }
        setRemaining(newRemaining);
        setCurrent(newRemaining[0]);
        resetTurn();
      }, 700);
    } else {
      setFeedback('wrong');
	  playSound("wrong");
      setHearts(h => h - 1);

      setTimeout(() => {
        if (hearts - 1 <= 0) {
		  playSound("lose");
          onComplete(0, totalQuestions, false);
          return;
        }
        const reshuffled = shuffleArray(remaining);
        setRemaining(reshuffled);
        setCurrent(reshuffled[0]);
        resetTurn();
      }, 700);
    }
  };

  const resetTurn = () => {
    setSelected(null);
    setFeedback(null);
  };

  
  const progressPercent = Math.round(((totalQuestions - remaining.length) / totalQuestions) * 100);

  
  if (!current) return null;

  return (
    <div className="quiz-container">
      <div className="lesson-progress-container">
        <div className="lesson-progress-header">
          <p className="progress-text">
            Question {totalQuestions - remaining.length + 1} of {totalQuestions}
          </p>
          <div className="hearts">
            {'❤️'.repeat(hearts)}
          </div>
        </div>
        <div className="lesson-progress">
          <div className="lesson-progress-bar" style={{ width: `${progressPercent}%` }} />
        </div>
      </div>

      <h2><Latex>{current.question}</Latex></h2>

      <div className="options">
        {shuffledOptions.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleAnswer(opt)}
            className={`option
              ${selected === opt && feedback === 'correct' ? 'correct' : ''}
              ${selected === opt && feedback === 'wrong' ? 'wrong' : ''}`}
          >
            <Latex>{opt}</Latex>
          </button>
        ))}
      </div>
    </div>
  );
}