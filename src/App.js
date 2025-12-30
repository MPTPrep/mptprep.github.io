import React, { useState, useEffect } from 'react';
import { nodes as nodeData } from './data/nodes'; // We are using 'nodeData'
import Sidebar from './components/Sidebar';
import Lesson from './components/Lesson';
import Quiz from './components/Quiz';
import LessonResult from './components/LessonResult'
import { auth, db } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import Login from './components/Login';
import LandingPage from './components/LandingPage';
import LearningPath from './components/LearningPath';

export default function App() {
  // --- 1. ALL HOOKS MUST BE AT THE TOP ---
  const [nodes, setNodes] = useState(nodeData);
  const [currentNode, setCurrentNode] = useState(null);
  const [showLesson, setShowLesson] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showResult, setShowResult] = useState(false); // Moved up
  const [lastResult, setLastResult] = useState({ success: false, before: 0, after: 0 }); // Moved up
  const [lessonXp, setLessonXp] = useState(0);
  const [lastActiveDate, setLastActiveDate] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [xp, setXp] = useState(0);
  const [streak, setStreak] = useState(0);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [view, setView] = useState('landing'); // 'landing', 'learning-path', 'practice-tests', 'test-info'
  
  
  // --- 2. EFFECTS ---
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (u) => {
    // Check if user exists AND if they have verified their email
    if (u && u.emailVerified) {
      setUser(u);
      loadUserData(u.uid);
    } else {
      // If they exist but aren't verified, we sign them out 
      // so the app stays on the Login screen
      if (u && !u.emailVerified) {
        auth.signOut(); 
      }
      setUser(null);
      setLoading(false);
    }
  });
  return () => unsubscribe();
}, []);

  // --- 3. FUNCTIONS ---
  const loadUserData = async (uid) => {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      setXp(data.xp || 0);
      setStreak(data.streak || 0);
      setLastActiveDate(data.lastActiveDate || "");
      if (data.nodes) setNodes(data.nodes);
    } else {
      // New User: Use 'nodeData' here because that is what you imported at the top
      await setDoc(docRef, { 
        xp: 0, 
        streak: 0, 
        lastActiveDate: "",
        nodes: nodeData 
      });
    }
    setLoading(false);
  };
  
  const [darkMode, setDarkMode] = useState(() => {
  return localStorage.getItem('mpt_dark_mode') === 'true';
});

useEffect(() => {
  localStorage.setItem('mpt_dark_mode', darkMode);
  if (darkMode) {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
  }
}, [darkMode]);

  const handleWin = async () => {
    const today = new Date().toLocaleDateString();
    let newXP = xp + 100;
    let newStreak = streak;
    let newLastActiveDate = lastActiveDate;

    if (lastActiveDate !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toLocaleDateString();

      if (lastActiveDate === yesterdayStr || lastActiveDate === "") {
        newStreak += 1;
      } else {
        newStreak = 1;
      }
      newLastActiveDate = today;
    }

    setXp(newXP);
    setStreak(newStreak);
    setLastActiveDate(newLastActiveDate);

    if (user) {
      const userRef = doc(db, "users", user.uid);
      await setDoc(userRef, {
        xp: newXP,
        streak: newStreak,
        lastActiveDate: newLastActiveDate,
        nodes: nodes 
      }, { merge: true });
    }
  };

  const addOverallXp = (amount) => {
    setXp(prev => prev + amount);
  };

  const addLessonXp = (amount) => {
    setLessonXp(prev => Math.min(prev + amount, 100));
  };

  const handleSelectNode = (node) => {
    if (!node.unlocked) return;
    setCurrentNode(node);
    setShowLesson(true);
    setShowQuiz(false);
    setShowResult(false);
  };

  const handleStartQuiz = () => { setShowLesson(false); setShowQuiz(true); };

  const handleQuizComplete = (earnedMastery, totalQuestions, isSuccess) => {
    if (isSuccess) {
      const currentMastery = currentNode.mastery || 0;
      const newMastery = Math.min(100, currentMastery + earnedMastery);
      const updatedCurrentNode = { ...currentNode, mastery: newMastery };

      const updatedNodes = nodes.map(n => {
        if (n.id === currentNode.id) return updatedCurrentNode;
        if (currentNode.children?.includes(n.id) && newMastery === 100) {
          return { ...n, unlocked: true };
        }
        return n;
      });

      setNodes(updatedNodes);
      setCurrentNode(updatedCurrentNode);
      setLastResult({ success: true, before: currentMastery, after: newMastery });
    } else {
      setLastResult({ success: false, before: currentNode.mastery, after: currentNode.mastery });
    }
    setShowQuiz(false);
    setShowResult(true);
  };

  const handleReplay = () => { setShowResult(false); setShowQuiz(true); };

  const handleContinue = () => {
    const nextNodeId = currentNode.children?.[0]; 
    const nextNode = nodes.find(n => n.id === nextNodeId);
    if (nextNode && nextNode.unlocked) {
      handleSelectNode(nextNode); 
    } else {
      setShowResult(false);
      setCurrentNode(null);
    }
  };

  const currentLevel = Math.floor(xp / 500) + 1;
  const xpProgress = ((xp % 500) / 500) * 100;

  // --- 4. CONDITIONAL RETURNS (Must stay below all Hooks) ---
  if (loading) return <div className="loading">Loading MPT Prep...</div>;
  if (!user) return <Login />;

  // --- 5. RENDER ---
  return (<div style={{ minHeight: '100vh', backgroundColor: darkMode ? '#1a1a1a' : '#fff' }}>
      
      {/* GLOBAL HEADER (Optional: keep this consistent across all pages) */}
      {/* You can move your account menu / logout button here */}

      {view === 'landing' && (
  <LandingPage 
    onNavigate={(target) => setView(target)} 
    streak={streak} 
    xp={xp} 
    user={user} 
  />
)}

      {view === 'learning-path' && (
        <div style={{ position: 'relative' }}>
          
          
          
          <LearningPath 
            nodes={nodes}
    currentNode={currentNode}
    handleSelectNode={handleSelectNode}
    showLesson={showLesson}
    showQuiz={showQuiz}
    showResult={showResult}
    lastResult={lastResult}
    handleStartQuiz={handleStartQuiz}
    handleQuizComplete={handleQuizComplete}
    handleReplay={handleReplay}
    handleContinue={handleContinue}
    addOverallXp={addOverallXp}
    handleWin={handleWin}
    xp={xp}
    streak={streak}
    darkMode={darkMode}
    setDarkMode={setDarkMode}
    user={user}
    showAccountMenu={showAccountMenu}
    setShowAccountMenu={setShowAccountMenu}
	onBackHome={() => setView('landing')}
          />
        </div>
      )}

      {view === 'practice-tests' && (
        <div style={{ padding: '40px' }}>
          <button onClick={() => setView('landing')}>← Back</button>
          <h1>Practice Tests</h1>
          <p>This module is coming soon!</p>
        </div>
      )}

      {view === 'test-info' && (
        <div style={{ padding: '40px' }}>
          <button onClick={() => setView('landing')}>← Back</button>
          <h1>Test Information</h1>
          <p>Everything you need to know about the MPT.</p>
        </div>
      )}
    </div>);
}