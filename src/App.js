// Updated App.js to track both lesson XP (mastery) and overall XP (level)
// Lesson mastery must reach 100% to unlock next node, overall XP accumulates permanently

import React, { useState, useEffect } from 'react';
import { nodes as nodeData } from './data/nodes';
import Sidebar from './components/Sidebar';
import Lesson from './components/Lesson';
import Quiz from './components/Quiz';

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

  const handleSelectNode = (node) => { setCurrentNode(node); setShowLesson(true); setShowQuiz(false); setLessonXp(0); };
  const handleStartQuiz = () => { setShowLesson(false); setShowQuiz(true); };

  // App.js
const handleQuizComplete = (earnedMastery, totalQuestions, isSuccess) => {
  let reachedFullMastery = false;

  const updatedNodes = nodes.map(n => {
    if (n.id === currentNode.id) {
      // Add the new mastery to existing mastery, maxing at 100
      const newMastery = Math.min(100, (n.mastery || 0) + earnedMastery);
      if (newMastery === 100) reachedFullMastery = true;
      return { ...n, mastery: newMastery };
    }
    return n;
  });

  // Only unlock children if this specific node just hit 100%
  const finalNodes = updatedNodes.map(n => {
    if (currentNode.children.includes(n.id) && reachedFullMastery) {
      return { ...n, unlocked: true };
    }
    return n;
  });

  setNodes(finalNodes);
  
  // Logic to show LessonResult.js should go here 
  // For now, we reset the view:
  setShowQuiz(false);
  setCurrentNode(null);
};
	
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar nodes={nodes} onSelect={handleSelectNode} currentNode={currentNode} xp={overallXp} streak={streak} lessonXp={lessonXp} />
      <div style={{ flex: 1, padding: '24px' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '16px' }}>MPT Duolingo-Style Prototype</h1>
        {currentNode && showLesson && <Lesson node={currentNode} onNext={handleStartQuiz} />}
        {currentNode && showQuiz && <Quiz node={currentNode} onComplete={handleQuizComplete} addXp={addOverallXp} addLessonXp={addLessonXp} />}
        {!currentNode && <p>Select a node from the sidebar to start a lesson.</p>}
      </div>
    </div>
  );
}
