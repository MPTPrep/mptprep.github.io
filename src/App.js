// Updated App.js to track both lesson XP (mastery) and overall XP (level)
// Lesson mastery must reach 100% to unlock next node, overall XP accumulates permanently

import React, { useState, useEffect } from 'react';
import { nodes as nodeData } from './data/nodes';
import Sidebar from './components/Sidebar';
import Lesson from './components/Lesson';
import Quiz from './components/Quiz';
import LessonResult from './components/LessonResult'

export default function App() {
  const [nodes, setNodes] = useState(nodeData);
  const [currentNode, setCurrentNode] = useState(null);
  const [showLesson, setShowLesson] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);

  const [lessonXp, setLessonXp] = useState(0);

  const [xp, setXp] = useState(() => Number(localStorage.getItem('mpt_xp')) || 0);
const [streak, setStreak] = useState(() => Number(localStorage.getItem('mpt_streak')) || 0);
const [lastActiveDate, setLastActiveDate] = useState(() => localStorage.getItem('mpt_last_date') || "");

// This "Watcher" saves data to the browser's memory automatically
useEffect(() => {
  localStorage.setItem('mpt_xp', xp);
  localStorage.setItem('mpt_streak', streak);
  localStorage.setItem('mpt_last_date', lastActiveDate);
}, [xp, streak, lastActiveDate]);
  
const handleWin = () => {
  // 1. Award 100 XP
  setXp(prev => prev + 100);

  // 2. Handle Streak
  const today = new Date().toLocaleDateString();
  
  if (lastActiveDate === today) {
    return; // Already did a lesson today, don't increase streak
  }

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toLocaleDateString();

  if (lastActiveDate === yesterdayStr || lastActiveDate === "") {
    setStreak(prev => prev + 1); // Yesterday was active, or first time
  } else {
    setStreak(1); // Missed a day, reset to 1
  }
  
  setLastActiveDate(today);
};
  const addOverallXp = (amount) => {
    setXp(prev => { const newXp = prev + amount; localStorage.setItem('xp', newXp); return newXp; });
  };

  const addLessonXp = (amount) => {
    setLessonXp(prev => Math.min(prev + amount, 100)); // cap at 100% mastery
  };

 const handleSelectNode = (node) => {
  if (!node.unlocked) return; // Prevent clicking locked nodes

  setCurrentNode(node);
  setShowLesson(true);   // Show the lesson text
  setShowQuiz(false);    // Hide the quiz
  setShowResult(false);  // THIS FIXES THE OVERLAP - hides the results
};
  const handleStartQuiz = () => { setShowLesson(false); setShowQuiz(true); };

// Add these to your App.js state
const [showResult, setShowResult] = useState(false);
const [lastResult, setLastResult] = useState({ success: false, before: 0, after: 0 });

const handleQuizComplete = (earnedMastery, totalQuestions, isSuccess) => {
  if (isSuccess) {
    // 1. Calculate the values manually
    const currentMastery = currentNode.mastery || 0;
    const newMastery = Math.min(100, currentMastery + earnedMastery);

    // 2. Create the updated node object
    const updatedCurrentNode = { ...currentNode, mastery: newMastery };

    // 3. Update the full nodes list
    const updatedNodes = nodes.map(n => {
      if (n.id === currentNode.id) {
        return updatedCurrentNode;
      }
      // Unlock logic for children
      if (currentNode.children?.includes(n.id) && newMastery === 100) {
        return { ...n, unlocked: true };
      }
      return n;
    });

    // 4. Update ALL states simultaneously
    setNodes(updatedNodes);
    setCurrentNode(updatedCurrentNode); // <--- THIS FIXES THE SIDEBAR
    setLastResult({ 
      success: true, 
      before: currentMastery, 
      after: newMastery 
    });

    localStorage.setItem('mpt_progress', JSON.stringify(updatedNodes));
  } else {
    setLastResult({ 
      success: false, 
      before: currentNode.mastery, 
      after: currentNode.mastery 
    });
  }

  setShowQuiz(false);
  setShowResult(true);
};

// Button handlers
const handleReplay = () => {
  setShowResult(false);
  setShowQuiz(true); // Jumps straight back into the 5 random questions
};

const handleContinue = () => {
  // 1. Find the ID of the child (next lesson)
  const nextNodeId = currentNode.children?.[0]; 
  
  // 2. Find that actual node object in your list
  const nextNode = nodes.find(n => n.id === nextNodeId);

  if (nextNode && nextNode.unlocked) {
    // If it exists and is unlocked, go to it
    handleSelectNode(nextNode); 
  } else {
    // If there is no next lesson, just go back to the main map
    setShowResult(false);
    setCurrentNode(null);
  }
};
const currentLevel = Math.floor(xp / 500) + 1;
const xpProgress = ((xp % 500) / 500) * 100;

  return (
  <div style={{ display: 'flex', minHeight: '100vh' }}>
    <Sidebar 
      nodes={nodes} 
      onSelect={handleSelectNode} 
      currentNode={currentNode} 
      xp={xp} 
      streak={streak} 
      lessonXp={lessonXp} 
    />
    <div style={{ flex: 1, padding: '24px' }}>
  <h1 style={{ fontSize: '2rem', marginBottom: '16px' }}>MPT Prep</h1>

  {/* PRIORITY 1: Result Screen */}
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
    /* PRIORITY 2: Quiz or Lesson (Only show if not showing result) */
    <>
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
        /* PRIORITY 3: Welcome Message */
        <div className="welcome-area">
          <p>Select a node from the sidebar to start a lesson.</p>
        </div>
      )}
    </>
  )}
</div>
  </div>
);
  
}
