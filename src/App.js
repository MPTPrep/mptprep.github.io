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
  
  // --- 2. EFFECTS ---
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      if (u) {
        loadUserData(u.uid);
      } else {
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
          MPT Prep
        </h1>

        {/* Right Side: Logout + Avatar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          
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
                e.stopPropagation(); // Prevents immediate closing if you use click-outside logic
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
                {user.email.charAt(0).toUpperCase()}
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
                  {user.email}
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
</div>);
}