import React, { useState, useEffect } from 'react';

const shuffleArray = (arr) =>
  [...arr]
    .map(v => ({ v, r: Math.random() }))
    .sort((a, b) => a.r - b.r)
    .map(o => o.v);

export default function Quiz({ node, onComplete, addXp, addLessonXp }) {
  // 1. Shuffle and pick only 5 questions at the start
  const [remaining, setRemaining] = useState(() => {
    const shuffled = shuffleArray(node.questions);
    return shuffled.slice(0, 5); 
  });
  
  const totalQuestions = 5; // Hardcoded to 5 as per your requirement
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
      addXp(5);

      const newRemaining = remaining.filter(q => q !== current);
      setTimeout(() => {
        if (newRemaining.length === 0) {
          // Mastery logic: 33% base, reduced by 5% for every lost heart
          const penalty = (3 - hearts) * 5;
          const earnedMastery = Math.max(0, 34 - penalty);
          //addLessonXp(earnedMastery);
          onComplete(earnedMastery, totalQuestions, true);
          return;
        }
        setRemaining(newRemaining);
        setCurrent(newRemaining[0]);
        resetTurn();
      }, 700);
    } else {
      setFeedback('wrong');
      setHearts(h => h - 1);

      setTimeout(() => {
        if (hearts - 1 <= 0) {
          onComplete(0, totalQuestions, false);
          return;
        }
        // If they get it wrong, we reshuffle the remaining pool
        // but keep the current question in it so they have to try again
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

  // Calculate progress based on the 5-question limit
  const progressPercent = Math.round(((totalQuestions - remaining.length) / totalQuestions) * 100);

  // Fallback for empty state
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

      <h2>{current.question}</h2>

      <div className="options">
        {shuffledOptions.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleAnswer(opt)}
            className={`option
              ${selected === opt && feedback === 'correct' ? 'correct' : ''}
              ${selected === opt && feedback === 'wrong' ? 'wrong' : ''}`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}