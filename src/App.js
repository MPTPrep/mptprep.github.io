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
  const [overallXp, setOverallXp] = useState(parseInt(localStorage.getItem('overallXp') || '0'));
  const [lessonXp, setLessonXp] = useState(0);
  const [streak, setStreak] = useState(parseInt(localStorage.getItem('streak') || '0'));
  const [lastActive, setLastActive] = useState(localStorage.getItem('lastActive'));

  useEffect(() => {
    const today = new Date().toDateString();
    if (lastActive !== today) {
      if (lastActive === new Date(Date.now() - 86400000).toDateString()) {
        setStreak(prev => { localStorage.setItem('streak', prev + 1); return prev + 1; });
      } else {
        setStreak(1); localStorage.setItem('streak', 1);
      }
      setLastActive(today); localStorage.setItem('lastActive', today);
    }
  }, []);
  

  const addOverallXp = (amount) => {
    setOverallXp(prev => { const newXp = prev + amount; localStorage.setItem('overallXp', newXp); return newXp; });
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
  return (
  <div style={{ display: 'flex', minHeight: '100vh' }}>
    <Sidebar 
      nodes={nodes} 
      onSelect={handleSelectNode} 
      currentNode={currentNode} 
      xp={overallXp} 
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
